"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/PageHero";

const calendar = [
  {
    title: "Ward climate forum & seasonal outlook",
    date: "Nov 20, 2025",
    county: "Turkana Central",
    venue: "Lodwar ACK Hall",
    description:
      "Joint briefing with KMD meteorologists, NDMA, and ward climate champions followed by action planning.",
  },
  {
    title: "Hands-on training: zai pits & sand dams",
    date: "Nov 28, 2025",
    county: "Turkana South",
    venue: "Katilu Demonstration Farm",
    description:
      "Participants construct zai pits, set up drip kits, and calibrate moisture meters with extension officers.",
  },
  {
    title: "Pastoralist rangeland management clinic",
    date: "Dec 03, 2025",
    county: "Mandera West",
    venue: "Takaba Farmers Centre",
    description:
      "Rotational grazing maps, fodder bank strategies, and conflict mediation with elders and youth scouts.",
  },
  {
    title: "Solar cold chain & value addition expo",
    date: "Dec 15, 2025",
    county: "Mandera East",
    venue: "Mandera Vocational Institute",
    description:
      "Demonstrations on solar chillers, camel milk processing, and market linkage coaching for cooperatives.",
  },
];

const reminders = [
  {
    label: "Travel support",
    detail: "Transport stipends available for registered farmers traveling more than 30 km.",
  },
  {
    label: "What to bring",
    detail: "Notebook, farmers’ registry ID, and samples/photos of farm challenges you want assessed.",
  },
  {
    label: "Language options",
    detail: "Sessions facilitated in English, Kiswahili, Turkana, and Somali with community translators.",
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHero
        eyebrow="Events & trainings"
        title="Upcoming field days and learning sessions"
        description="Reserve your seat to experience live demonstrations, meet expert trainers, and connect with fellow farmer champions."
        image="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
        stats={[
          {
            label: "Participants trained in 2024",
            value: "2,450",
            description: "From ward-level workshops and cross-learning visits.",
          },
          {
            label: "Average satisfaction score",
            value: "4.6/5",
            description: "Collected through post-event SMS surveys.",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Calendar"
          label="Secure your slot"
          description="Spaces fill quickly—register early to guarantee hands-on experience."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {calendar.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-wide text-white/50">{item.county}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-emerald-200">{item.date}</p>
              <p className="mt-2 text-sm text-white/70">{item.venue}</p>
              <p className="mt-4 text-sm text-white/70">{item.description}</p>
              <button
                type="button"
                className="mt-6 inline-flex w-fit rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300"
              >
                Register interest
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Know before you go"
          label="Event logistics & support"
          description="We strive to remove barriers so every farmer can access learning opportunities."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reminders.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-sm text-white/80"
            >
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-2">{item.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-white/50">
          Accessibility support (sign language, child care) available on request. Contact events@climatehub.ke.
        </p>
      </section>
    </div>
  );
}

