import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Building,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  GraduationCap,
  HelpCircle,
  Home,
  Info,
  Mail,
  MapPin,
  Phone,
  School,
  Shield,
  Users,
} from "lucide-react";

import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/mandatory-disclosure")({
  head: () => ({
    meta: [
      {
        title: "Mandatory Public Disclosure | Balvatika Preschool, Patna",
      },
      {
        name: "description",
        content:
          "Mandatory Public Disclosure in compliance with regulatory requirements for Balvatika Preschool, New Jaganpura, Patna, Bihar.",
      },
      {
        property: "og:title",
        content: "Mandatory Public Disclosure | Balvatika Preschool",
      },
      {
        property: "og:description",
        content:
          "Official public disclosure of general information, documents, academic results, infrastructure, and teaching staff as mandated by CBSE.",
      },
    ],
  }),
  component: MandatoryDisclosurePage,
});

// Helper component for sample data badge
function SampleDataBadge({ text = "Sample data — to be confirmed" }: { text?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
      <AlertTriangle className="h-3 w-3 shrink-0 text-amber-600 dark:text-amber-400" />
      <span>{text}</span>
    </span>
  );
}

// Helper component for verified data badge
function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
      <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600 dark:text-emerald-400" />
      <span>Verified</span>
    </span>
  );
}

