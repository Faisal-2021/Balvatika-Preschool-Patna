import { toast, Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      position="bottom-right"
      duration={3500}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:!bg-primary group-[.toaster]:!text-primary-foreground group-[.toaster]:!border group-[.toaster]:!border-gold/50 group-[.toaster]:!shadow-lift group-[.toaster]:!rounded-2xl font-sans text-sm font-medium",
          description: "group-[.toast]:!text-primary-foreground/80",
          actionButton: "group-[.toast]:!bg-gold group-[.toast]:!text-gold-foreground",
          cancelButton: "group-[.toast]:!bg-primary-soft group-[.toast]:!text-primary",
        },
        style: {
          backgroundColor: "var(--primary)",
          color: "var(--primary-foreground)",
          borderColor: "color-mix(in oklch, var(--gold) 50%, transparent)",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
