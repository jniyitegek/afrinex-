'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Climate Tools', href: '/climate-tools' },
  { label: 'Resources', href: '/resources' },
  { label: 'Stories', href: '/stories' },
  { label: 'Data & Insights', href: '/insights' },
  { label: 'Events', href: '/events' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/254700000000' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'X (Twitter)', href: 'https://twitter.com' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:flex-row lg:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="rounded-full bg-emerald-400/20 p-2 text-emerald-300">🌿</span>
            <span>Turkana & Mandera Climate Hub</span>
          </div>
          <p className="text-sm text-white/70">{t('footer.tagline')}</p>
          <p className="text-sm text-white/60">{t('footer.newsletter')}</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Social & Messaging
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Turkana: +254 700 123 456</li>
              <li>Mandera: +254 711 987 654</li>
              <li>Email: support@climatehub.ke</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} Turkana & Mandera Climate Hub. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}

