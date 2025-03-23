import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getIntegrationsByCategory, categories, IntegrationCategory } from "@/lib/integrations";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const category = categories.find(cat => cat.id === params.category);

  if (!category) {
    return {
      title: "Category Not Found | AgencyAnalytics",
      description: "The requested integration category could not be found.",
    };
  }

  return {
    title: `${category.name} Integrations | AgencyAnalytics`,
    description: `Connect your ${category.name} platforms with AgencyAnalytics for powerful reporting and analytics.`,
  };
}

export default function CategoryPage({ params }) {
  const categoryId = params.category;
  const integrations = getIntegrationsByCategory(categoryId);
  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f7f9fa] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Link href="/integrations" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
              ← Back to all integrations
            </Link>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0c3861] mb-6">
              {category.name} Integrations
            </h1>
            <p className="text-base md:text-lg text-[#0c3861]/80 mb-8">
              {getDescriptionForCategory(category.id)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/integrations/tags/${cat.id}`}
                className={`flex items-center ${cat.id === category.id ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'} px-3 py-2 rounded-full text-sm transition-colors`}
              >
                <Image
                  src="https://ext.same-assets.com/1287963695/1265726636.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="mr-2"
                />
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0c3861] mb-6 text-center">
            {integrations.length} {category.name} Integrations Available
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
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

          {integrations.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-500">No integrations found in this category</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/integrations">View all integrations</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#0e69cb] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started with AgencyAnalytics
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Connect all your marketing tools in one place and create beautiful reports for your clients.
          </p>
          <Button className="bg-white text-[#0e69cb] hover:bg-blue-100 text-base font-semibold h-12 px-8 rounded-md" asChild>
            <Link href="/signup">
              Start Your Free Trial
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Helper function to generate descriptions for each category
function getDescriptionForCategory(categoryId: string): string {
  switch (categoryId) {
    case 'analytics':
      return 'Connect your analytics platforms to create comprehensive dashboards and detailed reports showing website traffic, user behavior, conversions, and more.';
    case 'ppc':
      return 'Integrate your paid advertising platforms to track campaign performance, ad spend, conversions, and ROI across all your marketing channels.';
    case 'seo':
      return 'Connect your SEO tools to monitor keyword rankings, backlinks, site health, and organic search performance in one centralized dashboard.';
    case 'social':
      return 'Integrate social media platforms to track engagement, follower growth, content performance, and social conversions for your clients.';
    case 'email':
      return 'Connect email marketing platforms to monitor campaign performance, open rates, click-through rates, and conversions in your client reports.';
    case 'call-tracking':
      return 'Integrate call tracking tools to measure phone call conversions, call duration, and call quality metrics alongside your digital marketing data.';
    case 'ecommerce':
      return 'Connect e-commerce platforms to track sales, revenue, product performance, customer acquisition cost, and other critical business metrics.';
    case 'local':
      return 'Integrate local marketing tools to monitor business listings, reviews, local SEO performance, and location-based marketing campaigns.';
    case 'database':
      return 'Connect database systems to pull custom data into your reports, enabling deeper insights and more comprehensive marketing analytics.';
    case 'all':
    default:
      return 'Explore all the marketing integrations available with AgencyAnalytics. Connect your tools and create powerful dashboards and reports for your clients.';
  }
}
