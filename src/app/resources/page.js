"use client";

import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/PageHero";

const learningTracks = [
  {
    title: "Climate-smart irrigation",
    level: "Intermediate · 6 modules",
    description:
      "Understand solar pumping basics, water budgeting, moisture monitoring, and maintenance of drip lines suited for arid zones.",
    resources: ["Video tutorials", "Field demo notes", "Maintenance checklist"],
  },
  {
    title: "Indigenous crops & seed systems",
    level: "Beginner · 4 modules",
    description:
      "Discover hardy varieties like sorghum Gadam, cowpea K80, and pigeon pea ICEAP, plus community seed multiplication tips.",
    resources: ["Illustrated guides", "Seed treatment steps", "Local language audios"],
  },
  {
    title: "Soil health & regenerative grazing",
    level: "Advanced · 5 modules",
    description:
      "Boost soil organic matter using zai pits, composting, manure management, and rotational grazing for rangeland recovery.",
    resources: ["Infographics", "Compost calculators", "Peer farmer interviews"],
  },
];

const downloads = [
  {
    title: "Climate-smart farming starter manual",
    language: "English & Kiswahili",
    size: "12 MB · PDF",
  },
  {
    title: "Turkana pastoralist drought guide",
    language: "Turkana & English",
    size: "8 MB · PDF",
  },
  {
    title: "Mandera riverine irrigation handbook",
    language: "Somali & English",
    size: "15 MB · PDF",
  },
  {
    title: "Water harvesting designs (low-cost)",
    language: "English",
    size: "9 MB · PDF",
  },
];

const trainings = [
  {
    title: "Solar pump installation & troubleshooting",
    date: "Nov 25, 2025",
    venue: "Katilu Irrigation Scheme, Turkana",
    slots: "30 spots | Farmers & artisan technicians",
  },
  {
    title: "Fuel-efficient cookstoves & fodder pellets",
    date: "Dec 4, 2025",
    venue: "Mandera East Agricultural Training Centre",
    slots: "45 spots | Women & youth groups",
  },
  {
    title: "GIS mapping for ward climate committees",
    date: "Dec 12, 2025",
    venue: "Lodwar Resource Centre",
    slots: "25 spots | County staff & CBOs",
  },
];

const faqs = [
  {
    question: "How do I join an upcoming training?",
    answer:
      "Register via the WhatsApp hotline +254 700 123 456 or sign up through the events calendar. We send confirmation and transport stipends details 48 hours prior.",
  },
  {
    question: "Can I request resources in my local language?",
    answer:
      "Yes. We currently translate guides into Kiswahili, Turkana, and Somali. Share your preference when registering or email translations@climatehub.ke.",
  },
  {
    question: "Do you provide on-farm coaching?",
    answer:
      "Lead farmers host quarterly field days. If you need tailored support, contact your ward agronomist listed on the contact page.",
  },
  {
    question: "Are the PDFs free to use?",
    answer:
      "All materials are open-source. Credit Turkana & Mandera Climate Hub when adapting or printing.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHero
        eyebrow="Farmer resources"
        title="Practical guides, trainings, and toolkits"
        description="All learning materials are co-created with lead farmers and extension officers to ensure they are grounded in local realities."
        image="https://images.unsplash.com/photo-1489211914964-32c0bffcc683?auto=format&fit=crop&w=1600&q=80"
        stats={[
          {
            label: "Guides downloaded",
            value: "18k+",
            description: "Unique downloads since January 2024.",
          },
          {
            label: "Training completion rate",
            value: "87%",
            description: "Participants who finish all modules and receive certificates.",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Learning tracks"
          label="Structured pathways to upgrade your skills"
          description="Follow a track at your own pace, join live sessions, or request an in-person field clinic."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {learningTracks.map((track) => (
            <div key={track.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                {track.level}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{track.title}</h3>
              <p className="mt-3 text-sm text-white/70">{track.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {track.resources.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-300">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Download center"
          label="Manuals and explainers"
          description="All PDFs are optimized for low bandwidth. Print-friendly versions are available upon request."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {downloads.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/60">
                  {item.language} · {item.size}
                </p>
              </div>
              <Link
                href="#"
                className="rounded-full border border-emerald-400/50 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/10"
              >
                Download
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/50">
          Need hard copies? Visit our resource desks in Lodwar, Kakuma, Mandera East, or Mandera
          West.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Upcoming trainings"
          label="Reserve your slot"
          description="Workshops combine classroom learning, field demonstrations, and peer coaching."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {trainings.map((training) => (
            <div key={training.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{training.title}</h3>
              <p className="mt-3 text-sm text-white/70">{training.venue}</p>
              <p className="mt-2 text-sm font-medium text-emerald-200">{training.date}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/50">{training.slots}</p>
              <Link
                href="/events"
                className="mt-4 inline-flex w-fit rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300"
              >
                Book now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="FAQ"
          label="Quick answers"
          description="If you cannot find what you need, reach our support team through WhatsApp or email."
        />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                {faq.question}
                <span className="text-emerald-300 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

