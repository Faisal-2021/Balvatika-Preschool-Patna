"use client";

import { Apple, BookOpen, Music, Palette, Smile, Sparkles, Sun } from "lucide-react";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

const ROUTINE_STEPS = [
  {
    icon: Sun,
    time: "09:00 AM",
    title: "Circle Time & Morning Rhymes",
    desc: "Warm hugs, morning prayer, attendance song, and lively action rhymes to start the day with big smiles.",
    tag: "Welcome & Energy",
    color: "bg-amber-100 text-amber-600 border-amber-300",
  },
  {
    icon: Sparkles,
    time: "09:45 AM",
    title: "Montessori & Concept Exploration",
    desc: "Hands-on sensorial kits, alphabet blocks, number recognition, and color sorting tailored to each child.",
    tag: "Brain Development",
    color: "bg-purple-100 text-purple-600 border-purple-300",
  },
  {
    icon: Apple,
    time: "10:30 AM",
    title: "Healthy Snack & Manners Break",
    desc: "Hydration, sharing snacks with peers, practicing hygiene habits like handwashing and saying please & thank you.",
    tag: "Social Manners",
    color: "bg-emerald-100 text-emerald-600 border-emerald-300",
  },
  {
    icon: Palette,
    time: "11:00 AM",
    title: "Creative Arts, Music & Phonics",
    desc: "Finger painting, clay sculpting, Jolly Phonics sounds, rhymes and dance sessions that ignite creative minds.",
    tag: "Expression & Arts",
    color: "bg-pink-100 text-pink-600 border-pink-300",
  },
  {
    icon: Smile,
    time: "11:45 AM",
    title: "Soft Play Gym & Outdoor Fun",
    desc: "Ball pit, climbing tunnels, balance beams, and supervised free play for physical motor coordination.",
    tag: "Physical Agility",
    color: "bg-sky-100 text-sky-600 border-sky-300",
  },
  {
    icon: BookOpen,
    time: "12:30 PM",
    title: "Storytelling, Puppets & Goodbye",
    desc: "Interactive moral story with hand puppets, recap of what we discovered today, and cheerful goodbye songs.",
    tag: "Story & Reflection",
    color: "bg-indigo-100 text-indigo-600 border-indigo-300",
  },
];

export function DailyRoutine() {
  return (
    <section id="daily-routine" className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-sky-50/40 px-4 py-16 sm:px-6 lg:py-24">
      {/* Playful background doodles */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <span className="section-label">
            <span>⏰</span> A Joyful Preschool Day
          </span>
          <SplitText
            as="h2"
            text="A Day Full of Joy & Discovery at Balvatika"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Our daily schedule balances structured learning with joyful free play, fostering
            social skills, physical confidence, and curiosity every single hour.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTINE_STEPS.map(({ icon: Icon, time, title, desc, tag, color }, index) => (
            <BlurFade key={time} delay={index * 0.08} as="div">
              <div className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 rounded-2xl border px-3 py-1.5 text-xs font-bold ${color}`}>
                      <Icon className="h-4 w-4" />
                      <span>{time}</span>
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                      {tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Activity Step {index + 1} of 6</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
