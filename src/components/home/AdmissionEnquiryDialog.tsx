import React, { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AdmissionEnquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AdmissionEnquiryDialog({ open, onOpenChange }: AdmissionEnquiryDialogProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40";

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          // Reset status when modal closes after a moment
          setTimeout(() => setSent(false), 300);
        }
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-gold/20 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-maroon">
              Admissions 2026–27
            </span>
          </div>
          <DialogTitle className="font-display text-2xl text-primary">
            Admission Enquiry
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Fill in your details below and our admissions counsellor will contact you with
            availability and required documents.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-maroon" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl text-primary">Thank you</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We have received your enquiry. The admissions office will get in touch with you
              shortly.
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <Button type="button" variant="outline" onClick={() => setSent(false)}>
                Send another enquiry
              </Button>
              <Button type="button" onClick={() => onOpenChange(false)}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 grid gap-3.5">
            <div className="grid gap-1.5">
              <label htmlFor="modal-name" className="text-xs font-semibold text-foreground">
                Parent / Guardian Name *
              </label>
              <input
                id="modal-name"
                name="name"
                required
                className={field}
                placeholder="Full name"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label htmlFor="modal-phone" className="text-xs font-semibold text-foreground">
                  Phone Number *
                </label>
                <input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  required
                  className={field}
                  placeholder="10-digit mobile number"
                />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="modal-grade" className="text-xs font-semibold text-foreground">
                  Class Applying For *
                </label>
                <select id="modal-grade" name="grade" required defaultValue="" className={field}>
                  <option value="" disabled>
                    Select class
                  </option>
                  {["6", "7", "8", "9", "10"].map((c) => (
                    <option key={c} value={c}>
                      Class {c}
                    </option>
                  ))}
                  <option value="other">Other / not sure</option>
                </select>
              </div>
            </div>

            <fieldset className="grid gap-1.5">
              <legend className="text-xs font-semibold text-foreground">
                Admission Preference
              </legend>
              <div className="flex flex-wrap gap-2.5">
                {["Day scholar", "Boarding"].map((opt, i) => (
                  <label
                    key={opt}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs has-[:checked]:border-gold has-[:checked]:bg-gold/15"
                  >
                    <input
                      type="radio"
                      name="preference"
                      value={opt}
                      defaultChecked={i === 0}
                      className="accent-maroon"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-1.5">
              <label htmlFor="modal-message" className="text-xs font-semibold text-foreground">
                Message or Query (optional)
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={2}
                className={field}
                placeholder="Any questions about curriculum, hostel or transport..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full gap-2 rounded-xl bg-gold font-semibold text-primary hover:bg-gold/90 shadow-soft"
            >
              <Send className="h-4 w-4" />
              <span>Submit Enquiry</span>
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
