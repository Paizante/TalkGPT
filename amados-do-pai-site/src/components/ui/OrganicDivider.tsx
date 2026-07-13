export function WaveDown({ className = '', color = 'var(--color-ivory)' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`h-16 w-full sm:h-20 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,32 C240,80 480,0 720,24 C960,48 1200,72 1440,24 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  );
}

export function WaveUp({ className = '', color = 'var(--color-evergreen)' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`h-16 w-full sm:h-20 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,48 C240,0 480,80 720,56 C960,32 1200,8 1440,56 L1440,0 L0,0 Z"
        fill={color}
      />
    </svg>
  );
}
