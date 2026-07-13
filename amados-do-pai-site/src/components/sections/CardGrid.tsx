import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import { Category } from '@/types/content';

export default function CardGrid({
  eyebrow,
  title,
  intro,
  items,
  columns = 4,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: Category[];
  columns?: 3 | 4;
}) {
  return (
    <section className="bg-ivory py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-semibold text-evergreen sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-warm-gray">{intro}</p>}
        </div>
        <div
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-bronze/20 bg-white/60 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-beige text-terracotta">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-evergreen">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
