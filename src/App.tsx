import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Feather, 
  Leaf, 
  Workflow, 
  ShieldCheck, 
  Info,
  Calendar,
  Layers,
  Sparkles,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ShoppingCart,
  Star,
  Quote,
  Calculator,
  Globe
} from "lucide-react";
import { type ProductItem, type InsightBlock, type ContactState } from "./types";
import ArticleDetail from "./components/ArticleDetail";
import zeidaHeroFarmImg from "./assets/images/zeida_hero_farm_1781132476746.png";
import aboutUsChickensImg from "./about us chickens.jpg";
import geeseImg from "./geese.jpg";
import chickenVillageBgImg from "./Chicken PNG Picture, Chickens, Chicken Farm, Chicken Village, Go PNG Image For Free Download.jfif";
import zeidaChickensImg from "./assets/images/zeida_chickens_1781132497900.png";
import zeidaGrazingGoatsHeroImg from "./assets/images/zeida_grazing_goats_dar_1781449953884.jpg";
import zeidaChickenHeroCleanImg from "./assets/images/zeida_chicken_hero_clean_1781450726453.jpg";
import img4halo from "./IMG4halo.JPEG";
import zeidaLogoImg from "./Zeida logo crop fit.png";

// ==========================================
// DATA DEFINITIONS & ASSETS
// ==========================================

const PRODUCTS_EN: ProductItem[] = [
  {
    id: "poultry-chickens",
    name: "Premium Chickens",
    scientificCategory: "Gallus domesticus",
    description: "Nourished with high-yield organic animal feed with optimal protein profiling. Raised in clean, eco-adapted, bio-secure houses to assert absolute meat quality and density.",
    imageUrl: zeidaChickensImg
  },
  {
    id: "poultry-ducks",
    name: "Spacious-Bred Ducks",
    scientificCategory: "Anas platyrhynchos",
    description: "Hardy, active birds cultivated with high care in well-managed open facilities to allow natural behavioral loops, resulting in pristine dietary profiles.",
    imageUrl: "https://images.unsplash.com/photo-1555589050-df3fe14c40b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "livestock-goats-sheep",
    name: "Pastured Goats & Sheep",
    scientificCategory: "Capra hircus & Ovis aries",
    description: "Grazed on high-quality forage and custom organic rations around the fertile Kisarawe lands. Bred under controlled conditions for structural longevity and health.",
    imageUrl: "https://images.unsplash.com/photo-1524024973431-2ad91a7248c7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "poultry-turkeys",
    name: "Commercial Turkeys",
    scientificCategory: "Meleagris gallopavo",
    description: "Highly sought-after broad-breasted lines. Developed for consistency, meat proportion, and health, making them the ultimate preference for institutional kitchens.",
    imageUrl: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "farm-eggs",
    name: "Nutrient-Dense Eggs",
    scientificCategory: "Fresh Farm Harvest",
    description: "Collected with meticulous sanitation schedules, graded and packed. Rich in omega profiles and standard yellow yolks, ideal for commercial distributors and retailers alike.",
    imageUrl: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "poultry-game",
    name: "Specialty Poultry (Guinea Fowls, Quails, Pigeons)",
    scientificCategory: "Exclusive Breeds",
    description: "High-grade delicacy provisions, bred under precision conditions to meet boutique hotel and premium culinary demands across the Dar es Salaam region.",
    imageUrl: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?auto=format&fit=crop&q=80&w=800"
  }
];

const PRODUCTS_SW: ProductItem[] = [
  {
    id: "poultry-chickens",
    name: "Kuku wa Kiwango cha Juu",
    scientificCategory: "Gallus domesticus",
    description: "Waliolishwa kwa chakula asilia kilichojaa virutubisho vyote vya protini. Wamekuzwa kwenye mazingira safi na salama kabisa ili kuhakikisha nyama yao inakuwa bora na yenye kiwango cha juu.",
    imageUrl: zeidaChickensImg
  },
  {
    id: "poultry-ducks",
    name: "Bata Wanaofugwa kwa Nafasi",
    scientificCategory: "Anas platyrhynchos",
    description: "Ndege wastahimilivu na wepesi, wanaofugwa kwa uangalifu mkubwa kwenye mabanda ya wazi na ya kisasa ili kuwawezesha kuishi kwa uhuru na asili yao.",
    imageUrl: "https://images.unsplash.com/photo-1555589050-df3fe14c40b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "livestock-goats-sheep",
    name: "Mbuzi na Kondoo wa Malisho",
    scientificCategory: "Capra hircus & Ovis aries",
    description: "Wanalishwa malisho bora ya asili na mchanganyiko maalumu kwenye ardhi yenye rutuba ya Kisarawe. Wamefugwa chini ya uangalizi thabiti ili kuhakikisha afya njema na maisha marefu.",
    imageUrl: "https://images.unsplash.com/photo-1524024973431-2ad91a7248c7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "poultry-turkeys",
    name: "Bata Mzinga wa Biashara",
    scientificCategory: "Meleagris gallopavo",
    description: "Bata mzinga wakubwa wenye muundo mnene wa nyama unaotafutwa sana. Wamekuzwa kwa ustawi thabiti na afya ya kipekee, wakiwa chaguo bora kwa hoteli na migahawa mikubwa.",
    imageUrl: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "farm-eggs",
    name: "Mayai yenye Virutubisho vya Juu",
    scientificCategory: "Mavuno Mapya ya Shambani",
    description: "Yanakusanywa kila siku kwa kuzingatia viwango vikubwa vya usafi, kisha kupangwa na kufungashwa. Yana kiwango kikubwa cha Omega na viini vya njano imara, bora kwa wasambazaji na maduka.",
    imageUrl: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "poultry-game",
    name: "Ndege Maalum (Kanga, Kware, na Njiwa)",
    scientificCategory: "Mifugo Maalum",
    description: "Nyama ya kipekee ya kifahari, inayozalishwa kwa mifumo ya usahihi ili kukidhi mahitaji ya hoteli za kitalii na wapishi mashuhuri jijini Dar es Salaam.",
    imageUrl: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?auto=format&fit=crop&q=80&w=800"
  }
];

const INSIGHTS_EN: InsightBlock[] = [
  {
    id: "insight-1",
    number: "01",
    title: "Organic Feed Formulation",
    subtitle: "The Science of Biological Vitality",
    content: "At ZEIDA, we do not outsource nutrition. We grow our own maize, vegetables, and select crops on-site. By formulating our feed organically, we guarantee that our chickens and livestock ingest precise amino acid structures without chemical interventions. This rigorous approach optimizes cell growth naturally and results in healthier, leaner, and safer products from our farm to your table."
  },
  {
    id: "insight-2",
    number: "02",
    title: "Integrated Value Chain",
    subtitle: "A Closed-Loop Agricultural Philosophy",
    content: "Modern trading requires continuous reliability. Our system connects every phase: crop cultivation, feed production, controlled livestock breeding, and managed retail-ready packaging. By monitoring each touchpoint, we completely eliminate supply-chain gaps and minimize operational losses, assuring institutional partners constant year-round availability."
  },
  {
    id: "insight-3",
    number: "03",
    title: "Controlled Sustainable Farming",
    subtitle: "Ecosystem Balance in Coastal Tanzania",
    content: "Dar es Salaam's climate requires deep respect for resources. Our Kisarawe II facilities utilize advanced pasture rotations, natural bio-composting, and eco-designed poultry shelters. This controlled environment safeguards our herds against environmental stress while strictly preserving the surrounding water tables and indigenous coastal vegetation."
  }
];

const INSIGHTS_SW: InsightBlock[] = [
  {
    id: "insight-1",
    number: "01",
    title: "Uundaji wa Chakula Asili",
    subtitle: "Sayansi ya Ustawi wa Kibiolojia",
    content: "Hapa ZEIDA, hatununui chakula cha mifugo kutoka nje. Tunalima mahindi yetu wenyewe, mboga mboga, na mazao maalumu kwenye shamba letu. Kwa kuandaa lishe hii asilia wenyewe, tunahakikisha kuku na mifugo yetu wanapata mchanganyiko sahihi vya virutubisho na protini bila kemikali yoyote ya viwandani. Hii inasaidia ukuaji bora wa asili na kutoa bidhaa zenye afya na usalama zaidi."
  },
  {
    id: "insight-2",
    number: "02",
    title: "Mlolongo Thabiti wa Thamani",
    subtitle: "Falsafa ya Kilimo Kilichokamilika",
    content: "Biashara ya kisasa inahitaji ugavi unaoaminika bila kukatika. Mfumo wetu unaunganisha kila hatua: ukulima wa mazao, uzalishaji wa vyakula, ufugaji makini wa mifugo, na ufungashaji salama kwa ajili ya soko. Kwa kusimamia kila hatua, tunaondoa kabisa mapengo ya usambazaji na kupunguza hasara za kiutendaji, tukihakikishia washirika wetu upatikanaji wa bidhaa mwaka mzima."
  },
  {
    id: "insight-3",
    number: "03",
    title: "Kilimo Endelevu Kilichodhibitiwa",
    subtitle: "Uhifadhi wa Mazingira ya Pwani nchini Tanzania",
    content: "Hali ya chewa ya Dar es Salaam inahitaji heshima kubwa kwa rasilimali. Miundombinu yetu ya Kisarawe II inatumia mzunguko wa malisho, mbolea za asili (compost), na mabanda yenye muundo unaohifadhi mazingira. Usalama huu unalinda mifugo yetu dhidi ya changamoto za hali ya hewa huku ukihifadhi vyanzo vya maji vya chini ya ardhi na uoto wa asili wa pwani."
  }
];

// ==========================================
// CUSTOM HAND-DRAWN VECTOR ANIMAL ILLUSTRATIONS
// ==========================================

const ChickenSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M48 22 C48 18, 52 16, 54 18 C56 16, 60 17, 61 20 C63 18, 67 19, 66 23 C68 24, 69 27, 66 29" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M46 36 C48 30, 56 25, 62 29" />
    <path d="M62 29 L67 31 L62 33 Z" fill="#C4A66B" stroke="#C4A66B" />
    <circle cx="56" cy="30" r="1.5" fill="currentColor" />
    <path d="M46 36 C42 45, 25 45, 22 55 C20 62, 25 72, 35 75 C50 80, 65 78, 72 68 C78 60, 75 48, 62 42 C54 38, 48 40, 46 36 Z" fill="#FAF8F5" />
    <path d="M38 52 C45 48, 58 50, 60 60 C61 67, 50 71, 40 68 C35 65, 34 56, 38 52 Z" strokeWidth="1" />
    <path d="M22 55 C16 45, 20 35, 26 30 C24 38, 26 48, 22 55 Z" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M19 58 C12 50, 15 42, 21 38 C19 45, 21 52, 19 58 Z" />
    <path d="M42 74 L42 85 M42 85 L38 88 M42 85 L46 88" />
    <path d="M52 75 L52 85 M52 85 L48 88 M52 85 L56 88" />
    <path d="M58 35 C58 39, 61 41, 61 37 Z" fill="#C4A66B" stroke="#C4A66B" />
  </svg>
);

const DuckSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M35 30 C38 22, 48 22, 52 28 C54 32, 52 38, 45 42" />
    <path d="M52 28 C56 28, 62 30, 65 32 L51 36 Z" fill="#C4A66B" stroke="#C4A66B" />
    <circle cx="44" cy="28" r="1.5" fill="currentColor" />
    <path d="M35 42 C28 42, 18 45, 15 54 C12 63, 20 72, 35 72 C55 72, 70 68, 78 58 C84 50, 80 44, 70 44 C55 44, 45 42, 35 42 Z" fill="#FAF8F5" />
    <path d="M32 50 C42 48, 58 50, 62 58 C64 63, 56 66, 42 66 C30 66, 28 58, 32 50 Z" strokeWidth="1" />
    <path d="M78 58 C84 52, 85 45, 82 42 C81 48, 76 54, 78 58 Z" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M20 78 C30 80, 50 80, 80 78" stroke="#C4A66B" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M30 82 C45 83, 55 83, 70 82" stroke="#C4A66B" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

const MilkSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M40 25 L60 25 L60 30 C55 35, 62 42, 62 48 L62 78 C62 82, 58 84, 50 84 C42 84, 38 82, 38 78 L38 48 C38 42, 45 35, 40 30 Z" fill="#FAF8F5" />
    <rect x="42" y="18" width="16" height="7" rx="2" fill="#C4A66B" stroke="#C4A66B" />
    <rect x="42" y="48" width="16" height="20" rx="1" strokeWidth="1" />
    <path d="M50 53 C50 53, 47 57, 50 59 C53 57, 50 53, 50 53 Z" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M62 65 C68 62, 74 65, 76 72 C70 74, 64 71, 62 65 Z" fill="#1A3D2B" stroke="#1A3D2B" opacity="0.8" />
    <path d="M62 65 L76 72" stroke="#FAF8F5" strokeWidth="1" />
  </svg>
);

const EggsSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M25 55 C22 68, 30 78, 50 78 C70 78, 78 68, 75 55" fill="#FAF8F5" />
    <path d="M20 52 L80 52 C82 52, 82 55, 80 55 L20 55 C18 55, 18 52, 20 52 Z" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M35 55 C38 65, 42 72, 50 72 C58 72, 62 65, 65 55" strokeWidth="1" />
    <path d="M28 62 C40 65, 60 65, 72 62" strokeWidth="1" />
    <path d="M30 52 C30 40, 42 40, 42 52 Z" fill="#FAF8F5" />
    <path d="M42 52 C42 36, 58 36, 58 52 Z" fill="#FAF8F5" />
    <path d="M58 52 C58 42, 70 42, 70 52 Z" fill="#FAF8F5" />
    <path d="M72 46 C76 43, 82 46, 84 50 C78 51, 74 49, 72 46 Z" fill="#1A3D2B" stroke="#1A3D2B" />
  </svg>
);

const RabbitSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M42 32 C40 18, 45 12, 47 12 C49 12, 50 20, 46 32 Z" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M49 34 C48 22, 54 15, 56 15 C58 15, 57 24, 53 34 Z" fill="#FAF8F5" />
    <path d="M35 42 C38 35, 48 34, 52 42 C54 45, 52 50, 45 52 L35 48 Z" />
    <circle cx="42" cy="41" r="1.5" fill="currentColor" />
    <path d="M35 48 C25 48, 18 55, 18 64 C18 74, 28 78, 42 78 C58 78, 70 74, 72 64 C74 56, 68 48, 52 48 C45 48, 40 48, 35 48 Z" fill="#FAF8F5" />
    <path d="M36 74 C36 78, 40 78, 40 74 L38 65" />
    <path d="M60 74 C60 78, 66 78, 66 74" />
    <circle cx="16" cy="62" r="5" fill="#C4A66B" stroke="#C4A66B" />
  </svg>
);

const GoatSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M42 32 C38 20, 26 18, 22 22 C26 26, 36 28, 40 34" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M49 32 C51 20, 60 16, 66 18 C64 24, 56 26, 52 34" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M35 38 C28 38, 24 44, 25 46" />
    <path d="M56 38 C63 38, 67 44, 66 46" />
    <path d="M38 35 L53 35 L48 58 L43 58 Z" fill="#FAF8F5" />
    <circle cx="41" cy="40" r="1.5" fill="currentColor" />
    <circle cx="50" cy="40" r="1.5" fill="currentColor" />
    <path d="M43 58 L45 68 L48 58 Z" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M38 35 C30 35, 25 40, 22 48 C18 56, 20 72, 35 76 C55 80, 70 78, 74 68 C78 58, 72 45, 53 35" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

const SheepSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 40 C22 40, 20 50, 25 56 C20 62, 22 72, 32 72 C35 78, 45 80, 52 76 C58 80, 68 78, 72 72 C78 72, 80 62, 75 56 C80 50, 78 40, 70 40 C68 32, 58 30, 52 34 C45 30, 35 32, 30 40 Z" fill="#FAF8F5" />
    <path d="M68 46 C72 44, 78 46, 78 52 C78 58, 72 60, 66 56 Z" fill="#FAF8F5" />
    <circle cx="72" cy="50" r="1.5" fill="currentColor" />
    <path d="M68 46 C66 40, 62 42, 64 48" />
    <path d="M38 74 L38 84 M38 84 L35 85" />
    <path d="M46 76 L46 84 M46 84 L43 85" />
    <path d="M58 76 L58 84 M58 84 L55 85" />
    <path d="M66 74 L66 84 M66 84 L63 85" />
  </svg>
);

const GeeseSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M25 68 C22 58, 30 45, 38 42 C45 40, 48 30, 46 22 C45 18, 48 14, 52 14 C56 14, 58 18, 56 25 C54 35, 48 45, 52 52" />
    <path d="M52 14 C55 12, 62 10, 64 12 L51 18 Z" fill="#C4A66B" stroke="#C4A66B" />
    <circle cx="49" cy="16" r="1" fill="currentColor" />
    <path d="M25 68 C15 68, 10 74, 15 82 C22 88, 42 88, 65 84 C80 80, 85 70, 78 62 C72 56, 60 52, 52 52 C38 52, 30 60, 25 68 Z" fill="#FAF8F5" />
    <path d="M32 60 C42 58, 62 60, 68 70 C70 75, 60 78, 45 78 C35 78, 30 70, 32 60 Z" strokeWidth="1" />
    <path d="M20 88 C35 90, 65 90, 80 88" stroke="#C4A66B" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

const TurkeySVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 68 C12 60, 10 40, 25 25 C40 10, 60 12, 68 22 C72 28, 74 38, 70 48" stroke="#C4A66B" strokeWidth="1" fill="#FAF8F5" />
    <path d="M20 45 C30 30, 50 28, 60 40" stroke="#C4A66B" strokeWidth="0.8" />
    <path d="M30 62 C25 68, 28 78, 40 82 C55 84, 70 80, 74 68 C78 58, 72 48, 55 48 C45 48, 35 55, 30 62 Z" fill="#FAF8F5" />
    <path d="M55 48 C58 42, 62 38, 58 30 C56 26, 58 22, 62 22 C66 22, 68 26, 65 32 C62 38, 58 42, 58 48" />
    <path d="M62 22 L66 24 L61 26 Z" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M64 21 C66 25, 68 28, 66 32" stroke="#C4A66B" strokeWidth="2" fill="none" />
    <circle cx="59" cy="24" r="1" fill="currentColor" />
    <path d="M38 65 C45 62, 58 64, 62 72 C64 76, 55 79, 45 78 C38 76, 36 70, 38 65 Z" strokeWidth="1" />
  </svg>
);

const GuineafowlSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M58 26 C58 18, 62 14, 63 14 C64 14, 64 20, 60 28 Z" fill="#C4A66B" stroke="#C4A66B" />
    <path d="M50 36 C52 30, 58 25, 60 28" />
    <path d="M60 28 L65 30 L60 32 Z" fill="#C4A66B" stroke="#C4A66B" />
    <circle cx="55" cy="29" r="1" fill="currentColor" />
    <path d="M50 36 C44 44, 25 42, 20 54 C15 64, 22 75, 38 78 C58 80, 72 74, 75 62 C78 52, 70 42, 58 40 C54 38, 52 38, 50 36 Z" fill="#FAF8F5" />
    <path d="M35 55 C42 52, 58 55, 60 64 C61 70, 50 72, 40 70 C34 68, 32 60, 35 55 Z" strokeWidth="1" />
    <circle cx="30" cy="58" r="0.8" fill="#C4A66B" stroke="none" />
    <circle cx="34" cy="64" r="0.8" fill="#C4A66B" stroke="none" />
    <circle cx="42" cy="60" r="0.8" fill="#C4A66B" stroke="none" />
    <circle cx="46" cy="66" r="0.8" fill="#C4A66B" stroke="none" />
    <circle cx="54" cy="58" r="0.8" fill="#C4A66B" stroke="none" />
    <circle cx="28" cy="68" r="0.8" fill="#C4A66B" stroke="none" />
    <circle cx="48" cy="72" r="0.8" fill="#C4A66B" stroke="none" />
    <path d="M40 78 L40 86" />
    <path d="M48 78 L48 86" />
  </svg>
);

const AnimalIllustration = ({ type, className = "w-24 h-24" }: { type: string; className?: string }) => {
  switch (type) {
    case "chicken":
      return <div className={className}><ChickenSVG /></div>;
    case "duck":
      return <div className={className}><DuckSVG /></div>;
    case "milk":
      return <div className={className}><MilkSVG /></div>;
    case "eggs":
      return <div className={className}><EggsSVG /></div>;
    case "rabbit":
      return <div className={className}><RabbitSVG /></div>;
    case "goat":
      return <div className={className}><GoatSVG /></div>;
    case "sheep":
      return <div className={className}><SheepSVG /></div>;
    case "geese":
      return <div className={className}><GeeseSVG /></div>;
    case "turkey":
      return <div className={className}><TurkeySVG /></div>;
    case "guineafowl":
      return <div className={className}><GuineafowlSVG /></div>;
    default:
      return null;
  }
};

export interface PricingProduct {
  id: string;
  name: { en: string; sw: string };
  category: { en: string; sw: string; key: "poultry" | "dairy-eggs" | "livestock" | "specialty" };
  unit: { en: string; sw: string };
  price: number;
  description: { en: string; sw: string };
  scientificCategory?: string;
  imageUrl: string;
  nutrients?: { en: string; sw: string };
  benefits?: { en: string; sw: string };
  illustrationType?: string;
}

