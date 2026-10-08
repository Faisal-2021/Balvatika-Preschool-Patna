"use client";

import { useState } from "react";
import { ArrowUpRight, Facebook, Heart, Instagram, LogIn, Mail, MapPin, MessageCircle, Phone, Sparkles, Youtube } from "lucide-react";
import { AuthDialog } from "@/components/home/AuthDialog";
import { useAuth } from "@/lib/auth-context";

const LOGO_SRC = "/favicon.svg";

const QUICK_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "Our Programs", href: "/#programs" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Daily Routine", href: "/#daily-routine" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Photo Gallery", href: "/#gallery" },
  { label: "Admissions Process", href: "/#admissions-process" },
  { label: "Parent FAQs", href: "/#faq" },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
];

const PROGRAM_LINKS = [
  { label: "Play Group (1.5 - 2.5 Yrs)", href: "/#programs" },
  { label: "Nursery (2.5 - 3.5 Yrs)", href: "/#programs" },
  { label: "LKG / Junior KG (3.5 - 4.5 Yrs)", href: "/#programs" },
  { label: "UKG / Senior KG (4.5 - 5.5 Yrs)", href: "/#programs" },
  { label: "Daycare & Activity Club", href: "/#programs" },
];

export function SiteFooter() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();

  return (
    <footer id="contact" className="relative bg-slate-950 text-white">
      {/* Top playful organic wave transition */}
      <div className="overflow-hidden leading-none">
        <svg
          className="relative block h-10 w-full text-slate-50 sm:h-16 lg:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-4 lg:pt-14">
        {/* Brand & Mission */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_SRC}
              alt="Balvatika Preschool logo"
              className="h-14 w-14 shrink-0 rounded-2xl bg-white/10 p-1 object-contain drop-shadow-sm"
            />
            <div>
              <span className="block font-display text-xl font-bold tracking-tight text-white">
                Balvatika Preschool
              </span>
              <span className="block text-xs font-semibold text-amber-400">
                Play Group • Nursery • LKG • UKG
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            A safe, caring &amp; joyful preschool in New Jaganpura, Patna. Nurturing little minds
            through play-way curiosity, Montessori concepts, and unconditional love.
          </p>

          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            {[
              {
                Icon: Facebook,
                href: "https://www.facebook.com/Balvatikaplayschooljaganpura/",
                label: "Facebook",
                hover: "hover:bg-blue-600",
              },
              {
                Icon: Instagram,
                href: "#",
                label: "Instagram",
                hover: "hover:bg-pink-600",
              },
              {
                Icon: Youtube,
                href: "#",
                label: "YouTube",
                hover: "hover:bg-red-600",
              },
            ].map(({ Icon, href, label, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-slate-200 transition-all ${hover} hover:scale-110 hover:text-white`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-base font-bold text-amber-400 uppercase tracking-wider">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="inline-flex items-center gap-1 transition-colors hover:text-amber-300"
                >
                  <span>›</span>
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setAuthDialogOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                <span>›</span>
                <LogIn className="h-3.5 w-3.5" />
                <span>{isAuthenticated ? "Portal Account" : "Sign In to Portal"}</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-display text-base font-bold text-amber-400 uppercase tracking-wider">
            Our Programs
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {PROGRAM_LINKS.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  className="inline-flex items-center gap-1 transition-colors hover:text-amber-300"
                >
                  <span>🎈</span>
                  <span>{p.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3.5">
            <span className="block text-xs font-bold text-amber-300">Need Immediate Advice?</span>
            <span className="block text-xs text-slate-400">Our mentors are ready to assist.</span>
            <a
              href="https://wa.me/919031025415?text=Hello%20Balvatika%20Preschool,%20I%20want%20to%20know%20more%20about%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-display text-base font-bold text-amber-400 uppercase tracking-wider">
            Visit Campus
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm text-slate-300">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
              <span className="leading-snug">
                Opp. King&apos;s Resort, New Jaganpura Road,
                <br />
                Poonam Bhawan, Shahpur Village,
                <br />
                Patna &ndash; 800030, Bihar
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-amber-400" />
              <a href="tel:+919031025415" className="font-bold text-white transition-colors hover:text-amber-300">
                +91 9031025415
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-amber-400" />
              <a
                href="mailto:balvatikapreschool415@gmail.com"
                className="text-xs break-all transition-colors hover:text-amber-300"
              >
                balvatikapreschool415@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-5">
            <a
              href="https://maps.app.goo.gl/2vPQDqB1q5aZyzJX8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/40 bg-amber-400/15 px-4 py-2 text-xs font-bold text-amber-300 transition-colors hover:bg-amber-400 hover:text-slate-950"
            >
              <span>Get Directions on Google Maps</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Map Embed Section */}
      <div className="border-t border-white/10 bg-slate-900/60 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Conveniently Located in New Jaganpura, Patna</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Easily accessible from Kankarbagh, Ramkrishna Nagar, Bypass, and surrounding areas.
            </p>
            <a
              href="https://maps.app.goo.gl/2vPQDqB1q5aZyzJX8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:underline"
            >
              <span>Open in Google Maps app</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
          <div className="h-44 w-full overflow-hidden rounded-2xl border border-white/10 shadow-inner lg:w-96">
            <iframe
              title="Balvatika Preschool Map, New Jaganpura, Patna"
              src="https://maps.google.com/maps?q=25.5823706,85.1515854&hl=en&z=17&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-slate-400 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Balvatika Preschool, Patna. All rights reserved.</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1 text-pink-400">
            <span>Made with</span>
            <Heart className="h-3 w-3 fill-current" />
            <span>for our little stars</span>
          </span>
        </div>
      </div>

      {/* Auth Dialog Modal */}
      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </footer>
  );
}
