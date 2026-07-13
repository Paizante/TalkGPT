import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function CTASection({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="relative overflow-hidden bg-evergreen py-16 text-ivory">
      <svg
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 opacity-10"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="95" stroke="var(--color-bronze)" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="100" r="70" stroke="var(--color-bronze)" strokeWidth="1.5" fill="none" />
      </svg>
      <Container className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-3 text-ivory/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href={primaryHref} variant="accent">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
