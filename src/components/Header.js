'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const navItems = [
  { href: '#problem', key: 'nav.problem' },
  { href: '#mission', key: 'nav.mission' },
  { href: '#solution', key: 'nav.solution' },
  { href: '#team', key: 'nav.team' },
  { href: '#prototype', key: 'nav.prototype' },
  { href: '#challenges', key: 'nav.challenges' },
];

function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
      <span className="hidden text-white/80 md:inline">{t('languageToggle.label')}</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 transition ${
          language === 'en'
            ? 'bg-emerald-400 text-slate-900'
            : 'text-white/80 hover:text-white'
        }`}
        aria-pressed={language === 'en'}
      >
        {t('languageToggle.english')}
      </button>
      <button
        type="button"
        onClick={() => setLanguage('sw')}
        className={`rounded-full px-3 py-1 transition ${
          language === 'sw'
            ? 'bg-emerald-400 text-slate-900'
            : 'text-white/80 hover:text-white'
        }`}
        aria-pressed={language === 'sw'}
      >
        {t('languageToggle.swahili')}
      </button>
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const updateHash = () => {
      setActiveHash(window.location.hash || '#problem');
    };
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  const primaryNavItems = navItems.slice(0, 4);
  const dropdownNavItems = navItems.slice(4);

  function handleLinkClick(targetHash) {
    setActiveHash(targetHash);
    setIsOpen(false);
    setIsDropdownOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Image
            src="/images/afrinex-logo.jpg"
            alt="Afrinex logo"
            width={36}
            height={36}
            className="h-10 w-10 rounded-full object-cover"
            priority
          />
          <span>Afrinex</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNavItems.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-400/30'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
          {dropdownNavItems.length > 0 && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isDropdownOpen
                    ? 'bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-400/30'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
                aria-expanded={isDropdownOpen}
              >
                {t('nav.more')}
                <span className={`transition ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>▾</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-white/10 bg-slate-900/95 p-2 text-sm shadow-2xl shadow-black/40">
                  {dropdownNavItems.map((item) => {
                    const isActive = activeHash === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className={`block rounded-xl px-3 py-2 transition ${
                          isActive
                            ? 'bg-emerald-400 text-slate-900'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </nav>
        <div className="hidden lg:block">
          <LanguageSwitch />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-white/20 p-2 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {primaryNavItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-400/30'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            {dropdownNavItems.length > 0 && (
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="pb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                  {t('nav.more')}
                </p>
                <div className="flex flex-col gap-1">
                  {dropdownNavItems.map((item) => {
                    const isActive = activeHash === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                          isActive
                            ? 'bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-400/30'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </nav>
          <div className="mt-4">
            <LanguageSwitch />
          </div>
        </div>
      )}
    </header>
  );
}

