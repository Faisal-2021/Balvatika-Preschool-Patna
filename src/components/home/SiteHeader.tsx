"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AdmissionEnquiryDialog } from "@/components/home/AdmissionEnquiryDialog";
import { toast } from "@/components/ui/sonner";

const LOGO_SRC = "/favicon.svg";

export interface NavChildItem {
  label: string;
  href: string;
  description: string;
}

export interface NavGroupItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

const NAV_STRUCTURE: NavGroupItem[] = [
  {
    label: "About",
    href: "#",
    children: [
      {
        label: "About Us",
        href: "#",
        description: "Our story, vision and mission",
      },
      {
        label: "Faculty & Staff",
        href: "#",
        description: "Principal, teachers and coordinators",
      },
      {
        label: "Facilities",
        href: "#",
        description: "Smart classes, labs, library, sports",
      },
      {
        label: "Gallery",
        href: "#",
        description: "Photos of campus and events",
      },
      {
        label: "Sports & Co-curricular",
        href: "#",
        description: "Houses, clubs, sports and achievements",
      },
      {
        label: "Alumni",
        href: "#",
        description: "Reconnect with the school network",
      },
    ],
  },
  {
    label: "Academics",
    href: "#",
    children: [
      {
        label: "Academics",
        href: "#",
        description: "Curriculum and approach",
      },
      {
        label: "Academic Calendar",
        href: "#",
        description: "Exams, holidays and events",
      },
      {
        label: "Daily Diary",
        href: "#",
        description: "Class-wise homework and classwork",
      },
      {
        label: "Results & Toppers",
        href: "#",
        description: "Board results and achievers",
      },
    ],
  },
  {
    label: "Admissions",
    href: "#",
    children: [
      {
        label: "Admissions",
        href: "#",
        description: "Process and how to apply",
      },
      {
        label: "Fee Structure",
        href: "#",
        description: "Class-wise fees and policies",
      },
      {
        label: "Transport & Bus Routes",
        href: "#",
        description: "Routes, stops and zone fees",
      },
      {
        label: "Transfer Certificate",
        href: "#",
        description: "Request or verify a TC online",
      },
    ],
  },
  {
    label: "Info",
    href: "#",
    children: [
      {
        label: "Notices",
        href: "#",
        description: "Latest announcements",
      },
      {
        label: "News & Blog",
        href: "#",
        description: "Stories, achievements and recaps",
      },
      {
        label: "Mandatory Disclosure",
        href: "/mandatory-disclosure",
        description: "CBSE compliance information",
      },
      {
        label: "Downloads",
        href: "#",
        description: "Forms, syllabus and documents",
      },
      {
        label: "Careers",
        href: "#",
        description: "Open positions",
      },
    ],
  },
  {
    label: "Contact",
    href: "#",
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedAccordions, setExpandedAccordions] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const [enquiryDialogOpen, setEnquiryDialogOpen] = useState(false);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();
  const isHomepage = location.pathname === "/" || location.pathname === "";

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Observe active sections for live navigation highlighting
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = [
      "top",
      "about",
      "principal",
      "facilities",
      "gallery",
      "cocurricular",
      "journey",
      "academics",
      "daily-routine",
      "achievements",
      "admissions",
      "admissions-process",
      "safety",
      "notices",
      "latest",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically expand mobile accordion containing active section
  useEffect(() => {
    if (!activeSection) return;
    for (const group of NAV_STRUCTURE) {
      if (group.children) {
        const matches = group.children.some((child) => child.href === `#${activeSection}`);
        if (matches) {
          setExpandedAccordions((prev) => ({ ...prev, [group.label]: true }));
        }
      }
    }
  }, [activeSection]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus on route changes
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.hash]);

  // Handle escape key and click outside to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleAccordion = (label: string) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNavClick = (
    e: React.MouseEvent,
    label: string,
    href: string,
    closeMenu?: () => void,
  ) => {
    if (href === "#") {
      e.preventDefault();
      toast(`${label} page will be added once the project is approved ✅`);
    }
    closeMenu?.();
  };

  // Determine if a group or link is currently active
  const isLinkActive = (href: string) => {
    if (!href || href === "#") {
      return false;
    }
    if (href === "/" || href === "#top") {
      return activeSection === "top";
    }
    if (href.startsWith("#")) {
      return activeSection === href.slice(1);
    }
    return location.pathname === href;
  };

  const isGroupActive = (group: NavGroupItem) => {
    if (isLinkActive(group.href)) return true;
    if (group.children) {
      return group.children.some((child) => isLinkActive(child.href));
    }
    return false;
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        {/* Tier 1: Balvatika Preschool Info & Contact Strip */}
        <div
          className={cn(
            "hidden border-b border-primary-foreground/15 bg-primary px-4 text-primary-foreground transition-all duration-300 sm:block sm:px-6",
            scrolled ? "h-0 overflow-hidden border-b-0 py-0 opacity-0" : "h-9 py-2 opacity-100",
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between text-xs">
            {/* Left: Programs & Location Badges */}
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 font-semibold text-gold">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Play Group to UKG • Daycare</span>
              </span>
              <span className="hidden text-primary-foreground/30 md:inline" aria-hidden="true">
                •
              </span>
              <span className="hidden items-center gap-1 text-primary-foreground/80 md:inline-flex">
                <MapPin className="h-3 w-3 text-gold/80" aria-hidden="true" />
                <span>Opp. King&apos;s Resort, New Jaganpura, Patna</span>
              </span>
            </div>

            {/* Right: Direct Contact & Admissions Open badge */}
            <div className="flex items-center gap-4 lg:gap-5">
              <a
                href="tel:+919031025415"
                className="inline-flex items-center gap-1.5 font-medium text-primary-foreground/90 transition-colors hover:text-gold"
              >
                <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span className="font-semibold">+91 9031025415</span>
              </a>
              <span className="hidden text-primary-foreground/30 lg:inline" aria-hidden="true">
                •
              </span>
              <a
                href="mailto:balvatikapreschool415@gmail.com"
                className="hidden items-center gap-1.5 text-primary-foreground/90 transition-colors hover:text-gold lg:inline-flex"
              >
                <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span>balvatikapreschool415@gmail.com</span>
              </a>
              <span className="text-primary-foreground/30" aria-hidden="true">
                •
              </span>
              <a
                href="#admissions"
                className="inline-flex items-center gap-1 font-semibold text-gold transition-colors hover:underline"
              >
                <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Admissions 2026-27</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tier 2: Main Navigation Bar */}
        <div
          className={cn(
            "w-full transition-all duration-300",
            // Height: 64px on mobile (h-16), 80px on desktop (lg:h-20)
            "h-16 lg:h-20",
            // Background & shadow transition:
            // On homepage: transparent at top (scroll <= 24), transitions to 90% near-white backdrop
            // On other pages: solid immediately
            isHomepage && !scrolled
              ? "bg-card/95 border-b border-border/50 shadow-2xs backdrop-blur-xs sm:bg-card/90 sm:backdrop-blur-sm"
              : "bg-card/90 border-b border-border/70 shadow-soft backdrop-blur-md",
          )}
        >
          <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 sm:px-8">
            {/* BRAND AREA */}
            <a
              href={isHomepage ? "#top" : "/"}
              aria-label="Balvatika Preschool"
              className="group flex shrink-0 items-center gap-3 transition-opacity hover:opacity-95"
            >
              <img
                src={LOGO_SRC}
                alt="Balvatika Preschool logo"
                className="h-[44px] w-auto shrink-0 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105 lg:h-[48px]"
              />
              <span className="shrink-0 font-playfair text-[17px] font-semibold leading-tight tracking-tight text-primary transition-colors lg:text-[19px]">
                Balvatika Preschool
              </span>
            </a>

            {/* DESKTOP NAVIGATION (lg+) */}
            <nav
              ref={dropdownContainerRef}
              aria-label="Main Navigation"
              className="hidden items-center gap-1 font-sans lg:flex xl:gap-1.5"
            >
              {NAV_STRUCTURE.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isOpen = openDropdown === item.label;
                const isActive = isGroupActive(item);

                if (!hasChildren) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.label, item.href)}
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        isActive
                          ? "font-semibold text-primary"
                          : "text-foreground/80 hover:bg-primary-soft/60",
                      )}
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`dropdown-${item.label}`}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        isActive
                          ? "font-semibold text-primary"
                          : "text-foreground/80 hover:bg-primary-soft/60 hover:text-primary",
                        isOpen && "bg-primary-soft/80 text-primary",
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Dropdown Menu Container (288px width) */}
                    <AnimatePresence>
                      {isOpen && item.children && (
                        <motion.div
                          id={`dropdown-${item.label}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 top-full z-50 pt-2 -translate-x-1/2"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="w-[288px] rounded-xl border border-border/80 bg-card p-2 shadow-soft ring-1 ring-black/5">
                            <div className="grid gap-0.5">
                              {item.children.map((child) => {
                                const childActive = isLinkActive(child.href);
                                return (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    onClick={(e) =>
                                      handleNavClick(e, child.label, child.href, () =>
                                        setOpenDropdown(null),
                                      )
                                    }
                                    className={cn(
                                      "group/item block rounded-lg px-3.5 py-2.5 text-left transition-colors",
                                      childActive ? "bg-primary-soft" : "hover:bg-primary-soft",
                                    )}
                                  >
                                    <p
                                      className={cn(
                                        "text-sm font-semibold transition-colors",
                                        childActive
                                          ? "text-primary"
                                          : "text-foreground group-hover/item:text-primary",
                                      )}
                                    >
                                      {child.label}
                                    </p>
                                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                                      {child.description}
                                    </p>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* RIGHT-SIDE ACTIONS */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* 1. Phone telephone link (on XL+ screens) */}
              <a
                href="tel:+919031025415"
                aria-label="Call Balvatika Preschool"
                className="hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:bg-secondary/60 hover:text-primary xl:inline-flex"
              >
                <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span className="font-sans">+91 9031025415</span>
              </a>

              {/* 2. Prominent Gold Pill "Enquire Now" action (Tablet size upward) */}
              <button
                type="button"
                onClick={() => setEnquiryDialogOpen(true)}
                className="hidden items-center justify-center rounded-full bg-gold px-4 py-2 text-xs font-semibold text-primary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-md active:translate-y-0 sm:inline-flex xl:px-4.5 xl:text-sm"
              >
                <span>Enquire Now</span>
              </button>

              {/* 5. Existing "Admissions 2026-27" Pill Button (UNTOUCHED, RIGHTMOST) */}
              <Button
                asChild
                className="group relative hidden overflow-hidden rounded-full bg-maroon px-4 py-2 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-maroon/90 hover:shadow-lift sm:inline-flex xl:px-5 xl:py-2.5"
              >
                <a href="#admissions" className="flex items-center gap-1.5 text-xs xl:text-sm">
                  <span>Admissions 2026-27</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 xl:h-4 xl:w-4" />
                </a>
              </Button>

              {/* Mobile Menu Hamburger Toggle (< lg) */}
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-menu"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-primary shadow-2xs transition-colors hover:bg-secondary lg:hidden"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION MENU DRAWER (< lg) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-card/98 px-5 pt-3 pb-8 shadow-lift backdrop-blur-xl sm:max-h-[calc(100vh-6.25rem)] lg:hidden"
            >
              <div className="mx-auto max-w-lg space-y-4">
                {/* Navigation items & accordion groups */}
                <div className="divide-y divide-border/60">
                  {NAV_STRUCTURE.map((item) => {
                    const hasChildren = Boolean(item.children && item.children.length > 0);
                    const isExpanded = expandedAccordions[item.label] ?? false;
                    const isActive = isGroupActive(item);

                    if (!hasChildren) {
                      return (
                        <div key={item.label} className="py-1">
                          <a
                            href={item.href}
                            onClick={(e) =>
                              handleNavClick(e, item.label, item.href, () =>
                                setMobileOpen(false),
                              )
                            }
                            className={cn(
                              "flex min-h-[44px] items-center px-2 text-sm font-medium transition-colors hover:text-primary",
                              isActive ? "font-semibold text-primary" : "text-foreground",
                            )}
                          >
                            {item.label}
                          </a>
                        </div>
                      );
                    }

                    return (
                      <div key={item.label} className="py-1">
                        <button
                          type="button"
                          onClick={() => toggleAccordion(item.label)}
                          aria-expanded={isExpanded}
                          className="flex min-h-[44px] w-full items-center justify-between px-2 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          <span className={cn(isActive && "font-semibold text-primary")}>
                            {item.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-muted-foreground transition-transform duration-200",
                              isExpanded && "rotate-180",
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && item.children && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 pr-1 pb-2 space-y-1"
                            >
                              {item.children.map((child) => {
                                const childActive = isLinkActive(child.href);
                                return (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    onClick={(e) =>
                                      handleNavClick(e, child.label, child.href, () =>
                                        setMobileOpen(false),
                                      )
                                    }
                                    className={cn(
                                      "flex min-h-[44px] flex-col justify-center rounded-lg px-3 py-2 text-sm transition-colors",
                                      childActive
                                        ? "bg-primary-soft text-primary font-semibold"
                                        : "text-foreground/90 hover:bg-secondary/70 hover:text-primary",
                                    )}
                                  >
                                    <span className="font-medium">{child.label}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {child.description}
                                    </span>
                                  </a>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Full-width Actions in exact specified order */}
                <div className="grid gap-2.5 pt-2">
                  {/* 1. Gold "Enquire Now" button */}
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => {
                      setMobileOpen(false);
                      setEnquiryDialogOpen(true);
                    }}
                    className="min-h-[44px] w-full rounded-xl bg-gold font-semibold text-primary shadow-soft hover:bg-gold/90"
                  >
                    <span>Enquire Now</span>
                  </Button>

                  {/* 2. Outlined primary "Apply for Admission" link */}
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="min-h-[44px] w-full rounded-xl border-primary text-primary hover:bg-primary-soft"
                  >
                    <a href="#admissions" onClick={() => setMobileOpen(false)}>
                      <span>Apply for Admission (2026-27)</span>
                    </a>
                  </Button>

                  {/* 3. Phone number with phone icon */}
                  <a
                    href="tel:+919031025415"
                    className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    <span>+91 9031025415</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Admission Enquiry Modal */}
      <AdmissionEnquiryDialog open={enquiryDialogOpen} onOpenChange={setEnquiryDialogOpen} />
    </>
  );
}
