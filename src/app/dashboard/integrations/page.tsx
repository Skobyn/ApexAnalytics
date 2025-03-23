"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  PlusCircle,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { integrations, categories, IntegrationCategory } from "@/lib/integrations";

export default function IntegrationsDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory>("all");
  const [connectionFilter, setConnectionFilter] = useState<"all" | "connected" | "disconnected">("all");

  // Filter integrations based on search, category, and connection status
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

    // Filter by connection status
    const matchesConnectionStatus =
      connectionFilter === "all" ||
      (connectionFilter === "connected" && integration.status === "connected") ||
      (connectionFilter === "disconnected" && integration.status !== "connected");

    return matchesSearch && matchesCategory && matchesConnectionStatus;
  });

  // Count connected integrations
  const connectedCount = integrations.filter(i => i.status === "connected").length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
          <p className="text-sm text-gray-500 mt-1">Connect your marketing tools and data sources</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center" asChild>
            <Link href="/integrations/connect">
              <PlusCircle className="mr-1 h-4 w-4" />
              Add New Integration
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-blue-100 text-blue-600 mr-4">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Integrations</p>
              <p className="text-xl font-bold">{integrations.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-green-100 text-green-600 mr-4">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Connected</p>
              <p className="text-xl font-bold">{connectedCount}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-red-100 text-red-600 mr-4">
              <XCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Disconnected</p>
              <p className="text-xl font-bold">{integrations.length - connectedCount}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 rounded-md bg-yellow-100 text-yellow-600 mr-4">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Attention Needed</p>
              <p className="text-xl font-bold">{integrations.filter(i => i.status === "error").length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
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

            <select
              className="block pl-3 pr-8 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={connectionFilter}
              onChange={(e) => setConnectionFilter(e.target.value as "all" | "connected" | "disconnected")}
            >
              <option value="all">All Statuses</option>
              <option value="connected">Connected</option>
              <option value="disconnected">Disconnected</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredIntegrations.map((integration) => (
          <Card
            key={integration.id}
            className={`border ${integration.status === "connected" ? "border-green-200" : integration.status === "error" ? "border-red-200" : "border-gray-200"}`}
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 mr-3"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{integration.name}</h3>
                    <div className="flex items-center mt-1">
                      {integration.status === "connected" ? (
                        <span className="flex items-center text-xs text-green-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
                          Connected
                        </span>
                      ) : integration.status === "error" ? (
                        <span className="flex items-center text-xs text-red-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1"></div>
                          Error
                        </span>
                      ) : (
                        <span className="flex items-center text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-1"></div>
                          Not Connected
                        </span>
                      )}
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
                className={`w-full text-xs ${
                  integration.status === "connected"
                    ? "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                asChild
              >
                {integration.status === "connected" ? (
                  <Link href={`/dashboard/integrations/settings/${integration.id}`}>
                    Manage
                  </Link>
                ) : (
                  <Link href={`/integrations/connect/${integration.id}`}>
                    Connect
                  </Link>
                )}
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
                setConnectionFilter("all");
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
