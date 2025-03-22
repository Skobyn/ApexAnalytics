import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Client Reporting Software Built for Marketing Agencies - AgencyAnalytics",
  description: "Discover powerful reporting software built for agencies. Find everything your agency needs to monitor your marketing campaigns and create reports. 14-day free trial.",
};

export default function FeaturesPage() {
  const featuresList = [
    {
      id: "automated-reports",
      title: "Automated Reports",
      description: "Put your reporting on autopilot with scheduled reports that automatically send to clients.",
      image: "https://ext.same-assets.com/1287963695/849522504.png",
      buttonText: "Learn About Automated Reports",
      buttonLink: "/feature/automated-marketing-reports",
    },
    {
      id: "custom-dashboards",
      title: "Custom Dashboards",
      description: "Create fully customizable dashboards that showcase your marketing results in real-time.",
      image: "https://ext.same-assets.com/1287963695/849522504.png",
      buttonText: "Explore Custom Dashboards",
      buttonLink: "/feature/custom-marketing-dashboards",
    },
    {
      id: "ai-insights",
      title: "AI Reporting Tools",
      description: "Get instant insights from your clients' data with powerful AI-driven analysis.",
      image: "https://ext.same-assets.com/1287963695/849522504.png",
      buttonText: "Discover AI Insights",
      buttonLink: "/feature/ai-reporting-tools",
    },
    {
      id: "white-label",
      title: "White Label Your Marketing Reports",
      description: "Customize your client dashboards and reports with your agency's branding.",
      image: "https://ext.same-assets.com/1287963695/849522504.png",
      buttonText: "Learn About White Labeling",
      buttonLink: "/feature/white-label",
    },
    {
      id: "integrations",
      title: "80+ Marketing Integrations",
      description: "Connect all your clients' marketing data in one place with over 80 integrations.",
      image: "https://ext.same-assets.com/1287963695/849522504.png",
      buttonText: "See All Integrations",
      buttonLink: "/integrations",
    },
  ];

  return (
    <main>
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f7f9fa] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c3861] mb-6">
              Automated Client Reporting Software Built for Marketing Agencies
            </h1>
            <p className="text-base md:text-lg text-[#0c3861]/80 mb-8">
              Put your client reporting on autopilot with automated reports, customizable dashboards, and instant AI insights. Experience the client reporting software purpose-built for marketing agencies.
            </p>
            <Button className="bg-primary text-white text-base font-semibold h-12 px-6 rounded-md" asChild>
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
          </div>

          <div className="grid grid-cols-6 gap-4 py-8 mb-12 max-w-4xl mx-auto">
            <Link href="#automated-reports" className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
                <Image
                  src="https://ext.same-assets.com/1287963695/1265726636.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs text-center">Automated Reports</span>
            </Link>
            <Link href="#custom-dashboards" className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
                <Image
                  src="https://ext.same-assets.com/1287963695/1265726636.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs text-center">Custom Dashboards</span>
            </Link>
            <Link href="#ai-insights" className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
                <Image
                  src="https://ext.same-assets.com/1287963695/1265726636.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs text-center">AI Insights</span>
            </Link>
            <Link href="#white-label" className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
                <Image
                  src="https://ext.same-assets.com/1287963695/1265726636.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs text-center">White Label</span>
            </Link>
            <Link href="#agency-management" className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
                <Image
                  src="https://ext.same-assets.com/1287963695/1265726636.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs text-center">Agency Management</span>
            </Link>
            <Link href="#integrations" className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
                <Image
                  src="https://ext.same-assets.com/1287963695/1265726636.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs text-center">Integrations</span>
            </Link>
          </div>
        </div>
      </section>

      {featuresList.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f7f9fa]'}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'order-2' : ''}`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-md shadow-xl"
                />
              </div>
              <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'order-1' : ''}`}>
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/1287963695/1248550479.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className="uppercase text-sm font-bold tracking-wider text-blue-600">Feature Spotlight</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0c3861] mb-6">
                  {feature.title}
                </h2>
                <p className="text-base md:text-lg mb-8 text-[#0c3861]/80">
                  {feature.description}
                </p>
                <Button className="bg-primary text-white hover:bg-blue-800 text-base font-semibold h-12 px-6 rounded-md" asChild>
                  <Link href={feature.buttonLink}>
                    {feature.buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

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
