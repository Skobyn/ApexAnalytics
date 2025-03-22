"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function AutomatedReportingSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0c3861] relative overflow-hidden">
      {/* Wavy background pattern */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1920 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,300 C150,360 350,180 550,240 C750,300 950,120 1150,180 C1350,240 1550,60 1750,120 C1850,150 1920,180 1920,180 L1920,700 L0,700 Z"
          fill="white" fillOpacity="0.1" />
          <path d="M0,320 C150,380 350,200 550,260 C750,320 950,140 1150,200 C1350,260 1550,80 1750,140 C1850,170 1920,200 1920,200 L1920,700 L0,700 Z"
          fill="white" fillOpacity="0.1" />
          <path d="M0,340 C150,400 350,220 550,280 C750,340 950,160 1150,220 C1350,280 1550,100 1750,160 C1850,190 1920,220 1920,220 L1920,700 L0,700 Z"
          fill="white" fillOpacity="0.1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <Image
              src="https://images.ctfassets.net/dfcvkz6j859j/3V7axLNnk7iDQzyVFmIudf/9944bfaca4262b4b47e86dd05ddd8021/Digital-Marketing-Reporting-Software-AgencyAnalytics.png"
              alt="Automated client reporting for marketing agencies"
              width={600}
              height={450}
              className="rounded-md shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <span className="uppercase text-sm font-bold tracking-wider text-blue-300">EFFORTLESS AUTOMATED REPORTING</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
              <span className="text-blue-300 italic">Stop Wasting Time</span>{" "}
              with Manual Reporting
            </h2>
            <p className="text-base md:text-lg mb-8 text-white/90">
              It's time to put away the spreadsheets and stop wasting time with manual client reporting.
              With fully automated reports and custom dashboards, you have everything you need to
              save time, impress clients, and scale your marketing agency.
            </p>
            <Button className="bg-white text-[#0c3861] hover:bg-blue-100 text-base font-semibold h-12 px-6 rounded-md" asChild>
              <Link href="/feature/automated-marketing-reports">
                Discover Automated Reports
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
