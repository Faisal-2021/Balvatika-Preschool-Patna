import { MessageCircle, Phone, Sparkles } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-amber-200 bg-white/95 px-3 py-2 shadow-2xl backdrop-blur-md sm:hidden">
      <div className="flex items-center gap-2">
        <a
          href="tel:+919031025415"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 py-2.5 text-xs font-bold text-slate-800 active:scale-95"
        >
          <Phone className="h-3.5 w-3.5 text-amber-600" />
          <span>Call Desk</span>
        </a>
        <a
          href="https://wa.me/919031025415?text=Hello%20Balvatika%20Preschool,%20I%20am%20interested%20in%20admission"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-sm active:scale-95"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#enquiry"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 py-2.5 text-xs font-bold text-white shadow-sm active:scale-95"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Enrol</span>
        </a>
      </div>
    </div>
  );
}
