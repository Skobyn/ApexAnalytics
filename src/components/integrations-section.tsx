"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function IntegrationsSection() {
  const integrations = [
    {
      name: "Google Analytics 4",
      logo: "https://ext.same-assets.com/1044981387/2818150891.svg",
      link: "/integrations/google-analytics",
    },
    {
      name: "Google Ads",
      logo: "https://ext.same-assets.com/1044981387/4263905291.svg",
      link: "/integrations/google-ads",
    },
    {
      name: "Facebook",
      logo: "https://ext.same-assets.com/1044981387/3251570025.svg",
      link: "/integrations/facebook",
    },
    {
      name: "Facebook Ads",
      logo: "https://ext.same-assets.com/1044981387/2265610738.svg",
      link: "/integrations/facebook-ads",
    },
    {
      name: "Google Business Profile",
      logo: "https://ext.same-assets.com/1044981387/2338669436.svg",
      link: "/integrations/google-business-profile",
    },
    {
      name: "Google Search Console",
      logo: "https://ext.same-assets.com/1044981387/3162334539.svg",
      link: "/integrations/google-search-console",
    },
    {
      name: "Instagram",
      logo: "https://ext.same-assets.com/1044981387/2408180683.svg",
      link: "/integrations/instagram",
    },
    {
      name: "LinkedIn",
      logo: "https://ext.same-assets.com/1044981387/3715260105.svg",
      link: "/integrations/linkedin",
    },
    {
      name: "Mailchimp",
      logo: "https://ext.same-assets.com/1044981387/3102595292.svg",
      link: "/integrations/mailchimp",
    },
    {
      name: "Shopify",
      logo: "https://ext.same-assets.com/1044981387/2207015219.svg",
      link: "/integrations/shopify",
    },
    {
      name: "Semrush",
      logo: "https://ext.same-assets.com/1044981387/2370537711.svg",
      link: "/integrations/semrush",
    },
    {
      name: "Twitter",
      logo: "https://ext.same-assets.com/1044981387/3092986003.svg",
      link: "/integrations/twitter",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <span className="uppercase text-sm font-bold tracking-wider text-blue-600">80+ MARKETING INTEGRATIONS & GROWING</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0c3861] mb-6">
              <span className="text-blue-600 italic">Connect</span> All Your Clients' Marketing
              Data in One Place
            </h2>
            <p className="text-base md:text-lg mb-8 text-[#0c3861]/80">
              Marketing moves fast, and so do we. With 80+ marketing integrations and new releases each month,
              we'll keep you up-to-date with all your clients' data in one place.
            </p>
            <Button className="bg-[#0e69cb] hover:bg-[#0d5eb8] text-white text-base font-semibold h-12 px-6 rounded-md" asChild>
              <Link href="/integrations">
                See All Integrations
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {integrations.map((integration) => (
                <Link
                  key={integration.name}
                  href={integration.link}
                  className="flex flex-col items-center justify-center bg-white p-4 rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={40}
                    height={40}
                    className="h-8 w-auto mb-2"
                  />
                  <span className="text-xs text-center text-[#0c3861]/80 font-medium">{integration.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
