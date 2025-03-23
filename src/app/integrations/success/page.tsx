"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, ArrowRight, Settings, BarChart2 } from "lucide-react";
import { getIntegrationById } from "@/lib/integrations";

export default function IntegrationSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const integrationId = searchParams.get('id');
  const [countdown, setCountdown] = useState(5);
  
  const integration = integrationId ? getIntegrationById(integrationId) : null;
  
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push('/dashboard/integrations');
    }
  }, [countdown, router]);
  
  if (!integration) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Integration not found</h1>
        <p className="mb-6">The integration ID is missing or invalid.</p>
        <Button onClick={() => router.push("/dashboard/integrations")}>
          Go to integrations dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 max-w-2xl">
      <Card className="p-8 text-center">
        <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Integration Successful!</h1>
        
        <div className="flex items-center justify-center mb-6">
          <div className="h-10 w-10 mr-2 flex items-center justify-center bg-gray-100 rounded-md">
            <Image
              src={integration.logo}
              alt={integration.name}
              width={32}
              height={32}
              className="max-h-8 max-w-8"
            />
          </div>
          <p className="text-lg text-gray-700">
            Your <span className="font-medium">{integration.name}</span> account is now connected
          </p>
        </div>
        
        <p className="text-gray-600 mb-8">
          We are now importing your data. This process may take a few minutes to complete.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Button className="flex items-center justify-center" variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Configure Integration
          </Button>
          
          <Button className="flex items-center justify-center">
            <BarChart2 className="mr-2 h-4 w-4" />
            View Dashboard
          </Button>
        </div>
        
        <div className="text-sm text-gray-500">
          Redirecting to integrations dashboard in {countdown} seconds...
          <Link href="/dashboard/integrations" className="text-blue-600 hover:underline ml-1">
            Go now <ArrowRight className="inline h-3 w-3" />
          </Link>
        </div>
      </Card>
      
      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 hover:shadow-md transition-shadow duration-200">
            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Connect More Platforms</h3>
            <p className="text-sm text-gray-600 mb-3">
              Add more data sources to get a complete view
            </p>
            <Button variant="link" className="text-sm" asChild>
              <Link href="/integrations/connect">
                Connect more <ChevronRight className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </Card>
          
          <Card className="p-4 hover:shadow-md transition-shadow duration-200">
            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Customize Your Dashboard</h3>
            <p className="text-sm text-gray-600 mb-3">
              Arrange widgets to show the most important data
            </p>
            <Button variant="link" className="text-sm" asChild>
              <Link href="/dashboard">
                View dashboard <ChevronRight className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </Card>
          
          <Card className="p-4 hover:shadow-md transition-shadow duration-200">
            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Set Up Automated Reports</h3>
            <p className="text-sm text-gray-600 mb-3">
              Schedule reports to be sent automatically
            </p>
            <Button variant="link" className="text-sm" asChild>
              <Link href="/dashboard/reports">
                Create report <ChevronRight className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
} 