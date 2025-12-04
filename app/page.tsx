import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";

// Homepage sections per Sprint 7-8 docs:
// 1. Hero with CTA
// 2. How it works
// 3. Features grid
// 4. Social proof
// 5. Use cases
// 6. Pricing teaser
// 7. FAQ
// 8. Lead capture / CTA
// 9. Footer

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <SocialProof />
      <UseCases />
      <Pricing />
      <FAQ />
      <LeadCaptureForm />
      <Footer />
    </main>
  );
}
