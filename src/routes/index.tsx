import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/home/SiteHeader";
import {
  About,
  AcademicsAndBoarding,
  CoCurricular,
  Facilities,
  Hero,
  Highlights,
  LifeAtBalvatika,
  Testimonials,
  WhyChooseUs,
} from "@/components/home/HomeSections";
import { EnquirySection } from "@/components/home/EnquirySection";
import { NoticeBoard } from "@/components/home/NoticeBoard";
import { FounderSection } from "@/components/home/FounderSection";
import { PrincipalWelcome } from "@/components/home/PrincipalWelcome";
import { AdmissionsProcess } from "@/components/home/AdmissionsProcess";
import { FaqSection } from "@/components/home/FaqSection";
import { Achievements } from "@/components/home/Achievements";
import { SafetyCare } from "@/components/home/SafetyCare";
import { DailyRoutine } from "@/components/home/DailyRoutine";
import { StayConnected } from "@/components/home/StayConnected";
import { SiteFooter } from "@/components/home/SiteFooter";
import { TrustStrip } from "@/components/home/TrustStrip";
import { JourneyTimeline } from "@/components/home/JourneyTimeline";
import { NewsPreview } from "@/components/home/NewsPreview";
import { MobileActionBar } from "@/components/home/MobileActionBar";

const title = "Balvatika Preschool | Play Group, Nursery, LKG & UKG in Patna";
const description =
  "Balvatika Preschool – A safe, caring & joyful learning environment in New Jaganpura, Patna. Offering Play Group, Nursery, LKG & UKG. Nurturing today, empowering tomorrow.";
const canonical = "https://balvatikapatna.in/";
const shareImage =
  "https://balvatikapatna.in/images/childrens/BalVatika-Classroom.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: shareImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: shareImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <SiteHeader />
      <main className="pt-16 sm:pt-[6.25rem] lg:pt-[7.25rem]">
        <Hero />
        <TrustStrip />
        <Highlights />
        <NoticeBoard />
        <About />
        <FounderSection />
        <PrincipalWelcome />
        <JourneyTimeline />
        <WhyChooseUs />
        <Achievements />
        <AcademicsAndBoarding />
        <SafetyCare />
        <DailyRoutine />
        <LifeAtBalvatika />
        <Facilities />
        <CoCurricular />
        <NewsPreview />
        <Testimonials />
        <AdmissionsProcess />
        <EnquirySection />
        <FaqSection />
        <StayConnected />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}
