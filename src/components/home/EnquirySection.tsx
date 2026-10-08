"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Heart, Phone, Sparkles } from "lucide-react";
import { SplitText } from "@/components/ui/motion-primitives";
import { Button } from "@/components/ui/button";
import { fireSchoolConfetti } from "@/components/ui/confetti";
import { toast } from "@/components/ui/sonner";

export function EnquirySection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      fireSchoolConfetti();
      toast.success("Enquiry received! We look forward to welcoming you to Balvatika Preschool.");
    }, 600);
  }

  const field =
    "w-full rounded-2xl border-2 border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-200/50";

  return (
    <section id="enquiry" className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 px-4 py-16 text-white sm:px-6 lg:py-24 scroll-mt-16">
      <div id="admissions" className="scroll-mt-24 absolute top-0" />
      {/* Decorative gradient glow blobs */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/20 px-4 py-1.5 text-xs font-bold tracking-wide text-amber-300 uppercase">
            <span>🎈</span> Admissions Open 2026–27
          </span>

          <SplitText
            as="h2"
            text="Give Your Child the Best First Step in Life"
            className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          />

          <p className="mt-5 max-w-lg text-base leading-relaxed text-purple-100/90 sm:text-lg">
            Seats are limited in our Play Group, Nursery, LKG &amp; UKG cohorts to maintain our
            caring <strong className="text-amber-300">10:1 student-teacher ratio</strong>. Fill out
            the quick form or call us to book a free campus tour and play session in Patna!
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/20 text-amber-300">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-purple-200">Call Our Admissions Desk Directly</p>
                <a href="tel:+919031025415" className="text-lg font-bold text-amber-300 hover:underline">
                  +91 9031025415
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-pink-400/20 text-pink-300">
                <Heart className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-purple-200">Campus Location</p>
                <p className="text-sm font-semibold text-white">
                  Opp. King&apos;s Resort, New Jaganpura Road, Patna
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border-2 border-white/20 bg-white p-6 text-slate-800 shadow-2xl sm:p-8">
            {sent ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
                  Enquiry Received with Love! 🎉
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-slate-600">
                  Thank you! Our admissions coordinator will call you back shortly with class
                  availability and campus tour timings.
                </p>
                <Button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full bg-amber-500 font-bold text-slate-950 hover:bg-amber-400"
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Schedule a Campus Visit &amp; Tour 🌟
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Quick 1-minute form • Free child play session included
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Parent&apos;s Name *</label>
                    <input
                      required
                      type="text"
                      name="parentName"
                      placeholder="e.g. Rahul Sharma"
                      className={`mt-1 ${field}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g. 9876543210"
                      className={`mt-1 ${field}`}
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Child&apos;s Age / DOB</label>
                    <input
                      type="text"
                      name="childAge"
                      placeholder="e.g. 2.5 Years"
                      className={`mt-1 ${field}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Program Interested *</label>
                    <select required name="program" className={`mt-1 ${field}`}>
                      <option value="Playgroup">Play Group (1.5 - 2.5 Yrs)</option>
                      <option value="Nursery">Nursery (2.5 - 3.5 Yrs)</option>
                      <option value="LKG">LKG / Junior KG (3.5 - 4.5 Yrs)</option>
                      <option value="UKG">UKG / Senior KG (4.5 - 5.5 Yrs)</option>
                      <option value="Daycare">Daycare &amp; Activity Club</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700">Message / Any Questions</label>
                  <textarea
                    name="notes"
                    rows={2}
                    placeholder="Preferred date to visit, transport questions, etc."
                    className={`mt-1 ${field} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 py-3.5 text-center font-display text-base font-bold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Enquiry & Book Visit 🎈"}
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  🔒 We respect your privacy. No spam calls ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
