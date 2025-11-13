'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (path) => path,
});

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      tools: 'Climate Tools',
      resources: 'Resources',
      stories: 'Stories',
      insights: 'Data & Insights',
      contact: 'Contact',
      events: 'Events',
      marketplace: 'Marketplace',
      more: 'More',
    },
    cta: {
      join: 'Join Trainings',
      weather: 'View Weather',
      updates: 'Get Updates',
    },
    languageToggle: {
      label: 'Language',
      english: 'English',
      swahili: 'Swahili',
    },
    footer: {
      tagline:
        'Empowering climate-resilient farming in Turkana and Mandera.',
      newsletter: 'Sign up for monthly climate-smart farming updates.',
      rights: 'All rights reserved.',
    },
    home: {
      hero: {
        eyebrow: 'Climate resilience for arid counties',
        title: 'Building drought-smart, flood-ready farms in Turkana and Mandera.',
        description:
          'We equip smallholder farmers with hyperlocal climate intelligence, regenerative practices, and peer-to-peer mentorship so that households can thrive despite rising heat, erratic rainfall, and recurring shocks.',
        rapidInsightsTitle: 'Rapid insights',
        rapidInsightsBody:
          'Weekly advisory pushes to 4,800+ farmers with crop calendars tuned to Lake Turkana shoreline winds and Mandera River flood pulses.',
        highlights: [
          { label: 'Farmers Enrolled', value: '6,200+' },
          { label: 'Water Points Rehabilitated', value: '38' },
          { label: 'Hectares Under Climate-Smart Crops', value: '4,500' },
        ],
        supportNote:
          'Farmer networks in Lokitaung and Rhamu share ground-truthed rainfall logs to improve our seasonal outlooks.',
        supportImageAlt: 'Farmer training under acacia shade',
      },
      quickLinksSection: {
        eyebrow: 'Start here',
        title: 'Key pathways to climate resilience',
        description:
          'Tap into guidance, real-time updates, and community stories designed for pastoralists, agro-pastoralists, and irrigated farmers across Turkana and Mandera.',
      },
      quickLinks: [
        {
          href: '/about',
          icon: '🎯',
          eyebrow: 'Who we are',
          title: 'Mission & partnerships',
          description:
            'Learn how we support climate-smart farming with county partners, NGOs, and farmer cooperatives.',
        },
        {
          href: '/climate-tools',
          icon: '🌦️',
          eyebrow: 'Plan wisely',
          title: 'Weather & climate intelligence',
          description:
            'Access localized forecasts, advisory alerts, and planting windows for Turkana and Mandera.',
        },
        {
          href: '/resources',
          icon: '📚',
          eyebrow: 'Skill up',
          title: 'Training & guides',
          description:
            'Download manuals, watch field demos, and register for climate-smart agronomy trainings.',
        },
        {
          href: '/stories',
          icon: '🤝',
          eyebrow: 'Be inspired',
          title: 'Success stories',
          description:
            'Hear from farmer champions transforming livelihoods through indigenous crops and water-saving practices.',
        },
      ],
      exploreLink: 'Explore →',
      newsSection: {
        eyebrow: 'Latest updates',
        title: 'News, workshops, and climate alerts',
        description:
          'Stay ahead of impending heatwaves, flash floods, and market shifts with real-time signals compiled from the Kenya Meteorological Department, NDMA bulletins, and field scouts.',
      },
      newsItems: [
        {
          title: 'Turkana agroforestry demo plots hit 85% survival rate',
          date: 'Oct 24, 2025',
          summary:
            'Lead farmers in Lokichar tested zai pits and drip irrigation kits yielding 40% higher seedling survival despite erratic rains.',
          category: 'Success Story',
        },
        {
          title: 'Mandera climate alert: Strong winds expected next week',
          date: 'Nov 11, 2025',
          summary:
            'Farmers advised to secure shade nets and delay spraying between Nov 14-18 due to gusts reaching 55 km/h across Rhamu and Elwak.',
          category: 'Climate Alert',
        },
        {
          title: 'Joint training with NDMA on drought-ready fodder banks',
          date: 'Nov 02, 2025',
          summary:
            'Over 220 pastoralists trained on sorghum silage and early warning triggers integrated with mobile SMS advisories.',
          category: 'Workshop',
        },
      ],
    },
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      tools: 'Zana za Hali ya Hewa',
      resources: 'Rasilimali',
      stories: 'Hadithi',
      insights: 'Takwimu & Maarifa',
      contact: 'Wasiliana',
      events: 'Matukio',
      marketplace: 'Soko',
      more: 'Zaidi',
    },
    cta: {
      join: 'Jiunge na Mafunzo',
      weather: 'Angalia Hali ya Hewa',
      updates: 'Pata Taarifa',
    },
    languageToggle: {
      label: 'Lugha',
      english: 'Kiingereza',
      swahili: 'Kiswahili',
    },
    footer: {
      tagline:
        'Kuimarisha kilimo kinachostahimili mabadiliko ya tabianchi Turkana na Mandera.',
      newsletter: 'Jisajili kwa taarifa za kila mwezi za kilimo chenye uhimilivu.',
      rights: 'Haki zote zimehifadhiwa.',
    },
    home: {
      hero: {
        eyebrow: 'Uhimilivu wa tabianchi kwa maeneo kame',
        title: 'Kujenga mashamba yanayostahimili ukame na mafuriko Turkana na Mandera.',
        description:
          'Tunawawezesha wakulima wadogo kwa taarifa za hali ya hewa za maeneo yao, mbinu za kuzalisha endelevu, na ushauri wa wakulima wenzao ili kaya ziweze kustawi licha ya joto kuongezeka, mvua zisizo tabirika, na misukosuko inayoendelea.',
        rapidInsightsTitle: 'Maarifa ya haraka',
        rapidInsightsBody:
          'Ushauri wa kila wiki unafikia zaidi ya wakulima 4,800 ukiwa na kalenda za mazao zilizopangwa kulingana na upepo wa Ziwa Turkana na mawimbi ya mafuriko ya Mto Mandera.',
        highlights: [
          { label: 'Wakulima Waliosajiliwa', value: '6,200+' },
          { label: 'Vyanzo vya Maji Vilivyoboreshwa', value: '38' },
          { label: 'Hekta zilizo na Mazao ya Ustahimilivu', value: '4,500' },
        ],
        supportNote:
          'Mitandao ya wakulima ya Lokitaung na Rhamu inashirikisha rekodi halisi za mvua ili kuboresha utabiri wetu wa msimu.',
        supportImageAlt: 'Mafunzo ya wakulima chini ya mti wa acacia',
      },
      quickLinksSection: {
        eyebrow: 'Anza hapa',
        title: 'Njia kuu za uhimilivu wa tabianchi',
        description:
          'Pata mwongozo, masasisho ya papo kwa papo, na hadithi za jamii kwa ajili ya wafugaji, wakulima wanaochanganya, na wakulima wa umwagiliaji kote Turkana na Mandera.',
      },
      quickLinks: [
        {
          href: '/about',
          icon: '🎯',
          eyebrow: 'Sisi ni nani',
          title: 'Dira na ushirikiano',
          description:
            'Jifunze jinsi tunavyosaidia kilimo kinachostahimili tabianchi kwa kushirikiana na kaunti, mashirika, na vyama vya wakulima.',
        },
        {
          href: '/climate-tools',
          icon: '🌦️',
          eyebrow: 'Panga kwa ufanisi',
          title: 'Ujasusi wa hali ya hewa',
          description:
            'Fikia utabiri wa maeneo mahsusi, taarifa za tahadhari, na vipindi vya upandaji kwa Turkana na Mandera.',
        },
        {
          href: '/resources',
          icon: '📚',
          eyebrow: 'Ongeza ujuzi',
          title: 'Mafunzo na miongozo',
          description:
            'Pakua mwongozo, tazama maonyesho shambani, na jisajili kwenye mafunzo ya kilimo kinachostahimili tabianchi.',
        },
        {
          href: '/stories',
          icon: '🤝',
          eyebrow: 'Pata msukumo',
          title: 'Hadithi za mafanikio',
          description:
            'Sikiliza mabingwa wa wakulima wanaobadili maisha kupitia mazao asilia na mbinu za kuokoa maji.',
        },
      ],
      exploreLink: 'Chunguza →',
      newsSection: {
        eyebrow: 'Masasisho ya hivi karibuni',
        title: 'Habari, warsha, na tahadhari za hali ya hewa',
        description:
          'Endelea mbele ya mawimbi ya joto, mafuriko ya ghafla, na mabadiliko ya soko kwa taarifa zinazokusanywa kutoka Idara ya Hali ya Hewa ya Kenya, taarifa za NDMA, na wachunguzi wa mashinani.',
      },
      newsItems: [
        {
          title: 'Mashamba ya majaribio ya agroforestry Turkana yafikia uhai wa 85%',
          date: 'Okt 24, 2025',
          summary:
            'Wakulima wakuu wa Lokichar walijaribu mashimo ya zai na mifumo ya matone, na kupata uhai wa miche kwa asilimia 40 licha ya mvua zisizo tabirika.',
          category: 'Hadithi ya Mafanikio',
        },
        {
          title: 'Tahadhari ya hali ya hewa Mandera: Upepo mkali wiki ijayo',
          date: 'Nov 11, 2025',
          summary:
            'Wakulima wanashauriwa kulinda neti za kivuli na kuchelewesha kunyunyizia kati ya Nov 14-18 kutokana na upepo kufikia 55 km/h maeneo ya Rhamu na Elwak.',
          category: 'Tahadhari ya Tabianchi',
        },
        {
          title: 'Mafunzo ya pamoja na NDMA kuhusu hifadhi ya malisho kavu',
          date: 'Nov 02, 2025',
          summary:
            'Zaidi ya wafugaji 220 walifundishwa namna ya kutengeneza silaji ya mtama na kutumia tahadhari za mapema zinazopelekwa kupitia SMS.',
          category: 'Warsha',
        },
      ],
    },
  },
};

function getTranslation(language, path) {
  const segments = path.split('.');
  return segments.reduce((acc, segment) => {
    if (acc && acc[segment] !== undefined) {
      return acc[segment];
    }
    return null;
  }, translations[language]) ?? path;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (path) => getTranslation(language, path),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

