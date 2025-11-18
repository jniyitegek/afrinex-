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
      problem: 'Problem',
      mission: 'Mission',
      solution: 'Solution',
      team: 'Team',
      prototype: 'Prototype',
      challenges: 'Challenges',
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
      problem: {
        eyebrow: 'Problem statement',
        title: 'Climate shocks are outpacing traditional farming know-how',
        description:
          'Climate change severely affects small-scale farmers in northern Kenya, particularly in Turkana and Mandera. These farmers face unpredictable weather patterns, prolonged droughts, and occasional floods that reduce crop yields by up to 40% each year (FAO, 2021; Kenya Climate-Smart Agriculture Strategy, 2017). The problem persists year-round, driven by deforestation, pollution, and greenhouse gas emissions that trap heat in the atmosphere. Without action in the next 2–3 years, food security, livelihoods, and community stability will decline sharply.',
        bullets: [
          '67% of farmers rely on rain-fed systems that fail at least once every three seasons.',
          'Only 22% receive actionable weather alerts before drought or flood events.',
          'Fragmented data makes it hard for policymakers to prioritize investments.',
        ],
      },
      mission: {
        eyebrow: 'Mission',
        title: 'Empower arid-county innovators to co-create resilient food systems',
        description:
          'Our mission is to support farmers in northern Kenya, particularly Turkana and Mandera, to adapt to climate change by promoting sustainable farming practices, improving access to reliable weather information, and strengthening community resilience.',
        pillars: [
          'Translate science into hyperlocal, human-centered advisories.',
          'Unlock inclusive markets for climate-resilient inputs and services.',
          'Elevate community voices in county and national policy dialogues.',
        ],
      },
      solution: {
        eyebrow: 'Solution blueprint',
        title: 'Smart Climate-Resilient Farming System (SCRFS)',
        description:
          'A mobile and community-driven platform that delivers real-time weather forecasts, irrigation support, climate-smart training, and drought-resistant seed access for Turkana farmers. It blends local knowledge with digital tools so farmers plan better, reduce crop loss, and adapt to unpredictable weather.',
        layers: [
          {
            label: "What's the solution?",
            detail:
              'SCRFS provides localized alerts, irrigation support, and training content through SMS/app channels while coordinating seed distribution that withstands long droughts.',
          },
          {
            label: 'How does it work?',
            detail:
              'Farmers register via app or SMS, receive weather/planting/irrigation guidance, and can connect with agricultural officers. Data on rainfall, temperature, and soil moisture recommends optimal planting windows and solar-powered irrigation sharing networks.',
          },
          {
            label: 'Top features',
            detail:
              '- Weather Forecast Alerts: Daily notifications in local languages.\n- Irrigation Guidance: Recommendations on when/how to irrigate.\n- Training Content: Audio/visual guides on sustainable techniques.\n- Community Support: Peer advice and equipment sharing.',
          },
          {
            label: 'Who implements it?',
            detail:
              'Local agricultural officers, NGOs, and climate-tech developers co-lead delivery. Farmer cooperatives and village elders champion registration and training.',
          },
          {
            label: 'Who benefits?',
            detail:
              '- Small-scale farmers in Turkana and drought-prone East Africa.\n- Communities relying on rain-fed agriculture.\n- Agricultural officers improving outreach.\n- Youth creating agritech enterprises.',
          },
          {
            label: 'How do users access it?',
            detail:
              '- Community sensitization workshops with farmers and elders.\n- Partnerships with mobile providers (e.g., Safaricom) for SMS alerts.\n- Schools/cooperatives as training & registration hubs.\n- Pilot with 20 farmers, iterate, and scale.',
          },
          {
            label: 'Unique selling point',
            detail:
              'Unlike smartphone-first apps, SCRFS combines SMS technology, local knowledge, solar irrigation, and drought-resilient seed distribution so farmers make data-driven decisions even with limited connectivity.',
          },
        ],
      },
      team: {
        eyebrow: 'Think tank',
        title: 'Multidisciplinary members guiding the work',
        description:
          'Researchers, farmer champions, and policy strategists collaborate to stress-test ideas before they reach the field.',
        groupImage: '/images/group-pic.jpeg',
        groupAlt: 'Think tank members at the field lab in Turkana',
        members: [
          {
            name: 'Marwat Dhul Hijja Karemera',
            role: 'Program director · Turkana & Mandera',
            focus: 'Leads community listening loops and rapid prototyping cycles.',
            image: '/images/group-pic.jpeg',
          },
          {
            name: 'Ahmed Osman Muhammad',
            role: 'Data strategist · Mandera',
            focus: 'Builds climate dashboards and SMS intelligence flows.',
            image: '/images/group-pic.jpeg',
          },
          {
            name: 'Didier Abizera',
            role: 'Partnerships & finance · Nairobi',
            focus: 'Designs blended capital structures for farmer-led ventures.',
            image: '/images/group-pic.jpeg',
          },
          {
            name: 'Queen Sandra Hakizimana',
            role: 'Human-centered designer · Lodwar',
            focus: 'Leads service design sprints and product usability testing.',
            image: '/images/group-pic.jpeg',
          },
        ],
      },
      prototype: {
        eyebrow: 'Prototype',
        title: 'Climate Command Board v1.2',
        description:
          'A progressive web app that fuses satellite feeds, farmer observations, and program data into a single decision plane usable offline.',
        highlights: [
          'Bilingual UX (English/Kiswahili) with voice prompts for low-literacy users.',
          'Plug-and-play widgets for drought triggers, fodder stocks, and borehole health.',
          'Secure API endpoints so partners can integrate with existing MIS tools.',
        ],
        callToAction: 'Request live demo',
        mockup: '/images/prototype.jpeg',
        mockupAlt: 'Prototype screens for the Climate Command Board',
      },
      challenges: {
        eyebrow: 'Field-tested challenges',
        title: 'Our E-lab challenges videos/ created impact in the community',
        description:
          'Each challenge package includes short explainer videos from the field plus notes on what is working.',
        items: [
          {
            title: 'Get to know the team Afrinex',
            description:
              'Meet the Afrinex think tank and hear how each member contributes to climate-resilient farming breakthroughs.',
            videoUrl: 'https://www.youtube.com/embed/9UdZT07HONc',
            embed: {
              width: 1521,
              height: 489,
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
              referrerPolicy: 'strict-origin-when-cross-origin',
            },
          },
          {
            title: 'Discover Africa: The story of Nandi people from Kenya',
            description:
              'A storytelling spotlight on the Nandi community’s climate resilience practices, showing how cultural knowledge guides adaptation across Kenya.',
            videoUrl: 'https://www.youtube.com/embed/OMYdcGAzr58',
            embed: {
              width: 1521,
              height: 489,
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
              referrerPolicy: 'strict-origin-when-cross-origin',
            },
          },
          {
            title: 'Mission 2: Smart climate within northern Kenya (Turkana & Mandera)',
            description:
              'An inside look at the Mission 2 initiative accelerating smart climate adoption in Turkana and Mandera through farmer training, data tools, and adaptive infrastructure.',
            videoUrl: 'https://www.youtube.com/embed/tNZWS2-06Wg',
            embed: {
              width: 853,
              height: 480,
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
              referrerPolicy: 'strict-origin-when-cross-origin',
            },
          },
        ],
      },
    },
  },
  sw: {
    nav: {
      problem: 'Tatizo',
      mission: 'Dhamira',
      solution: 'Suluhu',
      team: 'Timu',
      prototype: 'Mfano',
      challenges: 'Changamoto',
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
      problem: {
        eyebrow: 'Tamko la tatizo',
        title: 'Misukosuko ya tabianchi inazidi ujuzi wa kilimo wa jadi',
        description:
          'Mabadiliko ya tabianchi yanaathiri vibaya wakulima wadogo wa kaskazini mwa Kenya, hasa Turkana na Mandera. Wakulima hawa hukabiliwa na hali ya hewa isiyotabirika, ukame mrefu, na mafuriko ya mara kwa mara ambayo hupunguza mavuno kwa hadi asilimia 40 kila mwaka (FAO, 2021; Kenya Climate-Smart Agriculture Strategy, 2017). Tatizo hili hudumu mwaka mzima kutokana na ukataji miti, uchafuzi, na hewa ukaa inayonaswa angani. Bila kuchukua hatua ndani ya miaka 2–3 ijayo, usalama wa chakula na ustawi wa jamii hizi utazorota zaidi.',
        bullets: [
          'Asilimia 67 ya wakulima hutegemea mvua pekee ambazo hushindwa angalau mara moja katika misimu mitatu.',
          'Ni asilimia 22 pekee hupokea tahadhari za hali ya hewa zenye hatua kabla ya ukame au mafuriko.',
          'Data iliyotawanyika hufanya iwe vigumu kwa watunga sera kuweka kipaumbele uwekezaji.',
        ],
      },
      mission: {
        eyebrow: 'Dhamira',
        title: 'Kuimarisha wabunifu wa maeneo kame kuunda mifumo ya chakula yenye uhimilivu',
        description:
          'Dhamira yetu ni kusaidia wakulima wa kaskazini mwa Kenya, hasa Turkana na Mandera, kuzoea mabadiliko ya tabianchi kwa kukuza mbinu endelevu za kilimo, kuboresha upatikanaji wa taarifa za kuaminika za hali ya hewa, na kuimarisha uhimilivu wa jamii.',
        pillars: [
          'Kutafsiri sayansi kuwa ushauri wa maeneo mahsusi unaolenga watu.',
          'Kufungua masoko jumuishi kwa pembejeo na huduma zinazostahimili tabianchi.',
          'Kuinua sauti za jamii katika mijadala ya sera za kaunti na taifa.',
        ],
      },
      solution: {
        eyebrow: 'Mpango wa suluhu',
        title: 'Mfumo Mahiri wa Ustahimilivu wa Kilimo (SCRFS)',
        description:
          'Huu ni jukwaa la simu na jamii linalotoa utabiri wa hali ya hewa, usaidizi wa umwagiliaji, mafunzo ya kilimo kinachostahimili tabianchi, na upatikanaji wa mbegu zinazostahimili ukame kwa wakulima wa Turkana. Linaunganisha maarifa ya wenyeji na zana za kidijitali ili wakulima wapange vyema, kupunguza hasara, na kuzoea hali ya hewa isiyotabirika.',
        layers: [
          {
            label: 'Suluhu ni ipi?',
            detail:
              'SCRFS hutoa taarifa za eneo husika, usaidizi wa umwagiliaji, na maudhui ya mafunzo kupitia SMS/app huku likiratibu usambazaji wa mbegu zinazostahimili ukame mrefu.',
          },
          {
            label: 'Inafanyaje kazi?',
            detail:
              'Wakulima hujisajili kupitia app au SMS, hupokea miongozo ya hali ya hewa/upandaji/umwagiliaji, na kuunganishwa na maafisa wa kilimo. Data ya mvua, joto, na unyevu wa udongo hupendekeza muda bora wa kupanda/kupanda upya na kushiriki pampu za umwagiliaji zinazoendeshwa na nishati ya jua.',
          },
          {
            label: 'Vipengele kuu',
            detail:
              '- Arifa za utabiri wa hali ya hewa: SMS/app za kila siku kwa lugha za eneo.\n- Mwongozo wa umwagiliaji: Ushauri wa lini na namna ya kumwagilia.\n- Maudhui ya mafunzo: Mwongozo wa sauti/video kuhusu mbinu endelevu.\n- Usaidizi wa jamii: Wakulima kuunganishwa kwa ushauri na kushiriki vifaa.',
          },
          {
            label: 'Nani ataitekeleza?',
            detail:
              'Maafisa wa kilimo wa eneo, NGOs, na wabunifu wa teknolojia ya tabianchi. Vyama vya wakulima na wazee wa kijiji wanakuwa mabalozi wa usajili na mafunzo.',
          },
          {
            label: 'Nani atanufaika?',
            detail:
              '- Wakulima wadogo Turkana na maeneo mengine kame ya Afrika Mashariki.\n- Jamii zinazotegemea kilimo cha mvua.\n- Maafisa wa kilimo wanaohitaji zana bora za uhamasishaji.\n- Vijana wanaoweza kuanzisha biashara za agritech.',
          },
          {
            label: 'Suluhu itawafikiaje watumiaji?',
            detail:
              '- Warsha za uhamasishaji na wakulima na wazee wa jamii.\n- Ushirikiano na watoa huduma za simu (mf. Safaricom) kufikisha SMS.\n- Shule na vyama vya ushirika kama vituo vya mafunzo/usajili.\n- Majaribio kwa wakulima 20, kukusanya mrejesho, kisha kupanua.',
          },
          {
            label: 'Tofauti kuu (USP)',
            detail:
              'Tofauti na app zinazohitaji smartphone na mtandao thabiti, SCRFS inaunganisha teknolojia ya SMS, maarifa ya jamii, umwagiliaji wa nishati ya jua, na mbegu zinazostahimili ukame ili kuwezesha maamuzi yanayotegemea data.',
          },
        ],
      },
      team: {
        eyebrow: 'Think tank',
        title: 'Wanachama wa taaluma tofauti wanaoongoza kazi',
        description:
          'Watafiti, mabingwa wa wakulima, na wataalamu wa sera hushirikiana kujaribu mawazo kabla hayajaenea mashinani.',
        groupImage: '/images/group-pic.jpeg',
        groupAlt: 'Wanachama wa think tank wakifanya kazi Turkana',
        members: [
          {
            name: 'Marwat Dhul Hijja Karemera',
            role: 'Mkurugenzi wa programu · Turkana & Mandera',
            focus: 'Anaongoza midahalo ya jamii na midundo ya majaribio ya haraka.',
            image: '/images/group-pic.jpeg',
          },
          {
            name: 'Ahmed Osman Muhammad',
            role: 'Mtaalamu wa data · Mandera',
            focus: 'Anajenga dashibodi za tabianchi na mitiririko ya SMS.',
            image: '/images/group-pic.jpeg',
          },
          {
            name: 'Didier Abizera',
            role: 'Ushirikiano & fedha · Nairobi',
            focus: 'Huchora miundo ya fedha jumuishi kwa miradi inayoongozwa na wakulima.',
            image: '/images/group-pic.jpeg',
          },
          {
            name: 'Queen Sandra Hakizimana',
            role: 'Mbunifu wa huduma · Lodwar',
            focus: 'Anaendesha sprints za usanifu wa huduma na majaribio ya bidhaa.',
            image: '/images/group-pic.jpeg',
          },
        ],
      },
      prototype: {
        eyebrow: 'Mfano',
        title: 'Bodi ya Amri ya Tabianchi toleo 1.2',
        description:
          'Programu endeshi inayochanganya data za setilaiti, uchunguzi wa wakulima, na takwimu za programu katika eneo moja la maamuzi linaloweza kutumika bila mtandao.',
        highlights: [
          'Muundo wa lugha mbili (Kiingereza/Kiswahili) wenye vidokezo vya sauti kwa watumiaji wasiojua kusoma.',
          'Vijisehemu vinavyoweza kuongezwa kwa vichocheo vya ukame, hifadhi za malisho, na hali ya visima.',
          'API salama ili washirika waweze kuunganisha na mifumo iliyopo.',
        ],
        callToAction: 'Omba maonyesho ya moja kwa moja',
        mockup: '/images/prototype.jpeg',
        mockupAlt: 'Mionekano ya mfano wa Bodi ya Amri ya Tabianchi',
      },
      challenges: {
        eyebrow: 'Changamoto zilizojaribiwa',
        title: 'Video za changamoto za E-lab na athari zake kwa jamii',
        description:
          'Kila kifurushi cha changamoto kina video fupi za maelezo kutoka shambani pamoja na yale yanayofanya kazi.',
        items: [
          {
            title: 'Wafahamu timu ya Afrinex',
            description:
              'Kutana na timu ya Afrinex na ujifunze jinsi kila mwanachama anavyochangia mafanikio ya kilimo kinachostahimili tabianchi.',
            videoUrl: 'https://www.youtube.com/embed/9UdZT07HONc',
            embed: {
              width: 1521,
              height: 489,
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
              referrerPolicy: 'strict-origin-when-cross-origin',
            },
          },
          {
            title: 'Gundua Afrika: Hadithi ya watu wa Nandi kutoka Kenya',
            description:
              'Simulizi kuhusu mbinu za uhimilivu wa watu wa Nandi, zikionyesha jinsi maarifa ya kitamaduni yanavyoongoza mabadiliko ya tabianchi nchini Kenya.',
            videoUrl: 'https://www.youtube.com/embed/OMYdcGAzr58',
            embed: {
              width: 1521,
              height: 489,
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
              referrerPolicy: 'strict-origin-when-cross-origin',
            },
          },
          {
            title: 'Mission 2: Suluhisho la tabianchi kaskazini mwa Kenya (Turkana & Mandera)',
            description:
              'Mtazamo wa ndani wa mpango wa Mission 2 unaoharakisha upitishaji wa teknolojia mahiri za tabianchi kupitia mafunzo ya wakulima, zana za data, na miundombinu ya uhimilivu.',
            videoUrl: 'https://www.youtube.com/embed/tNZWS2-06Wg',
            embed: {
              width: 853,
              height: 480,
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
              referrerPolicy: 'strict-origin-when-cross-origin',
            },
          },
        ],
      },
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

