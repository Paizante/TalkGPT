import Link from 'next/link';
import BrandMark from '@/components/ui/BrandMark';
import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import { footerColumns, legalLinks, organization, address, contact, social } from '@/content/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-evergreen text-ivory/90">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <BrandMark variant="dark" textClassName="text-ivory" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">{organization.slogan}.</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-ivory/70">
            <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
            {address.region}
          </p>
          {social.instagramUrl && (
            <div className="mt-5 flex gap-3">
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram da Associação Amados do Pai"
                className="rounded-full border border-ivory/20 p-2 transition-colors hover:border-bronze hover:text-bronze"
              >
                <Icon name="compass" className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h2 className="font-display text-base font-semibold text-bronze">{col.title}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/70 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="font-display text-base font-semibold text-bronze">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            <li className="flex items-center gap-2">
              <Icon name="whatsapp" className="h-4 w-4 text-bronze" />
              <a href={contact.whatsappUrl()} className="hover:text-ivory">
                {contact.phoneDisplay}
              </a>
            </li>
            {contact.email && (
              <li className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 text-bronze" />
                <a href={`mailto:${contact.email}`} className="hover:text-ivory">
                  {contact.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {organization.legalName}. Todos os direitos reservados. CNPJ {organization.cnpj}.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ivory">
                {l.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
