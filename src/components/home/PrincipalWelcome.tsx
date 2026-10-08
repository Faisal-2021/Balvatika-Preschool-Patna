"use client";

import { Heart, Quote, Sparkles } from "lucide-react";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

export function PrincipalWelcome() {
  return (
    <section id="principal" className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-14">
        <BlurFade>
          <div className="relative mx-auto aspect-square w-full max-w-64 overflow-hidden rounded-3xl border-4 border-amber-300/60 bg-white p-2 shadow-xl lg:max-w-xs">
            <img
              src="/principal.jpg"
              alt="The Principal / Director of Balvatika Preschool"
              width={667}
              height={459}
              loading="lazy"
              className="h-full w-full rounded-2xl object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 rounded-full bg-amber-400 p-2 shadow-md">
              <Sparkles className="h-4 w-4 text-slate-900" />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <span className="section-label">
            <span>🌸</span> From the Principal&apos;s Desk
          </span>
          <SplitText
            as="h2"
            text="A Heartfelt Welcome to the Balvatika Family"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          />
          <Quote className="mt-5 h-8 w-8 text-amber-500/40" aria-hidden="true" />
          <blockquote className="mt-2 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              A preschool is remembered not for grand promises, but for the gentle warmth and smiles it gives each little child every morning. At Balvatika Preschool, we place happiness, curiosity, and unconditional love at the center of everything we do.
            </p>
            <p>
              Every child is a unique explorer. Our goal is to nurture their innate creativity, guide their first words and steps into reading with playful phonics, and build genuine social empathy.
            </p>
            <p>
              We welcome you to visit our campus in New Jaganpura, Patna, observe our colorful classrooms, and see firsthand how our loving teachers make every moment a discovery!
            </p>
          </blockquote>
          <div className="mt-6 border-t border-slate-200 pt-4">
            <div className="flex items-center gap-2 text-rose-500">
              <Heart className="h-4 w-4 fill-current" />
              <p className="font-display text-lg font-bold">With warm affection &amp; regards</p>
            </div>
            <p className="mt-1 font-bold text-slate-900">Principal &amp; Early Childhood Mentor</p>
            <p className="text-xs text-slate-500">
              Balvatika Preschool, New Jaganpura, Patna
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
