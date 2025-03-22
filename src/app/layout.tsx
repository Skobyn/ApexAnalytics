import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Automated Client Reporting for Marketing Agencies | AgencyAnalytics",
  description: "AgencyAnalytics helps marketing agencies scale with automated client reporting. Create custom dashboards and reports for SEO, PPC, social media, and more. 14-Day Free Trial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
