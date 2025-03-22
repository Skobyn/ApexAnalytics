"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-[#0e69cb] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get Started for Free
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Try AgencyAnalytics risk-free for 14 days. No credit card required.
        </p>
        <Button className="bg-white text-[#0e69cb] hover:bg-blue-100 text-base font-semibold h-12 px-8 rounded-md" asChild>
          <Link href="/signup">
            Start Your Free Trial
          </Link>
        </Button>
        <div className="mt-12">
          <Image
            src="https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F2LkozMXaRN6i21qCSrLxhK%2F1824d69693728e2798eed9de385e95ab%2FAgencyAnalytics-Client-Reporting-Dashboard-Screenshot.png&w=3840&q=75"
            alt="AgencyAnalytics Dashboard Preview"
            width={1000}
            height={500}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
