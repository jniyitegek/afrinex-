"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { PageHero } from "@/components/PageHero";

const indicatorTrends = [
  {
    name: "Sorghum yields (t/ha)",
    data: [
      { year: 2021, value: 0.9 },
      { year: 2022, value: 1.1 },
      { year: 2023, value: 1.6 },
      { year: 2024, value: 1.8 },
      { year: 2025, value: 2.1 },
    ],
    insight: "Adoption of drought-tolerant varieties and micro-irrigation increased yields by 133%.",
  },
  {
    name: "Households accessing drought alerts (%)",
    data: [
      { year: 2021, value: 18 },
      { year: 2022, value: 33 },
      { year: 2023, value: 45 },
      { year: 2024, value: 57 },
      { year: 2025, value: 71 },
    ],
    insight:
      "Expanded SMS/WhatsApp integration led to a 68% increase in households responding to early warnings.",
  },
  {
    name: "Water pan storage (million litres)",
    data: [
      { year: 2021, value: 2.6 },
      { year: 2022, value: 3.1 },
      { year: 2023, value: 3.8 },
      { year: 2024, value: 4.2 },
      { year: 2025, value: 5.4 },
    ],
    insight:
      "Rehabilitated pans and sand dams boosted community water security, reducing migration pressure.",
  },
];

const riskScenarios = [
  {
    title: "Drought scenario (Jan–Mar 2026)",
    probability: "Medium",
    triggers:
      "Below-average OND rains, elevated temperatures, and soil moisture index below 35% for two consecutive dekads.",
    actions: [
      "Activate sorghum and cowpea fodder banks before mid-January.",
      "Scale up cash transfers for vulnerable households in Turkana East.",
      "Restrict charcoal burning and monitor pasture degradation hotspots.",
    ],
  },
  {
    title: "Flash flood scenario (Apr–May 2026)",
    probability: "High",
    triggers:
      "Early seasonal storms in Ethiopian highlands, Daua River discharge exceeding 650 m³/s, and rainfall anomalies above 40%.",
    actions: [
      "Pre-position fuel for rescue boats and mobilize ward disaster committees.",
      "Secure irrigation pumps, raise storage sheds, and reinforce river bunds.",
      "Issue SMS alerts for relocation of livestock and households in low-lying areas.",
    ],
  },
];

const partnerInsights = [
  {
    partner: "World Food Programme",
    highlight:
      "Climate risk insurance payouts supported 1,200 pastoralists, stabilizing household consumption during the 2024 long dry spell.",
    link: "https://www.wfp.org",
  },
  {
    partner: "FAO Kenya",
    highlight:
      "Participatory rangeland management reduced conflicts in Lokiriama corridor by creating shared grazing calendars.",
    link: "https://www.fao.org/kenya",
  },
  {
    partner: "Practical Action",
    highlight:
      "Solar-powered cold chain for camel milk extended shelf life to 48 hours, expanding market access for Mandera cooperatives.",
    link: "https://practicalaction.org",
  },
];

function TrendCard({ indicator }) {
  const maxValue = Math.max(...indicator.data.map((point) => point.value));

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div>
        <h3 className="text-lg font-semibold text-white">{indicator.name}</h3>
        <p className="mt-2 text-sm text-white/70">{indicator.insight}</p>
      </div>
      <div className="mt-2 flex items-end justify-between gap-2">
        {indicator.data.map((point) => (
          <div key={point.year} className="flex flex-1 flex-col items-center">
            <div
              className="w-full rounded-t-xl bg-gradient-to-br from-emerald-300 to-emerald-500"
              style={{
                height: `${(point.value / maxValue) * 120}px`,
              }}
            />
            <span className="mt-2 text-xs font-semibold text-white/70">{point.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InsightsPage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHero
        eyebrow="Data & insights"
        title="Evidence guiding climate investments"
        description="Explore dashboards, scenario planning, and impact metrics that inform where partners allocate resources."
        image="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
        stats={[
          {
            label: "Data sources tracked",
            value: "28",
            description: "Including satellite imagery, remote sensing, and ground observations.",
          },
          {
            label: "Partner dashboards",
            value: "12",
            description: "Customized views for donors, cooperatives, and government departments.",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Performance trends"
          label="Key indicators for resilient livelihoods"
          description="Visual summaries from the hub’s monitoring system updated every quarter."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {indicatorTrends.map((indicator) => (
            <TrendCard key={indicator.name} indicator={indicator} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Scenario planning"
          label="Anticipating near-term climate risks"
          description="Each scenario is co-developed with county disaster units and community monitors."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {riskScenarios.map((scenario) => (
            <div key={scenario.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{scenario.title}</h3>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                  {scenario.probability} risk
                </span>
              </div>
              <p className="mt-3 text-sm text-white/70">{scenario.triggers}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {scenario.actions.map((action) => (
                  <li key={action} className="flex gap-2">
                    <span className="text-emerald-300">▹</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="For partners & funders"
          label="Impact snapshots"
          description="Downloadable briefs summarise outcomes and pipeline opportunities."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {partnerInsights.map((item) => (
            <div key={item.partner} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold text-white">{item.partner}</h3>
              <p className="mt-3 text-sm text-white/70">{item.highlight}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit rounded-full border border-emerald-400/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 transition hover:bg-emerald-400/10"
              >
                Visit partner site
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

