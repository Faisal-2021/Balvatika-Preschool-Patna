"use client";

import { Baby, Bus, Cctv, HeartHandshake, ShieldCheck, Sparkles, Stethoscope, UserCheck } from "lucide-react";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

const SAFETY_FEATURES = [
  {
    icon: Cctv,
    title: "100% CCTV Monitored Campus",
    text: "High-definition camera surveillance covers every classroom, activity corridor, play area, and school gate.",
    tag: "Active Surveillance",
    color: "bg-amber-100 text-amber-700 border-amber-300",
  },
  {
    icon: Baby,
    title: "Child-Proof & Soft Edge Spaces",
    text: "Non-toxic paint, rounded furniture corners, anti-skid foam flooring in play zones, and finger-pinch door guards.",
    tag: "Injury Prevention",
    color: "bg-pink-100 text-pink-700 border-pink-300",
  },
  {
    icon: HeartHandshake,
    title: "Loving Female Care Attendants",
    text: "Dedicated female didis assist little toddlers with bathroom hygiene, handwashing, hydration, and comfort.",
    tag: "Tender Care",
    color: "bg-purple-100 text-purple-700 border-purple-300",
  },
  {
    icon: Sparkles,
    title: "Daily Toy & Classroom Sanitization",
    text: "Toys, learning blocks, and surfaces are disinfected daily using child-safe organic sanitization products.",
    tag: "Hygiene Priority",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
  },
  {
    icon: Bus,
    title: "GPS-Tracked Safe Transport",
    text: "School vans equipped with speed governors, GPS tracking, and an attendant accompanying every child.",
    tag: "Transit Safety",
    color: "bg-sky-100 text-sky-700 border-sky-300",
  },
  {
    icon: Stethoscope,
    title: "Pediatric First Aid & Doctor on Call",
    text: "Well-stocked child first-aid kit, temperature checks, and a verified pediatrician contact in Patna for emergencies.",
    tag: "Medical Readiness",
    color: "bg-rose-100 text-rose-700 border-rose-300",
  },
];

export function SafetyCare() {
  return (
    <section id="safety" className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-label">
            <span>🛡️</span> Your Child&apos;s Safety Is Our #1 Promise
          </span>
          <SplitText
            as="h2"
            text="Uncompromised Safety, Total Peace of Mind"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            We understand that handing your precious little one to a preschool requires utmost
            trust. Here is how we ensure their physical and emotional well-being every minute.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAFETY_FEATURES.map(({ icon: Icon, title, text, tag, color }, i) => (
            <BlurFade key={title} delay={i * 0.07} as="li">
              <div className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl border ${color} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500">
                      {tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Certified Safe Environment</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </ul>
      </div>
    </section>
  );
}
