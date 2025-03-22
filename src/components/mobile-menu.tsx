"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function MobileMenu() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const menuItems = [
    {
      id: "features",
      label: "Features",
      items: [
        { label: "All Features", href: "/features" },
        { label: "Automated Reports", href: "/features#automated-reports" },
        { label: "Custom Dashboards", href: "/features#custom-dashboards" },
        { label: "White Label", href: "/features#white-label" },
        { label: "Client & Staff Management", href: "/features#agency-management" },
        { label: "AI Insights", href: "/features#ai-insights" },
      ],
    },
    {
      id: "integrations",
      label: "Integrations",
      items: [
        { label: "All Integrations", href: "/integrations" },
        { label: "Google Analytics 4", href: "/integrations" },
        { label: "Google Ads", href: "/integrations" },
        { label: "Facebook", href: "/integrations" },
        { label: "Mailchimp", href: "/integrations" },
      ],
    },
    {
      id: "resources",
      label: "Resources",
      items: [
        { label: "Reports", href: "/reports" },
        { label: "Help Center", href: "/help-center" },
        { label: "Dashboard Templates", href: "/dashboards" },
        { label: "Report Templates", href: "/report-templates" },
      ],
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="block md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex justify-between items-center">
            <span className="sr-only">Menu</span>
            <X className="h-6 w-6" />
          </SheetTitle>
        </SheetHeader>
        <div className="py-6 px-4 overflow-y-auto max-h-[calc(100vh-120px)]">
          <div className="space-y-6">
            {menuItems.map((section) => (
              <div key={section.id} className="border-b border-gray-100 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left py-2 font-semibold"
                  onClick={() => toggleSection(section.id)}
                >
                  {section.label}
                  {openSection === section.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openSection === section.id && (
                  <div className="mt-3 pl-4 space-y-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-[#0c3861]/80 hover:text-[#0c3861]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Link href="/pricing" className="block py-2 font-semibold">
                Pricing
              </Link>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="https://app.agencyanalytics.com/login">Login</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/signup?el=header">Start Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
