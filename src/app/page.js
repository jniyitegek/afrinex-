'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionTitle } from '@/components/SectionTitle';

export default function HomePage() {
  const { t } = useLanguage();
  const hero = t('home.hero');
  const quickLinksSection = t('home.quickLinksSection');
  const quickLinks = t('home.quickLinks');
  const newsSection = t('home.newsSection');
  const newsItems = t('home.newsItems');
  const exploreLink = t('home.exploreLink');

  return (
    <div className="space-y-24 pb-24">
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900/70 shadow-2xl shadow-emerald-500/10">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center mix-blend-lighten opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/70 to-emerald-800/30" />
        </div>
        <div className="relative grid gap-10 px-8 py-16 md:grid-cols-[1.3fr_1fr] md:px-16">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center rounded-full bg-emerald-400/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              {hero.eyebrow}
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {hero.title}
            </h1>
            <p className="max-w-xl text-base text-white/80 sm:text-lg">{hero.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/resources"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300"
              >
                {t('cta.join')}
              </Link>
              <Link
                href="/climate-tools"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
              >
                {t('cta.weather')}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-transparent bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {t('cta.updates')}
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-white/5 p-6 backdrop-blur">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                {hero.rapidInsightsTitle}
              </h3>
              <p className="text-sm text-white/70">{hero.rapidInsightsBody}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {hero.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-center"
                >
                  <p className="text-lg font-semibold text-emerald-300">{item.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-emerald-400/10 p-4 text-sm text-emerald-50">
              <Image
                src="https://images.unsplash.com/photo-1455732063391-5f50f0d55c7d?auto=format&fit=crop&w=400&q=60"
                alt={hero.supportImageAlt}
                width={64}
                height={64}
                className="h-16 w-16 rounded-xl object-cover"
              />
              <p>{hero.supportNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow={quickLinksSection.eyebrow}
          label={quickLinksSection.title}
          description={quickLinksSection.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition hover:border-emerald-300/60 hover:bg-emerald-400/10"
            >
              <div className="space-y-3">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  {item.eyebrow}
                </p>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
              <span className="text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200">
                {exploreLink}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow={newsSection.eyebrow}
          label={newsSection.title}
          description={newsSection.description}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-xl shadow-black/30 transition hover:border-emerald-300/40 hover:shadow-emerald-400/20"
            >
              <div className="space-y-4">
                <span className="inline-flex w-fit rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/60">{item.summary}</p>
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-wide text-white/40">
                {item.date}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

