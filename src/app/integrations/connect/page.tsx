"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { integrations, categories, IntegrationCategory } from "@/lib/integrations";
import { PageProps } from "@/types/next";

export default function ConnectIntegration() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory>("all");
  
  // Filter integrations based on search and category
  const filteredIntegrations = integrations.filter(integration => {
    // Filter by search term
    const matchesSearch =
      searchQuery === "" ||
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by category
    const matchesCategory =
      selectedCategory === "all" ||
      integration.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  // Handle connect button click
  const handleConnectClick = (integrationId: string) => {
    router.push(`/integrations/connect/${integrationId}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          className="mr-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Connect New Integration</h1>
          <p className="text-sm text-gray-500 mt-1">Select a platform to connect to your analytics dashboard</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="relative w-full md:w-auto md:flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search integrations..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              className="block pl-3 pr-8 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as IntegrationCategory)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Categories */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-2">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className="whitespace-nowrap"
            onClick={() => setSelectedCategory(category.id as IntegrationCategory)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredIntegrations.map((integration) => (
          <Card
            key={integration.id}
            className="border hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 mr-3 flex items-center justify-center bg-gray-100 rounded-md">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={32}
                      height={32}
                      className="max-h-8 max-w-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{integration.name}</h3>
                    <div className="flex items-center mt-1">
                      {integration.status === "connected" ? (
                        <span className="flex items-center text-xs text-green-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
                          Connected
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4">{integration.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {integration.categories.map(category => {
                  const categoryObj = categories.find(c => c.id === category);
                  return (
                    <span
                      key={category}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-800"
                    >
                      {categoryObj?.name || category}
                    </span>
                  );
                })}
              </div>

              <Button
                className="w-full text-xs bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => handleConnectClick(integration.id)}
                disabled={integration.status === "connected"}
              >
                {integration.status === "connected" ? "Already Connected" : "Connect"}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredIntegrations.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-16 w-16 text-gray-400">
            <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No integrations found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <div className="mt-6">
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-sm bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Clear all filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 