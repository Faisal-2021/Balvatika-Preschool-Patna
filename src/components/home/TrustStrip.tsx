import { Bus, Cctv, HeartHandshake, ShieldCheck, Smile, Sparkles } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "100% CCTV Secured",
    subtitle: "Complete campus surveillance",
    color: "bg-emerald-500/15 text-emerald-600 border-emerald-400/30",
  },
  {
    icon: HeartHandshake,
    title: "10:1 Little Scholar Ratio",
    subtitle: "Individual loving care",
    color: "bg-pink-500/15 text-pink-600 border-pink-400/30",
  },
  {
    icon: Sparkles,
    title: "Play-Way & Montessori",
    subtitle: "NEP 2020 aligned curriculum",
    color: "bg-amber-500/15 text-amber-600 border-amber-400/30",
  },
  {
    icon: Bus,
    title: "Safe GPS Transport",
    subtitle: "Pickup across Patna routes",
    color: "bg-sky-500/15 text-sky-600 border-sky-400/30",
  },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Balvatika Preschool Highlights"
      className="relative z-10 -mt-6 mx-4 max-w-7xl sm:mx-auto"
    >
      <div className="grid gap-3 rounded-3xl border-2 border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 lg:p-5">
        {TRUST_ITEMS.map(({ icon: Icon, title, subtitle, color }) => (
          <div
            key={title}
            className="group flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${color}`}
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <strong className="block text-sm font-bold text-slate-800">{title}</strong>
              <span className="block text-xs font-medium text-slate-500">{subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
