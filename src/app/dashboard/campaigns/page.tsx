"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  BarChart2,
  PieChart,
  LineChart,
  Calendar
} from "lucide-react";

// Mock campaigns data
const campaignsData = [
  {
    id: 1575567,
    name: "Sample Campaign",
    client: "Acme Corporation",
    status: "active",
    progress: 78,
    lastUpdated: "2 hours ago",
    keyMetrics: {
      sessions: 2787,
      conversions: 567,
      ranking: 10,
    }
  },
  {
    id: 1575568,
    name: "Website SEO",
    client: "TechStart Inc.",
    status: "active",
    progress: 62,
    lastUpdated: "4 hours ago",
    keyMetrics: {
      sessions: 1845,
      conversions: 320,
      ranking: 6,
    }
  },
  {
    id: 1575569,
    name: "Social Media Marketing",
    client: "Retail Express",
    status: "active",
    progress: 45,
    lastUpdated: "1 day ago",
    keyMetrics: {
      sessions: 5432,
      conversions: 789,
      ranking: 4,
    }
  },
  {
    id: 1575570,
    name: "Local SEO Campaign",
    client: "Downtown Cafe",
    status: "paused",
    progress: 34,
    lastUpdated: "3 days ago",
    keyMetrics: {
      sessions: 983,
      conversions: 142,
      ranking: 15,
    }
  },
  {
    id: 1575571,
    name: "E-commerce PPC",
    client: "Fashion Outlet",
    status: "active",
    progress: 91,
    lastUpdated: "12 hours ago",
    keyMetrics: {
      sessions: 8743,
      conversions: 1256,
      ranking: 2,
    }
  },
  {
    id: 1575572,
    name: "Content Marketing",
    client: "Health Solutions",
    status: "paused",
    progress: 27,
    lastUpdated: "5 days ago",
    keyMetrics: {
      sessions: 1243,
      conversions: 87,
      ranking: 18,
    }
  },
  {
    id: 1575573,
    name: "Email Marketing",
    client: "Education Plus",
    status: "active",
    progress: 54,
    lastUpdated: "1 day ago",
    keyMetrics: {
      sessions: 3456,
      conversions: 529,
      ranking: 8,
    }
  },
  {
    id: 1575574,
    name: "Affiliate Program",
    client: "Travel Agency",
    status: "active",
    progress: 67,
    lastUpdated: "6 hours ago",
    keyMetrics: {
      sessions: 4210,
      conversions: 735,
      ranking: 5,
    }
  },
];

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter campaigns based on search query and status filter
  const filteredCampaigns = campaignsData.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          campaign.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-sm text-gray-500 mt-1">Manage all your marketing campaigns in one place</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="mr-1 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search campaigns or clients..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <select
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm" className="text-xs hidden md:flex">
              <Calendar className="mr-1 h-3 w-3" />
              Last 30 days
            </Button>
          </div>
        </div>
      </Card>

      {/* Campaigns List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Key Metrics
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/dashboard/campaign/${campaign.id}/overview/dashboard`} className="text-blue-600 hover:text-blue-800 font-medium">
                      {campaign.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.client}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">{campaign.progress}% Complete</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <LineChart className="h-3 w-3 text-gray-400 mr-1" />
                        <span>{campaign.keyMetrics.sessions.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <PieChart className="h-3 w-3 text-gray-400 mr-1" />
                        <span>{campaign.keyMetrics.conversions}</span>
                      </div>
                      <div className="flex items-center">
                        <BarChart2 className="h-3 w-3 text-gray-400 mr-1" />
                        <span>{campaign.keyMetrics.ranking}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.lastUpdated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">No campaigns found matching your criteria</p>
            <Button variant="outline" className="mt-4" onClick={() => {setSearchQuery(''); setStatusFilter('all');}}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
