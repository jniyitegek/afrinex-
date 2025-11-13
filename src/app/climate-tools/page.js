"use client";

import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/PageHero";

const weatherFeed = [
  {
    location: "Lodwar",
    summary: "Hot and windy",
    temperature: "34°C",
    next48h: "Gusty northerly winds up to 32 km/h. Light showers possible on Sunday night.",
  },
  {
    location: "Lokichar",
    summary: "Cloud build-up",
    temperature: "31°C",
    next48h: "High humidity with isolated thunderstorms. Delay spraying from 2-6 PM.",
  },
  {
    location: "Mandera Town",
    summary: "Thunderstorm risk",
    temperature: "30°C",
    next48h: "Convective storms likely on Saturday. Expect 18-35 mm rainfall in short bursts.",
  },
  {
    location: "Rhamu",
    summary: "Flash flood alert",
    temperature: "29°C",
    next48h: "Daua River rising. Move pumps away from riverbanks and secure fodder stores.",
  },
];

const advisories = [
  {
    crop: "Pearl millet",
    recommendation:
      "Turkana South: Shift planting to first week of April to leverage expected early showers and avoid late May heat spikes.",
    soil: "Apply 4 kg of farmyard manure per basin and mulch with neem leaves to lock moisture.",
  },
  {
    crop: "Cowpeas",
    recommendation:
      "Mandera North: Opt for K80 drought-tolerant variety, broadcasting at 25 kg/ha before gentle raking.",
    soil: "Foliar feed with seaweed extract on day 18 if temperatures stay above 33°C.",
  },
  {
    crop: "Sorghum",
    recommendation:
      "Irrigated strips along River Turkwel: Stagger planting every 10 days to spread risk of flood loss.",
    soil: "Top dress with micro-dosed DAP (3 g per station) when plants reach 4 leaves.",
  },
];

const deliveryChannels = [
  {
    title: "SMS / WhatsApp alerts",
    description:
      "Targeted tips delivered in English, Kiswahili, and Turkana/Somali. Includes early warnings, market prices, and advisory hotlines.",
    action: "Text FARM to 20250 to enroll.",
  },
  {
    title: "Community radio bulletins",
    description:
      "Weekly 10-minute segments on Akicha FM and Star FM summarizing weather trends, coping actions, and farmer voices.",
    action: "Tune in every Wednesday at 7:30 PM.",
  },
  {
    title: "Interactive voice response (IVR)",
    description:
      "Dial-in recordings that walk farmers through planting calendars and water management tips. Updated twice weekly.",
    action: "Call 0800-720-320 (toll-free).",
  },
];

export default function ClimateToolsPage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHero
        eyebrow="Climate intelligence"
        title="Tools to anticipate drought, floods, and shifting seasons"
        description="Access hyperlocal weather feeds, agronomic advisories, and early warning alerts tailored for Turkana and Mandera landscapes."
        image="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1600&q=80"
        stats={[
          {
            label: "Weather updates issued weekly",
            value: "3",
            description: "Sent to farmers via SMS, WhatsApp, and community notice boards.",
          },
          {
            label: "Forecast accuracy",
            value: "82%",
            description: "Measured against Kenya Met Service observed rainfall records in 2024.",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Real-time snapshot"
          label="48-hour outlook across priority wards"
          description="The hub synthesizes data from KMD automatic weather stations, satellite observations, and farmer rain gauges."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {weatherFeed.map((entry) => (
            <div
              key={entry.location}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-white">{entry.location}</h3>
                <span className="text-sm font-medium text-emerald-300">{entry.summary}</span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-white">{entry.temperature}</p>
              <p className="mt-4 text-sm text-white/70">{entry.next48h}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Actionable agronomy"
          label="Crop, planting, and soil advisories"
          description="Recommendations blend indigenous calendars with agronomic research to match farmers' microclimates."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {advisories.map((item) => (
            <div key={item.crop} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item.crop}</h3>
              <p className="mt-3 text-sm text-white/70">{item.recommendation}</p>
              <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-white/80">
                <p className="font-medium text-emerald-200">Soil & water tip</p>
                <p className="mt-2">{item.soil}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Stay alerted"
          label="Early warning delivery channels"
          description="Choose the platform that best fits your connectivity to receive timely information."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {deliveryChannels.map((channel) => (
            <div
              key={channel.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
              <p className="mt-3 text-sm text-white/70">{channel.description}</p>
              <p className="mt-4 text-sm font-semibold text-emerald-200">{channel.action}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-sm text-white/80">
          <p>
            Need custom analytics for your cooperative or project?{" "}
            <Link href="/contact" className="font-semibold text-emerald-200 hover:text-emerald-100">
              Contact our climate services desk
            </Link>{" "}
            to access scenario planning dashboards and GIS layers.
          </p>
        </div>
      </section>
    </div>
  );
}

