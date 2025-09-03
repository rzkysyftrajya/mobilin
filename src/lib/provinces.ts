import { Car, Faq, Testimonial } from './types';
import { Anchor, Briefcase, Building, CheckCircle, Clock, DraftingCompass, Droplets, FerrisWheel, Gauge, HandCoins, Heart, Landmark, LucideIcon, Map, Mountain, Package, Palette, Plane, Ship, Smile, Soup, Sun, Trees, University, Users, Utensils, Zap } from "lucide-react";

export interface Province {
    name: string;
    slug: string;
    group: 'jawa' | 'sumatera' | 'kalimantan' | 'sulawesi' | 'bali-nusa' | 'maluku-papua';
}

export const provinces: Province[] = [
  { name: "Aceh", slug: "aceh", group: 'sumatera' },
  { name: "Bali", slug: "bali", group: 'bali-nusa' },
  { name: "Banten", slug: "banten", group: 'jawa' },
  { name: "Bengkulu", slug: "bengkulu", group: 'sumatera' },
  { name: "Gorontalo", slug: "gorontalo", group: 'sulawesi' },
  { name: "DKI Jakarta", slug: "jakarta", group: 'jawa' },
  { name: "Jambi", slug: "jambi", group: 'sumatera' },
  { name: "Jawa Barat", slug: "jawa-barat", group: 'jawa' },
  { name: "Jawa Tengah", slug: "jawa-tengah", group: 'jawa' },
  { name: "Jawa Timur", slug: "jawa-timur", group: 'jawa' },
  { name: "Kalimantan Barat", slug: "kalimantan-barat", group: 'kalimantan' },
  { name: "Kalimantan Selatan", slug: "kalimantan-selatan", group: 'kalimantan' },
  { name: "Kalimantan Tengah", slug: "kalimantan-tengah", group: 'kalimantan' },
  { name: "Kalimantan Timur", slug: "kalimantan-timur", group: 'kalimantan' },
  { name: "Kalimantan Utara", slug: "kalimantan-utara", group: 'kalimantan' },
  { name: "Kepulauan Bangka Belitung", slug: "kepulauan-bangka-belitung", group: 'sumatera' },
  { name: "Kepulauan Riau", slug: "kepulauan-riau", group: 'sumatera' },
  { name: "Lampung", slug: "lampung", group: 'sumatera' },
  { name: "Maluku", slug: "maluku", group: 'maluku-papua' },
  { name: "Maluku Utara", slug: "maluku-utara", group: 'maluku-papua' },
  { name: "Nusa Tenggara Barat", slug: "nusa-tenggara-barat", group: 'bali-nusa' },
  { name: "Nusa Tenggara Timur", slug: "nusa-tenggara-timur", group: 'bali-nusa' },
  { name: "Papua", slug: "papua", group: 'maluku-papua' },
  { name: "Papua Barat", slug: "papua-barat", group: 'maluku-papua' },
  { name: "Papua Barat Daya", slug: "papua-barat-daya", group: 'maluku-papua' },
  { name: "Papua Pegunungan", slug: "papua-pegunungan", group: 'maluku-papua' },
  { name: "Papua Selatan", slug: "papua-selatan", group: 'maluku-papua' },
  { name: "Papua Tengah", slug: "papua-tengah", group: 'maluku-papua' },
  { name: "Riau", slug: "riau", group: 'sumatera' },
  { name: "Sulawesi Barat", slug: "sulawesi-barat", group: 'sulawesi' },
  { name: "Sulawesi Selatan", slug: "sulawesi-selatan", group: 'sulawesi' },
  { name: "Sulawesi Tengah", slug: "sulawesi-tengah", group: 'sulawesi' },
  { name: "Sulawesi Tenggara", slug: "sulawesi-tenggara", group: 'sulawesi' },
  { name: "Sulawesi Utara", slug: "sulawesi-utara", group: 'sulawesi' },
  { name: "Sumatera Barat", slug: "sumatera-barat", group: 'sumatera' },
  { name: "Sumatera Selatan", slug: "sumatera-selatan", group: 'sumatera' },
  { name: "Sumatera Utara", slug: "sumatera-utara", group: 'sumatera' },
  { name: "DI Yogyakarta", slug: "yogyakarta", group: 'jawa' }
];

export function getProvinceNameBySlug(slug: string): Province | undefined {
    return provinces.find(p => p.slug === slug);
}

function simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; 
    }
    return Math.abs(hash);
}

function getHashedItem<T>(array: T[], hash: number, salt: number = 0): T {
    return array[(hash + salt) % array.length];
}

