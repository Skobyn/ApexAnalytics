"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronRight, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageProps } from "@/types/next";
import { getIntegrationsByCategory } from "@/lib/integrations";

export default function IntegrationCategoryPage(props: PageProps) {
  const { params } = props;
  const category = params.category as string;
  const router = useRouter();
  
  // Get integrations for this category
  const integrations = getIntegrationsByCategory(category);
  
  // Handle if category doesn't exist or has no integrations
  if (!integrations || integrations.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <p className="mb-6">We couldn't find any integrations in this category.</p>
        <Button onClick={() => router.push("/dashboard/integrations")}>
          Browse all integrations
        </Button>
      </div>
    );
  }
  
  // Format category name for display
  const categoryDisplay = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-2">
        <Link href="/dashboard/integrations" className="text-gray-500 hover:text-gray-700">
          Integrations
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
        <span className="font-medium">{categoryDisplay}</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">{categoryDisplay} Integrations</h1>
      
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <p className="text-gray-600 max-w-2xl">
          Connect your {categoryDisplay.toLowerCase()} tools to analyze performance and track key metrics
          in one centralized dashboard.
        </p>
        
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder={`Search ${categoryDisplay.toLowerCase()} tools...`}
            className="pl-9"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-6 flex items-start space-x-4">
              <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-md">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={32}
                  height={32}
                  className="max-h-8 max-w-8"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{integration.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {integration.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                    Easy setup
                  </span>
                  {integration.popular && (
                    <span className="ml-3 px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-auto p-4 bg-gray-50 border-t flex justify-end">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/integrations/connect/${integration.id}`}>
                  Connect
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
