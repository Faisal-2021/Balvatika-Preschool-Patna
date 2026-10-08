"use client";

import { useMemo, useRef, useState } from "react";
import {
  Apple,
  Award,
  Baby,
  Blocks,
  BookOpen,
  Brain,
  Bus,
  CheckCircle2,
  Clock,
  Compass,
  Footprints,
  Heart,
  Laptop,
  Layers,
  Music,
  Palette,
  Phone,
  Puzzle,
  Rocket,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

import {
  AnimatedList,
  AnimatedListItem,
  BlurFade,
  FocusCards,
  Marquee,
  NumberTicker,
  SplitText,
} from "@/components/ui/motion-primitives";
import { SparklesText } from "@/components/ui/sparkles-text";
import { RotatingText } from "@/components/ui/rotating-text";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { GalleryLightbox } from "@/components/home/GalleryLightbox";

function SectionBadge({ children, color = "amber" }: { children: React.ReactNode; color?: string }) {
  const colorMap: Record<string, string> = {
    amber: "bg-amber-100 text-amber-800 border-amber-300",
    pink: "bg-pink-100 text-pink-800 border-pink-300",
    sky: "bg-sky-100 text-sky-800 border-sky-300",
    purple: "bg-purple-100 text-purple-800 border-purple-300",
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-300",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-bold tracking-wide uppercase shadow-2xs ${
        colorMap[color] || colorMap.amber
      }`}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO SECTION                                                               */
/* -------------------------------------------------------------------------- */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-purple-50/30 to-white pt-6 pb-16 lg:pt-10 lg:pb-24">
      {/* Playful background floating decorative elements */}
      <div className="pointer-events-none absolute -top-12 -left-12 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-pink-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-1/3 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      {/* Floating hand-drawn doodle badges */}
      <div className="pointer-events-none absolute top-12 left-6 hidden animate-float sm:block lg:left-14">
        <span className="flex items-center gap-1.5 rounded-2xl border-2 border-amber-200 bg-white/90 px-3.5 py-2 text-xs font-black text-amber-700 shadow-md backdrop-blur-xs">
          <span>☀️</span> Happy Morning Circle
        </span>
      </div>
      <div className="pointer-events-none absolute top-20 right-8 hidden animate-float sm:block lg:right-20 [animation-delay:1.5s]">
        <span className="flex items-center gap-1.5 rounded-2xl border-2 border-pink-200 bg-white/90 px-3.5 py-2 text-xs font-black text-pink-700 shadow-md backdrop-blur-xs">
          <span>🎨</span> Creative Arts Studio
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Text Column */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Admissions badge */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-4 py-1.5 shadow-xs">
              <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-display text-xs font-bold tracking-wide text-slate-800 uppercase sm:text-sm">
                🎈 Admissions Open 2026–27 • Play Group to UKG
              </span>
            </div>

            {/* Sparkles Heading */}
            <div className="mt-5">
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Where Little Minds <br className="hidden sm:inline" />
                <SparklesText
                  colors={{ first: "#F59E0B", second: "#EC4899" }}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary"
                >
                  Discover &amp; Bloom
                </SparklesText>
              </h1>
            </div>

            {/* ReactBits Dynamic Rotating Tagline */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 font-display text-lg font-bold text-slate-700 sm:text-xl lg:justify-start">
              <span>Where little explorers</span>
              <span className="rounded-xl bg-amber-200/60 px-3 py-0.5 text-amber-900">
                <RotatingText
                  texts={[
                    "Learn Joyfully 🧩",
                    "Play Creatively 🎨",
                    "Grow Confidently ⭐",
                    "Make Lifelong Friends 🧸",
                  ]}
                  rotationInterval={2600}
                  staggerDuration={0.02}
                  className="inline-block"
                />
              </span>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              Balvatika Preschool is Patna&apos;s joyful early-learning haven in New Jaganpura. We blend
              Montessori play-way activities, Jolly Phonics, and unconditional loving care in a 100%
              CCTV-monitored child-safe campus.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <a
                href="#enquiry"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-7 py-3.5 font-display text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                <span>Book a Free Campus Tour</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">🌟</span>
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-3.5 font-display text-base font-bold text-slate-800 shadow-sm transition-all hover:border-amber-400 hover:bg-amber-50"
              >
                <span>Explore Programs</span>
                <span>👇</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-9 grid grid-cols-3 gap-2 border-t border-slate-200/80 pt-6 text-center sm:max-w-md sm:gap-4 lg:text-left">
              <div>
                <p className="font-display text-2xl font-black text-slate-900 sm:text-3xl">
                  <NumberTicker value={10} />:1
                </p>
                <p className="text-xs font-semibold text-slate-500">Student-Teacher Ratio</p>
              </div>
              <div>
                <p className="font-display text-2xl font-black text-slate-900 sm:text-3xl">100%</p>
                <p className="text-xs font-semibold text-slate-500">CCTV Campus Safety</p>
              </div>
              <div>
                <p className="font-display text-2xl font-black text-slate-900 sm:text-3xl">1.5 - 6</p>
                <p className="text-xs font-semibold text-slate-500">Years Age Cohort</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Collage Column */}
          <div className="relative mx-auto max-w-lg lg:col-span-5 lg:max-w-none">
            {/* Background Blob Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-amber-100 via-pink-100 to-sky-100 p-3 shadow-2xl">
              <img
                src="/images/childrens/kids-happy.jpg"
                alt="Smiling little children at Balvatika Preschool Patna"
                className="h-[360px] w-full rounded-[2rem] object-cover sm:h-[420px]"
                loading="eager"
              />

              {/* Floating Child Interaction Card */}
              <div className="absolute -bottom-2 -left-2 rounded-2xl border-2 border-white bg-white/95 p-3.5 shadow-xl backdrop-blur-sm sm:bottom-4 sm:left-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700 font-bold">
                    ❤️
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Loved by 500+ Parents</span>
                    <span className="block text-[11px] text-slate-500">Across New Jaganpura, Patna</span>
                  </div>
                </div>
              </div>

              {/* Floating Admissions Tag */}
              <div className="absolute top-4 right-4 rounded-2xl border-2 border-amber-300 bg-amber-400 px-3.5 py-1.5 font-display text-xs font-black text-slate-950 shadow-md">
                ⭐ Patna&apos;s Preferred Play School
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* HIGHLIGHTS & PROGRAMS SECTION (Kiden & EuroKids Inspired)                  */
/* -------------------------------------------------------------------------- */

const PROGRAMS = [
  {
    name: "Play Group",
    age: "1.5 – 2.5 Years",
    tagline: "Sensory Fun & First Steps into the World",
    color: "from-amber-400 to-amber-500",
    border: "border-amber-300 hover:border-amber-400",
    bg: "bg-amber-50/70",
    badge: "bg-amber-100 text-amber-800",
    emoji: "🧸",
    features: [
      "Sensory touch & musical rhymes",
      "Gentle toilet training guidance",
      "Social bonding & sharing habits",
      "Fine motor finger exploration",
    ],
  },
  {
    name: "Nursery",
    age: "2.5 – 3.5 Years",
    tagline: "Language, Phonics & Creative Curiosity",
    color: "from-pink-500 to-rose-500",
    border: "border-pink-300 hover:border-pink-400",
    bg: "bg-pink-50/70",
    badge: "bg-pink-100 text-pink-800",
    emoji: "🎨",
    features: [
      "Jolly Phonics letter recognition",
      "Storytelling & picture reading",
      "Color, shapes & number matching",
      "Clay modeling & paper tearing craft",
    ],
  },
  {
    name: "LKG (Junior KG)",
    age: "3.5 – 4.5 Years",
    tagline: "Early Writing, Number Concepts & Curiosity",
    color: "from-sky-400 to-blue-500",
    border: "border-sky-300 hover:border-sky-400",
    bg: "bg-sky-50/70",
    badge: "bg-sky-100 text-sky-800",
    emoji: "🚀",
    features: [
      "Pencil grip & pre-writing skills",
      "Sight words & simple vocabulary",
      "Math counting up to 50 & patterns",
      "Public recitation & stage speech",
    ],
  },
  {
    name: "UKG (Senior KG)",
    age: "4.5 – 5.5+ Years",
    tagline: "Primary School Readiness & Confident Growth",
    color: "from-emerald-400 to-teal-500",
    border: "border-emerald-300 hover:border-emerald-400",
    bg: "bg-emerald-50/70",
    badge: "bg-emerald-100 text-emerald-800",
    emoji: "🌟",
    features: [
      "Independent 3-letter word reading",
      "Basic addition & mental reasoning",
      "Environmental & science curiosity",
      "Grade 1 school interview readiness",
    ],
  },
];

export function Highlights() {
  return (
    <section id="programs" className="relative bg-slate-50/50 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionBadge color="purple">
            <span>📚</span> Our Joyful Learning Programs
          </SectionBadge>
          <SplitText
            as="h2"
            text="Carefully Crafted Programs for Every Early Stage"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            From first toddler steps to confident kindergarten graduates, each age group has a
            lovingly designed curriculum aligned with national early-childhood guidelines (NEP 2020).
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((prog, index) => (
            <BlurFade key={prog.name} delay={index * 0.08} as="div">
              <div
                className={`group flex h-full flex-col justify-between rounded-3xl border-2 ${prog.border} ${prog.bg} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-white`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{prog.emoji}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-black ${prog.badge}`}>
                      {prog.age}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {prog.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-slate-500">{prog.tagline}</p>

                  <div className="my-5 border-t border-slate-100" />

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {prog.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href="#enquiry"
                    className="block w-full rounded-2xl bg-slate-900 py-2.5 text-center font-display text-xs font-bold text-white transition-all duration-200 group-hover:bg-primary"
                  >
                    Enrol for {prog.name} →
                  </a>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Daycare Banner Note */}
        <div className="mt-8 rounded-3xl border-2 border-purple-200 bg-purple-50/80 p-5 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-purple-600 text-2xl text-white">
              ⏰
            </span>
            <div>
              <strong className="block text-sm font-bold text-slate-900">
                Working Parents? Full Daycare &amp; Extended Play Available!
              </strong>
              <span className="text-xs text-slate-600">
                Safe, air-conditioned daycare facility with nutritious meals and supervised care till late afternoon.
              </span>
            </div>
          </div>
          <div className="mt-3 sm:mt-0">
            <a
              href="#enquiry"
              className="inline-flex rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-purple-700"
            >
              Enquire Daycare
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* ABOUT US SECTION                                                           */
/* -------------------------------------------------------------------------- */

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <BlurFade>
          <div className="relative">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] border-4 border-amber-200 bg-amber-50 p-3 shadow-xl">
              <img
                src="/images/childrens/BalVatika-Classroom.png"
                alt="Balvatika Preschool interactive classroom learning with joyful children"
                width={1440}
                height={1080}
                loading="lazy"
                className="h-[360px] w-full rounded-[2rem] object-cover sm:h-[420px]"
              />
              <div className="absolute top-6 left-6 rounded-2xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur-xs">
                <p className="font-display text-sm font-bold text-slate-900">Established In Patna</p>
                <p className="text-xs font-semibold text-amber-600">Opp. King&apos;s Resort, New Jaganpura</p>
              </div>
            </div>

            {/* Small Floating Image Overlay */}
            <div className="absolute -bottom-6 -right-2 hidden w-48 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:block lg:-right-6">
              <img
                src="/images/childrens/photo-young-girl-kindergarten-sitting-table-holding-piece-paper_564692-77905.jpg"
                alt="Students craft and creative activity at Balvatika"
                className="h-32 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.15}>
          <div>
            <SectionBadge color="amber">
              <span>🏡</span> Welcome to Balvatika Preschool
            </SectionBadge>
            <SplitText
              as="h2"
              text="A Loving Second Home Where Little Hearts Feel Safe & Valued"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                At <strong>Balvatika Preschool</strong>, we believe early childhood is the most magical phase
                of human life. Located in New Jaganpura, Patna, our campus is designed from a child&apos;s
                perspective &mdash; colorful, safe, welcoming, and endlessly inspiring.
              </p>
              <p>
                Rather than burdening young toddlers with rote learning, we celebrate curiosity through
                sensory activities, phonics games, clay sculpting, music rhythms, and interactive storytelling.
                Every child is recognized as an individual and guided with love and patience.
              </p>
              <p>
                Our team of dedicated, trained early-childhood educators and caring female attendants ensure
                every toddler feels heard, cherished, and excited to jump onto the school bus every single morning!
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3.5 text-center">
                <span className="font-display text-2xl font-black text-amber-600">10:1</span>
                <p className="text-xs font-bold text-slate-700">Small Classes</p>
              </div>
              <div className="rounded-2xl border border-pink-200 bg-pink-50/70 p-3.5 text-center">
                <span className="font-display text-2xl font-black text-pink-600">100%</span>
                <p className="text-xs font-bold text-slate-700">CCTV Safety</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-3.5 text-center sm:col-span-1">
                <span className="font-display text-2xl font-black text-emerald-600">NEP 2020</span>
                <p className="text-xs font-bold text-slate-700">Play-Way Aligned</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-display text-sm font-bold text-white transition-all hover:bg-primary"
              >
                <span>Schedule a Campus Walkthrough</span>
                <span>👉</span>
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* WHY CHOOSE US & ORBITING USPs SECTION (Bachpan Inspired)                   */
/* -------------------------------------------------------------------------- */

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-purple-50/20 to-slate-50 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionBadge color="pink">
            <span>✨</span> The Balvatika Advantage
          </SectionBadge>
          <SplitText
            as="h2"
            text="Why Patna Parents Love & Choose Balvatika"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            We combine warm emotional nurturing with modern preschool infrastructure to give your
            child an unbeatable foundation.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Interactive Orbiting Circles Hub (MagicUI) */}
          <div className="relative mx-auto flex h-[380px] w-full max-w-[420px] items-center justify-center lg:col-span-6 lg:h-[460px]">
            {/* Center Circle */}
            <div className="z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-amber-300 bg-white p-2 text-center shadow-2xl sm:h-32 sm:w-32">
              <span className="text-2xl">🏫</span>
              <strong className="mt-1 font-display text-xs font-black text-slate-900 leading-tight">
                Why Balvatika
              </strong>
              <span className="text-[10px] font-bold text-amber-600">Patna</span>
            </div>

            {/* Inner Orbit (radius 110) */}
            <OrbitingCircles duration={22} radius={105} iconSize={42}>
              <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-amber-300 bg-amber-100 text-lg shadow-md" title="Jolly Phonics">
                🔤
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-pink-300 bg-pink-100 text-lg shadow-md" title="Montessori Toys">
                🧩
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-sky-300 bg-sky-100 text-lg shadow-md" title="Smart AV Screens">
                💻
              </div>
            </OrbitingCircles>

            {/* Outer Orbit (radius 165) */}
            <OrbitingCircles duration={30} radius={165} reverse iconSize={44}>
              <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-emerald-300 bg-emerald-100 text-lg shadow-md" title="100% CCTV">
                🛡️
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-purple-300 bg-purple-100 text-lg shadow-md" title="Loving Attendants">
                👩‍🏫
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-rose-300 bg-rose-100 text-lg shadow-md" title="Soft Ball Pool">
                ⚽
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-amber-400 bg-amber-200 text-lg shadow-md" title="Safe Transport">
                🚌
              </div>
            </OrbitingCircles>
          </div>

          {/* Right: Feature Cards Bento Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {[
              {
                icon: Brain,
                title: "Montessori & Play-Way",
                desc: "Hands-on sensorial kits stimulate brain synapses and cognitive curiosity from age 1.5.",
                color: "bg-amber-50 border-amber-200 text-amber-700",
              },
              {
                icon: ShieldCheck,
                title: "100% CCTV Secured",
                desc: "Every corner of our classrooms, play zones, and entrances is under live security watch.",
                color: "bg-emerald-50 border-emerald-200 text-emerald-700",
              },
              {
                icon: Heart,
                title: "Tender Female Care Staff",
                desc: "Trained NTT teachers and loving didis support potty training, feeding, and comfort.",
                color: "bg-pink-50 border-pink-200 text-pink-700",
              },
              {
                icon: Rocket,
                title: "Primary School Ready",
                desc: "Graduates develop reading fluency, numbers, and confidence to ace top school interviews.",
                color: "bg-sky-50 border-sky-200 text-sky-700",
              },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className={`rounded-3xl border-2 ${color} bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <span className={`inline-grid h-11 w-11 place-items-center rounded-2xl border ${color}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 360° HOLISTIC PEDAGOGY (Replacing Boarding with Preschool Curriculum)       */
/* -------------------------------------------------------------------------- */

export function AcademicsAndBoarding() {
  const [activeTab, setActiveTab] = useState(0);

  const PILLARS = [
    {
      title: "Linguistic & Phonics",
      icon: BookOpen,
      emoji: "📖",
      desc: "Developing strong phonemic awareness, vocabulary, and confident speech using UK Jolly Phonics and interactive rhyme sessions.",
      points: ["Jolly Phonics 42 Letter Sounds", "Picture Book Reading Habit", "English & Hindi Rhymes", "Stage Speech & Mic Confidence"],
      image: "/images/childrens/children-group-reading-books_23-2148107425.jpg",
    },
    {
      title: "Cognitive & Early Math",
      icon: Puzzle,
      emoji: "🧩",
      desc: "Nurturing analytical thinking through hands-on sorting, patterns, shapes, counting, and problem-solving puzzles.",
      points: ["Concrete Montessori Math Kits", "Spatial & Color Recognition", "Logic & Pattern Sequences", "Memory & Concentration Games"],
      image: "/images/childrens/adorable-hispanic-girl-playing-with-maths-puzzle-game-sitting-table-kindergarten.jpg",
    },
    {
      title: "Motor Skills & Agility",
      icon: Footprints,
      emoji: "🏃‍♂️",
      desc: "Coordinating muscles through scissor cutting, clay play, balance beams, ball pools, and outdoor active games.",
      points: ["Fine Motor Grip & Threading", "Gross Motor Obstacle Course", "Dance, Aerobics & Kids Yoga", "Hand-Eye Coordination Balls"],
      image: "/images/childrens/preschool-kids-playtime-with-educational-toys-puzzles_73899-44987.jpg",
    },
    {
      title: "Creative Arts & Expression",
      icon: Palette,
      emoji: "🎨",
      desc: "Fostering uninhibited imagination through messy finger painting, puppetry, role-playing, and celebratory dress-ups.",
      points: ["Sensory Messy Play & Clay", "Dramatics & Puppet Theatre", "Music & Rhythm Instruments", "Festival Art & Craft Workshops"],
      image: "/images/childrens/adorable-hispanic-toddler-playing-xylophone-standing-home.jpg",
    },
  ];

  return (
    <section id="academics" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionBadge color="emerald">
            <span>🌱</span> 360° Holistic Early Pedagogy
          </SectionBadge>
          <SplitText
            as="h2"
            text="How We Nurture the Whole Child at Balvatika"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Inspired by proven early-childhood methodologies (Montessori &amp; Play-Way), our 4
            developmental pillars prepare little learners for life, not just books.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {PILLARS.map((p, idx) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-xs font-bold transition-all sm:text-sm ${
                activeTab === idx
                  ? "bg-slate-900 text-white shadow-lg scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>{p.emoji}</span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Card */}
        <div className="mt-8 rounded-3xl border-2 border-slate-100 bg-slate-50/60 p-6 sm:p-10 shadow-sm">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="text-3xl">{PILLARS[activeTab].emoji}</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                {PILLARS[activeTab].title} Development
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {PILLARS[activeTab].desc}
              </p>

              <div className="mt-6 border-t border-slate-200/80 pt-5">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Key Learning Highlights
                </p>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {PILLARS[activeTab].points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                <img
                  src={PILLARS[activeTab].image}
                  alt={PILLARS[activeTab].title}
                  className="h-64 w-full object-cover sm:h-72"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* LIFE AT BALVATIKA (GALLERY)                                                */
/* -------------------------------------------------------------------------- */

const GALLERY = [
  {
    src: "/images/childrens/BalVatika-Classroom.png",
    alt: "Balvatika Preschool classroom storytelling and early learning circle in Patna",
    w: 1200,
    h: 900,
  },
  {
    src: "/images/childrens/21c9718e-9907-44c6-9ed2-477ea179e0be.png",
    alt: "Interactive preschool class with cheerful children actively participating",
    w: 1200,
    h: 800,
  },
  {
    src: "/images/childrens/kids-happy.jpg",
    alt: "Joyful play-based learning with wooden blocks at Balvatika",
    w: 1080,
    h: 1080,
  },
  {
    src: "/images/childrens/photo-young-girl-kindergarten-sitting-table-holding-piece-paper_564692-77905.jpg",
    alt: "Creative craft and letter recognition session by kindergarten student",
    w: 1200,
    h: 800,
  },
  {
    src: "/images/childrens/nursery-preschool-children-kids-studying-learning-class-with-teacher_1021867-37821.jpg",
    alt: "Nursery group learning discovery concepts guided by teacher",
    w: 1200,
    h: 800,
  },
  {
    src: "/images/childrens/preschool-kids-playtime-with-educational-toys-puzzles_73899-44987.jpg",
    alt: "Hands-on Montessori puzzle and fine motor coordination activity",
    w: 1200,
    h: 800,
  },
  {
    src: "/images/childrens/close-up-child-enjoying-didactic-game_23-2149316905.jpg",
    alt: "Early cognitive geometric shape sorting and problem solving",
    w: 1200,
    h: 800,
  },
  {
    src: "/images/childrens/diverse-kids-reading-books.jpg",
    alt: "Enthusiastic book reading and storytelling circle",
    w: 1200,
    h: 800,
  },
  {
    src: "/images/childrens/realistic-scene-with-young-children-with-autism-playing.jpg",
    alt: "Inclusive, compassionate, and sensory-friendly play environment",
    w: 1200,
    h: 800,
  },
];

export function LifeAtBalvatika() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const slides = useMemo(
    () => GALLERY.map((g) => ({ src: g.src, alt: g.alt, width: g.w, height: g.h })),
    [],
  );

  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionBadge color="amber">
            <span>📸</span> Joyful Moments Gallery
          </SectionBadge>
          <SplitText
            as="h2"
            text="Life & Smiles at Balvatika Preschool"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            A glimpse into our vibrant days &mdash; play activities, festival celebrations, stage
            performances, and everyday discoveries in Patna.
          </p>
        </div>

        <FocusCards
          cards={GALLERY}
          className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3"
          onCardClick={(index, element) => {
            triggerRef.current = element;
            setOpenIndex(index);
          }}
        />

        <GalleryLightbox
          slides={slides}
          index={openIndex ?? 0}
          open={openIndex !== null}
          onClose={() => {
            setOpenIndex(null);
            triggerRef.current?.focus();
          }}
        />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PRESCHOOL FACILITIES MARQUEE                                               */
/* -------------------------------------------------------------------------- */

const FACILITIES = [
  { icon: Blocks, label: "Indoor Soft Play & Ball Pool" },
  { icon: Puzzle, label: "Montessori Learning Hub" },
  { icon: Laptop, label: "Smart Audio-Visual Room" },
  { icon: Palette, label: "Creative Art & Craft Corner" },
  { icon: Bus, label: "Safe GPS Transport in Patna" },
  { icon: ShieldCheck, label: "100% CCTV Surveillance" },
  { icon: Music, label: "Music & Rhymes Arena" },
  { icon: Baby, label: "Child-Sized Hygiene Washrooms" },
  { icon: Apple, label: "Nutritious Snack Break Guidance" },
];

export function Facilities() {
  return (
    <section id="facilities" className="overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <SectionBadge color="sky">
          <span>🎪</span> Child-Centric Infrastructure
        </SectionBadge>
        <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          Designed for Little Hands &amp; Big Imaginations
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
          Every inch of our preschool is built with child ergonomics, hygiene, and safe exploration in mind.
        </p>
      </div>

      <div className="relative mt-10">
        <Marquee pauseOnHover className="[--duration:28s]">
          {FACILITIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex shrink-0 items-center gap-3.5 rounded-2xl border-2 border-slate-100 bg-white p-4 pr-6 shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold whitespace-nowrap text-slate-800">{label}</span>
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CO-CURRICULAR & CELEBRATIONS                                               */
/* -------------------------------------------------------------------------- */

const ACTIVITIES = [
  { icon: Palette, label: "Finger Painting & Clay" },
  { icon: Music, label: "Rhymes & Rhythm Beats" },
  { icon: Sparkles, label: "Annual Concert & Stage" },
  { icon: Sun, label: "Kids Yoga & Free Dance" },
  { icon: Footprints, label: "Splash & Water Play Day" },
  { icon: Apple, label: "Healthy Fruit Tasting Days" },
  { icon: Award, label: "Fancy Dress & Story Fest" },
];

const UPCOMING_EVENTS = [
  { icon: Palette, title: "Color Day & Messy Play", when: "Every Friday" },
  { icon: Sparkles, title: "Grandparents Gratitude Day", when: "Term 1" },
  { icon: Award, title: "Annual Sports & Fun Carnival", when: "Winter" },
  { icon: Music, title: "Rhyme Recitation Competition", when: "Monthly" },
];

export function CoCurricular() {
  return (
    <section id="cocurricular" className="relative overflow-hidden bg-slate-50/70 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionBadge color="purple">
            <span>🎉</span> Beyond Textbooks
          </SectionBadge>
          <SplitText
            as="h2"
            text="Joyful Celebrations, Stages & Festivals"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          />
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            At Balvatika, every week brings a reason to celebrate! Children build stage courage,
            social bonding, and happiness through rich theme days and creative arts.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {ACTIVITIES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-2xs"
              >
                <Icon className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border-2 border-purple-200/60 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-slate-900">
              🎈 Fun Traditions at Balvatika
            </h3>
            <AnimatedList className="mt-4 grid gap-2.5">
              {UPCOMING_EVENTS.map(({ icon: Icon, title, when }) => (
                <AnimatedListItem
                  key={title}
                  className="flex items-center gap-3 rounded-2xl bg-purple-50/60 px-4 py-3"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-purple-200/80 text-purple-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold text-slate-900">{title}</span>
                  <span className="ml-auto text-[11px] font-semibold text-purple-600">{when}</span>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </div>
        </div>

        <BlurFade delay={0.1}>
          <div className="overflow-hidden rounded-3xl border-4 border-white shadow-xl">
            <img
              src="/images/school/cultural-dance-performance.jpg"
              alt="Balvatika Preschool students performing cultural celebration"
              width={1440}
              height={1080}
              loading="lazy"
              className="h-[380px] w-full object-cover lg:h-[460px]"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PARENT TESTIMONIALS (Preschool Specific)                                   */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    quote:
      "My 2.5-year-old daughter used to cry when leaving home, but within a week at Balvatika, she runs happily into her classroom! The teachers and didis are so loving.",
    name: "Pooja Sharma",
    role: "Mother of Ananya (Play Group)",
    rating: 5,
  },
  {
    quote:
      "The Jolly Phonics curriculum has done wonders for my son's English speaking and letter recognition. He surprises us by reading signboards on the road in Patna!",
    name: "Dr. Alok Verma",
    role: "Father of Aarav (Nursery)",
    rating: 5,
  },
  {
    quote:
      "Balvatika prepared our daughter so well that she easily cleared admission into our dream primary school for Class 1. Truly Patna's best preschool choice.",
    name: "Smriti & Rahul Sinha",
    role: "Parents of Navya (UKG Graduate)",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionBadge color="pink">
            <span>❤️</span> Words from Our Families
          </SectionBadge>
          <SplitText
            as="h2"
            text="Why Patna Parents Trust Balvatika"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Real stories from mothers and fathers who watched their little ones blossom in our care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role, rating }, i) => (
            <BlurFade key={name} delay={i * 0.1} as="div">
              <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-slate-100 bg-slate-50/60 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-xl">
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rating }).map((_, rIdx) => (
                      <span key={rIdx} className="text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-200/70 pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-200 font-bold text-amber-900">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-slate-900">{name}</strong>
                    <span className="block text-xs font-semibold text-amber-600">{role}</span>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
