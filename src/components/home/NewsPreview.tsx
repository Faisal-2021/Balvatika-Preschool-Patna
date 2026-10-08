"use client";

import { ArrowRight, Award, CalendarDays, Heart, Palette, Sparkles } from "lucide-react";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

const NEWS = [
  {
    icon: Sparkles,
    date: "Coming Up",
    title: "Friday Color Day & Sensory Messy Play",
    text: "Toddlers will experiment with non-toxic colors, finger-painting textures, and creative paper shapes.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Award,
    date: "Annual Event",
    title: "Tiny Tots Winter Sports Carnival",
    text: "Fun obstacle courses, balance games, ball races, and participation medals for every single child!",
    color: "bg-pink-100 text-pink-700",
  },
  {
    icon: Heart,
    date: "Family Event",
    title: "Grandparents Gratitude Morning",
    text: "Children perform sweet nursery rhymes and present handmade greeting cards to their loving grandparents.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: CalendarDays,
    date: "Academic",
    title: "Phonics & Rhyme Milestone Showcase",
    text: "Parents join our circle time to celebrate children's reading readiness and stage recitation confidence.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export function NewsPreview() {
  return (
    <section id="latest" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">
              <span>🎈</span> Campus Happenings
            </span>
            <SplitText
              as="h2"
              text="Joyful Events & Stories at Balvatika"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            />
          </div>
          <a
            href="#notices"
            className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-primary hover:underline"
          >
            <span>View All Notices</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS.map(({ icon: Icon, date, title, text, color }, index) => (
            <BlurFade key={title} delay={index * 0.08} as="div">
              <article className="flex h-full flex-col justify-between rounded-3xl border-2 border-slate-100 bg-slate-50/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`grid h-10 w-10 place-items-center rounded-2xl ${color}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600">
                      {date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3">
                  <a
                    href="#enquiry"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
