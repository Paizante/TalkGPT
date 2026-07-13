import Image from 'next/image';
import Link from 'next/link';

export default function BrandMark({
  variant = 'light',
  size = 44,
  showText = true,
  textClassName = 'text-evergreen',
}: {
  variant?: 'light' | 'dark';
  size?: number;
  showText?: boolean;
  textClassName?: string;
}) {
  const src = variant === 'dark' ? '/brand/symbol-dark.png' : '/brand/symbol-light.png';

  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Amados do Pai — página inicial">
      <Image
        src={src}
        alt="Símbolo da Associação Amados do Pai"
        width={size}
        height={size}
        className="rounded-full"
        priority
      />
      {showText && (
        <span className={`flex flex-col leading-none ${textClassName}`}>
          <span className="font-display text-lg font-semibold tracking-wide sm:text-xl">AMADOS DO PAI</span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] opacity-80">
            Comunidade Terapêutica
          </span>
        </span>
      )}
    </Link>
  );
}
