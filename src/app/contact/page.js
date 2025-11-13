"use client";

import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/PageHero";

const contactOptions = [
  {
    title: "WhatsApp farmer helpline",
    description:
      "Chat with agronomists, share photos of crop issues, and receive quick diagnoses in English, Kiswahili, Turkana, or Somali.",
    details: "+254 700 123 456 (Turkana) · +254 711 987 654 (Mandera)",
    cta: "Join county WhatsApp groups",
    link: "https://wa.me/254700123456",
  },
  {
    title: "Climate services email desk",
    description:
      "Request custom weather insights, data exports, or pitch partnership ideas. We respond within two working days.",
    details: "climateservices@climatehub.ke",
    cta: "Send an email",
    link: "mailto:climateservices@climatehub.ke",
  },
  {
    title: "Community field offices",
    description:
      "Walk in to access hard-copy manuals, get support enrolling in SMS alerts, or borrow soil testing kits.",
    details: "Lodwar, Kakuma, Mandera East, Mandera West (Mon–Fri, 8:30 AM – 5:00 PM)",
    cta: "Book an appointment",
    link: "#appointments",
  },
];

const socialChannels = [
  {
    platform: "Facebook",
    description: "Live Q&A sessions every Friday with extension officers.",
    href: "https://facebook.com",
  },
  {
    platform: "YouTube",
    description: "Step-by-step tutorials on regenerative practices and equipment maintenance.",
    href: "https://youtube.com",
  },
  {
    platform: "X (Twitter)",
    description: "Daily climate alerts, policy updates, and market price snapshots.",
    href: "https://twitter.com",
  },
  {
    platform: "Newsletter",
    description: "Monthly digest with success stories, funding calls, and training reminders.",
    href: "#newsletter",
  },
];

const officeMap = [
  {
    county: "Turkana",
    office: "Lodwar Resource Centre",
    coordinates: "3.1155° N, 35.5969° E",
    contact: "+254 700 123 456",
  },
  {
    county: "Turkana",
    office: "Kakuma Climate Lab",
    coordinates: "3.7064° N, 34.8668° E",
    contact: "+254 701 222 333",
  },
  {
    county: "Mandera",
    office: "Mandera East Farmer Hub",
    coordinates: "3.9400° N, 41.8498° E",
    contact: "+254 711 987 654",
  },
  {
    county: "Mandera",
    office: "Elwak Climate Information Centre",
    coordinates: "2.8026° N, 40.9173° E",
    contact: "+254 715 555 777",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHero
        eyebrow="Contact & engagement"
        title="Stay connected with the climate resilience hub"
        description="Reach our teams through messaging, email, or in-person visits. We are ready to support farmers, partners, and innovators."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
        stats={[
          {
            label: "Average response time",
            value: "6h",
            description: "During working hours across Turkana and Mandera support desks.",
          },
          {
            label: "Community groups hosted",
            value: "56",
            description: "WhatsApp and in-person cohorts across 12 wards.",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Talk to us"
          label="Pick the channel that suits you"
          description="Whether you need crop advice, climate data, or partnership support, our team will connect you to the right expert."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => (
            <div key={option.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{option.title}</h3>
              <p className="mt-3 text-sm text-white/70">{option.description}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-white/50">{option.details}</p>
              <Link
                href={option.link}
                className="mt-6 inline-flex w-fit rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300"
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Online presence"
          label="Follow and subscribe"
          description="Stay updated with real-time alerts and rich learning content."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {socialChannels.map((channel) => (
            <Link
              key={channel.platform}
              href={channel.href}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-emerald-400/40 hover:bg-emerald-400/10"
            >
              <h3 className="text-base font-semibold text-white">{channel.platform}</h3>
              <p className="mt-2 text-sm text-white/70">{channel.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Visit us"
          label="Regional offices & focal persons"
          description="Plan your visit to pick up materials or join community forums."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {officeMap.map((office) => (
            <div key={office.office} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-wide text-white/50">{office.county}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{office.office}</h3>
              <p className="mt-2 text-sm text-white/70">{office.coordinates}</p>
              <p className="mt-3 text-sm font-semibold text-emerald-200">{office.contact}</p>
            </div>
          ))}
        </div>
        <div
          id="newsletter"
          className="mt-10 flex flex-col gap-4 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="text-base font-semibold text-white">Newsletter signup</h3>
            <p className="mt-1 text-sm text-white/70">
              Receive monthly climate outlooks, market intelligence, and training reminders.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-white/20 bg-white/20 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-emerald-300 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

