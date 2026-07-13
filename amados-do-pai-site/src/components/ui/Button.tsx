import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-accent' | 'accent';

const variants: Record<Variant, string> = {
  primary:
    'bg-evergreen text-ivory hover:bg-deep-green focus-visible:bg-deep-green',
  // Para uso sobre fundo escuro (evergreen), ex.: CTA final, cabeçalho.
  secondary:
    'border border-ivory/60 text-ivory hover:bg-ivory/10 focus-visible:bg-ivory/10',
  // Para uso sobre fundo claro (ivory/beige), ex.: heros de página.
  outline:
    'border border-evergreen/30 text-evergreen hover:bg-evergreen/5 focus-visible:bg-evergreen/5',
  'outline-accent':
    'border border-terracotta/40 text-terracotta hover:bg-terracotta/5 focus-visible:bg-terracotta/5',
  accent:
    'bg-terracotta text-ivory hover:brightness-95 focus-visible:brightness-95',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonAsButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
