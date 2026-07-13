import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import { Pillar } from '@/types/content';

export default function PillarsGrid({ items, tone = 'dark' }: { items: Pillar[]; tone?: 'dark' | 'light' }) {
  const isDark = tone === 'dark';
  return (
    <section className={isDark ? 'bg-evergreen text-ivory' : 'bg-beige/50 text-graphite'}>
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-start gap-3">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                isDark ? 'border-bronze/50 text-bronze' : 'border-terracotta/40 text-terracotta'
              }`}
            >
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-ivory/70' : 'text-warm-gray'}`}>{item.text}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
