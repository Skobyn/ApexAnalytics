import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { categories, integrations, getIntegrationsByCategory } from "@/lib/integrations";

export const metadata = {
  title: "All-in-One Client Reporting - 80+ AgencyAnalytics Integrations",
  description: "All-in-One reporting for agencies. Include data from 80+ marketing channels in your client reports. Learn more about each of AgencyAnalytics' integrations.",
};

export default function IntegrationsPage() {
  const featuredSections = [
    {
      title: "Automated Reports",
      description: "Schedule and automate client reports to save time and improve efficiency.",
      icon: "https://ext.same-assets.com/1287963695/1265726636.svg",
      link: "/feature/automated-marketing-reports",
    },
    {
      title: "White Label Dashboard",
      description: "Brand your dashboards and reports with your agency's logo and colors.",
      icon: "https://ext.same-assets.com/1287963695/1265726636.svg",
      link: "/feature/white-label",
    },
    {
      title: "Client & Staff Access",
      description: "Give clients and team members controlled access to dashboards and reports.",
      icon: "https://ext.same-assets.com/1287963695/1265726636.svg",
      link: "/feature/agency-tools",
    },
    {
      title: "Connect Your Data",
      description: "Easily integrate all your marketing data sources into one centralized dashboard.",
      icon: "https://ext.same-assets.com/1287963695/1265726636.svg",
      link: "/integrations",
    },
    {
      title: "AI Powered",
      description: "Get insights and recommendations powered by AI to improve your marketing strategy.",
      icon: "https://ext.same-assets.com/1287963695/1265726636.svg",
      link: "/feature/ai-reporting-tools",
    },
    {
      title: "Automation & Alerts",
      description: "Set up automated alerts and notifications for important performance metrics.",
      icon: "https://ext.same-assets.com/1287963695/1265726636.svg",
      link: "/feature/automated-marketing-reports",
    },
  ];

  return (
    <main>
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f7f9fa] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c3861] mb-6">
              All Your Marketing Data In One Place
            </h1>
            <p className="text-base md:text-lg text-[#0c3861]/80 mb-8">
              Streamline Client Reporting and Consolidate Marketing Data with {integrations.length}+ Powerful AgencyAnalytics Integrations
            </p>
            <Button className="bg-primary text-white text-base font-semibold h-12 px-6 rounded-md" asChild>
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/integrations/tags/${category.id}`}
                className="flex items-center bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-full text-sm text-blue-600 transition-colors"
              >
                <Image
                  src="https://ext.same-assets.com/1287963695/1265726636.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="mr-2"
                />
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration) => (
              <Link
                key={integration.id}
                href={`/integrations/${integration.id}`}
                className={`flex flex-col items-center p-6 bg-white border ${integration.isConfigured ? 'border-blue-200' : 'border-gray-100'} rounded-lg shadow-sm hover:shadow-md transition-all relative`}
              >
                {integration.status === 'connected' && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500" />
                )}
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={48}
                  height={48}
                  className="h-12 w-auto mb-4"
                />
                <h3 className="text-sm font-semibold text-center text-[#0c3861] mb-1">{integration.name}</h3>
                <p className="text-xs text-center text-[#0c3861]/60">{integration.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0c3861] mb-12">
            Everything Your Agency Needs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSections.map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full mr-3">
                    <Image
                      src={section.icon}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0c3861]">{section.title}</h3>
                </div>
                <p className="text-sm text-[#0c3861]/80 mb-4">{section.description}</p>
                <Link
                  href={section.link}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              src="https://ext.same-assets.com/1287963695/849522504.png"
              alt="AgencyAnalytics Dashboard Preview"
              width={1000}
              height={500}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
