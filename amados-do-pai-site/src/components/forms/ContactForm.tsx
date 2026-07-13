'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ButtonAsButton } from '@/components/ui/Button';
import { contact } from '@/content/site';

const subjects = [
  'Solicitar informações',
  'Agendar visita',
  'Falar sobre acolhimento',
  'Doação',
  'Voluntariado',
  'Parcerias',
  'Outro assunto',
];

type Errors = Record<string, string>;

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFormError(null);
    setErrors({});

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get('name') || ''),
      phone: String(form.get('phone') || ''),
      email: String(form.get('email') || '') || undefined,
      subject: String(form.get('subject') || ''),
      message: String(form.get('message') || ''),
      consent: form.get('consent') === 'on',
      honeypot: String(form.get('company') || ''),
    };

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.ok && data.ok) {
        router.push('/contato/enviado');
        return;
      }

      if (data.errors) {
        setErrors(data.errors);
      } else {
        setFormError(data.message || 'Não foi possível enviar sua mensagem agora. Tente novamente ou fale pelo WhatsApp.');
      }
    } catch {
      setFormError('Não foi possível enviar sua mensagem agora. Tente novamente ou fale pelo WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-describedby={formError ? 'form-error' : undefined}>
      <p className="text-sm text-warm-gray">
        Este formulário é destinado ao primeiro contato. Não envie documentos ou informações sensíveis. A
        equipe indicará um canal adequado, quando necessário.
      </p>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome completo" name="name" error={errors.name} required />
        <Field label="Telefone / WhatsApp" name="phone" type="tel" error={errors.phone} required />
      </div>

      <Field label="E-mail (opcional)" name="email" type="email" error={errors.email} />

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-graphite">
          Assunto
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="mt-1 w-full rounded-lg border border-bronze/30 bg-white px-4 py-3 text-sm focus-visible:border-mid-green"
        >
          <option value="" disabled>
            Selecione um assunto
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.subject && <p className="mt-1 text-sm text-terracotta">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-graphite">
          Como podemos ajudar?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-bronze/30 bg-white px-4 py-3 text-sm focus-visible:border-mid-green"
        />
        {errors.message && <p className="mt-1 text-sm text-terracotta">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4" required />
        <label htmlFor="consent" className="text-sm text-warm-gray">
          Concordo que meus dados sejam usados apenas para retorno deste contato.
        </label>
      </div>
      {errors.consent && <p className="text-sm text-terracotta">{errors.consent}</p>}

      {formError && (
        <p id="form-error" role="alert" className="rounded-lg bg-terracotta/10 p-3 text-sm text-terracotta">
          {formError}{' '}
          <a href={contact.whatsappUrl()} className="font-semibold underline">
            Falar no WhatsApp
          </a>
        </p>
      )}

      <ButtonAsButton type="submit" variant="primary" disabled={submitting}>
        {submitting ? 'Enviando...' : 'Enviar mensagem'}
      </ButtonAsButton>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-graphite">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-lg border border-bronze/30 bg-white px-4 py-3 text-sm focus-visible:border-mid-green"
      />
      {error && <p className="mt-1 text-sm text-terracotta">{error}</p>}
    </div>
  );
}
