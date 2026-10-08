"use client";

import { Pin, Sparkles } from "lucide-react";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

type Notice = {
  date: string;
  title: string;
  detail: string;
  isNew?: boolean;
};

const HIGHLIGHTED: Notice = {
  date: "Current Session",
  title: "Admissions Open for 2026–27 (Play Group, Nursery, LKG, UKG)",
  detail:
    "Limited seats available in our small cohorts to preserve our 10:1 ratio. Free campus tour and toddler play interaction sessions open on all weekdays.",
  isNew: true,
};

const NOTICES: Notice[] = [
  {
    date: "Upcoming Event",
    title: "Friday Color Day & Sensory Messy Play",
    detail:
      "Children will explore non-toxic finger paints, clay textures, and colorful shapes to develop fine motor grasp and creativity.",
    isNew: true,
  },
  {
    date: "Parent Meet",
    title: "Quarterly Parent-Teacher Growth Circle",
    detail:
      "Interactive one-on-one sessions with class mentors to review your child's phonics progress and social milestone portfolio.",
  },
  {
    date: "Special Notice",
    title: "Safe Transport Route Expansion in Patna",
    detail:
      "Dedicated GPS-monitored vans with female caring attendants now serving New Jaganpura, Ramkrishna Nagar, and Kankarbagh.",
  },
];

function NoticeRow({ notice }: { notice: Notice }) {
  return (
    <div className="group rounded-2xl border-2 border-slate-100 bg-white p-4 transition-all hover:border-amber-300 hover:shadow-md focus-within:border-amber-400">
      <a href="#enquiry" className="block outline-none">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold text-amber-800">
            {notice.date}
          </span>
          {notice.isNew ? (
            <span className="rounded-full bg-rose-500 px-2.5 py-0.5 text-[0.65rem] font-bold tracking-wide text-white uppercase animate-pulse">
              New
            </span>
          ) : null}
        </div>
        <p className="mt-2 font-display text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
          {notice.title}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {notice.detail}
        </p>
      </a>
    </div>
  );
}

export function NoticeBoard() {
  return (
    <section id="notices" className="relative bg-amber-50/50 px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-bold uppercase text-amber-800">
              <Pin className="h-3 w-3 rotate-45" /> Notice Board
            </span>
            <SplitText
              as="h2"
              text="Latest Updates & Announcements"
              className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl"
            />
          </div>
          <a
            href="#enquiry"
            className="self-start font-display text-xs font-bold text-primary hover:underline sm:self-auto"
          >
            Admissions Enquiry →
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <BlurFade delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-100 via-white to-pink-50 p-6 shadow-sm">
              <div>
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-400 text-slate-950 font-bold">
                    📌
                  </span>
                  <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
                    Important Announcement
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                  {HIGHLIGHTED.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {HIGHLIGHTED.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200/60">
                <a
                  href="#enquiry"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-xs font-bold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-primary"
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  <span>Enrol Your Child Online</span>
                </a>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} className="lg:col-span-3">
            <div className="space-y-3">
              {NOTICES.map((n) => (
                <NoticeRow key={n.title} notice={n} />
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
