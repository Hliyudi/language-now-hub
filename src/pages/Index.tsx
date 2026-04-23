import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CoursesSection = lazy(() => import("@/components/CoursesSection"));
const MethodologySection = lazy(() => import("@/components/MethodologySection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CtaSection = lazy(() => import("@/components/CtaSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <Suspense fallback={null}>
      <BenefitsSection />
      <AboutSection />
      <CoursesSection />
      <MethodologySection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </Suspense>
  </div>
);

export default Index;
