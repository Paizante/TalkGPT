import Icon, { IconName } from '@/components/ui/Icon';

/**
 * Composição abstrata usada enquanto fotografias oficiais não são
 * fornecidas. Nunca deve ser confundida com uma fotografia real —
 * ver public/placeholders/README.md para os arquivos esperados.
 */
export default function ImagePlaceholder({
  icon = 'tree',
  label,
  className = '',
  tone = 'light',
}: {
  icon?: IconName;
  label?: string;
  className?: string;
  tone?: 'light' | 'dark';
}) {
  const bg =
    tone === 'dark'
      ? 'bg-gradient-to-br from-evergreen via-mid-green to-deep-green'
      : 'bg-gradient-to-br from-beige via-ivory to-soft-green/40';
  const fg = tone === 'dark' ? 'text-ivory/50' : 'text-evergreen/30';

  return (
    <div className={`relative overflow-hidden rounded-2xl ${bg} ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 220 C 80 180, 140 260, 220 210 S 340 150, 400 200 L 400 300 L 0 300 Z" fill="currentColor" className={fg} />
        <path d="M0 250 C 100 210, 180 280, 260 240 S 360 200, 400 240 L 400 300 L 0 300 Z" fill="currentColor" className={fg} />
      </svg>
      <div className="relative flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
        <Icon name={icon} className={`h-9 w-9 ${fg}`} strokeWidth={1.2} />
        {label && <span className={`text-xs font-medium tracking-wide ${fg}`}>{label}</span>}
      </div>
    </div>
  );
}
