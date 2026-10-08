"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Heart, Mail, Sparkles } from "lucide-react";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";
import { Button } from "@/components/ui/button";
import { fireSchoolConfetti } from "@/components/ui/confetti";

export function StayConnected() {
  const [joined, setJoined] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setJoined(true);
    fireSchoolConfetti();
  }

  return (
    <section id="stay-connected" className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:py-24">
      <BlurFade>
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border-2 border-amber-200 bg-gradient-to-tr from-amber-100/60 via-white to-pink-50/60 p-8 text-center shadow-lg sm:p-12">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-amber-400 text-slate-950 font-bold shadow-md">
            💌
          </span>

          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-200/80 px-3.5 py-1 text-xs font-bold text-amber-900">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" /> Balvatika Parent Circle
          </span>

          <SplitText
            as="h2"
            text="Stay Connected with Your Child's Journey"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          />
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Get our monthly preschool activity calendar, early-childhood parenting tips, and
            festival celebration invites delivered right to your inbox.
          </p>

          {joined ? (
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-emerald-200">
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" aria-hidden="true" />
              <p className="mt-3 font-display text-lg font-bold text-slate-900">
                Welcome to the Balvatika Family! 🎈
              </p>
              <p className="mt-1 text-xs text-slate-500">
                You&apos;ll receive our next newsletter and event announcements.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="stay-email" className="sr-only">
                Email address
              </label>
              <input
                id="stay-email"
                name="email"
                type="email"
                required
                placeholder="Enter parent email address"
                className="w-full rounded-full border-2 border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/50"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-slate-900 px-6 py-3 font-display text-sm font-bold text-white shadow-md transition-all hover:bg-primary hover:scale-105 active:scale-95"
              >
                Join Free ✨
              </button>
            </form>
          )}

          <p className="mt-4 text-[11px] text-slate-400">
            🔒 No spam ever. You can unsubscribe anytime with one click.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
