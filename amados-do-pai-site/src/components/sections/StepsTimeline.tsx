import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import { Step } from '@/types/content';

export default function StepsTimeline({
  eyebrow,
  title,
  intro,
  steps,
  notice,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  steps: Step[];
  notice?: string;
}) {
  return (
    <section className="bg-beige/40 py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-semibold text-evergreen sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-warm-gray">{intro}</p>}
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl bg-white/70 p-6 text-center shadow-sm">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-evergreen text-ivory">
                <Icon name={step.icon} className="h-5 w-5" />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-terracotta">
                Etapa {index + 1}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-evergreen">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">{step.text}</p>
            </li>
          ))}
        </ol>

        {notice && (
          <p className="mx-auto mt-10 max-w-2xl rounded-xl border border-bronze/30 bg-ivory p-4 text-center text-sm text-warm-gray">
            {notice}
          </p>
        )}
      </Container>
    </section>
  );
}
