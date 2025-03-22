"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f9fafb] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c3861] leading-tight mb-4">
              Automate Your Client Reporting.
              <br />
              Scale Your Marketing Agency.
            </h1>
            <p className="text-base md:text-lg text-[#0c3861]/80 mb-8">
              Demonstrate the full value your marketing agency delivers. Connect all your clients' data under
              one roof. Create customizable dashboards and automated reports your clients will
              love.
            </p>
            <div className="mb-12">
              <Button className="bg-[#0e69cb] hover:bg-[#0d5eb8] text-white text-base font-semibold h-12 px-6 rounded-md" asChild>
                <Link href="/signup">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
          <div className="w-full max-w-5xl">
            <Image
              src="https://images.ctfassets.net/dfcvkz6j859j/2LkozMXaRN6i21qCSrLxhK/1824d69693728e2798eed9de385e95ab/AgencyAnalytics-Client-Reporting-Dashboard-Screenshot.png"
              alt="AgencyAnalytics Client Reporting Dashboard"
              width={1200}
              height={700}
              className="w-full h-auto object-contain rounded-md shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
