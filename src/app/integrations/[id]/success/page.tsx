"use client";

import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getIntegrationById } from "@/lib/integrations";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function IntegrationSuccessPage({ params }: { params: { id: string } }) {
  const integration = getIntegrationById(params.id);

  if (!integration) {
    notFound();
  }

  // Update integration status in local storage for demo purposes
  useEffect(() => {
    const updatedIntegration = { ...integration, status: "connected", isConfigured: true };
    localStorage.setItem(`integration_${integration.id}`, JSON.stringify(updatedIntegration));
  }, [integration]);

  return (
    <main>
      <Header />

      <section className="py-12 bg-gradient-to-b from-[#f7f9fa] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border border-gray-200 shadow-md text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">Successfully Connected!</h1>
              <p className="text-gray-600 mb-6">
                Your {integration.name} account has been successfully connected to AgencyAnalytics.
              </p>

              <div className="flex items-center justify-center mb-6">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div className="w-8 h-0.5 bg-gray-200 mx-2"></div>
                <Image
                  src="https://ext.same-assets.com/1287963695/1098597131.svg"
                  alt="AgencyAnalytics"
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-md mb-6 text-left">
                <h3 className="font-medium text-gray-800 mb-3">Connection Details</h3>

                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Integration</span>
                  <span className="font-medium">{integration.name}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium text-green-600">Connected</span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Data Sync</span>
                  <span className="font-medium">Every 24 hours</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="/dashboard/integrations">
                    Go to Integrations Dashboard
                  </Link>
                </Button>

                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/dashboard/campaign/1575567/overview/dashboard`}>
                    Add to Campaign Dashboard
                  </Link>
                </Button>
              </div>
            </Card>

            <div className="mt-8 flex flex-col items-center text-center">
              <h2 className="text-lg font-medium text-gray-900 mb-4">What's Next?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <Card className="p-4 text-center">
                  <div className="mb-2">
                    <svg className="h-6 w-6 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">Create a Dashboard</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Build a custom dashboard with {integration.name} widgets
                  </p>
                </Card>

                <Card className="p-4 text-center">
                  <div className="mb-2">
                    <svg className="h-6 w-6 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">Generate a Report</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Create and schedule automated client reports
                  </p>
                </Card>

                <Card className="p-4 text-center">
                  <div className="mb-2">
                    <svg className="h-6 w-6 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">Configure Settings</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Customize your {integration.name} configuration
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
