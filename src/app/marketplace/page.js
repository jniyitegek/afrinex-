"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/PageHero";

const listings = [
  {
    title: "Drought-tolerant sorghum seed (Gadam)",
    seller: "Turkana Agro Cooperative",
    location: "Katilu Irrigation Scheme",
    price: "KES 280 per kg",
    availability: "Pickup & delivery",
    description:
      "Certified seed suitable for arid and semi-arid lands. Minimum order 5 kg. Discounts for women/youth groups.",
  },
  {
    title: "Solar pump installation service",
    seller: "Mandera Tech Youth",
    location: "Mandera East & South",
    price: "KES 12,000 per setup",
    availability: "On-site installation",
    description:
      "Includes pump calibration, filter cleaning training, and 3-month maintenance support.",
  },
  {
    title: "Fodder pellets (sorghum & cowpea blend)",
    seller: "Lokichoggio Women Dairy Group",
    location: "Lokichoggio, Turkana West",
    price: "KES 1,100 per 50 kg bag",
    availability: "Bulk orders only",
    description:
      "High-protein pellets formulated for goats and camels. Orders close every Friday for Monday dispatch.",
  },
  {
    title: "Greenhouse starter kit (2x8 m)",
    seller: "Kambio Innovations",
    location: "Delivery across Turkana & Mandera",
    price: "KES 85,000",
    availability: "Installation optional",
    description:
      "Includes UV-treated cover, ventilation, drip kit, and agronomy handbook tailored for hot climates.",
  },
];

const serviceBundles = [
  {
    name: "Climate-smart agronomy mentorship",
    duration: "12-week cohort",
    support:
      "Weekly group coaching, field diagnostics, and digital follow-ups for 25 farmers per cohort.",
  },
  {
    name: "Pastoralist business accelerator",
    duration: "8-week bootcamp",
    support: "Financial literacy, fodder enterprise design, and market linkage sessions.",
  },
  {
    name: "Local artisan training",
    duration: "6-week intensive",
    support: "Build skills in fabricating water pans, repairing solar pumps, and producing cookstoves.",
  },
];

const submissionSteps = [
  "Prepare a short description (max 60 words) with price/location details.",
  "Attach at least one clear photo or infographic (optional but encouraged).",
  "Share via WhatsApp +254 711 987 654 or email marketplace@climatehub.ke.",
  "Our moderators verify quality and publish within 48 hours.",
];

export default function MarketplacePage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHero
        eyebrow="Marketplace"
        title="Connect with climate-smart products and services"
        description="Browse trusted listings for seeds, equipment, services, and training tailored for arid lands."
        image="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1600&q=80"
        stats={[
          {
            label: "Farmer-to-farmer listings",
            value: "320",
            description: "Verified by county extension officers and community leads.",
          },
          {
            label: "Avg. fulfilment time",
            value: "4 days",
            description: "From enquiry to pick-up or delivery confirmation.",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Featured listings"
          label="What farmers are offering this week"
          description="Contact sellers directly to negotiate or arrange delivery."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {listings.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-wide text-white/50">{item.seller}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
                <span>📍 {item.location}</span>
                <span>💰 {item.price}</span>
                <span>🚚 {item.availability}</span>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex w-fit rounded-full border border-emerald-400/50 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/10"
              >
                Contact seller
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Group offerings"
          label="Program bundles for cooperatives"
          description="Tailored services to build capacity for producer organizations and youth start-ups."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {serviceBundles.map((bundle) => (
            <div key={bundle.name} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{bundle.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/50">{bundle.duration}</p>
              <p className="mt-3 text-sm text-white/70">{bundle.support}</p>
              <button
                type="button"
                className="mt-6 inline-flex w-fit rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300"
              >
                Request proposal
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Share your offer"
          label="How to list on the marketplace"
          description="Listings are free for farmer groups, cooperatives, and youth enterprises in Turkana and Mandera."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <ol className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            {submissionSteps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-200">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-sm text-white/80">
            <h3 className="text-base font-semibold text-white">Moderation guidelines</h3>
            <p className="mt-2">
              We prioritise climate-compatible products, fair pricing, and inclusive services. Listings remain live for 30 days and can be renewed upon request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