export const PRICING_PRODUCTS: PricingProduct[] = [
  {
    id: "kuku-raw",
    name: { en: "Kuku Raw (Cleaned)", sw: "Kuku Raw (Aliyesafishwa)" },
    category: { en: "Chicken & Duck", sw: "Kuku & Bata", key: "poultry" },
    unit: { en: "KG", sw: "KG" },
    price: 17000,
    scientificCategory: "Gallus domesticus (Fresh Cut)",
    description: {
      en: "Freshly prepared, cleaned, and vacuum-sealed raw chicken with perfect temperature-controlled delivery.",
      sw: "Kuku mbichi aliyetayarishwa, kusafishwa na kufungashwa kisasa tayari kwa mapishi yako ya jikoni."
    },
    imageUrl: zeidaChickensImg,
    illustrationType: "chicken",
    nutrients: {
      en: "Rich in high-quality protein, niacin, selenium, and essential amino acids for fast muscle recovery and metabolic rate support.",
      sw: "Zina kiwango kikubwa cha protini bora, seleni, na asidi muhimu za amino kwa ajili ya kujenga misuli na kuongeza nguvu."
    },
    benefits: {
      en: "100% bio-secured processing environment. Standard vacuum packing preserves absolute moisture, taste, and premium freshness.",
      sw: "Mazingira yenye udhibiti mkali wa kibiolojia. Ufungashaji bora wa kisasa unazuia unyevu usipotee na kuhifadhi ladha asili."
    }
  },
  {
    id: "kuku-hai",
    name: { en: "Kuku Hai (Live Breed)", sw: "Kuku Hai (Mfugaji asili)" },
    category: { en: "Chicken & Duck", sw: "Kuku & Bata", key: "poultry" },
    unit: { en: "KG", sw: "KG" },
    price: 13000,
    scientificCategory: "Gallus domesticus (Live Breed)",
    description: {
      en: "Healthy, active live chicken bred with organically formulated on-site feed and superior biosecurity.",
      sw: "Kuku mzima aliye hai, mwenye afya na aliyelishwa chakula kiasili cha shambani kisicho na kemikali."
    },
    imageUrl: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800",
    illustrationType: "chicken",
    nutrients: {
      en: "High in lean protein, vitamin B6, vital minerals, phosphorus, and zinc for supreme bone and immunological strength.",
      sw: "Kiwango kikubwa cha protini, vitamini B6, madini ya fosforasi, na zinki kwa ajili ya kuimarisha mifupa na kinga ya mwili."
    },
    benefits: {
      en: "Bred without artificial growth hormones. Active flocks benefiting from spacious layouts and raw organic maize feed formulas.",
      sw: "Wamefugwa bila homoni za viwandani. Kuku wako huru na wanalishwa mchanganyiko wa mahindi asilia yenye virutubisho."
    }
  },
  {
    id: "bata-raw",
    name: { en: "Bata Raw (Cleaned)", sw: "Bata Raw (Aliyesafishwa)" },
    category: { en: "Chicken & Duck", sw: "Kuku & Bata", key: "poultry" },
    unit: { en: "KG", sw: "KG" },
    price: 17000,
    scientificCategory: "Anas platyrhynchos (Fresh Cut)",
    description: {
      en: "Cleaned and packaged premium duck meat, rich in natural flavor and healthy nutrition profile.",
      sw: "Nyama tamu ya bata iliyosafishwa na tayari kwa ajili ya mapishi ya kifahari ya familia."
    },
    imageUrl: "https://images.unsplash.com/photo-1484755560695-a4c7402a50e5?auto=format&fit=crop&q=80&w=800",
    illustrationType: "duck",
    nutrients: {
      en: "Outstanding source of iron, copper, vitamin B12, and healthy monounsaturated fats supporting cellular repair and red cell synthesis.",
      sw: "Chanzo imara cha madini ya chuma, shaba, vitamini B12, na mafuta yenye afya kwa seli na uzalishaji wa damu."
    },
    benefits: {
      en: "Naturally tender, rich gamey flavor profiles. Hand-cleaned under clinical conditions, and instantly sealed for delivery.",
      sw: "Nyama laini yenye ladha asilia ya kupendeza sana. Imesafishwa kwa weledi wa hali ya juu na kufungwa tayari kwa usafirishaji."
    }
  },
  {
    id: "bata-hai",
    name: { en: "Bata Hai (Live Breed)", sw: "Bata Hai (Mfugaji asili)" },
    category: { en: "Chicken & Duck", sw: "Kuku & Bata", key: "poultry" },
    unit: { en: "KG", sw: "KG" },
    price: 13000,
    scientificCategory: "Anas platyrhynchos (Live Breed)",
    description: {
      en: "Fully grown, energetic live ducks bred in spacious, eco-adapted open coastal environments.",
      sw: "Bata hai mwenye afya, aliyekuzwa kwa uhuru kwenye mazingira safi ya pwani ya Kisarawe."
    },
    imageUrl: "https://images.unsplash.com/photo-1555589050-df3fe14c40b3?auto=format&fit=crop&q=80&w=800",
    illustrationType: "duck",
    nutrients: {
      en: "Dense natural protein, rich essential amino acids, and high content of key B vitamins for cellular vitality.",
      sw: "Protini nyingi ya asili, asidi muhimu za amino, na kiasi kikubwa cha vitamini B kwa ajili ya nguvu ya mwili."
    },
    benefits: {
      en: "Active, free-foraging ducks. Sourced from coastal farms with strict sanitary and wellness checks.",
      sw: "Bata wachangamfu wanaoruhusiwa kutembea kwa uhuru. Wanatoka kwenye mazingira safi ya pwani yenye ukaguzi wa daktari."
    }
  },
  {
    id: "dairy-mtindi-1l",
    name: { en: "Maziwa Mtindi (1Lt)", sw: "Maziwa Mtindi (Ammy 1L)" },
    category: { en: "Maziwa, Mayai & Sungura", sw: "Maziwa, Mayai & Sungura", key: "dairy-eggs" },
    unit: { en: "Litre", sw: "Lita" },
    price: 3500,
    scientificCategory: "Ammy Dairy Probiotics",
    description: {
      en: "Thick, rich fermented fresh cultured milk with high probiotic value, prepared with natural cultures.",
      sw: "Maziwa ya mtindi mazito na matamu yenye chachu ya asili, yaliyojaa viini lishe bora."
    },
    imageUrl: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800",
    illustrationType: "milk",
    nutrients: {
      en: "Packed with active probiotic strains, high calcium, vitamin D, and easily digestible whey/casein proteins.",
      sw: "Imejaa vimelea rafiki vya probiotics kwa afya ya tumbo, kalsiamu ya kutosha, vitamini D, na protini rahisi kusaga."
    },
    benefits: {
      en: "Fermented from grass-fed cows. Prepared under hygienic processing cycles. Great for boosting digestion and bone health.",
      sw: "Imetengenezwa kwa maziwa mapya kutoka kwa ng'ombe wa malisho asili. Inaimarisha mmeng'enyo wa chakula na mifupa yako."
    }
  },
  {
    id: "dairy-mtindi-5l",
    name: { en: "Maziwa Mtindi (5Lt)", sw: "Maziwa Mtindi (Ammy 5L)" },
    category: { en: "Maziwa, Mayai & Sungura", sw: "Maziwa, Mayai & Sungura", key: "dairy-eggs" },
    unit: { en: "5L Tub", sw: "Kopo la 5L" },
    price: 17000,
    scientificCategory: "Ammy Dairy Bulk Pack",
    description: {
      en: "Bulk institutional tub of our signature fermented Ammy dairy milk, perfect for restaurants and hoteliers.",
      sw: "Mtindi mzito kwa ujazo mkubwa wa lita tano, unaofaa kwa hoteli au matumizi ya familia kubwa."
    },
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800",
    illustrationType: "milk",
    nutrients: {
      en: "Rich in active probiotic cultures, bone-strengthening minerals, high calcium, and key fat-soluble vitamins.",
      sw: "Maziwa yaliyojaa chachu ya probiotic kwa ajili ya usagaji chakula, madini ya kuimarisha mifupa, na vitamini asilia."
    },
    benefits: {
      en: "Premium wholesale bulk value pack. Hermetically sealed tub ensures zero exposure to external bacteria.",
      sw: "Ufungashaji thabiti wa ujazo mkubwa kwa bei nafuu sana. Kopo limefungwa kisasa ili kuzuia vimelea vyovyote vya nje."
    }
  },
  {
    id: "eggs-kienyeji",
    name: { en: "Mayai ya Kienyeji", sw: "Mayai ya Kienyeji" },
    category: { en: "Maziwa, Mayai & Sungura", sw: "Maziwa, Mayai & Sungura", key: "dairy-eggs" },
    unit: { en: "Tray", sw: "Trei ya 30" },
    price: 19000,
    scientificCategory: "Organic Local Range Eggs",
    description: {
      en: "Premium, thick-shelled organic free-range local chicken eggs with rich golden yolks and key proteins.",
      sw: "Mayai bora ya kuku wa kienyeji yaliyokusanywa ya kiasili, yenye viini vya njano vya dhahabu."
    },
    imageUrl: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&q=80&w=800",
    illustrationType: "eggs",
    nutrients: {
      en: "Very high in organic Omega-3 fatty acids, lutein for eye wellness, vitamin A, D, E, and premium clean proteins.",
      sw: "Kiwango kikubwa cha asidi ya Omega-3, lutein kwa afya ya macho, vitamini A, D, E, na protini safi asilia."
    },
    benefits: {
      en: "Laid by organically-fed, free-ranging local breeds. Rich golden yolks with distinctive natural, authentic flavor.",
      sw: "Yatokanayo na kuku wa kienyeji wanaofugwa kwa uhuru shambani. Viini vyake ni vya njano ya dhahabu na ladha ni tamu sana."
    }
  },
  {
    id: "eggs-kisasa",
    name: { en: "Mayai ya Kisasa", sw: "Mayai ya Kisasa" },
    category: { en: "Maziwa, Mayai & Sungura", sw: "Maziwa, Mayai & Sungura", key: "dairy-eggs" },
    unit: { en: "Tray", sw: "Trei ya 30" },
    price: 8500,
    scientificCategory: "Standard Table Grade Eggs",
    description: {
      en: "Fresh and nutritious farm-graded table eggs, collected daily under absolute sanitary protocols.",
      sw: "Mayai safi ya kisasa yaliyokusanywa kwa usafi wa hali ya juu na kupangwa kwa ukubwa kila siku."
    },
    imageUrl: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800",
    illustrationType: "eggs",
    nutrients: {
      en: "Excellent accessible source of high-quality proteins, vitamin B12, choline, and essential amino acids.",
      sw: "Chanzo bora na cha bei nafuu cha protini zenye kiwango cha juu, vitamini B12, na asidi muhimu za amino."
    },
    benefits: {
      en: "Highly fresh, farm-graded, and hand-inspected. Packaged in sanitized trays with prompt daily delivery networks.",
      sw: "Safi sana, yaliyochaguliwa kwa mikono shambani. Yamefungashwa kwenye trei safi na tayari kuwafikia wateja kila siku."
    }
  },
  {
    id: "sungura",
    name: { en: "Rabbit / Sungura", sw: "Sungura" },
    category: { en: "Maziwa, Mayai & Sungura", sw: "Maziwa, Mayai & Sungura", key: "dairy-eggs" },
    unit: { en: "Rabbit", sw: "Sungura" },
    price: 30000,
    scientificCategory: "Oryctolagus cuniculus (Healthy Breed)",
    description: {
      en: "Premium breed white and brown-and-white rabbits model-reared for low-fat meat demand.",
      sw: "Sungura hai au aliyetayarishwa kwa nyama yenye kiwango cha chini sana cha mafuta na afya thabiti."
    },
    imageUrl: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=800",
    illustrationType: "rabbit",
    nutrients: {
      en: "Extremely high protein content with lowest fat/calories of all red meats, high potassium, iron, and phosphorus.",
      sw: "Kiwango cha juu sana cha protini na mafuta kidogo mno, madini ya potasiamu, chuma, na fosforasi kwa afya."
    },
    benefits: {
      en: "Sustainably reared and fed strictly with fresh farm vegetation and premium organic grass. Lean, delicate gourmet taste.",
      sw: "Wamefugwa kwa njia salama na kulishwa majani asilia ya shambani. Nyama yao ni laini sana, tamu na ina mafuta kidogo."
    }
  },
  {
    id: "mbuzi",
    name: { en: "Mbuzi Meat (Goat)", sw: "Mbuzi (Nyama ya Kilo)" },
    category: { en: "Mbuzi & Kondoo", sw: "Mbuzi & Kondoo", key: "livestock" },
    unit: { en: "KG", sw: "KG" },
    price: 10000,
    scientificCategory: "Capra hircus (Kisarawe)",
    description: {
      en: "Aromatic Kisarawe pasture-grazed goat meat, highly tender and cut precisely on order.",
      sw: "Nyama ya mbuzi laini na yenye ladha nzuri ya malisho ya Kisarawe, iliyokatwa kwa usafi wa hali ya juu."
    },
    imageUrl: "https://images.unsplash.com/photo-1524024973431-2ad91a7248c7?auto=format&fit=crop&q=80&w=800",
    illustrationType: "goat",
    nutrients: {
      en: "Highly lean red meat rich in dietary iron, potassium, vitamins B6 and B12 with exceptionally low saturated fat ratio.",
      sw: "Nyama nyekundu isiyo na mafuta mengi, tajiri wa madini ya chuma, potasiamu, vitamini B6 na B12 kwa afya ya damu."
    },
    benefits: {
      en: "Coastal pasture-grazed goat stock. Hand-slaughtered and precisely cut based on order criteria under supreme sanitation.",
      sw: "Mbuzi wa asili waliokuzwa kwenye malisho ya Kisarawe. Wanachinjwa na kukatwa safi mara baada ya agizo kwa kufuata viwango vyote vya usafi."
    }
  },
  {
    id: "kondoo",
    name: { en: "Kondoo Meat (Sheep)", sw: "Kondoo (Nyama ya Kilo)" },
    category: { en: "Mbuzi & Kondoo", sw: "Mbuzi & Kondoo", key: "livestock" },
    unit: { en: "KG", sw: "KG" },
    price: 10000,
    scientificCategory: "Ovis aries (Coastal)",
    description: {
      en: "Coastal pastured grass-fed sheep meat, rich in omega profiles with excellent fat-to-lean ratios.",
      sw: "Nyama tamu ya kondoo aliyelishwa majani mabichi ya pwani yenye kiwango bora cha mafuta ya asili."
    },
    imageUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=800",
    illustrationType: "sheep",
    nutrients: {
      en: "Packed with energy, vital zinc, selenium, muscle-building amino acids, and essential fatty acids like CLA.",
      sw: "Imejaa nishati mwilini, madini ya zinki, seleni, na asidi muhimu za mafuta (CLA) kwa afya njema ya misuli."
    },
    benefits: {
      en: "100% grass-fed in lush coastal locations. Tender, deeply flavorful meat processed immediately after selection.",
      sw: "Waliolishwa kwa majani mabichi ya asili ya ukanda wa pwani. Nyama yao ni laini sana na yenye ladha nzuri asilia."
    }
  },
  {
    id: "bata-bukini",
    name: { en: "Bata Bukini (Geese)", sw: "Bata Bukini" },
    category: { en: "Bata Bukini, Mzinga & Kanga", sw: "Bata Bukini, Mzinga & Kanga", key: "specialty" },
    unit: { en: "Piece", sw: "Bata" },
    price: 250000,
    scientificCategory: "Anser anser (Royal Breed)",
    description: {
      en: "Prestigious, majestic geese raised under strict bio-security guidelines, highly valued for specialty cooking and organic farm patrol.",
      sw: "Bata bukini wakubwa wenye hadhi ya juu, waliofugwa kwa uangalifu maalum kwa ajili ya sikukuu au sherehe za kifahari."
    },
    imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
    illustrationType: "geese",
    nutrients: {
      en: "Rich in calorie-dense healthy lipids, deep iron, phosphorus, copper, and highly dense clean animal protein structures.",
      sw: "Nyama yenye virutubisho vyote vya protini na mafuta asilia, madini ya chuma, fosforasi, na shaba."
    },
    benefits: {
      en: "Majestic, high-security farm breeds. Free to forage on grass pastures under strict health monitoring protocols.",
      sw: "Ndege wa kifahari wenye afya thabiti. Wamekuzwa kwa uhuru kwenye malisho ya majani kwa uangalizi maalum."
    }
  },
  {
    id: "bata-mzinga",
    name: { en: "Bata Mzinga (Turkey)", sw: "Bata Mzinga" },
    category: { en: "Bata Bukini, Mzinga & Kanga", sw: "Bata Bukini, Mzinga & Kanga", key: "specialty" },
    unit: { en: "Piece", sw: "Kichwa mmoja" },
    price: 150000,
    scientificCategory: "Meleagris gallopavo (Broad Breasted)",
    description: {
      en: "Broad-breasted premium turkeys raised strictly on organic farm-grown meal for unmatched meat density.",
      sw: "Bata mzinga wakubwa waliolishwa chakula bora cha shambani ili kuhakikisha uzito na nyama nzuri inayoota."
    },
    imageUrl: "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?auto=format&fit=crop&q=80&w=800",
    illustrationType: "turkey",
    nutrients: {
      en: "Lean protein, highly packed with selenium, tryptophan (supporting sleep/mood loops), vitamin B3, and B6.",
      sw: "Protini safi yenye mafuta kidogo sana, imejaa madini ya seleni, tryptophan kwa afya ya akili, vitamini B3, na B6."
    },
    benefits: {
      en: "Raised purely on our own custom grain rations. Excellent muscle-to-fat proportions perfect for bulk festive family feasts.",
      sw: "Wamekuzwa kwa chakula cha shambani kilichosindikwa kiasili. Uwiano bora wa nyama na mafuta unaofaa kwa karamu za familia."
    }
  },
  {
    id: "kanga",
    name: { en: "Kanga (Guineafowl)", sw: "Kanga" },
    category: { en: "Bata Bukini, Mzinga & Kanga", sw: "Bata Bukini, Mzinga & Kanga", key: "specialty" },
    unit: { en: "Piece", sw: "Kichwa mmoja" },
    price: 30000,
    scientificCategory: "Numida meleagris (Native delicacy)",
    description: {
      en: "Exotic specialty poultry with lean, gamey flavor-rich meat, bred cleanly under strict forest-pasture mimics.",
      sw: "Kanga wa shambani wenye nyama tamu ya kiasili yenye mafuta kidogo na ladha ya kipekee asilia."
    },
    imageUrl: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=800",
    illustrationType: "guineafowl",
    nutrients: {
      en: "Lean low-fat content game meat, exceptionally high in iron, calcium, and vitamin B6.",
      sw: "Kitoweo cha kiasili chenye mafuta kidogo na kolesteroli ya chini, tajiri wa madini ya chuma, kalsiamu, na vitamini B6."
    },
    benefits: {
      en: "Raised in structured environments mimicking wild forests. Strong immune profiles, authentic rich, traditional game taste.",
      sw: "Wamefugwa katika mazingira ya asili yanayoiga misitu yetu. Wana kinga dhabiti ya afya na ladha halisi ya kiasili."
    }
  }
];

