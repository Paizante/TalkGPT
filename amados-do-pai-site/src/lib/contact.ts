export interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactPayload, string>>;
}

const MAX_LENGTHS: Partial<Record<keyof ContactPayload, number>> = {
  name: 120,
  phone: 30,
  email: 160,
  subject: 120,
  message: 2000,
};

function stripTags(value: string) {
  return value.replace(/<[^>]*>/g, '').trim();
}

export function sanitizePayload(payload: ContactPayload): ContactPayload {
  return {
    name: stripTags(payload.name).slice(0, MAX_LENGTHS.name),
    phone: stripTags(payload.phone).slice(0, MAX_LENGTHS.phone),
    email: payload.email ? stripTags(payload.email).slice(0, MAX_LENGTHS.email) : undefined,
    subject: stripTags(payload.subject).slice(0, MAX_LENGTHS.subject),
    message: stripTags(payload.message).slice(0, MAX_LENGTHS.message),
    consent: Boolean(payload.consent),
    honeypot: payload.honeypot,
  };
}

export function validatePayload(payload: ContactPayload): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  if (!payload.name || payload.name.length < 2) errors.name = 'Informe seu nome completo.';
  if (!payload.phone || payload.phone.length < 8) errors.phone = 'Informe um telefone ou WhatsApp válido.';
  if (payload.email && !/^\S+@\S+\.\S+$/.test(payload.email)) errors.email = 'Informe um e-mail válido.';
  if (!payload.subject) errors.subject = 'Selecione um assunto.';
  if (!payload.message || payload.message.length < 10) errors.message = 'Escreva uma mensagem com mais detalhes.';
  if (!payload.consent) errors.consent = 'É necessário concordar com o uso dos dados para retorno de contato.';

  return { valid: Object.keys(errors).length === 0, errors };
}

/**
 * Envia o e-mail de contato via API HTTP do Resend quando configurado. Sem
 * RESEND_API_KEY/CONTACT_EMAIL, retorna `false` sem lançar erro — o
 * formulário permanece funcional e o usuário recebe o fallback de WhatsApp.
 * Configuração pendente: ver .env.example e CONTENT_VALIDATION.md.
 */
export async function sendContactEmail(payload: ContactPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    return false;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Site Amados do Pai <onboarding@resend.dev>',
        to: [to],
        subject: `[Site] Novo contato: ${payload.subject}`,
        text: `Nome: ${payload.name}\nTelefone: ${payload.phone}\nE-mail: ${payload.email ?? 'não informado'}\n\nMensagem:\n${payload.message}`,
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

// Rate limit simples em memória (por instância). Para produção com múltiplas
// instâncias, substitua por um armazenamento compartilhado (ex.: KV/Redis).
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(identifier) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(identifier, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}
