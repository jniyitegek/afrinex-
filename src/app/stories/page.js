"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/PageHero";

const testimonials = [
  {
    name: "Naeku Ewoi",
    location: "Lokichoggio, Turkana West",
    quote:
      "Using zai pits and mulch, my kitchen garden now produces sukuma wiki even after three dry weeks. The hub helped me install a low-cost drip kit.",
    impact: "Household vegetable income doubled within 6 months.",
    image: "https://images.unsplash.com/photo-1542838686-6d700a40d00c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hussein Noor",
    location: "Rhamu, Mandera North",
    quote:
      "We receive early SMS alerts on the Daua River level. Moving livestock before floods saved 40 goats last season.",
    impact: "Zero livestock losses during April 2025 floods.",
    image: "https://images.unsplash.com/photo-1517467139951-f5a925c9f9df?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fatuma Adan",
    location: "Mandera South",
    quote:
      "Our women cooperative now processes sorghum flour with solar dryers. The climate hub connected us to equipment and mentors.",
    impact: "30 women earn KES 7,200 monthly from value-added products.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49d3?auto=format&fit=crop&w=600&q=80",
  },
];

const beforeAfter = [
  {
    title: "Reclaiming degraded rangeland",
    before:
      "Bare soil with severe gully erosion and invasive prosopis spreading across 15 hectares.",
    after:
      "Half-moon bunds and reseeding with cenchrus grasses restored pasture cover within 8 months.",
  },
  {
    title: "Diversifying from maize to sorghum-cowpea intercrop",
    before: "High crop failure and food purchases during lean months.",
    after:
      "Mixed cropping improved household food stocks by 4 months and reduced water use by 30%.",
  },
  {
    title: "Community-run seed bank",
    before: "Farmers buying expensive seed each season from distant markets.",
    after:
      "Local seed bank stores 2 tonnes of indigenous seed with quality control, lowering input costs.",
  },
];

const submissions = [
  {
    caption: "Soil bund volunteers, Kakuma Ward",
    credit: "Photo by Napeyok Lolem, lead farmer",
  },
  {
    caption: "Youth mapping flood escape routes using GPS",
    credit: "Photo by Mandera Youth Climate Network",
  },
  {
    caption: "Kitchen garden using harvested roof water",
    credit: "Photo by Abdi Osman, Mandera East",
  },
];

export default function StoriesPage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHero
        eyebrow="Community voices"
        title="Farmers leading climate resilience"
        description="Stories from Turkana and Mandera show the power of indigenous knowledge coupled with climate-smart innovation."
        image="https://images.unsplash.com/photo-1527497081186-8731ab2add4c?auto=format&fit=crop&w=1600&q=80"
        stats={[
          {
            label: "Farmer champions",
            value: "220",
            description: "Documenting and sharing climate solutions through peer exchanges.",
          },
          {
            label: "Community submissions",
            value: "640+",
            description: "Photos, videos, and voice notes capturing progress in local languages.",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Testimonials"
          label="From challenge to change"
          description="Real households showcasing tangible improvements in yields, nutrition, and income."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((story) => (
            <article
              key={story.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base font-semibold text-white">{story.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-white/60">{story.location}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">“{story.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                Impact: {story.impact}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Before & after"
          label="Transformations you can measure"
          description="Community monitors capture change indicators every season to highlight progress and learnings."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {beforeAfter.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <div className="mt-4 space-y-3 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Before</p>
                <p className="text-sm text-white/70">{item.before}</p>
              </div>
              <div className="mt-4 space-y-3 rounded-2xl border border-emerald-400/60 bg-emerald-400/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  After
                </p>
                <p className="text-sm text-white/80">{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Your voice matters"
          label="Submit photos, audio, or write-ups"
          description="We welcome stories in Turkana, Kiswahili, and Somali. Top submissions feature in our monthly newsletter."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {submissions.map((item) => (
            <div
              key={item.caption}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80"
            >
              <p className="font-semibold text-white">{item.caption}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/50">{item.credit}</p>
              <p className="mt-4 text-sm text-white/70">
                Share your content via WhatsApp +254 711 987 654 or email stories@climatehub.ke.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

