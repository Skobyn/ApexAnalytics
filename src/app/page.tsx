import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustedBy } from "@/components/trusted-by";
import { AutomatedReportingSection } from "@/components/automated-reporting-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustedBy />
      <AutomatedReportingSection />
      <IntegrationsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