const T = {
  en: {
    // Nav links
    navAbout: "About us",
    navWhatWeDo: "Our Products",
    navKnowledge: "Knowledge & Insight",
    navInquire: "Inquire",
    navAboutFull: "About us",
    navSpecsFull: "Our Products",
    navEditorialFull: "Knowledge & Insight",
    navContactFull: "Inquire",

    // Hero section
    heroTag: "DAR ES SALAAM, TANZANIA",
    heroSubtitle: "WE HAVE THE HONOR OF CULTIVATING SOME OF THE BEST LIVESTOCK & ORGANIC FEED IN TANZANIA",
    heroHeading: "A Modern Approach to Livestock Farming",
    heroDiscoverBtn: "DISCOVER THE FARM",
    heroPricingBtn: "REQUEST PRICING",
    heroIndicator: "SCROLL TO READ",

    // Hero stats columns
    heroStat1Title: "DURABILITY FOCUS",
    heroStat1Desc: "100% Organically produced animal feed grown ourselves.",
    heroStat2Title: "CORE GEOGRAPHY",
    heroStat2Desc: "Located in the high fertility lands of Kisarawe II, Kigamboni.",
    heroStat3Title: "SUPPLY CONFIDENCE",
    heroStat3Desc: "Integrated value chain securing zero losses & fresh delivery.",

    // About section
    aboutIndicator: "// 01 / THE ENTERPRISE",
    aboutHeading: "Specializing in large-scale livestock farming and organic nutrition.",
    aboutP1: "ZEIDA Company Limited is a growing agricultural enterprise specializing in large-scale livestock farming and organic animal feed production. Based in Tanzania's economic heart, Dar es Salaam, we take immediate pride in cultivating our own animal feed to support the distinct nutritional curves of poultry, goats, and dairy sheep.",
    aboutQuote: "We believe that premium livestock demands immaculate feed. That is why we cultivate our own maize and fresh coastal vegetables to ensure that each herd or flock receives rich, natural nourishment.",
    aboutP2: "By taking full authority over organic farming, nutritional formulations, and high-efficiency facilities, we maintain the highest production standards. We are deeply committed to circular sustainability, operational proficiency, and constant reliability for both individual consumers and bulk buyers.",
    aboutStat1: "ORGANIC NOURISHMENT",
    aboutStat2: "ZERO OUTSOURCED FEED CHEMICALS",
    aboutStat3: "MAIN CHRONICLED FARM",

    aboutVision: "Our Vision",
    aboutVisionBody: "“To become a leading poultry and livestock enterprise in the region, recognized for quality production, reliable supply, and modern farming practices.”",
    aboutMission: "Our Mission",
    aboutMissionBody: "We are committed to producing high-quality livestock and farm products through sustainable farming practices, efficient operations, and an effective distribution network that serves diverse markets.",

    // What We Do section
    wwdIndicator: "// 02 / OUR PRODUCTION INDEX",
    wwdHeading: "An Extensive Range of Premium Farm Provisions",
    wwdSubtext: "Every single output is handled with pristine value-chain authority to allow zero compromise on taste or freshness.",
    wwdCategory: "Category",
    wwdSystem: "SYSTEM: CONTROLLED BREEDING",
    wwdProvender: "ORGANIC PROVENDER",

    cowTag: "FEATURING CLASSIC CHARM 🐄",
    cowHeading: "Unwavering Standard of Pure Dairy & Livestock Management",
    cowBody: "Our livestock benefit from spacious Coastal pasture grazing and custom-composted organic feeds. From physical welfare monitoring to sterile housing standards, we treat agriculture as both an ancient trust and a modern science.",
    cowBtn: "ACQUIRE LIVE STOCK",

    // Insights section
    insIndicator: "// 03 / EDITORIAL & STUDY",
    insHeading: "Knowledge Sharing: Demystifying Modern Tanzanian Agriculture",
    insSubtext: "We operate under the philosophy that transparency builds client trust. Below, our agronomists and livestock handlers highlight the core mechanical frameworks that set ZEIDA's operations strictly apart.",
    insStandard: "ORGANIC REASSURANCE STANDARD",
    insStandardBody: "All chickens and livestock are raised on a high proportion of organically produced feed, much of which we cultivate ourselves, allowing us to maintain strict quality control and ensure optimal nutrition.",
    insLocation: "REGISTERED FARM LOCATION",

    // Inquiry section
    inqIndicator: "// 04 / INTERMEDIATION",
    inqHeading: "Initiate a Serious Supply Relationship",
    inqSubtext: "Whether you are a local household purchaser, a premium food distributor, or an agronomic export partner, ZEIDA guarantees unyielding, structured excellence.",
    inqPhone: "IMMEDIATE PHONE ACCESS",
    inqEmail: "OFFICIAL EMAIL CHANNELS",
    inqOffice: "REGISTERED TANZANIAN OFFICE",
    inqOfficeVal: "Lingato, Kisarawe II, Kigamboni, Dar es Salaam.",

    // Form
    formHeading: "Enterprise Placement Form",
    labelName: "Full Name *",
    labelCompany: "Company / Organization (Optional)",
    labelEmail: "Official Email *",
    labelPhone: "Contact Phone *",
    labelInterest: "Primary Service of Interest",
    labelMessage: "Inquiry Message / Order Terms",
    placeholderMessage: "Provide details on quantity, intended supply calendar, or specific delivery preferences in Dar es Salaam.",
    btnSubmit: "SUBMIT CONFIDENTIAL APPLICATION",
    btnSubmitting: "TRANSMITTING INQUIRY DETAILS...",
    successMsg: "Transmission successful. Your inquiry has been logged securely. We typically respond within 24 hours.",
    formArchived: "* PRIVATE CORRESPONDENCE ARCHIVED ACCORDING TO ZEIDA ENTERPRISE SECURITY STANDARDS.",

    // Footer
    footerMotto: "A Modern Approach to Livestock Farming",
    footerBio: "Managing structural livestock welfare, nutrition farming, and premium value distributions from Kisarawe pasturelands across Eastern Africa.",
    footerDirectory: "DIRECTORY",
    footerMap: "KISARAWE II MAP",
    footerMapInteract: "Interact with Map",
    footerMapBtn: "Open in Google Maps",
    subFooterMotto: "CRAFTED FOR INSTITUTIONAL TRUST & SUSTAINED VALUE",
    subFooterRights: "ZEIDA COMPANY LIMITED. ALL RIGHTS RESERVED.",
    footerCoordinatesTitle: "REGISTERED CO-ORDINATES",

    // Select options
    interestOptions: [
      { value: "Poultry Acquisition", label: "Poultry Acquisition (Chickens, Ducks, Turkeys)" },
      { value: "Goat & Sheep Purchasing", label: "Goat & Sheep Ordering" },
      { value: "Organic Feed Wholesaling", label: "Bulk Organic Feed Supplies (Maize & Veg)" },
      { value: "Fresh Farm Eggs Supply", label: "Daily Egg Provisions Arrangement" },
      { value: "Corporate Agro-Partnership", label: "Agricultural Joint & Land Venture" }
    ],

    // Chat
    chatText: "Chat with us"
  },
  sw: {
    // Nav links
    navAbout: "Kuhusu sisi",
    navWhatWeDo: "Bidhaa zetu",
    navKnowledge: "Maarifa na Maoni",
    navInquire: "Ulizia",
    navAboutFull: "Kuhusu sisi",
    navSpecsFull: "Bidhaa zetu",
    navEditorialFull: "Maarifa na Maoni",
    navContactFull: "Wasiliana nasi",

    // Hero section
    heroTag: "DAR ES SALAAM, TANZANIA",
    heroSubtitle: "TUNA HESHIMA YA KUZALISHA MIFUGO BORA NA CHAKULA ASILIA NCHINI TANZANIA",
    heroHeading: "Mbinu ya Kisasa ya Ufugaji Endelevu",
    heroDiscoverBtn: "GUNDUA SHAMBA LETU",
    heroPricingBtn: "OMBA BEI",
    heroIndicator: "TEREMKA KUSOMA",

    // Hero stats columns
    heroStat1Title: "LENGO LA UENDELEVU",
    heroStat1Desc: "Chakula cha asili cha mifugo kilichozalishwa 100% na sisi wenyewe.",
    heroStat2Title: "MAHALI TULIPO KUU",
    heroStat2Desc: "Lipo kwenye ardhi yenye rutuba ya juu ya Kisarawe II, Kigamboni.",
    heroStat3Title: "UAMINIFU WA UGAVI",
    heroStat3Desc: "Mlolongo wa thamani unamhakikishia mteja bidhaa mbichi na salama bila hasara.",

    // About section
    aboutIndicator: "// 01 / SHIRIKA LETU",
    aboutHeading: "Maalum katika ufugaji wa mifugo kwa kiwango kubwa na lishe ya asili.",
    aboutP1: "ZEIDA Company Limited ni shirika la kilimo linalokua kwa kasi nchini Tanzania, maalum katika ufugaji wa mifugo kwa kiwango kikubwa na uzalishaji wa vyakula vya mifugo ya asili. Makao yetu makuu yapo katika kitovu cha kiuchumi, Dar es Salaam, na tunajivunia kukuza chakula chetu wenyewe cha mifugo ili kusaidia mahitaji maalum ya lishe ya kuku, mbuzi, na kondoo wa maziwa.",
    aboutQuote: "Tunaamini kwamba mifugo bora inahitaji chakula kilichoandaliwa kwa usafi wa hali ya juu. Ndiyo sababu tunalima mahindi yetu wenyewe na mboga mbichi za pwani ili kuhakikisha kuwa kila kundi la wanyama linapata lishe bora ya asili.",
    aboutP2: "Kwa kuchukua udhibiti kamili vya kilimo hai, uundaji wa lishe ya kisayansi, na viwango vya usafi vya mabanda yetu, tunadumisha viwango vya juu zaidi vya uzalishaji. Tumejitolea kikamilifu kwa uendelevu wa mazingira, ufanisi wa kiutendaji, na uaminifu thabiti kwa walaji binafsi pamoja na wanunuzi wa jumla.",
    aboutStat1: "LISHE YA ASILI KABISA",
    aboutStat2: "SURA SIFURI YA KEMIKAL ZA NJE",
    aboutStat3: "SHAMBA KUU LA KISASA",

    aboutVision: "Maono Yetu",
    aboutVisionBody: "“Kuwa shirika linaloongoza kwa ufugaji wa kuku na mifugo katika ukanda huu, linalotambulika kwa uzalishaji bora, usambazaji wa kuaminika, na mbinu za kisasa za kilimo.”",
    aboutMission: "Dhumuni Letu",
    aboutMissionBody: "Tumejitolea kuzalisha mifugo na bidhaa za shambani zenye ubora wa juu kupitia mbinu endelevu za kilimo, uendeshaji wenye ufanisi wa hali ya juu, na mtandao thabiti wa usambazaji unaohudumia masoko mbalimbali.",

    // What We Do section
    wwdIndicator: "// 02 / ORODHA YETU YA UZALISHAJI",
    wwdHeading: "Aina Mbalimbali za Bidhaa Bora za Shambani",
    wwdSubtext: "Kila bidhaa inashughulikiwa kwa mifumo ya kisasa ya udhibiti ili kutoruhusu maelewano yoyote kwenye ladha, ubora au ubichi.",
    wwdCategory: "Kundi la",
    wwdSystem: "MFUMO WA UFUGI WA KISASA",
    wwdProvender: "LISHE SAFI YA ASILI",

    cowTag: "FEATURING CLASSIC CHARM 🐄",
    cowHeading: "Kiwango Thabiti cha Usimamizi wa Maziwa na Mifugo",
    cowBody: "Mifugo yetu inanufaika na malisho mapana ya Pwani na vyakula asilia vilivyoboreshwa. Kuanzia kuangalia afya ya wanyama hadi viwango vya usafi wa mabanda, tunachukulia kilimo kama amana ya kale na sayansi ya kisasa.",
    cowBtn: "NUNUA MIFUGO SASA",

    // Insights section
    insIndicator: "// 03 / MAKALA & MAARIFA",
    insHeading: "Kushiriki Maarifa: Kueleza Kilimo cha Kisasa nchini Tanzania",
    insSubtext: "Tunaendesha shughuli zetu kwa falsafa kwamba uwazi ndio msingi wa kujenga uaminifu wa wateja. Hapa chini, wataalamu wetu wa kilimo na ufugaji wanaeleza mifumo mikuu inayofanya ZEIDA kuwa ya kipekee.",
    insStandard: "KIWANGO CHA UHAKIKI WA ASILI",
    insStandardBody: "Kuku na mifugo yote hulishwa asilimia kubwa ya vyakula vya asili tunavyolima sisi wenyewe shambani, ili kutuwezesha kudhibiti kwa karibu ubora na usahihi wa lishe.",
    insLocation: "MAHALI SHAMBA LILIPOSAJILIWA",

    // Inquiry section
    inqIndicator: "// 04 / INTERMEDIATION",
    inqHeading: "Anzisha Uhusiano thabiti wa Ugavi",
    inqSubtext: "Kama wewe ni mnunuzi wa nyumbani, mtoaji huduma wa hoteli, msambazaji mkubwa, au mshirika wa kilimo, ZEIDA inakuhakikishia utendaji thabiti na wa kipekee.",
    inqPhone: "SIMU YA MAWASILIANO MOJA KWA MOJA",
    inqEmail: "BARUA PEPE RASMI",
    inqOffice: "OFISI ILIYOSAJILIWA TANZANIA",
    inqOfficeVal: "Lingato, Kisarawe II, Kigamboni, Dar es Salaam.",

    // Form
    formHeading: "Fomu ya Mawasiliano ya Kibiashara",
    labelName: "Jina Kamili *",
    labelCompany: "Kampuni / Shirika (Sio lazima)",
    labelEmail: "Barua Pepe Rasmi *",
    labelPhone: "Namba ya Simu *",
    labelInterest: "Huduma Kuu Unayohitaji",
    labelMessage: "Ujumbe wako au Makubaliano ya Ugavi",
    placeholderMessage: "Toa undani kuhusu kiasi, muda unaotarajia upokee bidhaa, au upendeleo wowote wa usambazaji jijini Dar es Salaam.",
    btnSubmit: "WASILISHA MAOMBI YA KIBIASHARA",
    btnSubmitting: "MAOMBI YANATUMWA...",
    successMsg: "Uwasilishaji umefanikiwa. Taarifa zako zimehifadhiwa salama. Tutajibu ndani ya saa 24.",
    formArchived: "* MAWASILIANO HAYA YANAHIFADHIWA KWA USALAMA NA USIRI MKUBWA KULINGANA NA VIWANGO VYA ZEIDA.",

    // Footer
    footerMotto: "Mbinu ya Kisasa ya Ufugaji Endelevu",
    footerBio: "Kuhakikisha ustawi wa mifugo ya kisasa, kilimo cha lishe bora, na usambazaji thabiti wa bidhaa kuanzia shamba la Kisarawe kwenda kote Afrika Mashariki.",
    footerDirectory: "ORODHA KUU",
    footerMap: "RAMANI YA KISARAWE II",
    footerMapInteract: "Fungua Maingiliano ya Ramani",
    footerMapBtn: "Fungua kwenye Google Maps",
    subFooterMotto: "IMEANDALIWA KWA AJILI YA IMANI YA KITAALUMA NA THAMANI ENDELEVU",
    subFooterRights: "ZEIDA COMPANY LIMITED. HAKI ZOTE ZIMEHIFADHIWA.",
    footerCoordinatesTitle: "MAWASILIANO RASMI",

    // Select options
    interestOptions: [
      { value: "Poultry Acquisition", label: "Uagizaji wa Kuku na Ndege (Kuku, Bata, Bata Mzinga)" },
      { value: "Goat & Sheep Purchasing", label: "Uagizaji wa Mbuzi na Kondoo" },
      { value: "Organic Feed Wholesaling", label: "Ugavi wa Jumla wa Lishe ya Asili (Mahindi na Mboga)" },
      { value: "Fresh Farm Eggs Supply", label: "Ugavi wa Mayai ya Shambani ya Kila Siku" },
      { value: "Corporate Agro-Partnership", label: "Ushirikiano wa Kibiashara wa Kilimo & Ardhi" }
    ],

    // Chat
    chatText: "Wasiliana Nasi"
  }
};

