'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const quickLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Mission', href: '#mission' },
  { label: 'Solution', href: '#solution' },
  { label: 'Team', href: '#team' },
  { label: 'Prototype', href: '#prototype' },
  { label: 'Challenges', href: '#challenges' },
];

const socialLinks = [
  { label: 'YouTube', href: 'https://youtu.be/tNZWS2-06Wg?si=Il5tn_JsfwGNeLsA' },
  { label: 'Instagram', href: 'https://www.instagram.com/afri_nex?igsh=MWxtY3ZjZTFtaDhyeA==' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 lg:flex-row lg:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Image
              src="/images/afrinex-logo.jpg"
              alt="Afrinex logo"
              width={36}
              height={36}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span>Afrinex</span>
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
              <li>
                WhatsApp:{' '}
                <a
                  href="https://wa.me/250788271931"
                  className="underline decoration-dotted underline-offset-4 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +250 788 271 931
                </a>
              </li>
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

