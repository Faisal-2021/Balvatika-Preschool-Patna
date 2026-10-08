"use client";

import { Award, Heart, ShieldCheck, Smile, Sparkles, Users } from "lucide-react";
import { BlurFade, NumberTicker, SplitText } from "@/components/ui/motion-primitives";

const STATS = [
  {
    icon: Users,
    value: 10,
    prefix: "",
    suffix: ":1",
    headline: "Student-to-Teacher Ratio",
    text: "Ultra-small cohorts ensure every toddler receives attentive, personalized love and mentorship.",
    bg: "bg-amber-50 border-amber-200 text-amber-600",
  },
  {
    icon: Smile,
    value: 500,
    prefix: "",
    suffix: "+",
    headline: "Happy Little Learners",
    text: "Nurtured across Patna with joyful memories, foundational confidence, and curious minds.",
    bg: "bg-pink-50 border-pink-200 text-pink-600",
  },
  {
    icon: ShieldCheck,
    value: 100,
    prefix: "",
    suffix: "%",
    headline: "Child-Proof & CCTV Safe",
    text: "Round-the-clock live surveillance, biometric security, and vetted female care attendants.",
    bg: "bg-emerald-50 border-emerald-200 text-emerald-600",
  },
  {
    icon: Award,
    value: 100,
    prefix: "",
    suffix: "%",
    headline: "School Transition Success",
    text: "Our UKG graduates excel seamlessly in interviews & admissions at top CBSE & ICSE schools.",
    bg: "bg-sky-50 border-sky-200 text-sky-600",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-slate-50/60 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-label">
            <span>⭐</span> Why Patna Parents Trust Us
          </span>
          <SplitText
            as="h2"
            text="Numbers That Reflect Our Care & Commitment"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Every number represents a happy smile, an attentive teacher, and a trusting family
            in Patna.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, prefix, suffix, headline, text, bg }, i) => (
            <BlurFade key={headline} delay={i * 0.1} as="div">
              <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-white bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <span className={`inline-grid h-12 w-12 place-items-center rounded-2xl border ${bg}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <div className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-900">
                    {prefix && <span>{prefix}</span>}
                    {value !== undefined && <NumberTicker value={value} />}
                    {suffix && <span className="text-primary">{suffix}</span>}
                  </div>

                  <h3 className="mt-2 font-display text-lg font-bold text-slate-800">
                    {headline}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{text}</p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