export function MandatoryDisclosurePage() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const DOCUMENTS_LIST = [
    {
      sno: 1,
      title: "Copies of Affiliation / Upgradation Letter & Recent Extension",
      cbseRef: "Appendix IX - Item 1",
      status: "Placeholder scan",
      isSample: true,
      note: "Affiliation No. 2131635 extension order copy",
    },
    {
      sno: 2,
      title: "Copies of Societies / Trust / Company Registration / Renewal Certificate",
      cbseRef: "Appendix IX - Item 2",
      status: "Placeholder scan",
      isSample: true,
      note: "Registered society deed and renewal certificate",
    },
    {
      sno: 3,
      title: "Copy of No Objection Certificate (NOC) Issued by State Govt. / UT",
      cbseRef: "Appendix IX - Item 3",
      status: "Placeholder scan",
      isSample: true,
      note: "Issued by Department of Secondary Education, Uttar Pradesh",
    },
    {
      sno: 4,
      title: "Copies of Recognition Certificate under RTE Act, 2009 & its Renewal",
      cbseRef: "Appendix IX - Item 4",
      status: "Placeholder scan",
      isSample: true,
      note: "RTE recognition certificate from District Education Officer",
    },
    {
      sno: 5,
      title: "Copy of Valid Building Safety Certificate as per National Building Code",
      cbseRef: "Appendix IX - Item 5",
      status: "Placeholder scan",
      isSample: true,
      note: "Structural fitness certificate by PWD / Registered Civil Engineer",
    },
    {
      sno: 6,
      title: "Copy of Valid Fire Safety Certificate Issued by Competent Authority",
      cbseRef: "Appendix IX - Item 6",
      status: "Placeholder scan",
      isSample: true,
      note: "Fire safety NOC issued by Chief Fire Officer / District Authority",
    },
    {
      sno: 7,
      title: "Self-Certification Submitted by School for Affiliation / Extension",
      cbseRef: "Appendix IX - Item 7",
      status: "Placeholder scan",
      isSample: true,
      note: "Affidavit and compliance undertaking on prescribed CBSE format",
    },
    {
      sno: 8,
      title: "Copy of DEO / DEE Certificate Regarding Infrastructure & Facilities",
      cbseRef: "Appendix IX - Item 8",
      status: "Placeholder scan",
      isSample: true,
      note: "District Education Officer inspection and verification report",
    },
    {
      sno: 9,
      title: "Copies of Valid Water, Health & Sanitation Certificates",
      cbseRef: "Appendix IX - Item 9",
      status: "Placeholder scan",
      isSample: true,
      note: "Safe drinking water and sanitary condition certificate by CMO / Municipal Board",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Universal Site Header */}
      <SiteHeader />

      <main className="pt-24 pb-20 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            <span className="font-medium text-foreground">Mandatory Public Disclosure</span>
          </nav>

          {/* Hero Header */}
          <div className="mt-6 border-b border-border pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-semibold text-primary">
              <Shield className="h-3.5 w-3.5 text-gold" />
              <span>CBSE Affiliation Norms • Appendix IX</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Mandatory Public Disclosure
            </h1>
            <p className="mt-3 max-w-3xl text-base text-muted-foreground sm:text-lg">
              Official public disclosure of general institutional details, statutory compliance
              certificates, academic results, infrastructure specifications, and teaching staff as
              stipulated by the Central Board of Secondary Education (CBSE).
            </p>

            {/* Quick Section Anchor Jump Bar */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs sm:text-sm">
              <a
                href="#general-information"
                className="rounded-lg border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft/50 hover:text-primary"
              >
                1. General Information
              </a>
              <a
                href="#documents-information"
                className="rounded-lg border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft/50 hover:text-primary"
              >
                2. Documents &amp; Certificates
              </a>
              <a
                href="#result-academics"
                className="rounded-lg border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft/50 hover:text-primary"
              >
                3. Result &amp; Academics
              </a>
              <a
                href="#infrastructure"
                className="rounded-lg border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft/50 hover:text-primary"
              >
                4. Infrastructure
              </a>
              <a
                href="#staff"
                className="rounded-lg border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft/50 hover:text-primary"
              >
                5. Teaching Staff
              </a>
            </div>
          </div>

          {/* Statutory Disclaimer Banner */}
          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary-soft/60 p-4.5 sm:p-5">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary text-gold shadow-2xs">
                <Info className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-primary">Compliance Disclaimer</p>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  This information is published in compliance with CBSE Affiliation Bye-Laws
                  (Appendix IX). All physical documents and attested records are maintained in the
                  school office archives. For official verification or RTI enquiries, please
                  contact the school administration directly.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 1: GENERAL INFORMATION */}
          {/* ========================================================================= */}
          <section id="general-information" className="mt-12 scroll-mt-28">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                  Part A
                </span>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  1. General Information
                </h2>
              </div>
              <div className="text-xs text-muted-foreground">
                Affiliation Number: <span className="font-bold text-primary">2131635</span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="w-16 font-bold text-foreground">S.No.</TableHead>
                    <TableHead className="w-1/3 font-bold text-foreground">Information</TableHead>
                    <TableHead className="font-bold text-foreground">Details</TableHead>
                    <TableHead className="w-32 text-right font-bold text-foreground">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border/60">
                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">1</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Name of the School
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      Balvatika Preschool
                    </TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">2</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Affiliation Number
                    </TableCell>
                    <TableCell className="font-mono font-semibold text-foreground">
                      2131635
                    </TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">3</TableCell>
                    <TableCell className="font-medium text-foreground">School Code</TableCell>
                    <TableCell className="text-muted-foreground">
                      <span className="italic">To be confirmed with school records</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">4</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Complete Address with PIN Code
                    </TableCell>
                    <TableCell className="text-foreground">
                      Mauza Nichlaul, Pargana Tilpur, Mandi Road, Nichlaul, Maharajganj District,
                      Uttar Pradesh, PIN: 273305
                    </TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">5</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Principal Name &amp; Qualification
                    </TableCell>
                    <TableCell className="text-foreground">
                      <span className="font-semibold text-primary">Aarti Tripathi</span>, MA, B.Ed
                    </TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">6</TableCell>
                    <TableCell className="font-medium text-foreground">School Email ID</TableCell>
                    <TableCell>
                      <a
                        href="mailto:shsthoothibari@gmail.com"
                        className="font-medium text-primary hover:underline"
                      >
                        shsthoothibari@gmail.com
                      </a>
                    </TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">7</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Contact Details (Phone / Mobile)
                    </TableCell>
                    <TableCell>
                      <a
                        href="tel:+919076821500"
                        className="font-medium text-primary hover:underline"
                      >
                        +91 9076821500
                      </a>
                    </TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">8</TableCell>
                    <TableCell className="font-medium text-foreground">
                      School Category / Type
                    </TableCell>
                    <TableCell className="text-foreground">
                      Independent / Senior Secondary (Co-educational)
                    </TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">9</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Year of Establishment
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">2007</TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">10</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Affiliation Period
                    </TableCell>
                    <TableCell>
                      <span>01/04/2022 to 31/03/2027</span>
                      <p className="mt-0.5 text-xs text-amber-700 dark:text-amber-400">
                        * Note: Verify exact grant renewal dates with school before final publishing
                      </p>
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">11</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Trust / Society Managing the School
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      <span className="italic">Registered Trust / Society Name — Confirm with school</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 2: DOCUMENTS AND INFORMATION */}
          {/* ========================================================================= */}
          <section id="documents-information" className="mt-16 scroll-mt-28">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                  Part B
                </span>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  2. Documents and Information
                </h2>
              </div>
              <p className="text-xs text-muted-foreground">
                CBSE Appendix IX statutory certificate uploads
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-amber-300 bg-amber-50/70 p-4 text-xs text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-amber-200">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
                <span>
                  <strong>Document Upload Placeholder:</strong> The items below represent the
                  statutory checklist required by CBSE. Certified PDF scans should be linked prior
                  to CBSE annual compliance audits.
                </span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="w-16 font-bold text-foreground">S.No.</TableHead>
                    <TableHead className="font-bold text-foreground">
                      Document / Certificate Title
                    </TableHead>
                    <TableHead className="hidden font-bold text-foreground sm:table-cell">
                      CBSE Bye-Law Reference
                    </TableHead>
                    <TableHead className="w-36 font-bold text-foreground">Status</TableHead>
                    <TableHead className="w-36 text-right font-bold text-foreground">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border/60">
                  {DOCUMENTS_LIST.map((doc) => (
                    <TableRow key={doc.sno}>
                      <TableCell className="font-semibold text-muted-foreground">
                        {doc.sno}
                      </TableCell>
                      <TableCell>
                        <p className="font-medium text-foreground">{doc.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{doc.note}</p>
                      </TableCell>
                      <TableCell className="hidden text-xs text-muted-foreground sm:table-cell">
                        {doc.cbseRef}
                      </TableCell>
                      <TableCell>
                        <SampleDataBadge text="Upload pending" />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedDoc(doc.title)}
                          className="inline-flex items-center gap-1.5 text-xs text-primary hover:bg-primary-soft hover:text-primary"
                        >
                          <FileText className="h-3.5 w-3.5 text-gold" />
                          <span>View PDF</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 3: RESULT AND ACADEMICS */}
          {/* ========================================================================= */}
          <section id="result-academics" className="mt-16 scroll-mt-28">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                  Part C
                </span>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  3. Result and Academics
                </h2>
              </div>
              <p className="text-xs text-muted-foreground">
                Fee policies, academic schedules &amp; committee structures
              </p>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* C1: Fee Structure */}
              <div className="rounded-2xl border border-dashed border-amber-300 bg-card p-6 shadow-soft dark:border-amber-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-primary">
                      Fee Structure of the School
                    </h3>
                  </div>
                  <SampleDataBadge text="Sample breakdown" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Class-wise annual/quarterly schedule. Actual figures must be verified with school
                  accounts before publishing.
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-border">
                  <Table>
                    <TableHeader className="bg-muted/40">
                      <TableRow>
                        <TableHead className="text-xs font-bold">Class Wing</TableHead>
                        <TableHead className="text-xs font-bold">Admission (One-time)</TableHead>
                        <TableHead className="text-xs font-bold">Quarterly Tuition</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="text-xs">
                      <TableRow>
                        <TableCell className="font-medium">Primary (I – V)</TableCell>
                        <TableCell className="text-muted-foreground">[Sample fee ₹]</TableCell>
                        <TableCell className="text-muted-foreground">[Sample fee ₹]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Middle (VI – VIII)</TableCell>
                        <TableCell className="text-muted-foreground">[Sample fee ₹]</TableCell>
                        <TableCell className="text-muted-foreground">[Sample fee ₹]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Secondary (IX – X)</TableCell>
                        <TableCell className="text-muted-foreground">[Sample fee ₹]</TableCell>
                        <TableCell className="text-muted-foreground">[Sample fee ₹]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Sr. Secondary (XI – XII)</TableCell>
                        <TableCell className="text-muted-foreground">[Sample fee ₹]</TableCell>
                        <TableCell className="text-muted-foreground">[Sample fee ₹]</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Direct link to fee policy</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    <span>Request Official Fee Booklet</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* C2: Annual Academic Calendar */}
              <div className="rounded-2xl border border-dashed border-amber-300 bg-card p-6 shadow-soft dark:border-amber-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-primary">
                      Annual Academic Calendar
                    </h3>
                  </div>
                  <SampleDataBadge text="Sample terms" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Overview of session schedule from April to March. Official circular to be updated.
                </p>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2">
                    <span className="font-medium text-foreground">Session Commencement</span>
                    <span className="text-muted-foreground">First week of April</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2">
                    <span className="font-medium text-foreground">Periodic Assessment 1</span>
                    <span className="text-muted-foreground">July (Sample window)</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2">
                    <span className="font-medium text-foreground">Mid-Term Examination</span>
                    <span className="text-muted-foreground">September (Sample window)</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2">
                    <span className="font-medium text-foreground">Periodic Assessment 2</span>
                    <span className="text-muted-foreground">December (Sample window)</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2">
                    <span className="font-medium text-foreground">Annual Examination</span>
                    <span className="text-muted-foreground">February – March</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Full academic planner</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedDoc("Annual Academic Calendar (Session 2026-27)")}
                    className="h-7 text-xs text-primary hover:bg-primary-soft"
                  >
                    <span>Download Calendar</span>
                    <Download className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* C3 & C4: SMC & PTA Committees */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* SMC */}
              <div className="rounded-2xl border border-dashed border-amber-300 bg-card p-6 shadow-soft dark:border-amber-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-primary">
                      School Management Committee (SMC)
                    </h3>
                  </div>
                  <SampleDataBadge text="Roster to confirm" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Statutory committee constituted in accordance with CBSE Affiliation Bye-Laws.
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-border text-xs">
                  <Table>
                    <TableHeader className="bg-muted/40">
                      <TableRow>
                        <TableHead className="font-bold">Designation</TableHead>
                        <TableHead className="font-bold">Representative Category</TableHead>
                        <TableHead className="font-bold">Member Name</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">President / Chairman</TableCell>
                        <TableCell>Trust Nominee</TableCell>
                        <TableCell className="text-muted-foreground">[To be updated]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Member Secretary</TableCell>
                        <TableCell>Principal (Ex-Officio)</TableCell>
                        <TableCell className="font-medium text-primary">Aarti Tripathi</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Parent Representative</TableCell>
                        <TableCell>PTA Nominee</TableCell>
                        <TableCell className="text-muted-foreground">[To be updated]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Teacher Representative</TableCell>
                        <TableCell>Senior Faculty</TableCell>
                        <TableCell className="text-muted-foreground">[To be updated]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">CBSE / Educationist</TableCell>
                        <TableCell>Board Nominee</TableCell>
                        <TableCell className="text-muted-foreground">[To be updated]</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* PTA */}
              <div className="rounded-2xl border border-dashed border-amber-300 bg-card p-6 shadow-soft dark:border-amber-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-primary">
                      Parent Teacher Association (PTA)
                    </h3>
                  </div>
                  <SampleDataBadge text="Roster to confirm" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Elected and nominated parent &amp; faculty representatives for the ongoing academic
                  session.
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-border text-xs">
                  <Table>
                    <TableHeader className="bg-muted/40">
                      <TableRow>
                        <TableHead className="font-bold">Designation</TableHead>
                        <TableHead className="font-bold">Representation</TableHead>
                        <TableHead className="font-bold">Member Name</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Chairperson</TableCell>
                        <TableCell>Principal</TableCell>
                        <TableCell className="font-medium text-primary">Aarti Tripathi</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Vice Chairperson</TableCell>
                        <TableCell>Parent Representative</TableCell>
                        <TableCell className="text-muted-foreground">[To be updated]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Secretary</TableCell>
                        <TableCell>Faculty Representative</TableCell>
                        <TableCell className="text-muted-foreground">[To be updated]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Joint Secretary</TableCell>
                        <TableCell>Parent Representative</TableCell>
                        <TableCell className="text-muted-foreground">[To be updated]</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Executive Members</TableCell>
                        <TableCell>Parents (Wing-wise)</TableCell>
                        <TableCell className="text-muted-foreground">[To be updated]</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            {/* C5: Past 3-Year Board Examination Results */}
            <div className="mt-8 rounded-2xl border border-dashed border-amber-300 bg-card p-6 shadow-soft dark:border-amber-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">
                    Past 3-Year Board Examination Results
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Class X and Class XII CBSE board performance summary.
                  </p>
                </div>
                <SampleDataBadge text="Sample statistics" />
              </div>

              <div className="mt-4 grid gap-6 md:grid-cols-2">
                {/* Class X */}
                <div className="overflow-hidden rounded-xl border border-border">
                  <div className="bg-primary/10 px-3 py-2 text-xs font-bold text-primary">
                    Class X (Secondary School Examination)
                  </div>
                  <Table className="text-xs">
                    <TableHeader className="bg-muted/40">
                      <TableRow>
                        <TableHead className="font-bold">Year</TableHead>
                        <TableHead className="font-bold">Registered</TableHead>
                        <TableHead className="font-bold">Passed</TableHead>
                        <TableHead className="font-bold">Pass %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">2023</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="font-semibold text-emerald-700 dark:text-emerald-400">
                          100% (Sample)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">2024</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="font-semibold text-emerald-700 dark:text-emerald-400">
                          100% (Sample)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">2025</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="font-semibold text-emerald-700 dark:text-emerald-400">
                          100% (Sample)
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Class XII */}
                <div className="overflow-hidden rounded-xl border border-border">
                  <div className="bg-primary/10 px-3 py-2 text-xs font-bold text-primary">
                    Class XII (Senior School Certificate Examination)
                  </div>
                  <Table className="text-xs">
                    <TableHeader className="bg-muted/40">
                      <TableRow>
                        <TableHead className="font-bold">Year</TableHead>
                        <TableHead className="font-bold">Registered</TableHead>
                        <TableHead className="font-bold">Passed</TableHead>
                        <TableHead className="font-bold">Pass %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">2023</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="font-semibold text-emerald-700 dark:text-emerald-400">
                          [Sample %]
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">2024</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="font-semibold text-emerald-700 dark:text-emerald-400">
                          [Sample %]
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">2025</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="text-muted-foreground">[To confirm]</TableCell>
                        <TableCell className="font-semibold text-emerald-700 dark:text-emerald-400">
                          [Sample %]
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 4: INFRASTRUCTURE DETAILS */}
          {/* ========================================================================= */}
          <section id="infrastructure" className="mt-16 scroll-mt-28">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                  Part D
                </span>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  4. Infrastructure Details
                </h2>
              </div>
              <SampleDataBadge text="Sample figures — to be updated" />
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-amber-300 bg-amber-50/70 p-4 text-xs text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-amber-200">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
                <span>
                  <strong>Notice on Infrastructure Metrics:</strong> The physical dimensions and room
                  quantities below are structured placeholders matching CBSE Appendix IX format.
                  Exact measurements from the school land document and architectural plan must be
                  entered before regulatory filing.
                </span>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              <div className="rounded-xl border border-dashed border-amber-300 bg-card p-3.5 text-center shadow-soft dark:border-amber-800">
                <Building className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-muted-foreground">Total Campus</p>
                <p className="mt-1 font-display text-base font-bold text-primary">
                  [Sample Area]
                </p>
                <span className="text-[10px] text-amber-700 dark:text-amber-400">Sq. Mtrs / Acres</span>
              </div>

              <div className="rounded-xl border border-dashed border-amber-300 bg-card p-3.5 text-center shadow-soft dark:border-amber-800">
                <School className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-muted-foreground">Classrooms</p>
                <p className="mt-1 font-display text-base font-bold text-primary">
                  [Sample Count]
                </p>
                <span className="text-[10px] text-amber-700 dark:text-amber-400">Rooms &gt; 400 sq.ft</span>
              </div>

              <div className="rounded-xl border border-dashed border-amber-300 bg-card p-3.5 text-center shadow-soft dark:border-amber-800">
                <FileCheck className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-muted-foreground">Laboratories</p>
                <p className="mt-1 font-display text-base font-bold text-primary">
                  [Sample Count]
                </p>
                <span className="text-[10px] text-amber-700 dark:text-amber-400">Sci / Comp / Math</span>
              </div>

              <div className="rounded-xl border border-dashed border-amber-300 bg-card p-3.5 text-center shadow-soft dark:border-amber-800">
                <GraduationCap className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-muted-foreground">Library</p>
                <p className="mt-1 font-display text-base font-bold text-primary">
                  [Sample Area]
                </p>
                <span className="text-[10px] text-amber-700 dark:text-amber-400">Reading Room</span>
              </div>

              <div className="rounded-xl border border-dashed border-amber-300 bg-card p-3.5 text-center shadow-soft dark:border-amber-800">
                <MapPin className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-muted-foreground">Playground</p>
                <p className="mt-1 font-display text-base font-bold text-primary">
                  [Sample Area]
                </p>
                <span className="text-[10px] text-amber-700 dark:text-amber-400">Sports Ground</span>
              </div>

              <div className="rounded-xl border border-dashed border-amber-300 bg-card p-3.5 text-center shadow-soft dark:border-amber-800">
                <Shield className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-xs text-muted-foreground">Safety / RO</p>
                <p className="mt-1 font-display text-base font-bold text-emerald-700 dark:text-emerald-400">
                  Certified
                </p>
                <span className="text-[10px] text-muted-foreground">Fire &amp; Water</span>
              </div>
            </div>

            {/* Detailed Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="w-16 font-bold text-foreground">S.No.</TableHead>
                    <TableHead className="w-1/3 font-bold text-foreground">Information</TableHead>
                    <TableHead className="font-bold text-foreground">Details</TableHead>
                    <TableHead className="w-36 text-right font-bold text-foreground">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border/60">
                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">1</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Total Campus Area of the School
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 8,094 sq. mtrs / ~2.0 Acres — to confirm from land registry]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">2</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Total Built-up Area
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 3,500 sq. mtrs — to confirm from structural plan]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">3</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Area of Playground in Sq. Mtrs
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 4,500 sq. mtrs — to confirm]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">4</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Number of Classrooms &amp; Size
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 35 Classrooms, each ~500 sq. ft. meeting CBSE norms]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">5</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Number of Laboratories with Size
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: Physics Lab (600 sq.ft), Chemistry Lab (600 sq.ft), Biology Lab (600
                      sq.ft), Computer Science Lab (800 sq.ft), Composite Science Lab (600 sq.ft),
                      Mathematics Lab (500 sq.ft)]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">6</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Internet Facility &amp; Bandwidth
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: Yes, High-Speed Optical Fiber Connection (&gt; 100 Mbps)]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">7</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Sanitary Provisions (Toilets &amp; Urinals)
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: Separate well-equipped blocks for Boys, Girls, and Staff]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">8</TableCell>
                    <TableCell className="font-medium text-foreground">
                      YouTube Link / Video Inspection Tour
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample Video URL: To be linked with official school campus walkthrough video]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 5: STAFF (TEACHING) */}
          {/* ========================================================================= */}
          <section id="staff" className="mt-16 scroll-mt-28">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                  Part E
                </span>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  5. Staff (Teaching)
                </h2>
              </div>
              <SampleDataBadge text="Sample roster summary" />
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-amber-300 bg-amber-50/70 p-4 text-xs text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-amber-200">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
                <span>
                  <strong>Staff Breakdown Note:</strong> Teacher counts, cadre distribution, and
                  teacher-pupil ratio are sample placeholders. Real employee audit numbers must be
                  certified by the Principal before submission.
                </span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <Table>
                <TableHeader className="bg-muted/40">
                  <TableRow>
                    <TableHead className="w-16 font-bold text-foreground">S.No.</TableHead>
                    <TableHead className="w-1/3 font-bold text-foreground">Information</TableHead>
                    <TableHead className="font-bold text-foreground">Details</TableHead>
                    <TableHead className="w-36 text-right font-bold text-foreground">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-border/60">
                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">1</TableCell>
                    <TableCell className="font-medium text-foreground">Principal</TableCell>
                    <TableCell className="font-semibold text-primary">
                      Aarti Tripathi (MA, B.Ed)
                    </TableCell>
                    <TableCell className="text-right">
                      <VerifiedBadge />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">2</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Total Number of Teachers
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 42 Qualified Teachers — to confirm exact headcount]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">3</TableCell>
                    <TableCell className="font-medium text-foreground">
                      • PGT (Post Graduate Teachers)
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 10 PGTs — to confirm]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">4</TableCell>
                    <TableCell className="font-medium text-foreground">
                      • TGT (Trained Graduate Teachers)
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 16 TGTs — to confirm]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">5</TableCell>
                    <TableCell className="font-medium text-foreground">
                      • PRT (Primary Teachers)
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 12 PRTs — to confirm]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">6</TableCell>
                    <TableCell className="font-medium text-foreground">
                      • NTT / Kindergarten Teachers
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: e.g. 4 NTTs — to confirm]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">7</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Teachers Section Ratio
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: 1.5 : 1 — meeting CBSE Affiliation Bye-Law norms]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">8</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Details of Special Educator
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: Qualified Special Educator appointed — name and RCI registration to confirm]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-semibold text-muted-foreground">9</TableCell>
                    <TableCell className="font-medium text-foreground">
                      Details of Counsellor and Wellness Teacher
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      [Sample: Full-time Student Counsellor and Wellness Coach — to confirm]
                    </TableCell>
                    <TableCell className="text-right">
                      <SampleDataBadge text="To confirm" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* VERIFICATION & OFFICIAL INQUIRY BOX */}
          {/* ========================================================================= */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-primary p-6 text-primary-foreground sm:p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                  <Shield className="h-3.5 w-3.5" />
                  <span>Document Verification &amp; Inspection</span>
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  Official Records Verification
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                  Attested copies of certificates, building plans, audit accounts, and land registry
                  documents are available for physical verification at the administrative office
                  during working hours.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <Building className="h-4 w-4 shrink-0 text-gold" />
                  <span>Administrative Office, Balvatika Preschool, New Jaganpura Road, Patna</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  <a href="tel:+919031025415" className="hover:text-gold transition-colors">
                    +91 9031025415
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  <a
                    href="mailto:balvatikapreschool415@gmail.com"
                    className="hover:text-gold transition-colors"
                  >
                    balvatikapreschool415@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Universal Footer */}
      <SiteFooter />

      {/* Document Preview / Placeholder Dialog */}
      <Dialog open={Boolean(selectedDoc)} onOpenChange={(open) => !open && setSelectedDoc(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-display text-lg text-primary">
              <FileText className="h-5 w-5 text-gold" />
              <span>Document Verification</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              CBSE Mandatory Public Disclosure Archive
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-2 text-sm">
            <div className="rounded-lg border border-border bg-muted/30 p-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase">
                Selected Document
              </p>
              <p className="mt-1 font-semibold text-foreground">{selectedDoc}</p>
            </div>

            <div className="rounded-lg border border-amber-300 bg-amber-50/60 p-3 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300">
              <div className="flex gap-2">
                <Info className="h-4 w-4 shrink-0 text-amber-600" />
                <p>
                  <strong>Digital Archive Note:</strong> This document is archived in the school
                  administrative records in compliance with CBSE circular directives. When the final
                  certified PDF scan is uploaded, it will be directly downloadable here.
                </p>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button variant="outline" size="sm" onClick={() => setSelectedDoc(null)}>
              Close
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href={`mailto:shsthoothibari@gmail.com?subject=Document%20Verification%20Request%20-%20${encodeURIComponent(selectedDoc || "")}`}
                onClick={() => setSelectedDoc(null)}
              >
                Request Certified Copy
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
