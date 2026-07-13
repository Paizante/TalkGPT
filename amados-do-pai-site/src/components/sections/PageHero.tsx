import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import Breadcrumbs, { Crumb } from '@/components/sections/Breadcrumbs';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { IconName } from '@/components/ui/Icon';
import { address } from '@/content/site';
import Icon from '@/components/ui/Icon';

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions,
  imageIcon = 'tree',
  imageLabel,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  actions?: ReactNode;
  imageIcon?: IconName;
  imageLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <Breadcrumbs crumbs={crumbs} />
          {eyebrow && (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">{eyebrow}</p>
          )}
          <h1 className="mt-3 text-4xl font-semibold text-evergreen sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-warm-gray">{description}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
          <p className="mt-8 flex items-center gap-2 text-sm text-warm-gray">
            <Icon name="mapPin" className="h-4 w-4 text-bronze" />
            {address.region}
          </p>
        </div>
        <ImagePlaceholder icon={imageIcon} label={imageLabel} className="h-72 w-full lg:h-96" />
      </Container>
    </section>
  );
}
