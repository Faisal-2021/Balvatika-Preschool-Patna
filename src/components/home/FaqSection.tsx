"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade, SplitText } from "@/components/ui/motion-primitives";

const FAQS = [
  {
    q: "What age groups are eligible for Play Group, Nursery, LKG, and UKG?",
    a: "We welcome children from 1.5 years to 6 years: Play Group (1.5 - 2.5 years), Nursery (2.5 - 3.5 years), LKG / Junior KG (3.5 - 4.5 years), and UKG / Senior KG (4.5 - 5.5+ years).",
  },
  {
    q: "Does my child need to be completely toilet-trained before starting?",
    a: "No! We understand every toddler develops at their own pace. Our patient, experienced female support attendants (didis) gently assist children with toilet habits and bathroom hygiene with love and zero shame.",
  },
  {
    q: "What is the teacher-to-student ratio in the classrooms?",
    a: "We maintain a strict 10:1 student-to-teacher ratio along with caring assistant staff. This ensures each little boy and girl receives individual encouragement, affection, and tailored guidance.",
  },
  {
    q: "What are the school timings for preschool and daycare?",
    a: "Preschool runs Monday to Friday from 9:00 AM to 12:30 PM (Play Group/Nursery) and up to 1:00 PM (LKG/UKG). For working parents, our daycare and extended activity club are available with supervised care.",
  },
  {
    q: "Do you provide school transport in and around New Jaganpura, Patna?",
    a: "Yes! We operate safe, GPS-monitored school vans accompanied by an experienced driver and a caring female attendant covering New Jaganpura, Kankarbagh, Ramkrishna Nagar, and nearby Patna localities.",
  },
  {
    q: "How does Balvatika prepare UKG children for Grade 1 admissions in top schools?",
    a: "Our UKG curriculum builds solid phonics reading, clear numerical reasoning, stage recitation confidence, and social manners. Our graduates consistently clear entry assessments into leading CBSE & ICSE schools in Patna.",
  },
  {
    q: "How can parents stay updated about their child's daily progress?",
    a: "We maintain regular parent-teacher interactions, weekly activity photo updates, personalized progress portfolios, and open channels with our principal and teachers.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="section-label">
            <span>❓</span> Common Parent Questions
          </span>
          <SplitText
            as="h2"
            text="Everything You Need to Know About Balvatika"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Have questions about your little one&apos;s first school? Here are answers to the questions
            parents ask us most frequently.
          </p>
        </div>

        <BlurFade delay={0.2} as="div" className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map(({ q, a }, index) => (
              <AccordionItem
                key={q}
                value={`faq-${index}`}
                className="overflow-hidden rounded-2xl border-2 border-slate-100 bg-slate-50/60 px-5 transition-all data-[state=open]:border-amber-300 data-[state=open]:bg-white data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-4 text-left font-display text-base font-bold text-slate-900 hover:text-primary hover:no-underline sm:text-lg">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>

        <div className="mt-10 rounded-3xl bg-amber-50 p-6 text-center border-2 border-amber-200/60">
          <p className="text-sm font-semibold text-slate-700">
            Have a specific question not listed here?
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Our principal and teachers are always happy to speak with you!
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919031025415"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-transform hover:scale-105"
            >
              <span>📞 Call Us: +91 9031025415</span>
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition-transform hover:scale-105"
            >
              <span>Schedule a Campus Visit 🏫</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
