"use client";

import { BookOpen, CalendarDays, Music2 } from "lucide-react";

import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

const LEGACY_POINTS = [
  {
    icon: BookOpen,
    title: "An educator's calling",
    text: "A lifelong teacher, principal and school founder.",
  },
  {
    icon: Music2,
    title: "Learning beyond lessons",
    text: "A champion of computers, music, activities and sport.",
  },
];

export function FounderSection() {
  return (
    <section
      id="founders"
      className="overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
        <BlurFade>
          <figure className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-3 rounded-3xl border border-gold/30"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-primary-foreground/15 bg-card shadow-lift">
              <img
                src="/director.jpg"
                alt="Director / Founder of Balvatika Preschool"
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <figcaption className="relative mx-5 -mt-10 rounded-2xl border border-border bg-card px-5 py-4 text-card-foreground shadow-soft">
              <p className="font-display text-xl text-primary">Founder</p>
              <p className="mt-1 text-sm text-muted-foreground">Founder &amp; Honorary Principal</p>
            </figcaption>
          </figure>
        </BlurFade>

        <BlurFade delay={0.12}>
          <span className="inline-block rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold tracking-wide text-gold uppercase">
            Our Founders
          </span>
          <SplitText
            as="h2"
            text="A shared life devoted to education"
            className="mt-5 max-w-2xl font-display text-3xl text-primary-foreground sm:text-4xl"
          />
          <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80">
            Balvatika Preschool was founded with a deep commitment to providing a safe, joyful and
            nurturing early childhood education, bringing dedicated care and experience in building
            child-friendly learning environments to New Jaganpura, Patna.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/80">
            Our founder&apos;s passion for nurturing young minds and shaping their character from
            the earliest years drives everything at Balvatika &mdash; from the warmth in our
            classrooms to the care behind each child&apos;s daily routine. That founding spirit
            remains at the heart of our preschool today.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {LEGACY_POINTS.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex gap-4 border-t border-primary-foreground/15 pt-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-primary-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-primary-foreground/70">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-3 border-l-2 border-gold pl-4">
            <CalendarDays className="h-5 w-5 text-gold" aria-hidden="true" />
            <div>
              <p className="font-display text-xl text-primary-foreground">Since 2024</p>
              <p className="text-sm text-primary-foreground/65">
                A legacy carried forward in every child.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
