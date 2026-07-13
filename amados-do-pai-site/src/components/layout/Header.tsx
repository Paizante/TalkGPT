'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { nav, contact } from '@/content/site';
import BrandMark from '@/components/ui/BrandMark';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        dark ? 'bg-evergreen shadow-md shadow-evergreen/20' : 'bg-ivory/95 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3 lg:px-8">
        <BrandMark
          variant={dark ? 'dark' : 'light'}
          size={dark ? 38 : 44}
          textClassName={dark ? 'text-ivory' : 'text-evergreen'}
        />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  dark ? 'text-ivory/90 hover:text-bronze' : 'text-graphite hover:text-mid-green'
                } ${active ? (dark ? 'text-bronze' : 'text-mid-green') : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={contact.whatsappUrl()} variant="accent">
            Fale Conosco
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className={`md:hidden ${dark ? 'text-ivory' : 'text-evergreen'}`}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="border-t border-ivory/10 bg-evergreen px-6 pb-8 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Navegação móvel">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="rounded-lg px-3 py-3 text-base font-medium text-ivory/90 hover:bg-ivory/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href={contact.whatsappUrl()} variant="accent" className="mt-4 w-full">
            Fale Conosco
          </Button>
        </div>
      )}
    </header>
  );
}
