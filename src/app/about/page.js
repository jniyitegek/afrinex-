"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/PageHero";

const missionPoints = [
  "Equip 10,000 smallholders with climate-smart agronomy, soil health, and water stewardship skills by 2027.",
  "Co-create solutions with indigenous knowledge, placing pastoralist women and youth at the center.",
  "Leverage data partnerships to translate forecasts into actionable ward-level advisories.",
];

const climateFacts = [
  {
    heading: "Rising heat stress",
    detail:
      "Average temperatures in Lodwar have climbed 1.2°C over the last 30 years, shrinking the safe planting window for sorghum by 18%.",
  },
  {
    heading: "Erratic rainfall",
    detail:
      "Mandera now receives 70% of its annual rainfall in intense bursts, triggering flash floods along the Daua River that wash away seedbeds.",
  },
  {
    heading: "Resource pressure",
    detail:
      "Over 62% of households rely on unimproved water sources; boreholes must serve both people and livestock, increasing conflict during droughts.",
  },
];

const partners = [
  {
    name: "County Governments of Turkana & Mandera",
    role: "County climate officers co-design extension schedules and help align actions with CIDP priorities.",
  },
  {
    name: "National Drought Management Authority (NDMA)",
    role: "Integrates early warning bulletins and supports rapid response messaging for pastoralist corridors.",
  },
  {
    name: "Kenya Meteorological Department (KMD)",
    role: "Provides downscaled seasonal forecasts and co-hosts climate field schools in drought hot spots.",
  },
  {
    name: "Community-Based Organisations & Farmer Cooperatives",
    role: "Lead last-mile trainings, peer learning visits, and indigenous seed banking initiatives.",
  },
  {
    name: "Development Partners & Social Enterprises",
    role: "Invest in solar-powered irrigation pilots, fodder value chains, and farmer-led monitoring.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHero
        eyebrow="About the hub"
        title="Empowering resilient farms across Turkana and Mandera"
        description="We exist to close the gap between climate science and field reality. From weather intelligence to regenerative agronomy, we translate insights into day-to-day decisions that keep households food secure."
        image="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80"
        stats={[
          {
            label: "Local lead farmers",
            value: "480",
            description: "Trained as climate stewards facilitating demo plots and WhatsApp advisory loops.",
          },
          {
            label: "Irrigation schemes supported",
            value: "17",
            description: "Ranging from Kerio belt riverine gardens to Mandera West solar pumps.",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Mission & Objectives"
          label="What drives our work"
          description="Farmer-led climate solutions thrive when knowledge and tools are delivered in the language, timing, and format that communities trust."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Our promise</h3>
            <p className="text-sm text-white/70">
              We amplify the ingenuity of Turkana and Mandera farmers with curated intelligence,
              responsive advisory services, and practical demonstrations. Every program invests in
              women and youth champions, because resilient livelihoods demand inclusive leadership.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">2025 focus areas</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {missionPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 text-emerald-300">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Regional context"
          label="Climate and farming realities"
          description="The arid and semi-arid counties of Kenya face compounding climate risks. Our programming responds to four priority pain points mapped through household surveys and indigenous knowledge."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {climateFacts.map((fact) => (
            <div key={fact.heading} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{fact.heading}</h3>
              <p className="mt-3 text-sm text-white/70">{fact.detail}</p>
            </div>
          ))}
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-400/10 p-6 text-white">
            <h3 className="text-lg font-semibold">Adaptive strategies underway</h3>
            <p className="mt-3 text-sm text-white/90">
              Communities are piloting flood recession farming, communal fodder banks, and mobile
              borehole monitoring to reduce income volatility. The hub documents, evaluates, and
              scales these solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Partnerships"
          label="Allies walking the journey with us"
          description="We collaborate with public institutions, research bodies, private innovators, and community leaders to deliver a whole-of-society response."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
              <p className="mt-3 text-sm text-white/70">{partner.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