export function getProvinceContent(provinceSlug: string, dict: any) {
    const hash = simpleHash(provinceSlug);
    const provinceData = getProvinceNameBySlug(provinceSlug);
    const group = provinceData?.group || 'jawa';
    const pageDict = dict.province_page;

    const contentBlocks = {
        whyUsPoints: [
            { icon: HandCoins, text: pageDict.why_us_points.honest_price },
            { icon: CheckCircle, text: pageDict.why_us_points.well_maintained },
            { icon: Package, text: pageDict.why_us_points.easy_booking },
            { icon: Clock, text: pageDict.why_us_points.support_24_7 },
            { icon: Smile, text: pageDict.why_us_points.friendly_service },
            { icon: Map, text: pageDict.why_us_points.wide_coverage },
        ],
        armadaCars: [
            { name: "Toyota Avanza / Daihatsu Xenia", desc: pageDict.armada_cars.avanza_xenia },
            { name: "Toyota Innova Reborn", desc: pageDict.armada_cars.innova_reborn },
            { name: "Honda Brio / Toyota Agya", desc: pageDict.armada_cars.brio_agya },
            { name: "Toyota Alphard / Vellfire", desc: pageDict.armada_cars.alphard_vellfire },
            { name: "Toyota Fortuner / Mitsubishi Pajero", desc: pageDict.armada_cars.fortuner_pajero },
        ],
        useCases: [
            { icon: Briefcase, title: pageDict.use_cases.business_trip.title, desc: pageDict.use_cases.business_trip.desc },
            { icon: Heart, title: pageDict.use_cases.special_event.title, desc: pageDict.use_cases.special_event.desc },
            { icon: FerrisWheel, title: pageDict.use_cases.tourism.title, desc: pageDict.use_cases.tourism.desc },
            { icon: Users, title: pageDict.use_cases.family_needs.title, desc: pageDict.use_cases.family_needs.desc },
            { icon: Building, title: pageDict.use_cases.vip_service.title, desc: pageDict.use_cases.vip_service.desc },
            { icon: University, title: pageDict.use_cases.official_visit.title, desc: pageDict.use_cases.official_visit.desc },
        ],
        tips: [
            { icon: Map, title: pageDict.tips.plan_route.title, desc: pageDict.tips.plan_route.desc },
            { icon: Utensils, title: pageDict.tips.local_culinary.title, desc: pageDict.tips.local_culinary.desc },
            { icon: Sun, title: pageDict.tips.book_early.title, desc: pageDict.tips.book_early.desc },
            { icon: Landmark, title: pageDict.tips.respect_culture.title, desc: pageDict.tips.respect_culture.desc },
            { icon: Clock, title: pageDict.tips.travel_time.title, desc: pageDict.tips.travel_time.desc },
        ]
    };

    const content = {
        h1: getHashedItem(pageDict.h1_options, hash, 0),
        tagline: getHashedItem(pageDict.tagline_options, hash, 1),
        intro: getHashedItem(pageDict.intro_options, hash, 2),
        whyUs: {
            title: getHashedItem(pageDict.why_us_titles, hash, 3),
            p1: getHashedItem(pageDict.why_us_intros, hash, 4),
            points: [
                getHashedItem(contentBlocks.whyUsPoints, hash, 5),
                getHashedItem(contentBlocks.whyUsPoints, hash, 6),
                getHashedItem(contentBlocks.whyUsPoints, hash, 7),
                getHashedItem(contentBlocks.whyUsPoints, hash, 8),
            ].filter((v, i, a) => a.findIndex(t => (t.text === v.text)) === i) 
        },
        armada: {
            title: pageDict.armada_title,
            p1: pageDict.armada_subtitle,
            cars: [...contentBlocks.armadaCars].sort(() => 0.5 - Math.random()).slice(0, 4)
        },
        useCase: {
            title: pageDict.usecase_title,
            cases: [...contentBlocks.useCases].sort(() => 0.5 - Math.random()).slice(0, 4)
        },
        tips: {
            title: pageDict.tips_title,
            p1: pageDict.tips_subtitle,
            items: [...contentBlocks.tips].sort(() => 0.5 - Math.random()).slice(0, 3)
        },
        pricing: {
            title: pageDict.pricing_title,
            p1: pageDict.pricing_p1,
            p2: pageDict.pricing_p2,
        },
        cta: {
             text: getHashedItem(pageDict.cta_text_options, hash, 9),
             buttonText: getHashedItem(pageDict.cta_button_options, hash, 10)
        }
    };
    
    if (provinceSlug === 'yogyakarta') {
        content.tips.items.unshift({ icon: Soup, title: pageDict.special_tips.yogyakarta.title, desc: pageDict.special_tips.yogyakarta.desc });
    }

    if (provinceSlug === 'jakarta') {
        content.h1 = pageDict.special_h1.jakarta;
        content.intro = pageDict.special_intro.jakarta;
        content.tips.items.unshift({ icon: DraftingCompass, title: pageDict.special_tips.jakarta.title, desc: pageDict.special_tips.jakarta.desc });
        const businessCaseIndex = content.useCase.cases.findIndex(c => c.icon === Briefcase);
        if (businessCaseIndex !== -1) {
            content.useCase.cases[businessCaseIndex].desc = pageDict.special_use_cases.jakarta_business;
        }
    }
    
    if (provinceSlug === 'bali') {
        content.h1 = pageDict.special_h1.bali;
        content.tips.items.unshift({ icon: Trees, title: pageDict.special_tips.bali.title, desc: pageDict.special_tips.bali.desc });
    }
    
    if (group === 'kalimantan' || group === 'sulawesi' || group === 'maluku-papua') {
        content.armada.cars.unshift({ name: "Toyota Fortuner / Mitsubishi Pajero", desc: pageDict.armada_cars.fortuner_pajero });
        content.tips.items.unshift({icon: Anchor, title: pageDict.special_tips.remote_area.title, desc: pageDict.special_tips.remote_area.desc});
        const businessCaseIndex = content.useCase.cases.findIndex(c => c.icon === Briefcase);
        if (businessCaseIndex !== -1) {
            content.useCase.cases[businessCaseIndex].title = pageDict.special_use_cases.industrial_visit.title;
            content.useCase.cases[businessCaseIndex].desc = pageDict.special_use_cases.industrial_visit.desc;
        }
    }

    content.tips.items = content.tips.items.filter((v, i, a) => a.findIndex(t => (t.title === v.title)) === i).slice(0, 3);
    content.armada.cars = content.armada.cars.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i).slice(0, 4);

    return content;
}
