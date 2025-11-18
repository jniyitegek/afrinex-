'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SectionTitle } from '@/components/SectionTitle';

function VideoCard({ title, description, videoUrl, embed }) {
  return (
    <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/30">
      <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          src={videoUrl}
          title={title}
          width={embed?.width}
          height={embed?.height}
          allow={
            embed?.allow ||
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          }
          referrerPolicy={embed?.referrerPolicy}
          frameBorder={embed?.frameBorder ?? '0'}
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const content = t('home');
  const { problem, mission, solution, team, prototype, challenges } = content;

  return (
    <div className="space-y-24 pb-24">
      <section id="problem" className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle eyebrow={problem.eyebrow} label={problem.title} description={problem.description} />
            <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30">
              {problem.bullets.map((item) => (
                <div key={item} className="flex text-sm text-white/80">
                  <span className="mr-3 text-emerald-300">▹</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/images/climatechange.avif"
              alt="Climate change impact on Turkana farmlands"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="mission" className="mx-auto max-w-6xl px-4">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
          <SectionTitle eyebrow={mission.eyebrow} label={mission.title} description={mission.description} />
          <ul className="space-y-3 text-sm text-white/80">
            {mission.pillars.map((pillar) => (
              <li key={pillar} className="flex">
                <span className="mr-3 text-emerald-300">✺</span>
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-6xl px-4">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
          <SectionTitle eyebrow={solution.eyebrow} label={solution.title} description={solution.description} />
          <div className="space-y-4">
            {solution.layers.map((layer) => (
              <div key={layer.label} className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                <p className="text-sm font-semibold text-emerald-200">{layer.label}</p>
                <p className="mt-2 text-sm text-white/80 whitespace-pre-line">{layer.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow={team.eyebrow} label={team.title} description={team.description} />
        <div className="mt-8 h-[80vh] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image
            src={team.groupImage}
            alt={team.groupAlt}
            width={1600}
            height={900}
            className=" w-full h-full object-cover bg-slate-950 "
            priority
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {team.members.map((member) => (
            <div key={member.name} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="h-24 w-24 rounded-2xl object-cover"
              />
              <div>
                <p className="text-base font-semibold text-white">{member.name}</p>
                <p className="text-xs uppercase tracking-wide text-white/60">{member.role}</p>
                <p className="mt-3 text-sm text-white/80">{member.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="prototype" className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <SectionTitle
              eyebrow={prototype.eyebrow}
              label={prototype.title}
              description={prototype.description}
            />
            <ul className="space-y-3 text-sm text-white/80">
              {prototype.highlights.map((item) => (
                <li key={item} className="flex">
                  <span className="mr-3 text-emerald-300">★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:support@climatehub.ke"
              className="inline-flex w-fit rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300"
            >
              {prototype.callToAction}
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={prototype.mockup}
                alt={prototype.mockupAlt}
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-wide text-white/60">{prototype.mockupAlt}</p>
          </div>
        </div>
      </section>

      <section id="challenges" className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow={challenges.eyebrow}
          label={challenges.title}
          description={challenges.description}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {challenges.items.map((item) => (
            <VideoCard
              key={item.title}
              title={item.title}
              description={item.description}
              videoUrl={item.videoUrl}
              embed={item.embed}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

