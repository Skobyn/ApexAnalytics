import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getIntegrationById, categories, IntegrationCategory } from "@/lib/integrations";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const integration = getIntegrationById(params.id);

  if (!integration) {
    return {
      title: "Integration Not Found | AgencyAnalytics",
      description: "The requested integration could not be found.",
    };
  }

  return {
    title: `${integration.name} Integration | AgencyAnalytics`,
    description: `Connect your ${integration.name} account to AgencyAnalytics for seamless reporting and data visualization.`,
  };
}

export default async function IntegrationPage({
  params,
}: {
  params: { id: string };
}) {
  const integration = getIntegrationById(params.id);

  if (!integration) {
    notFound();
  }

  // Get the categories this integration belongs to
  const integrationCategories = categories.filter(category =>
    integration.categories.includes(category.id as IntegrationCategory)
  );

  return (
    <main>
      <Header />

      <section className="py-12 bg-gradient-to-b from-[#f7f9fa] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-6">
            <Link href="/integrations" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
              ← Back to all integrations
            </Link>

            <div className="flex items-center mb-6">
              <Image
                src={integration.logo}
                alt={integration.name}
                width={64}
                height={64}
                className="h-16 w-auto mr-4"
              />
              <h1 className="text-3xl font-bold text-[#0c3861]">
                {integration.name} Integration
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {integrationCategories.map(category => (
                <Link
                  key={category.id}
                  href={`/integrations/tags/${category.id}`}
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <p className="text-lg text-[#0c3861]/80 mb-6">
              Connect your {integration.name} account to AgencyAnalytics to bring all your marketing data together in one place. Create custom dashboards and automated reports for your clients with powerful visualizations.
            </p>

            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
              <div className="flex items-center mb-4">
                <div className={`w-2 h-2 rounded-full mr-2 ${integration.status === 'connected' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className="font-medium">Connection Status:</span>
                <span className="ml-2">{integration.status === 'connected' ? 'Connected' : 'Not Connected'}</span>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                {integration.status === 'connected' ? 'Reconnect' : 'Connect'} {integration.name}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0c3861] mb-6">Key Features</h2>

            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0c3861] mb-1">Automated Reporting</h3>
                  <p className="text-[#0c3861]/80">
                    Create and schedule automated {integration.name} reports to be sent to clients on a daily, weekly, or monthly basis.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0c3861] mb-1">Custom Dashboards</h3>
                  <p className="text-[#0c3861]/80">
                    Create beautiful dashboards with {integration.name} data that update in real-time, giving clients a comprehensive view of their performance.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0c3861] mb-1">White Label Reports</h3>
                  <p className="text-[#0c3861]/80">
                    Brand your {integration.name} reports with your agency's logo, colors, and custom domain for a professional look and feel.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0c3861] mb-1">Centralized Data</h3>
                  <p className="text-[#0c3861]/80">
                    Combine {integration.name} data with other marketing platforms in one centralized dashboard for a comprehensive view of performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-bold text-[#0c3861] mb-6">Get Started with {integration.name}</h2>
                <p className="text-[#0c3861]/80 mb-6">
                  Start creating custom dashboards and reports with {integration.name} data in just a few minutes. Connect your account and see how easy it is to visualize your data.
                </p>

                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/signup">Start Your Free Trial</Link>
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600" asChild>
                    <Link href="#">Watch Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
