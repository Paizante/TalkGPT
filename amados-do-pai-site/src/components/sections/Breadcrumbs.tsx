import Link from 'next/link';

export interface Crumb {
  href: string;
  label: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="text-xs font-medium uppercase tracking-wide text-warm-gray">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="text-mid-green">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-mid-green">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
