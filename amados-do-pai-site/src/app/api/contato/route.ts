import { NextRequest, NextResponse } from 'next/server';
import { sanitizePayload, validatePayload, sendContactEmail, isRateLimited, ContactPayload } from '@/lib/contact';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, message: 'Requisição inválida.' }, { status: 400 });
  }

  // Honeypot: bots preenchem campos ocultos; humanos não veem este campo.
  if (body.honeypot) {
    return NextResponse.json({ ok: true, emailSent: false });
  }

  const payload = sanitizePayload(body);
  const { valid, errors } = validatePayload(payload);

  if (!valid) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const emailSent = await sendContactEmail(payload);

  return NextResponse.json({ ok: true, emailSent });
}