export default function App() {
  const [lang, setLang] = useState<"en" | "sw">("en");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Premium Price List & Volume Calculator States
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("All");
  const [selectedProdId, setSelectedProdId] = useState<string>("kuku-raw");
  const [budgetInput, setBudgetInput] = useState<string>("100000");
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [appliedDiscountMsg, setAppliedDiscountMsg] = useState<string>("");
  const [includeDelivery, setIncludeDelivery] = useState<boolean>(false);

  const [selectedBreedProduct, setSelectedBreedProduct] = useState<PricingProduct | null>(null);
  const [modalQuantity, setModalQuantity] = useState<number>(1);
  const [calcBudget, setCalcBudget] = useState<string>("");
  const [calcQuantity, setCalcQuantity] = useState<string>("");
  const [calcWeight, setCalcWeight] = useState<string>("");

  useEffect(() => {
    if (selectedBreedProduct) {
      setCalcBudget("");
      setCalcQuantity("");
      setCalcWeight("");
    }
  }, [selectedBreedProduct]);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleHorizontalScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollPercent((scrollLeft / maxScroll) * 100);
      }
    }
  };

  const scrollBreeds = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.4;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const PRODUCTS = lang === "en" ? PRODUCTS_EN : PRODUCTS_SW;
  const INSIGHTS = lang === "en" ? INSIGHTS_EN : INSIGHTS_SW;
  const t = T[lang];
  
  // Form State
  const [formState, setFormState] = useState<ContactState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "Poultry Acquisition",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [scrollProgress, setScrollProgress] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Modern Reviews States
  const [reviewsList, setReviewsList] = useState([
    {
      id: "rev-1",
      name: "Salim Abraham",
      role: { en: "Culinary Director, Serengeti Foods", sw: "Mkurugenzi wa Chakula, Serengeti Foods" },
      stars: 5,
      date: { en: "June 2026", sw: "Juni 2026" },
      text: { 
        en: "Perfect, hygienic meat delivery. The chickens are incredibly well-cleaned and vacuum packed. Truly farm-direct premium quality.",
        sw: "Uwasilishaji mzuri na wa usafi wa nyama. Kuku wamesafishwa kwa kiwango cha juu sana na kufungwa kitaalamu. Hakika ni ubora wa hali ya juu."
      },
      purchase: { en: "Cleaned Chicken (Kuku Raw)", sw: "Kuku Aliyesafishwa (Kuku Raw)" },
      category: "commercial"
    },
    {
      id: "rev-2",
      name: "Mariam Hassan",
      role: { en: "Kigamboni Resident", sw: "Mkazi wa Kigamboni" },
      stars: 5,
      date: { en: "May 2026", sw: "Mei 2026" },
      text: {
        en: "The farm-fresh eggs have the richest yellow yolks! Exceptional organic difference. Highly recommend for families.",
        sw: "Mayai mapya kutoka shambani yana viini vya njano imara sana! Tofauti kubwa ya kiasili. Ninapendekeza sana kwa ajili ya familia."
      },
      purchase: { en: "Nutrient-Dense Eggs", sw: "Mayai yenye Virutubisho" },
      category: "individual"
    },
    {
      id: "rev-3",
      name: "Joseph Mwita",
      role: { en: "Owner, Beachfront Bistro", sw: "Mmiliki, Beachfront Bistro" },
      stars: 5,
      date: { en: "April 2026", sw: "Aprili 2026" },
      text: {
        en: "Reliable year-round supply of heavy, healthy goats. They ensure our restaurant never faces raw inventory shortages.",
        sw: "Ugavi wa kuaminika wa mbuzi wanene na wenye afya mwaka mzima. Wanahakikisha mkahawa wetu haukosi malighafi."
      },
      purchase: { en: "Pastured Goats", sw: "Mbuzi wa Malisho" },
      category: "commercial"
    }
  ]);

  const [reviewFilter, setReviewFilter] = useState<"all" | "commercial" | "individual">("all");
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRole, setNewReviewRole] = useState("");
  const [newReviewStars, setNewReviewStars] = useState(5);
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewCategory, setNewReviewCategory] = useState<"individual" | "commercial">("individual");
  const [newReviewPurchase, setNewReviewPurchase] = useState("Chicken & Duck");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);

  // Track scroll state for nav glassmorphism & progress bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check scroll direction to show/hide navbar
      if (currentScrollY < 50) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // scrolling down - hide navbar unless mobile menu is open
        if (!mobileMenuOpen) {
          setIsNavbarVisible(false);
        }
      } else {
        // scrolling up - show navbar
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (currentScrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Simple Scroll-into-view helper
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setSelectedArticle(null);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName || !formState.email || !formState.phone) return;

    setIsSubmitting(true);
    // Simulate premium slow sending state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        service: "Poultry Acquisition",
        message: ""
      });
      // Clear message after 6 seconds
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }, 1800);
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    setIsSubmittingReview(true);
    setTimeout(() => {
      const newReview = {
        id: `rev-${Date.now()}`,
        name: newReviewName,
        role: { 
          en: newReviewRole.trim() ? newReviewRole : (newReviewCategory === "commercial" ? "Business Partner" : "Valued Customer"),
          sw: newReviewRole.trim() ? newReviewRole : (newReviewCategory === "commercial" ? "Mshirika wa Biashara" : "Mteja wa Thamani")
        },
        stars: newReviewStars,
        date: { 
          en: "Just now", 
          sw: "Sasa hivi" 
        },
        text: { en: newReviewText, sw: newReviewText },
        purchase: { en: newReviewPurchase, sw: newReviewPurchase },
        category: newReviewCategory
      };

      setReviewsList(prev => [newReview, ...prev]);
      setIsSubmittingReview(false);
      setShowReviewSuccess(true);
      
      // Reset fields
      setNewReviewName("");
      setNewReviewRole("");
      setNewReviewStars(5);
      setNewReviewText("");
      
      setTimeout(() => {
        setShowReviewSuccess(false);
        setShowAddReviewForm(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen selection:bg-[#1A3D2B]/10 selection:text-[#1A3D2B] bg-[#FFFFFF] antialiased">
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
        <div 
          className="h-full bg-[#C4A66B] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ==========================================
          1. NAVIGATION BAR
          ========================================== */}
      <nav 
        id="navbar" 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent ${
          isScrolled 
            ? "py-4" 
            : "py-6"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo stylized matching Stardom/Bonny Serif layout */}
          <button 
            onClick={() => scrollTo("hero")} 
            className="flex items-center text-left focus:outline-hidden group transition-transform duration-500 hover:scale-[1.03]"
          >
            <img 
              src={zeidaLogoImg} 
              alt="ZEIDA Logo" 
              className="h-9 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollTo("about")} 
              className={`font-sans text-xs tracking-[0.12em] font-semibold gold-sweep py-1 cursor-pointer transition-colors duration-200 ${
                isScrolled ? "text-[#1A3D2B] hover:text-[#C4A66B]" : "text-white hover:text-[#C4A66B]"
              }`}
            >
              {t.navAbout}
            </button>
            <button 
              onClick={() => scrollTo("what-we-do")} 
              className={`font-sans text-xs tracking-[0.12em] font-semibold gold-sweep py-1 cursor-pointer transition-colors duration-200 ${
                isScrolled ? "text-[#1A3D2B] hover:text-[#C4A66B]" : "text-white hover:text-[#C4A66B]"
              }`}
            >
              {t.navWhatWeDo}
            </button>
            <button 
              onClick={() => scrollTo("insights")} 
              className={`font-sans text-xs tracking-[0.12em] font-semibold gold-sweep py-1 cursor-pointer transition-colors duration-200 ${
                isScrolled ? "text-[#1A3D2B] hover:text-[#C4A66B]" : "text-white hover:text-[#C4A66B]"
              }`}
            >
              {t.navKnowledge}
            </button>


            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "sw" : "en")}
              className={`px-3 py-1 text-xs font-sans font-semibold rounded-full border-2 flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? "border-[#1A3D2B] text-[#1A3D2B] hover:bg-[#1A3D2B]/5 bg-transparent"
                  : "border-white text-white hover:bg-white/10 bg-black/10"
              }`}
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span className="font-sans font-semibold text-xs tracking-wide">{lang === "en" ? "Eng" : "Swh"}</span>
              <ChevronRight className="w-3 h-3 shrink-0" />
            </button>
          </div>

          {/* Hamburger button - Mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={`md:hidden p-2 focus:outline-hidden transition-colors ${
              isScrolled ? "text-[#1A3D2B] hover:text-[#C4A66B]" : "text-white hover:text-[#C4A66B]"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <div className="flex flex-col space-y-1.5 w-6 items-end">
                <span className="block h-0.5 w-6 bg-current transition-all duration-300"></span>
                <span className="block h-0.5 w-4 bg-current transition-all duration-300"></span>
              </div>
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[72px] bg-white/90 backdrop-blur-lg border-b border-[#3B4F43]/10 shadow-lg z-40 md:hidden flex flex-col px-6 py-8 space-y-5"
          >
            <button 
              onClick={() => scrollTo("about")} 
              className="text-left font-sans text-xs tracking-[0.2em] font-semibold text-[#1A3D2B] hover:text-[#C4A66B]/90 transition-colors py-1"
            >
              {t.navAboutFull}
            </button>
            <button 
              onClick={() => scrollTo("what-we-do")} 
              className="text-left font-sans text-xs tracking-[0.2em] font-semibold text-[#1A3D2B] hover:text-[#C4A66B]/90 transition-colors py-1"
            >
              {t.navSpecsFull}
            </button>
            <button 
              onClick={() => scrollTo("insights")} 
              className="text-left font-sans text-xs tracking-[0.2em] font-semibold text-[#1A3D2B] hover:text-[#C4A66B]/90 transition-colors py-1"
            >
              {t.navEditorialFull}
            </button>
            <button 
              onClick={() => scrollTo("footer")} 
              className="text-center font-sans text-xs tracking-[0.2em] font-semibold text-[#FFFFFF] bg-[#1A3D2B] hover:bg-[#C4A66B] px-5 py-3 transition-colors duration-300 rounded-sm mt-2"
            >
              {t.navContactFull}
            </button>

            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "sw" : "en")}
              className="flex items-center justify-between pt-4 border-t border-[#1A3D2B]/10 text-left cursor-pointer w-full"
            >
              <span className="font-mono text-[10px] tracking-wider text-[#7A8C82] uppercase">Language / Lugha</span>
              <div className="border border-[#1A3D2B]/15 rounded-full px-4 py-1.5 bg-[#F7F5F0]/80 font-mono text-[11px] font-semibold text-[#1A3D2B]">
                {lang === "en" ? "ENG" : "SW"}
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>


      {selectedArticle === null ? (
        <>
          {/* ==========================================
              2. HERO SECTION (Full-Viewport)
              ========================================== */}
      <header 
        id="hero" 
        className="relative h-screen w-full flex flex-col justify-end overflow-hidden bg-[#E2ECF3]"
      >
        {/* Full-bleed background image - bright, high dynamic range sky with clouds */}
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src={img4halo} 
            alt="ZEIDA Organic Farming - Premium Chickens" 
            className="w-full h-full object-cover brightness-[1.02] contrast-[1.01]"
            style={{ objectPosition: "50% 25%" }}
            referrerPolicy="no-referrer"
          />
          {/* Subtle vignette/gradient to ensure supreme readability on all viewports */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 via-black/15 to-transparent z-0 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/25 via-transparent to-transparent z-0 pointer-events-none" />
        </div>

        {/* Hero content exactly modeled on the screenshot layout */}
        <div 
          className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 pt-20 pb-20 flex flex-col justify-between"
          style={{ height: "555.6px" }}
        >
          
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-stretch mt-8 md:mt-16">
            
            {/* Left section: Bold minimalist farm product title aligned right under the navbar */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-start items-start pt-10 md:pt-16 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full text-left"
              >
                <h1 className="font-serif tracking-normal leading-[1.1] md:leading-[1.15] text-white drop-shadow-lg"
                    style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)" }}>
                  {lang === "en" ? (
                    <>
                      Fresh farm products <br className="hidden md:inline" />
                      delivered on time, under full <br className="hidden md:inline" />
                      bio-security control
                    </>
                  ) : (
                    <>
                      Bidhaa safi za shambani <br className="hidden md:inline" />
                      zinafika kwa wakati, chini ya <br className="hidden md:inline" />
                      udhibiti thabiti wa usalama
                    </>
                  )}
                </h1>
              </motion.div>
            </div>

            {/* Right section: Glassmorphic Floating Panel aligned elegantly to the bottom */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end items-start lg:items-end pb-12 md:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-full max-w-[390px] text-left flex flex-col gap-6"
              >
                <p className="text-white text-sm md:text-[15px] font-sans font-light leading-relaxed">
                  {lang === "en" 
                    ? "We deliver organically-fed poultry, premium table eggs, and quality livestock across Dar es Salaam."
                    : "Tunasambaza kuku waliolishwa kiasili, mayai safi ya shambani, na mifugo ya kiwango cha juu kote Dar es Salaam."}
                </p>

                <button 
                  onClick={() => scrollTo("what-we-do")}
                  className="bg-white hover:bg-neutral-100 text-[#000000] px-5 py-3 rounded-full font-sans text-xs font-semibold tracking-wider flex items-center justify-between cursor-pointer group transition-all duration-300 w-full"
                >
                  <span className="uppercase tracking-wider">{lang === "en" ? "Order Now" : "Agiza Sasa"}</span>
                  <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </motion.div>
            </div>

          </div>

        </div>


      </header>


      {/* ==========================================
          3. ABOUT US SECTION (EDITORIAL PROCESS)
          ========================================== */}
      <section 
        id="about" 
        className="relative bg-[#FAF8F5] py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-b border-[#3B4F43]/5"
      >
        <div className="max-w-[1100px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
            
            {/* Left Col: Core Philosophy & Intentional Typography */}
            <div className="flex flex-col justify-center text-left">
              {/* Small uppercase subtitle */}
              <span className="font-sans text-xs md:text-sm tracking-[0.2em] text-[#7A8C82] uppercase mb-6 md:mb-8 font-semibold">
                {lang === "en" ? "LUSH PASTURES, CALM ENVIRONMENT" : "MALISHO MAZURI, MAZINGIRA YA UTULIVU"}
              </span>

              {/* Stardom Serif Big Title */}
              <h2 className="font-serif text-[#1D2B22] tracking-normal leading-[1.1] md:leading-[1.15]"
                  style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}>
                {lang === "en" 
                  ? "Every animal is carefully bred, fed, and monitored to ensure strong health and consistent quality" 
                  : "Kila mnyama anafugwa, kulishwa na kulindwa kwa uangalifu ili kuhakikisha afya dhabiti na ubora endelevu."}
              </h2>

              {/* "with care" elegant script signature accent */}
              <span 
                className="font-script text-[42px] md:text-[54px] text-[#A69B85] leading-none block select-none"
                style={{
                  paddingTop: "1px",
                  paddingLeft: "4px",
                  paddingBottom: "0px",
                  marginLeft: "-3px",
                  marginTop: "2px"
                }}
              >
                {lang === "en" ? "with care" : "kwa upendo"}
              </span>
            </div>

            {/* Right Col: High-End Portrait Pasture Image */}
            <div className="relative w-full aspect-[3/4] overflow-hidden group border border-[#1A3D2B]/5 shadow-sm bg-[#FFFFFF]">
              <img 
                src={geeseImg} 
                alt={lang === "en" ? "Zeida lush pastures" : "Malisho mabichi ya Zeida"} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* Bottom Row: Explanatory quality standard statement */}
          <div className="mt-16 md:mt-24 max-w-[850px] text-left space-y-6 md:space-y-8">
            {lang === "en" ? (
              <>
                <p className="font-sans text-[15px] md:text-[17px] text-[#3B4F43] font-light leading-relaxed md:leading-loose tracking-normal text-pretty">
                  We deliver healthy, high-quality animals. We specialize in poultry, goats, sheep, and other farm animals raised under careful, controlled conditions. Our goal is to ensure every animal meets strong health and quality standards before reaching our{"\u00a0"}customers.
                </p>
                <p className="font-sans text-[15px] md:text-[17px] text-[#3B4F43] font-light leading-relaxed md:leading-loose tracking-normal text-pretty">
                  We are committed to proper feeding, hygiene, and responsible animal care throughout the growth process. This allows us to supply reliable livestock for both individual and commercial needs{"\u00a0"}consistently.
                </p>
                <p className="font-sans text-[15px] md:text-[17px] text-[#3B4F43] font-light leading-relaxed md:leading-loose tracking-normal text-pretty">
                  Our mission is to make quality farm animals easily accessible directly from the{"\u00a0"}source.
                </p>
              </>
            ) : (
              <>
                <p className="font-sans text-[15px] md:text-[17px] text-[#3B4F43] font-light leading-relaxed md:leading-loose tracking-normal text-pretty">
                  Tunasambaza wanyama wenye afya na ubora wa hali ya juu. Tumeobobea katika kuku na bata, mbuzi, kondoo, na wanyama wengine wa shambani wanaofugwa katika mazingira salama na yenye uangalizi wa kina. Lengo letu ni kuhakikisha kila mnyama anafikia viwango vya juu vya afya na ubora kabla ya kuwafikia wateja{"\u00a0"}wetu.
                </p>
                <p className="font-sans text-[15px] md:text-[17px] text-[#3B4F43] font-light leading-relaxed md:leading-loose tracking-normal text-pretty">
                  Tumejitolea kuhakikisha lishe bora, usafi, na utunzaji wa kuwajibika wa wanyama katika kipindi chote cha ukuaji. Hii inatuwezesha kusambaza mifugo ya kuaminika kwa mahitaji ya mtu mmoja mmoja na ya kibiashara mara{"\u00a0"}kwa{"\u00a0"}mara.
                </p>
                <p className="font-sans text-[15px] md:text-[17px] text-[#3B4F43] font-light leading-relaxed md:leading-loose tracking-normal text-pretty">
                  Dhamira yetu ni kufanya wanyama wa shambani wenye ubora kupatikana kwa urahisi kutoka chanzo cha{"\u00a0"}kuaminika.
                </p>
              </>
            )}
          </div>

        </div>
      </section>


      {/* ==========================================
          4. WHAT WE DO (Get to Know Our Breeds - Minimalist Horizontal Scroll Catalog)
          ========================================== */}
      <section 
        id="what-we-do" 
        className="relative bg-[#FAF8F5] py-24 md:py-32 px-6 overflow-hidden border-t border-b border-[#3B4F43]/5"
      >
        {/* Soft, natural blurred ambient vector glows in corners */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1A3D2B]/3 rounded-full blur-[120px] pointer-events-none select-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C4A66B]/3 rounded-full blur-[140px] pointer-events-none select-none" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-[700px] text-left">
              {/* Big Serif Title */}
              <h2 className="font-serif text-[#1D2B22] uppercase tracking-normal leading-[1.1] md:leading-[1.15]"
                  style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                {lang === "en" 
                  ? "Organic Purity. Cultivated with Absolute Biological Care." 
                  : "Ufugaji wa Kiasili. Kupata Thamani Bora na Afya Thabiti."}
              </h2>

              {/* Elegant Accent Script */}
              <span className="font-script text-[36px] md:text-[46px] text-[#A69B85] leading-none mt-2 block pl-1 select-none">
                {lang === "en" ? "transparent breed catalog" : "mifugo yetu ya asili"}
              </span>
            </div>


          </div>

          {/* Symmetrical Category Filter Tabs (Snapping layout) */}
          <div className="flex flex-wrap gap-2.5 md:gap-3 justify-start mb-12 border-b border-[#3B4F43]/10 pb-6">
            {[
              { key: "All", en: "All Products", sw: "Bidhaa Zote" },
              { key: "poultry", en: "Chicken & Duck", sw: "Kuku & Bata" },
              { key: "dairy-eggs", en: "Dairy & Eggs", sw: "Maziwa & Mayai" },
              { key: "livestock", en: "Goats & Sheep", sw: "Mbuzi & Kondoo" },
              { key: "specialty", en: "Specialty Poultry", sw: "Ndege Maalum" }
            ].map((tab) => {
              const isActive = selectedCategoryId === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    setSelectedCategoryId(tab.key);
                    // Reset scroll to left when filter changes
                    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                  }}
                  className={`px-5 py-2.5 text-[11px] tracking-[0.18em] font-sans font-semibold uppercase rounded-full transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-[#1A3D2B] border-transparent text-[#FFFFFF] shadow-sm"
                      : "bg-white/40 border-[#3B4F43]/10 text-[#3B4F43] hover:bg-white hover:border-[#1A3D2B]/30"
                  }`}
                >
                  {lang === "en" ? tab.en : tab.sw}
                </button>
              );
            })}
          </div>

          {/* Horizontal Scroll Catalog Wrapper */}
          <div className="relative">
            <div 
              ref={scrollRef}
              onScroll={handleHorizontalScroll}
              className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-12 md:gap-16 py-8 px-4 scroll-smooth"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {PRICING_PRODUCTS
                .filter(p => selectedCategoryId === "All" || p.category.key === selectedCategoryId)
                .map((product) => (
                  <div 
                    key={product.id}
                    className="flex-none w-[220px] md:w-[260px] snap-start flex flex-col items-center justify-between text-center select-none"
                  >
                    {/* Circle Icon Container - Floating cardless style with hover lift */}
                    <div 
                      onClick={() => {
                        setSelectedBreedProduct(product);
                        setModalQuantity(1);
                      }}
                      className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white/55 border border-[#3B4F43]/10 hover:border-[#C4A66B] flex items-center justify-center p-6 text-[#1A3D2B] transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer shadow-xs hover:shadow-lg hover:shadow-[#1A3D2B]/5 relative"
                    >
                      <AnimalIllustration type={product.illustrationType || "chicken"} className="w-28 h-28 md:w-34 md:h-34 text-[#1A3D2B]" />
                      
                      {/* Premium aesthetic floating detail ring */}
                      <div className="absolute inset-2 rounded-full border border-dashed border-[#C4A66B]/20 pointer-events-none" />
                    </div>

                    {/* Breed Details */}
                    <div className="mt-6 flex flex-col items-center w-full">
                      {/* Title */}
                      <h3 className="font-serif text-lg md:text-xl font-medium text-[#1D2B22] leading-snug uppercase tracking-wide hover:text-[#C4A66B] transition-colors duration-300 cursor-pointer"
                          onClick={() => {
                            setSelectedBreedProduct(product);
                            setModalQuantity(1);
                          }}>
                        {product.name[lang]}
                      </h3>

                      {/* Price per unit */}
                      <div className="font-mono text-sm md:text-base font-semibold text-[#1A3D2B] mt-3">
                        {product.price.toLocaleString()} <span className="text-[10px] font-sans text-[#7A8C82] uppercase ml-0.5">TZS / {product.unit[lang]}</span>
                      </div>
                    </div>

                    {/* Quick Acquire Button */}
                    <button
                      onClick={() => {
                        setSelectedBreedProduct(product);
                        setModalQuantity(1);
                      }}
                      className="mt-6 flex items-center justify-center space-x-2 bg-[#C4A66B]/10 hover:bg-[#C4A66B] text-[#1A3D2B] font-mono text-[10px] tracking-widest uppercase font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer border border-[#C4A66B]/20"
                    >
                      <ShoppingCart size={11} className="shrink-0" />
                      <span>{lang === "en" ? "ORDER NOW" : "AGIZA SASA"}</span>
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Thin Progress Scrollbar */}
          <div className="w-48 h-[2px] bg-[#3B4F43]/10 mx-auto rounded-full overflow-hidden mt-8 relative">
            <div 
              className="h-full bg-[#C4A66B] absolute left-0 top-0 transition-all duration-300 ease-out"
              style={{ width: `${scrollPercent}%` }}
            />
          </div>

        </div>
      </section>

      {/* ==========================================
          MODAL COMPONENT: Detailed Breed & Order Placement via WhatsApp
          ========================================== */}
      <AnimatePresence>
        {selectedBreedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Blurred Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBreedProduct(null)}
              className="absolute inset-0 bg-[#1D2B22]/65 backdrop-blur-md"
            />

            {/* Modal Card content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative bg-[#FAF8F5] max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-white/25 flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-[600px]"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedBreedProduct(null)}
                className="absolute top-4 right-4 z-20 border border-[#3B4F43]/15 hover:border-[#1A3D2B]/50 bg-white/70 hover:bg-white p-2 rounded-full text-[#1A3D2B] transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <X size={14} />
              </button>

              {/* LEFT COLUMN: Visual display */}
              <div className="w-full md:w-5/12 bg-[#EAE6DF]/45 p-8 flex flex-col justify-center items-center relative select-none">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center shadow-md relative">
                  <AnimalIllustration type={selectedBreedProduct.illustrationType || "chicken"} className="w-28 h-28 md:w-34 md:h-34 text-[#1A3D2B]" />
                  <div className="absolute inset-2.5 rounded-full border border-dashed border-[#C4A66B]/30 pointer-events-none" />
                </div>
                
                {/* Visual watermark */}
                <span className="font-serif text-[10px] tracking-[0.25em] text-[#7A8C82]/60 uppercase font-bold mt-6">
                  {selectedBreedProduct.scientificCategory || "ZEIDA ENTERPRISE"}
                </span>
              </div>

              {/* RIGHT COLUMN: Detail Info, Quantity Adjuster & WhatsApp Checkout */}
              <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-[#7A8C82] uppercase mb-1 block">
                    {selectedBreedProduct.category[lang]}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1D2B22] uppercase tracking-wide">
                    {selectedBreedProduct.name[lang]}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-10 h-[1.5px] bg-[#C4A66B] mt-3 mb-5" />

                  {/* Nutrients Block */}
                  {selectedBreedProduct.nutrients && (
                    <div className="mb-4">
                      <span className="font-sans text-[10px] tracking-widest font-semibold text-[#1A3D2B] uppercase flex items-center mb-1">
                        <Leaf size={11} className="mr-1.5 text-[#C4A66B]" />
                        {lang === "en" ? "Nutritional Profile" : "Kiwango cha Virutubisho"}
                      </span>
                      <p className="font-sans text-[11px] text-[#3B4F43]/85 font-light leading-relaxed">
                        {selectedBreedProduct.nutrients[lang]}
                      </p>
                    </div>
                  )}

                  {/* Advantages Block */}
                  {selectedBreedProduct.benefits && (
                    <div className="mb-6">
                      <span className="font-sans text-[10px] tracking-widest font-semibold text-[#1A3D2B] uppercase flex items-center mb-1">
                        <ShieldCheck size={11} className="mr-1.5 text-[#C4A66B]" />
                        {lang === "en" ? "Farm Advantages" : "Faida za Shambani"}
                      </span>
                      <p className="font-sans text-[11px] text-[#3B4F43]/85 font-light leading-relaxed">
                        {selectedBreedProduct.benefits[lang]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom checkout widget */}
                <div className="border-t border-[#3B4F43]/10 pt-5 mt-auto">
                  {(() => {
                    const rate = selectedBreedProduct.price;

                    const distributeWeights = (n: number, avgW: number): number[] => {
                      if (n <= 0) return [];
                      if (n === 1) return [Number(avgW.toFixed(2))];
                      
                      const weights: number[] = [];
                      let remainingWeight = Number((avgW * n).toFixed(2));
                      
                      for (let i = 0; i < n - 1; i++) {
                        const variation = Math.sin(i * 1.7) * 0.15;
                        let w = avgW * (1 + variation);
                        w = Math.max(1.2, Math.min(2.2, w));
                        
                        const minPossibleRemaining = (n - 1 - i) * 1.2;
                        const maxPossibleRemaining = (n - 1 - i) * 2.2;
                        
                        if (remainingWeight - w < minPossibleRemaining) {
                          w = remainingWeight - minPossibleRemaining;
                        } else if (remainingWeight - w > maxPossibleRemaining) {
                          w = remainingWeight - maxPossibleRemaining;
                        }
                        
                        w = Number(Math.max(1.1, Math.min(2.3, w)).toFixed(2));
                        weights.push(w);
                        remainingWeight = Number((remainingWeight - w).toFixed(2));
                      }
                      
                      weights.push(Number(Math.max(1.0, remainingWeight).toFixed(2)));
                      return weights;
                    };

                    const isBudgetGiven = !!calcBudget && parseFloat(calcBudget) > 0;
                    const isQuantityGiven = !!calcQuantity && parseFloat(calcQuantity) > 0;

                    let activeMode: "budget" | "quantity" | "standard" = "standard";
                    if (isQuantityGiven) {
                      activeMode = "quantity";
                    } else if (isBudgetGiven) {
                      activeMode = "budget";
                    }

                    let totalChickens = 0;
                    let avgWeight = 0;
                    let totalWeight = 0;
                    let finalPrice = 0;
                    let breakdownDetails: { label: string; value: string }[] = [];
                    let distributedWeightsList: number[] = [];

                    if (activeMode === "quantity") {
                      const q = parseFloat(calcQuantity) || 0;
                      const hasWeight = selectedBreedProduct.unit.en === "KG";
                      const w = hasWeight ? (parseFloat(calcWeight) || 1.5) : 1;

                      totalChickens = q;
                      avgWeight = w;
                      totalWeight = q * w;
                      finalPrice = totalWeight * rate;

                      if (hasWeight) {
                        breakdownDetails = [
                          { label: lang === "en" ? "Total Chickens" : "Idadi ya Kuku", value: `${q}` },
                          { label: lang === "en" ? "Avg Weight" : "Uzito wa Lengo", value: `${w.toFixed(2)} KG` },
                          { label: lang === "en" ? "Total Weight" : "Uzito Jumla", value: `${totalWeight.toFixed(2)} KG` },
                          { label: lang === "en" ? "Final Price" : "Bei Kamili", value: `${finalPrice.toLocaleString()} TZS` },
                        ];
                      } else {
                        breakdownDetails = [
                          { label: lang === "en" ? "Total Quantity" : "Idadi Jumla", value: `${q} ${selectedBreedProduct.unit[lang]}` },
                          { label: lang === "en" ? "Final Price" : "Bei Kamili", value: `${finalPrice.toLocaleString()} TZS` },
                        ];
                      }
                    } else if (activeMode === "budget") {
                      const budget = parseFloat(calcBudget) || 0;
                      const hasWeight = selectedBreedProduct.unit.en === "KG";

                      if (hasWeight) {
                        const targetSingleChickenWeight = 1.5;
                        const minChickenWeight = 1.2;
                        const maxChickenWeight = 2.2;

                        const totalWeightAllowed = budget / rate;
                        const maxN = Math.floor(totalWeightAllowed / minChickenWeight);
                        
                        let bestN = 0;
                        let bestAvgW = 0;
                        let bestDiffFromTarget = Infinity;

                        for (let n = 1; n <= maxN; n++) {
                          const avgW = totalWeightAllowed / n;
                          if (avgW >= minChickenWeight && avgW <= maxChickenWeight) {
                            const diff = Math.abs(avgW - targetSingleChickenWeight);
                            if (diff < bestDiffFromTarget) {
                              bestDiffFromTarget = diff;
                              bestN = n;
                              bestAvgW = avgW;
                            }
                          }
                        }

                        if (bestN === 0) {
                          if (totalWeightAllowed >= 1.0) {
                            bestN = 1;
                            bestAvgW = Math.min(maxChickenWeight, Math.max(1.0, totalWeightAllowed));
                          } else {
                            bestN = 0;
                            bestAvgW = totalWeightAllowed;
                          }
                        }

                        totalChickens = bestN;
                        avgWeight = bestAvgW;
                        totalWeight = bestN * bestAvgW;
                        finalPrice = totalWeight * rate;

                        if (bestN > 0) {
                          distributedWeightsList = distributeWeights(bestN, bestAvgW);
                          const sumWeights = distributedWeightsList.reduce((sum, w) => sum + w, 0);
                          totalWeight = sumWeights;
                          finalPrice = totalWeight * rate;
                          
                          if (finalPrice > budget && distributedWeightsList.length > 0) {
                            const lastIdx = distributedWeightsList.length - 1;
                            const overspent = finalPrice - budget;
                            const weightReduction = Math.ceil((overspent / rate) * 100) / 100;
                            distributedWeightsList[lastIdx] = Number(Math.max(1.0, distributedWeightsList[lastIdx] - weightReduction).toFixed(2));
                            
                            const newSum = distributedWeightsList.reduce((sum, w) => sum + w, 0);
                            totalWeight = newSum;
                            finalPrice = totalWeight * rate;
                          }
                        }

                        breakdownDetails = [
                          { label: lang === "en" ? "Total Chickens" : "Idadi ya Kuku", value: `${totalChickens}` },
                          { label: lang === "en" ? "Average Weight" : "Kadirio la Uzito", value: `${avgWeight.toFixed(2)} KG` },
                          { label: lang === "en" ? "Total Weight" : "Uzito Jumla", value: `${totalWeight.toFixed(2)} KG` },
                          { label: lang === "en" ? "Final Price" : "Bei Kamili", value: `${finalPrice.toLocaleString()} TZS` },
                        ];
                      } else {
                        const maxUnits = Math.floor(budget / rate);
                        totalChickens = maxUnits;
                        avgWeight = 1;
                        totalWeight = maxUnits;
                        finalPrice = maxUnits * rate;

                        breakdownDetails = [
                          { label: lang === "en" ? "Total Quantity" : "Idadi Jumla", value: `${maxUnits} ${selectedBreedProduct.unit[lang]}` },
                          { label: lang === "en" ? "Final Price" : "Bei Kamili", value: `${finalPrice.toLocaleString()} TZS` },
                        ];
                      }
                    } else {
                      totalChickens = modalQuantity;
                      avgWeight = 1;
                      totalWeight = modalQuantity;
                      finalPrice = modalQuantity * rate;
                    }

                    // Build WhatsApp text
                    let whatsappText = "";
                    if (activeMode === "budget") {
                      whatsappText = lang === "en"
                        ? `Hello, I would like to order:\n\nBreed/Product: ${selectedBreedProduct.name.en}\nBudget-Based Allocation Mode:\n- Target Budget: ${parseFloat(calcBudget).toLocaleString()} TZS\n- Optimal Chicken Count: ${totalChickens}\n- Average Weight per Chicken: ${avgWeight.toFixed(2)} KG\n- Combined Total Weight: ${totalWeight.toFixed(2)} KG\n- Estimated Total Cost: ${finalPrice.toLocaleString()} TZS\n${distributedWeightsList.length > 0 ? `- Distributed Weights: ${distributedWeightsList.join(", ")} KG\n` : ""}\nPlease confirm availability.`
                        : `Habari, ningependa kuagiza:\n\nMfugo/Bidhaa: ${selectedBreedProduct.name.sw}\nUgawaji kwa Bajeti:\n- Bajeti Iliyolengwa: ${parseFloat(calcBudget).toLocaleString()} TZS\n- Idadi Bora ya Kuku: ${totalChickens}\n- Kadirio la Uzito kila mmoja: ${avgWeight.toFixed(2)} KG\n- Jumla ya Uzito wa Pamoja: ${totalWeight.toFixed(2)} KG\n- Kadirio la Gharama: ${finalPrice.toLocaleString()} TZS\n${distributedWeightsList.length > 0 ? `- Mtawanyiko wa Uzito: ${distributedWeightsList.join(", ")} KG\n` : ""}\nTafadhali thibitisha upatikanaji.`;
                    } else if (activeMode === "quantity") {
                      whatsappText = lang === "en"
                        ? `Hello, I would like to order:\n\nBreed/Product: ${selectedBreedProduct.name.en}\nQuantity + Weight Mode:\n- Desired Chickens/Units: ${totalChickens}\n${selectedBreedProduct.unit.en === "KG" ? `- Desired Weight per Chicken: ${avgWeight.toFixed(2)} KG\n- Combined Total Weight: ${totalWeight.toFixed(2)} KG\n` : ""}- Calculated Total Price: ${finalPrice.toLocaleString()} TZS\n\nPlease confirm availability.`
                        : `Habari, ningependa kuagiza:\n\nMfugo/Bidhaa: ${selectedBreedProduct.name.sw}\nNjia ya Idadi na Uzito:\n- Idadi Iliyoombwa: ${totalChickens}\n${selectedBreedProduct.unit.sw === "KG" ? `- Uzito Uliokusudiwa: ${avgWeight.toFixed(2)} KG\n- Jumla ya Uzito wa Pamoja: ${totalWeight.toFixed(2)} KG\n` : ""}- Kadirio la Bei Kamili: ${finalPrice.toLocaleString()} TZS\n\nTafadhali thibitisha upatikanaji.`;
                    } else {
                      whatsappText = lang === "en"
                        ? `Hello, I would like to order:\n\nBreed: ${selectedBreedProduct.name.en}\nQuantity: ${modalQuantity} ${selectedBreedProduct.unit.en}\nEstimated Total: ${(selectedBreedProduct.price * modalQuantity).toLocaleString()} TZS\n\nPlease confirm availability.`
                        : `Habari, ningependa kuagiza:\n\nMfugo/Bidhaa: ${selectedBreedProduct.name.sw}\nIdadi: ${modalQuantity} ${selectedBreedProduct.unit.sw}\nKadirio la Jumla: ${(selectedBreedProduct.price * modalQuantity).toLocaleString()} TZS\n\nTafadhali thibitisha upatikanaji wake.`;
                    }

                    return (
                      <div className="space-y-4">
                        {/* Interactive Mode Inputs */}
                        <div className="bg-[#1A3D2B]/5 border border-[#3B4F43]/10 rounded-xl p-4 space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-serif text-[11px] tracking-wider text-[#1A3D2B] uppercase font-bold flex items-center gap-1.5">
                              <Calculator size={13} className="text-[#C4A66B]" />
                              {lang === "en" ? "Smart Calculator" : "Kikokotoo cha Bei"}
                            </span>
                            {activeMode !== "standard" && (
                              <button
                                type="button"
                                onClick={() => {
                                  setCalcBudget("");
                                  setCalcQuantity("");
                                  setCalcWeight("");
                                }}
                                className="font-sans text-[9px] tracking-widest uppercase font-semibold text-[#C4A66B] hover:text-[#1A3D2B] transition-colors cursor-pointer"
                              >
                                {lang === "en" ? "Reset" : "Anza Upya"}
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {/* Budget-based input (Mode 1) */}
                            <div className="col-span-2 sm:col-span-1 flex flex-col">
                              <label className="font-sans text-[9px] tracking-widest text-[#7A8C82] uppercase mb-1 font-semibold">
                                {lang === "en" ? "Total Budget (TZS)" : "Bajeti Kamili (TZS)"}
                              </label>
                              <input
                                type="number"
                                min="0"
                                placeholder={lang === "en" ? "e.g. 100,000" : "Mf. 100,000"}
                                value={calcBudget}
                                onChange={(e) => {
                                  setCalcBudget(e.target.value);
                                  if (e.target.value) {
                                    setCalcQuantity("");
                                    setCalcWeight("");
                                  }
                                }}
                                className="bg-white border border-[#3B4F43]/15 px-3 py-2 text-xs font-mono text-[#1D2B22] rounded-md focus:border-[#C4A66B] focus:ring-1 focus:ring-[#C4A66B] outline-none transition-all"
                              />
                            </div>

                            {/* Quantity-based input (Mode 2) */}
                            <div className="col-span-2 sm:col-span-1 flex flex-col">
                              <label className="font-sans text-[9px] tracking-widest text-[#7A8C82] uppercase mb-1 font-semibold">
                                {lang === "en" ? "Quantity" : "Idadi / Kuku"}
                              </label>
                              <input
                                type="number"
                                min="0"
                                placeholder={lang === "en" ? "e.g. 5" : "Mf. 5"}
                                value={calcQuantity}
                                onChange={(e) => {
                                  setCalcQuantity(e.target.value);
                                  if (e.target.value) {
                                    setCalcBudget("");
                                  }
                                }}
                                className="bg-white border border-[#3B4F43]/15 px-3 py-2 text-xs font-mono text-[#1D2B22] rounded-md focus:border-[#C4A66B] focus:ring-1 focus:ring-[#C4A66B] outline-none transition-all"
                              />
                            </div>

                            {/* Weight per unit input (Mode 2, only for KG products) */}
                            {selectedBreedProduct.unit.en === "KG" && (
                              <div className="col-span-2 flex flex-col">
                                <div className="flex justify-between items-center mb-1">
                                  <label className="font-sans text-[9px] tracking-widest text-[#7A8C82] uppercase font-semibold">
                                    {lang === "en" ? "Desired Weight per Chicken" : "Uzito Uliokusudiwa kwa Kuku"}
                                  </label>
                                  <span className="font-mono text-[10px] text-[#1A3D2B] font-bold">
                                    {calcWeight ? `${parseFloat(calcWeight).toFixed(1)} KG` : "1.5 KG"}
                                  </span>
                                </div>
                                <input
                                  type="range"
                                  min="1.0"
                                  max="2.5"
                                  step="0.1"
                                  value={calcWeight || "1.5"}
                                  onChange={(e) => {
                                    setCalcWeight(e.target.value);
                                    if (!calcQuantity) {
                                      setCalcQuantity("1");
                                    }
                                    setCalcBudget("");
                                  }}
                                  className="w-full h-1 bg-[#1A3D2B]/10 rounded-lg appearance-none cursor-pointer accent-[#C4A66B]"
                                />
                                <div className="flex justify-between font-mono text-[8px] text-[#7A8C82] mt-0.5">
                                  <span>1.0 KG ({lang === "en" ? "Small" : "Ndogo"})</span>
                                  <span>1.5 KG ({lang === "en" ? "Standard" : "Kawaida"})</span>
                                  <span>2.5 KG ({lang === "en" ? "Premium Heavy" : "Kubwa Kubwa"})</span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Dynamic Breakdown Card */}
                          {activeMode !== "standard" && (
                            <div className="bg-white/80 border border-[#3B4F43]/10 rounded-lg p-3 space-y-2">
                              <div className="flex justify-between items-center border-b border-[#3B4F43]/5 pb-1 text-[9px] font-sans font-bold text-[#1A3D2B]">
                                <span className="uppercase tracking-widest">
                                  {activeMode === "budget" 
                                    ? (lang === "en" ? "Active Mode: Budget Allocation" : "Njia inayotumika: Ugawaji wa Bajeti")
                                    : (lang === "en" ? "Active Mode: Quantity & Weight" : "Njia inayotumika: Idadi na Uzito")
                                  }
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A66B] animate-pulse" />
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-[11px]">
                                {breakdownDetails.map((item, idx) => (
                                  <div key={idx} className="flex flex-col">
                                    <span className="font-sans text-[8px] text-[#7A8C82] uppercase tracking-wider">{item.label}</span>
                                    <span className="font-mono text-xs text-[#1D2B22] font-semibold">{item.value}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Weight Distribution Details */}
                              {activeMode === "budget" && distributedWeightsList.length > 0 && (
                                <div className="pt-2 border-t border-[#3B4F43]/5">
                                  <span className="font-sans text-[8px] text-[#7A8C82] uppercase tracking-wider block mb-1">
                                    {lang === "en" ? "Dynamic Weight Allocation per Chicken (KG):" : "Mtawanyiko wa Uzito kwa kila Kuku (KG):"}
                                  </span>
                                  <div className="flex flex-wrap gap-1 max-h-[64px] overflow-y-auto pr-1">
                                    {distributedWeightsList.map((w, idx) => (
                                      <span key={idx} className="font-mono text-[9px] bg-[#1A3D2B]/5 border border-[#1A3D2B]/10 text-[#1A3D2B] px-1.5 py-0.5 rounded-sm">
                                        🐓 #{idx + 1}: <strong className="text-[#C4A66B]">{w.toFixed(2)}</strong> kg
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {activeMode === "budget" && totalChickens > 1 && (
                                <div className="text-[8px] text-[#7A8C82] font-sans italic pt-1 border-t border-[#3B4F43]/5">
                                  {lang === "en"
                                    ? "Distributed weights prioritize realistic, commercially optimized sizes matching your budget precisely."
                                    : "Uzito umegawanywa kwa usahihi kulingana na ukubwa unaofaa sokoni ili kutosheleza bajeti yako."
                                  }
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Standard fallback quantity adjuster when no calculator input is given */}
                        {activeMode === "standard" && (
                          <div className="flex items-center justify-between gap-4 py-2 border-b border-[#3B4F43]/5">
                            <div>
                              <span className="font-sans text-[9px] tracking-widest text-[#7A8C82] block uppercase mb-1">
                                {lang === "en" ? "UNIT RATE" : "BEI KWA UNIT"}
                              </span>
                              <div className="font-mono text-sm font-semibold text-[#1D2B22]">
                                {rate.toLocaleString()} <span className="text-[9px] font-sans text-[#7A8C82] uppercase">TZS</span>
                              </div>
                            </div>

                            <div>
                              <span className="font-sans text-[9px] tracking-widest text-[#7A8C82] block uppercase mb-1 text-right">
                                {lang === "en" ? "QUANTITY" : "IDADI"}
                              </span>
                              <div className="flex items-center bg-[#1A3D2B]/5 rounded-lg px-2 py-1 border border-[#3B4F43]/10">
                                <button 
                                  type="button"
                                  onClick={() => setModalQuantity(prev => Math.max(1, prev - 1))}
                                  className="p-1 text-[#1A3D2B] hover:text-[#C4A66B] cursor-pointer transition-colors"
                                >
                                  <Minus size={11} />
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={modalQuantity || ""}
                                  onChange={(e) => {
                                    const val = parseInt(e.target.value, 10);
                                    if (e.target.value === "") {
                                      setModalQuantity(0);
                                    } else if (!isNaN(val)) {
                                      setModalQuantity(Math.max(0, val));
                                    }
                                  }}
                                  onBlur={() => {
                                    if (modalQuantity < 1) {
                                      setModalQuantity(1);
                                    }
                                  }}
                                  className="w-12 bg-transparent text-center font-mono text-xs font-bold text-[#1D2B22] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <button 
                                  type="button"
                                  onClick={() => setModalQuantity(prev => prev + 1)}
                                  className="p-1 text-[#1A3D2B] hover:text-[#C4A66B] cursor-pointer transition-colors"
                                >
                                  <Plus size={11} />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Final estimated cost and CTA checkout button */}
                        <div className="flex flex-col space-y-3 pt-2">
                          <div className="flex justify-between items-center text-xs border-b border-[#3B4F43]/5 pb-2.5">
                            <span className="font-sans font-semibold text-[#7A8C82] uppercase tracking-wider">
                              {lang === "en" ? "ESTIMATED TOTAL" : "JUMLA YA BEI"}
                            </span>
                            <span className="font-mono font-bold text-sm text-[#1A3D2B]">
                              {finalPrice.toLocaleString()} TZS
                            </span>
                          </div>

                          <a
                            href={`https://wa.me/255673430776?text=${encodeURIComponent(whatsappText)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center space-x-2 bg-[#1A3D2B] hover:bg-[#C4A66B] text-[#FFFFFF] font-mono text-[11px] tracking-widest uppercase font-bold py-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg"
                          >
                            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>{lang === "en" ? "Order via WhatsApp" : "Agiza kupitia WhatsApp"}</span>
                          </a>
                        </div>
                      </div>
                    );
                  })()}
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ==========================================
          5. KNOWLEDGE & INSIGHTS (Editorial section)
          ========================================== */}
      <section 
        id="insights" 
        className="relative bg-[#FFFFFF] py-24 md:py-32 px-6 overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto">
          


          <div className="max-w-[800px] mb-20">
            <h2 className="font-serif uppercase tracking-normal leading-[1.1] md:leading-[1.15] text-[#1D2B22] mb-6"
                style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}>
              {t.insHeading}
            </h2>
            <p className="text-base text-[#3B4F43]/80 font-light leading-relaxed">
              {t.insSubtext}
            </p>
          </div>

          {/* Staggered vertical list - highly elegant and spaced */}
          <div className="space-y-16 md:space-y-24">
            {INSIGHTS.map((insight) => (
              <div 
                key={insight.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-8 md:pt-12 border-t border-[#3B4F43]/10 items-start"
              >
                
                {/* Large index */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-4xl md:text-5xl font-light text-[#C4A66B]">
                    {insight.number}
                  </span>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-10">
                  <span className="font-sans text-xs tracking-[0.18em] text-[#7A8C82] uppercase block mb-3 font-semibold">
                    {insight.subtitle}
                  </span>
                  <h3 className="font-serif text-lg tracking-wider font-semibold uppercase text-[#1D2B22] mb-5">
                    {insight.title}
                  </h3>
                  <p className="text-[#3B4F43] font-light text-[15px] leading-[1.8] mb-4">
                    {insight.content}
                  </p>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(insight.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wider uppercase text-[#1A3D2B] hover:text-[#C4A66B] transition-colors duration-200 cursor-pointer group"
                    >
                      <span>{lang === "en" ? "Learn more" : "Soma zaidi"}</span>
                      <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Interactive Agricultural Infographic Callout Area */}
          <div className="mt-20 border border-[#3B4F43]/15 p-8 md:p-12 text-[#1A3D2B] relative overflow-hidden rounded-xl bg-white/40">
            {/* Background Image Layer with high-end editorial overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <img 
                src={chickenVillageBgImg} 
                alt="Chicken farm landscape" 
                className="w-full h-full object-cover opacity-40 brightness-105 saturate-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
               <div className="md:col-span-8">
                <span className="font-sans text-xs tracking-[0.18em] text-[#7A8C82] uppercase mb-2 block font-semibold">
                  {t.insStandard}
                </span>
                <p className="font-serif text-xl md:text-2xl font-light tracking-tight leading-relaxed text-[#3B4F43]">
                  {t.insStandardBody}
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <p className="font-sans text-[11px] text-[#7A8C82] tracking-[0.18em] uppercase mb-1 font-semibold">{t.insLocation}</p>
                <p className="font-serif text-lg font-normal text-[#1A3D2B] flex items-center md:justify-end">
                  <MapPin className="mr-1.5 w-4 h-4 text-[#C4A66B]" />
                  Kisarawe II, Kigamboni
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

        </>
      ) : (
        <ArticleDetail 
          articleId={selectedArticle}
          lang={lang}
          onBack={() => {
            setSelectedArticle(null);
            setTimeout(() => {
              const element = document.getElementById("insights");
              if (element) {
                element.scrollIntoView({ behavior: "instant" });
              }
            }, 30);
          }}
        />
      )}


      {/* ==========================================
          8. FOOTER SECTION (Refined minimalist green layout)
          ========================================== */}
      <footer id="footer" className="bg-[#1A3D2B] text-[#FFFFFF]/80 py-16 md:py-20 px-6 overflow-hidden border-t border-[#3B4F43]/20">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Top Row: Plan Your Visit */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-14 border-b border-[#3B4F43]/20">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-white">
                {lang === "en" ? "Plan your visit" : "Panga ujio wako"}
              </h3>
              <p className="text-xs text-white/60 font-sans tracking-wide mt-1 font-light max-w-md">
                {lang === "en" 
                  ? "We welcome you to explore our Farm, where we breed and supply healthy livestock under careful and quality controlled conditions." 
                  : "Tunakukaribisha ujionee malisho yetu ya kijani na miundombinu ya kisasa kule Kisarawe II, Kigamboni."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Google Maps Button */}
              <a 
                href="https://maps.app.goo.gl/33Yz1CuhhasApiAK9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white hover:bg-neutral-100 text-neutral-900 px-5 py-3 rounded-full shadow-sm hover:shadow transition-all duration-300 group cursor-pointer"
              >
                {/* Google Maps Mini Pin SVG */}
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#4285F4"/>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 1.28.41 2.53 1.15 3.65l5.85 9.35 5.85-9.35c.74-1.12 1.15-2.37 1.15-3.65 0-3.87-3.13-7-7-7z" stroke="#34A853" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] tracking-wider text-neutral-400 font-medium leading-none mb-1">Find us on</span>
                  <span className="text-xs font-bold font-sans tracking-wide text-neutral-800">Google Maps</span>
                </div>
              </a>

              {/* Bolt Button */}
              <a 
                href="https://bolt.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#00CD76]/10 border border-[#00CD76]/30 hover:bg-[#00CD76]/20 text-[#00CD76] px-5 py-3 rounded-full transition-all duration-300 group cursor-pointer"
              >
                {/* Bolt Lightning Bolt SVG */}
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="#00CD76" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] tracking-wider text-emerald-400/80 font-medium leading-none mb-1">Ride here with</span>
                  <span className="text-xs font-bold font-sans tracking-wide text-white">Bolt Transport</span>
                </div>
              </a>
            </div>
          </div>

          {/* Middle Row: Directory, Center Logo & Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 py-16 items-start">
            
            {/* Left Col: Contact Information (Modern Technique) */}
            <div className="md:col-span-5 space-y-6">
              <h4 className="font-sans text-[11px] tracking-[0.2em] text-[#C4A66B] uppercase font-bold">
                {lang === "en" ? "Contact" : "Mawasiliano"}
              </h4>
              <div className="space-y-4">
                <a href="tel:+255673430776" className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C4A66B]/15 group-hover:border-[#C4A66B]/40 transition-all duration-300">
                    <Phone size={15} className="text-[#C4A66B] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-white/40 font-semibold leading-none mb-1">{lang === "en" ? "Phone" : "Simu"}</span>
                    <span className="text-[13px] text-white/80 group-hover:text-white transition-colors font-light font-sans">+(255) 673 430 776</span>
                  </div>
                </a>

                <a href="mailto:info@zeida.co.tz" className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C4A66B]/15 group-hover:border-[#C4A66B]/40 transition-all duration-300">
                    <Mail size={15} className="text-[#C4A66B] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-white/40 font-semibold leading-none mb-1">{lang === "en" ? "Email Address" : "Barua Pepe"}</span>
                    <span className="text-[13px] text-white/80 group-hover:text-white transition-colors font-light font-sans">info@zeida.co.tz</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-[#C4A66B]" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-white/40 font-semibold leading-none mb-1">{lang === "en" ? "Location" : "Eneo"}</span>
                    <span className="text-[13px] text-white/80 font-light leading-relaxed block max-w-xs font-sans">
                      {lang === "en" ? "Kisarawe II, Dar es Salaam, Tanzania" : "Lingato, Kisarawe II, Kigamboni, Dar es Salaam."}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Col: Lowcase Navigation Links */}
            <div className="md:col-span-3 flex flex-col md:items-center space-y-6">
              <div className="text-left md:text-center w-full">
                <h4 className="font-sans text-[11px] tracking-[0.2em] text-[#C4A66B] uppercase font-bold">
                  {lang === "en" ? "Navigation" : "Urambazaji"}
                </h4>
              </div>
              <div className="flex flex-col space-y-4 items-start md:items-center text-xs font-sans tracking-[0.2em] text-white/60 lowercase">
                <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors cursor-pointer lowercase font-light">
                  {lang === "en" ? "about us" : "kuhusu sisi"}
                </button>
                <button onClick={() => scrollTo("what-we-do")} className="hover:text-white transition-colors cursor-pointer lowercase font-light">
                  {lang === "en" ? "products" : "bidhaa"}
                </button>
                <button onClick={() => scrollTo("insights")} className="hover:text-white transition-colors cursor-pointer lowercase font-light">
                  {lang === "en" ? "insights" : "makala"}
                </button>
                <button onClick={() => scrollTo("footer")} className="hover:text-white transition-colors cursor-pointer lowercase font-light">
                  {lang === "en" ? "contact" : "wasiliana"}
                </button>
              </div>
            </div>

            {/* Right Col: Social Media Links (Modern Technique with LinkedIn & Instagram Icons) */}
            <div className="md:col-span-4 md:text-right flex flex-col md:items-end justify-center space-y-5">
              <div className="text-left md:text-right">
                <h4 className="font-sans text-[11px] tracking-[0.2em] text-[#C4A66B] uppercase font-bold mb-1">
                  {lang === "en" ? "Social Links" : "Viungo Jamii"}
                </h4>
              </div>
              <div className="flex items-center gap-4 pt-1">
                <a 
                  href="https://instagram.com/zeida_dukafarm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C4A66B]/15 hover:border-[#C4A66B]/40 hover:text-[#C4A66B] transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
                  title="Instagram"
                >
                  <Instagram size={20} className="text-white/80 group-hover:text-[#C4A66B] group-hover:scale-110 transition-all duration-300" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C4A66B]/15 hover:border-[#C4A66B]/40 hover:text-[#C4A66B] transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin size={20} className="text-white/80 group-hover:text-[#C4A66B] group-hover:scale-110 transition-all duration-300" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Row: Sub footer divider & copyright */}
          <div className="pt-8 border-t border-[#3B4F43]/20 text-center">
            <p className="text-[11px] font-sans text-white/40 tracking-wider">
              Copyright &copy; {new Date().getFullYear()} Zeida. All Rights Reserved. | Privacy Policy | Design by{" "}
              <a 
                href="https://www.linkedin.com/in/abdul-shomari-172313358" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:underline transition-colors cursor-pointer"
              >
                Abdul S.
              </a>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
