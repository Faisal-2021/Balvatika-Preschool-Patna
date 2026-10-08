"use client";

import { BookOpenCheck, Building2, Flag, Heart, Sparkles } from "lucide-react";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

const MILESTONES = [
  {
    icon: Flag,
    year: "Foundation",
    title: "Preschool Founded with Heart",
    text: "Balvatika Preschool opened in New Jaganpura, Patna with a commitment to joyful, loving early childhood education.",
    color: "bg-amber-100 text-amber-700 border-amber-300",
  },
  {
    icon: BookOpenCheck,
    year: "Curriculum",
    title: "Play-Way & Montessori Approach",
    text: "Adopted a comprehensive child-centric curriculum blending Jolly Phonics, sensorial kits, and NEP 2020 early learning standards.",
    color: "bg-pink-100 text-pink-700 border-pink-300",
  },
  {
    icon: Sparkles,
    year: "Programs",
    title: "Play Group to UKG Complete Spectrum",
    text: "Welcoming toddlers and little scholars aged 1.5 to 6 years with customized cohorts and caring 10:1 mentor attention.",
    color: "bg-sky-100 text-sky-700 border-sky-300",
  },
  {
    icon: Building2,
    year: "Campus",
    title: "Safe Soft-Play Gym & Smart AV Rooms",
    text: "Continuous enhancement of indoor soft-play ball pits, interactive audio-visual screens, and 100% CCTV coverage.",
    color: "bg-purple-100 text-purple-700 border-purple-300",
  },
  {
    icon: Heart,
    year: "Present Day",
    title: "Patna's Cherished Preschool Family",
    text: "Today, over 500 happy families trust Balvatika as the springboard for their children's primary school success.",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
  },
];

export function JourneyTimeline() {
  return (
    <section id="journey" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="section-label">
            <span>🌱</span> Our Growing Journey
          </span>
          <SplitText
            as="h2"
            text="Growing with Purpose, Love & Smiles"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          />
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A story of dedication to early childhood education, patient care, and happy little graduates in Patna.
          </p>

          <div className="mt-8 rounded-3xl border-2 border-amber-200 bg-amber-50/70 p-5">
            <p className="font-display text-sm font-bold text-slate-900">
              📍 Located in New Jaganpura
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Opp. King&apos;s Resort, Patna &ndash; easily accessible for families across the city.
            </p>
          </div>
        </div>

        <ol className="relative ml-4 border-l-2 border-amber-300 pl-8 sm:ml-6 sm:pl-12">
          {MILESTONES.map(({ icon: Icon, year, title, text, color }, index) => (
            <BlurFade key={title} delay={index * 0.08} as="li" className="relative pb-10 last:pb-0">
              <span
                className={`absolute top-0 -left-[3.25rem] grid h-10 w-10 place-items-center rounded-2xl border-2 shadow-sm sm:-left-[4.25rem] ${color}`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-0.5 text-[11px] font-bold text-slate-600 uppercase">
                {year}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-slate-900 sm:text-2xl">
                {title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                {text}
              </p>
            </BlurFade>
          ))}
        </ol>
      </div>
    </section>
  );
}
