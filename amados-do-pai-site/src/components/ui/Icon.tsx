import { SVGProps } from 'react';

export type IconName =
  | 'hands'
  | 'heart'
  | 'sun'
  | 'people'
  | 'chat'
  | 'sprout'
  | 'book'
  | 'tools'
  | 'music'
  | 'leaf'
  | 'handshake'
  | 'briefcase'
  | 'megaphone'
  | 'bed'
  | 'tree'
  | 'utensils'
  | 'mapPin'
  | 'phone'
  | 'whatsapp'
  | 'mail'
  | 'clock'
  | 'calendar'
  | 'arrowRight'
  | 'menu'
  | 'close'
  | 'compass';

function Paths({ name }: { name: IconName }) {
  switch (name) {
    case 'hands':
      return <path d="M6 12c0 4 3 7 6 9 3-2 6-5 6-9V6l-4 2V5l-4-2-4 2v3L6 6v6Z" />;
    case 'heart':
      return (
        <path d="M12 21s-7-4.35-9.5-8.5C.7 8.9 2.4 5 6 5c2 0 3.3 1 4 2 .7-1 2-2 4-2 3.6 0 5.3 3.9 3.5 7.5C19 16.65 12 21 12 21Z" />
      );
    case 'sun':
      return (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </>
      );
    case 'people':
      return (
        <>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M2 20c0-3.3 2.7-5 6-5s6 1.7 6 5M10 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
        </>
      );
    case 'chat':
      return <path d="M4 4h16v11H8l-4 4V4Z" />;
    case 'sprout':
      return <path d="M12 21V9M12 9c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Zm0 0c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6Z" />;
    case 'book':
      return <path d="M4 5c2.5-1 5-1 8 0v14c-3-1-5.5-1-8 0V5Zm16 0c-2.5-1-5-1-8 0v14c3-1 5.5-1 8 0V5Z" />;
    case 'tools':
      return (
        <>
          <path d="m14 7 3 3-8 8H6v-3l8-8Z" />
          <path d="m17 4 3 3-1.5 1.5-3-3L17 4Z" />
        </>
      );
    case 'music':
      return (
        <>
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
          <path d="M9 18V5l12-2v13" />
        </>
      );
    case 'leaf':
      return (
        <>
          <path d="M5 20C5 10 12 4 20 4c0 8-6 15-16 16Z" />
          <path d="M5 20c2-4 5-7 9-9" />
        </>
      );
    case 'handshake':
      return <path d="m3 11 4-4 4 2 2-2 4 4-2 2 2 2-3 3-3-3-2 2-6-6Z" />;
    case 'briefcase':
      return (
        <>
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </>
      );
    case 'megaphone':
      return (
        <>
          <path d="M3 11v3a1 1 0 0 0 1 1h2l4 4V6l-4 4H4a1 1 0 0 0-1 1Z" />
          <path d="M14 9a4 4 0 0 1 0 7M17 6a8 8 0 0 1 0 13" />
        </>
      );
    case 'bed':
      return <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18v2M21 18v2M3 13V7a1 1 0 0 1 1-1h6v6" />;
    case 'tree':
      return <path d="M12 2 6 10h3l-4 6h4l-3 5h12l-3-5h4l-4-6h3L12 2Z" />;
    case 'utensils':
      return <path d="M6 3v7a2 2 0 0 0 2 2v9M6 3v9M9 3v9M15 3c-1.7 0-3 2-3 5s1.3 5 3 5v8" />;
    case 'mapPin':
      return (
        <>
          <path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      );
    case 'phone':
      return <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z" />;
    case 'whatsapp':
      return (
        <>
          <path d="M6 18.5 3 21l2.6-3A9 9 0 1 1 12 21a9 9 0 0 1-4.7-1.3L6 18.5Z" />
          <path d="M8.5 8c.2-.5.7-.5 1.1-.5.4 0 .6.1.8.6l.7 1.7c.1.3 0 .6-.2.8l-.6.6c.5 1 1.3 1.8 2.3 2.3l.6-.6c.2-.2.5-.3.8-.2l1.7.7c.5.2.6.4.6.8 0 .4 0 .9-.5 1.1-.6.3-1.3.4-2 .2-2.4-.6-4.6-2.8-5.2-5.2-.2-.7-.1-1.4.2-2Z" />
        </>
      );
    case 'mail':
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      );
    case 'clock':
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </>
      );
    case 'calendar':
      return (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </>
      );
    case 'arrowRight':
      return <path d="M5 12h14M13 6l6 6-6 6" />;
    case 'menu':
      return <path d="M4 7h16M4 12h16M4 17h16" />;
    case 'close':
      return <path d="M6 6l12 12M18 6 6 18" />;
    case 'compass':
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m15 9-2 6-6 2 2-6 6-2Z" />
        </>
      );
    default:
      return null;
  }
}

export default function Icon({
  name,
  className = 'h-6 w-6',
  strokeWidth = 1.6,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <Paths name={name} />
    </svg>
  );
}
