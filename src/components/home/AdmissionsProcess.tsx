"use client";

import { Backpack, CalendarCheck, ClipboardList, HeartHandshake, PhoneCall, Sparkles } from "lucide-react";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

const STEPS = [
  {
    icon: PhoneCall,
    step: "Step 01",
    title: "Connect & Book a Tour",
    text: "Fill out our quick online enquiry form or call +91 9031025415 to schedule a pleasant, stress-free campus walk-through in Patna.",
    color: "bg-amber-100 text-amber-700 border-amber-300",
  },
  {
    icon: HeartHandshake,
    step: "Step 02",
    title: "Campus Visit & Play Interaction",
    text: "Bring your child along! They explore our play zones and toys while our early educators observe their natural comfort and readiness.",
    color: "bg-pink-100 text-pink-700 border-pink-300",
  },
  {
    icon: ClipboardList,
    step: "Step 03",
    title: "Simple Form & Documentation",
    text: "Submit the simple enrollment form along with child birth certificate, passport photos, and address proof.",
    color: "bg-sky-100 text-sky-700 border-sky-300",
  },
  {
    icon: Backpack,
    step: "Step 04",
    title: "Welcome Kit & Orientation",
    text: "Collect your child's welcome kit (cute backpack, activity books, ID card) and join our warm parent orientation session!",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
  },
];

export function AdmissionsProcess() {
  return (
    <section id="admissions-process" className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-label">
            <span>🎒</span> Hassle-Free Enrollment
          </span>
          <SplitText
            as="h2"
            text="Admissions Made Simple in 4 Easy Steps"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            We believe the preschool journey should begin with joy and warmth, not paperwork
            stress.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, step, title, text, color }, i) => (
            <BlurFade key={title} delay={i * 0.1} as="li">
              <div className="relative flex h-full flex-col justify-between rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl border ${color}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-black text-slate-200">
                      {step}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Warm & Helpful Staff</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-8 py-4 text-base font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Book Your Child&apos;s Free Visit Today</span>
            <span>👉</span>
          </a>
        </div>
      </div>
    </section>
  );
}
