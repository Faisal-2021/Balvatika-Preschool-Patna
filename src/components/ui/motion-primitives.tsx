"use client";

import * as React from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Blur Fade (Magic UI pattern)                                               */
/* -------------------------------------------------------------------------- */

export function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 16,
  blur = "6px",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  blur?: string;
  as?: "div" | "span" | "li";
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const MotionTag = motion[Tag] as typeof motion.div;

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: yOffset, filter: `blur(${blur})` }
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------------- */
/* Number Ticker (Magic UI pattern)                                           */
/* -------------------------------------------------------------------------- */

export function NumberTicker({
  value,
  className,
  decimals = 0,
  grouping = true,
}: {
  value: number;
  className?: string;
  decimals?: number;
  grouping?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const format = React.useCallback(
    (n: number) =>
      new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: grouping,
      }).format(n),
    [decimals, grouping],
  );

  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v: number) => setDisplay(v),
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {format(value)}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {format(Number(display.toFixed(decimals)))}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Split Text heading (React Bits pattern) — headings only                    */
/* -------------------------------------------------------------------------- */

export function SplitText({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[Tag] as typeof motion.h2;

  return (
    <MotionTag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            aria-hidden="true"
            className="inline-block"
            initial={{ y: "0.9em", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "0.9em", opacity: 0 }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------------- */
/* Text Generate Effect (Aceternity pattern) — once on load                   */
/* -------------------------------------------------------------------------- */

export function TextGenerateEffect({
  words,
  className,
  as: Tag = "h1",
}: {
  words: string;
  className?: string;
  as?: "h1" | "h2" | "p";
}) {
  const reduce = useReducedMotion();
  const list = words.split(" ");

  if (reduce) {
    return <Tag className={className}>{words}</Tag>;
  }

  const MotionTag = motion[Tag] as typeof motion.h1;

  return (
    <MotionTag className={className} aria-label={words}>
      {list.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.15 + i * 0.09, ease: "easeOut" }}
        >
          {word}
          {i < list.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------------- */
/* Aurora Background (Aceternity pattern) — soft, slow, low opacity           */
/* -------------------------------------------------------------------------- */

export function AuroraBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute -inset-[35%] opacity-25 blur-3xl will-change-transform",
          !reduce && "motion-safe:animate-[aurora-drift_28s_ease-in-out_infinite]",
        )}
        style={{
          background:
            "radial-gradient(40% 55% at 20% 35%, var(--gold) 0%, transparent 60%)," +
            "radial-gradient(45% 55% at 75% 25%, var(--maroon) 0%, transparent 62%)," +
            "radial-gradient(50% 60% at 55% 80%, var(--primary) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hover Border Gradient (Aceternity pattern)                                 */
/* -------------------------------------------------------------------------- */

export function HoverBorderGradient({
  children,
  className,
  containerClassName,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex rounded-full transition-transform hover:-translate-y-0.5",
        containerClassName,
      )}
    >
      <span className={cn("relative rounded-full", className)}>{children}</span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Glowing Effect (Aceternity pattern) — calm hover border glow               */
/* -------------------------------------------------------------------------- */

export function GlowingCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative h-full rounded-3xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative h-full rounded-3xl">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Border Beam (Magic UI pattern)                                             */
/* -------------------------------------------------------------------------- */

export function BorderBeam({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -inset-px overflow-hidden rounded-[inherit]",
        className,
      )}
    >
      <span
        className="absolute inset-[-100%] motion-safe:animate-[border-spin_7s_linear_infinite] motion-reduce:hidden"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, var(--gold) 350deg, transparent 360deg)",
        }}
      />
      <span className="absolute inset-[2px] rounded-[inherit] bg-card" />
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Marquee (Magic UI pattern)                                                 */
/* -------------------------------------------------------------------------- */

export function Marquee({
  children,
  className,
  duration = "45s",
}: {
  children: React.ReactNode;
  className?: string;
  duration?: string;
}) {
  return (
    <div className={cn("group flex w-full overflow-hidden", className)}>
      {[0, 1].map((n) => (
        <div
          key={n}
          aria-hidden={n === 1 ? "true" : undefined}
          className="flex shrink-0 items-center gap-4 pr-4 motion-safe:animate-[marquee-x_var(--marquee-duration)_linear_infinite] motion-safe:group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ ["--marquee-duration" as string]: duration }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Animated List (Magic UI pattern) — staggered entry                         */
/* -------------------------------------------------------------------------- */

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function AnimatedList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <ul className={className}>{children}</ul>;
  return (
    <motion.ul
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.ul>
  );
}

export function AnimatedListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <li className={className}>{children}</li>;
  return (
    <motion.li variants={itemVariants} className={className}>
      {children}
    </motion.li>
  );
}

/* -------------------------------------------------------------------------- */
/* Focus Cards (Aceternity pattern) + glare sweep, no 3D tilt                 */
/* -------------------------------------------------------------------------- */

export type FocusCard = {
  src: string;
  alt: string;
  w: number;
  h: number;
  preserveAspectRatio?: boolean;
};

export function FocusCards({
  cards,
  className,
  onCardClick,
}: {
  cards: FocusCard[];
  className?: string;
  onCardClick?: (index: number, element: HTMLElement) => void;
}) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div className={className}>
      {cards.map((card, i) => {
        const shared = {
          onMouseEnter: () => setHovered(i),
          onMouseLeave: () => setHovered(null),
          onFocus: () => setHovered(i),
          onBlur: () => setHovered(null),
          className: cn(
            "photo-frame group relative mb-4 block w-full break-inside-avoid overflow-hidden outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-gold motion-reduce:transition-none",
            hovered !== null && hovered !== i && "scale-[0.985] blur-[2px] motion-reduce:blur-none",
            onCardClick && "cursor-zoom-in",
          ),
        };

        const inner = (
          <>
            <img
              src={card.src}
              alt={card.alt}
              width={card.w}
              height={card.h}
              loading="lazy"
              className={cn(
                "w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none",
                card.preserveAspectRatio ? "h-auto" : "h-56 sm:h-64",
              )}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-[120%] motion-reduce:hidden"
            />
          </>
        );

        if (onCardClick) {
          return (
            <button
              key={i}
              type="button"
              aria-label={`View photo: ${card.alt}`}
              onClick={(e) => onCardClick(i, e.currentTarget)}
              {...shared}
            >
              {inner}
            </button>
          );
        }

        return (
          <div key={i} tabIndex={0} {...shared}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sticky Scroll Reveal (Aceternity pattern)                                  */
/* -------------------------------------------------------------------------- */

export type StickyItem = {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  image: string;
  alt: string;
};

export function StickyScrollReveal({ items }: { items: StickyItem[] }) {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef<Array<HTMLDivElement | null>>([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        {items.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="py-10 lg:min-h-[34rem] lg:py-20"
          >
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold tracking-wide text-maroon uppercase">
              {item.eyebrow}
            </span>
            <SplitText
              as="h3"
              text={item.title}
              className="mt-5 font-display text-3xl text-primary sm:text-4xl"
            />
            <div
              className={cn(
                "mt-5 transition-opacity duration-500 motion-reduce:opacity-100",
                active === i ? "opacity-100" : "lg:opacity-70",
              )}
            >
              {item.body}
            </div>

            {/* Inline image for small screens */}
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="photo-frame mt-6 h-56 w-full object-cover sm:h-72 lg:hidden"
            />
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="photo-frame sticky top-28 h-[26rem] overflow-hidden shadow-lift xl:h-[30rem]">
          <AnimatePresence mode="wait">
            <motion.img
              key={items[active]?.image}
              src={items[active]?.image}
              alt={items[active]?.alt ?? ""}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Animated Testimonials (Aceternity pattern)                                 */
/* -------------------------------------------------------------------------- */

export type Testimonial = { quote: string; name: string };

export function AnimatedTestimonials({
  testimonials,
  interval = 6000,
}: {
  testimonials: Testimonial[];
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused || reduce || testimonials.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), interval);
    return () => window.clearInterval(id);
  }, [paused, reduce, interval, testimonials.length]);

  if (reduce) {
    return (
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="rounded-3xl bg-card p-6 shadow-soft">
            <p className="text-sm leading-relaxed text-foreground">{t.quote}</p>
            <footer className="mt-5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {t.name}
            </footer>
          </blockquote>
        ))}
      </div>
    );
  }

  const current = testimonials[index]!;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative min-h-[15rem] rounded-3xl bg-card p-6 shadow-soft sm:min-h-[13rem] sm:p-10">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-xl leading-relaxed text-primary sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-6 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {current.name}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex gap-2" role="tablist" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === index ? "w-8 bg-maroon" : "w-2 bg-primary/25 hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
