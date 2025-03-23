"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getIntegrationById } from "@/lib/integrations";
import { notFound } from "next/navigation";

export default function ConnectIntegrationPage({ params }) {
  const router = useRouter();
  const integration = getIntegrationById(params.id);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountId: "",
    apiKey: "",
    accessToken: "",
    clientId: "",
    clientSecret: "",
    email: "",
    password: "",
    domain: "",
    projectId: "",
    refreshToken: "",
    oauthConsent: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!integration) {
    notFound();
  }

  // Determine which fields to show based on integration type
  const showFields = {
    apiKey: ["google-analytics-4", "google-search-console", "semrush-backlinks", "ahrefs", "moz"].includes(integration.id),
    clientId: ["facebook", "facebook-ads", "instagram", "linkedin", "linkedin-ads"].includes(integration.id),
    clientSecret: ["facebook", "facebook-ads", "instagram", "linkedin", "linkedin-ads"].includes(integration.id),
    accountId: ["google-ads", "mailchimp", "klaviyo", "campaign-monitor"].includes(integration.id),
    email: ["shopify", "amazon-ads", "woocommerce", "bigcommerce"].includes(integration.id),
    password: ["shopify", "amazon-ads", "woocommerce", "bigcommerce"].includes(integration.id),
    domain: ["shopify", "woocommerce", "bigcommerce"].includes(integration.id),
    projectId: ["google-bigquery", "amazon-redshift"].includes(integration.id),
    oauth: ["google-analytics-4", "google-ads", "google-search-console", "google-business-profile"].includes(integration.id),
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Simulate successful connection
      router.push(`/integrations/${integration.id}/success`);
    }, 2000);
  };

  const oauthConnect = () => {
    setLoading(true);
    // Simulate OAuth flow
    setTimeout(() => {
      setLoading(false);
      router.push(`/integrations/${integration.id}/success`);
    }, 2000);
  };

  return (
    <main>
      <Header />

      <section className="py-12 bg-gradient-to-b from-[#f7f9fa] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Link href={`/integrations/${integration.id}`} className="text-blue-600 hover:underline text-sm mb-4 inline-block">
              ← Back to {integration.name} details
            </Link>

            <div className="flex items-center mb-6">
              <Image
                src={integration.logo}
                alt={integration.name}
                width={48}
                height={48}
                className="h-12 w-auto mr-4"
              />
              <h1 className="text-2xl font-bold text-[#0c3861]">
                Connect {integration.name}
              </h1>
            </div>

            <Card className="p-6 border border-gray-200 shadow-md">
              {/* Progress indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      1
                    </div>
                    <div className={`h-1 w-12 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      2
                    </div>
                    <div className={`h-1 w-12 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      3
                    </div>
                  </div>
                </div>
              </div>

              {step === 1 && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Connecting to {integration.name}</h2>
                  <p className="text-gray-600 mb-6">
                    To connect your {integration.name} account, you'll need to provide authentication details.
                    {showFields.oauth && " Alternatively, you can use OAuth for a simpler connection process."}
                  </p>

                  {showFields.oauth && (
                    <div className="mb-6">
                      <Button
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                        onClick={oauthConnect}
                        disabled={loading}
                      >
                        {loading ? "Connecting..." : `Connect with ${integration.name}`}
                      </Button>
                      <div className="mt-4 text-center">
                        <span className="text-gray-500 text-sm">Or connect manually</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {showFields.apiKey && (
                      <div>
                        <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                          API Key
                        </label>
                        <input
                          type="text"
                          id="apiKey"
                          name="apiKey"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter your API key"
                          value={formData.apiKey}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {showFields.accountId && (
                      <div>
                        <label htmlFor="accountId" className="block text-sm font-medium text-gray-700 mb-1">
                          Account ID
                        </label>
                        <input
                          type="text"
                          id="accountId"
                          name="accountId"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter your account ID"
                          value={formData.accountId}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {showFields.clientId && (
                      <div>
                        <label htmlFor="clientId" className="block text-sm font-medium text-gray-700 mb-1">
                          Client ID
                        </label>
                        <input
                          type="text"
                          id="clientId"
                          name="clientId"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter your client ID"
                          value={formData.clientId}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {showFields.clientSecret && (
                      <div>
                        <label htmlFor="clientSecret" className="block text-sm font-medium text-gray-700 mb-1">
                          Client Secret
                        </label>
                        <input
                          type="password"
                          id="clientSecret"
                          name="clientSecret"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter your client secret"
                          value={formData.clientSecret}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {showFields.email && (
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {showFields.password && (
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {showFields.domain && (
                      <div>
                        <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                          Domain
                        </label>
                        <input
                          type="text"
                          id="domain"
                          name="domain"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="yourdomain.com"
                          value={formData.domain}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {showFields.projectId && (
                      <div>
                        <label htmlFor="projectId" className="block text-sm font-medium text-gray-700 mb-1">
                          Project ID
                        </label>
                        <input
                          type="text"
                          id="projectId"
                          name="projectId"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter your project ID"
                          value={formData.projectId}
                          onChange={handleChange}
                        />
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="mt-4 p-2 bg-red-50 text-red-600 text-sm rounded">
                      {error}
                    </div>
                  )}

                  <div className="mt-6 flex justify-end">
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700"
                      onClick={handleNext}
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Configure {integration.name}</h2>
                  <p className="text-gray-600 mb-6">
                    Customize how your {integration.name} data is displayed in AgencyAnalytics.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Data refresh frequency
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Every 24 hours (default)</option>
                        <option>Every 12 hours</option>
                        <option>Every 6 hours</option>
                        <option>Every 1 hour</option>
                      </select>
                      <p className="mt-1 text-xs text-gray-500">
                        How often should we refresh data from {integration.name}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Default date range
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Last 30 days (default)</option>
                        <option>Last 7 days</option>
                        <option>Last 90 days</option>
                        <option>Year to date</option>
                      </select>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="autoAddToDashboard"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label htmlFor="autoAddToDashboard" className="ml-2 block text-sm text-gray-700">
                        Automatically add to client dashboards
                      </label>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700"
                      onClick={handleNext}
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Review and Connect</h2>
                  <p className="text-gray-600 mb-6">
                    Review your connection details before finalizing.
                  </p>

                  <div className="space-y-4 bg-gray-50 p-4 rounded-md">
                    <h3 className="font-medium text-gray-800">Connection Summary</h3>

                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Integration</span>
                      <span className="font-medium">{integration.name}</span>
                    </div>

                    {showFields.apiKey && formData.apiKey && (
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">API Key</span>
                        <span className="font-medium">••••••••{formData.apiKey.slice(-4)}</span>
                      </div>
                    )}

                    {showFields.accountId && formData.accountId && (
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Account ID</span>
                        <span className="font-medium">{formData.accountId}</span>
                      </div>
                    )}

                    {showFields.domain && formData.domain && (
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Domain</span>
                        <span className="font-medium">{formData.domain}</span>
                      </div>
                    )}

                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Data Refresh</span>
                      <span className="font-medium">Every 24 hours</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Default Date Range</span>
                      <span className="font-medium">Last 30 days</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        id="termsAgreement"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label htmlFor="termsAgreement" className="ml-2 block text-sm text-gray-700">
                        I authorize AgencyAnalytics to access my {integration.name} account data
                      </label>
                    </div>
                  </div>

                  {error && (
                    <div className="mt-4 p-2 bg-red-50 text-red-600 text-sm rounded">
                      {error}
                    </div>
                  )}

                  <div className="mt-6 flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? "Connecting..." : "Complete Connection"}
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Need help connecting your {integration.name} account?</p>
              <Link href="#" className="text-blue-600 hover:underline">
                View {integration.name} integration documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
