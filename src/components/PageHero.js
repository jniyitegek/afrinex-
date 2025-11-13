'use client';

import Image from 'next/image';

export function PageHero({ eyebrow, title, description, image, stats = [] }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/70 to-emerald-900/30" />
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-30"
            priority
          />
        )}
      </div>
      <div className="relative grid gap-10 px-8 py-16 md:grid-cols-[1.2fr_1fr] md:px-16">
        <div className="space-y-6">
          {eyebrow && (
            <span className="inline-flex w-fit items-center rounded-full bg-emerald-400/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
          {description && <p className="max-w-2xl text-base text-white/80 sm:text-lg">{description}</p>}
        </div>
        {stats.length > 0 && (
          <div className="grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-2xl font-semibold text-emerald-300">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/60">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="mt-3 text-sm text-white/70">{stat.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

