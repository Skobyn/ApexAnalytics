"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Download,
  BarChart2,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Plus,
  ChevronRight,
  Users,
  FileText
} from "lucide-react";

// Mock data for the dashboard
const analyticsData = {
  totalSessions: {
    current: 128456,
    previous: 103278,
    trend: "up",
    change: 24.4,
  },
  activeClients: {
    current: 32,
    previous: 28,
    trend: "up",
    change: 14.3,
  },
  avgPositionChange: {
    current: 2.4,
    previous: 3.1,
    trend: "up", // for position change, "up" means better (lower position number)
    change: 22.6,
  },
  totalReports: {
    current: 148,
    previous: 132,
    trend: "up",
    change: 12.1,
  },
};

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
];

export default function Dashboard() {
  const [dateRange, setDateRange] = useState("Last 30 days");

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening with your clients</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Button variant="outline" size="sm" className="text-xs">
            <Calendar className="mr-1 h-3 w-3" />
            {dateRange}
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <Download className="mr-1 h-3 w-3" />
            Export
          </Button>
        </div>
      </div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Sessions Widget */}
        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Total Sessions</h3>
            <div className="text-xs text-gray-500">All Campaigns</div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold text-gray-900">{analyticsData.totalSessions.current.toLocaleString()}</span>
              <div className="flex items-center mt-1">
                {analyticsData.totalSessions.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-xs ${analyticsData.totalSessions.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  {analyticsData.totalSessions.change}%
                </span>
              </div>
            </div>
            <div className="flex-1 h-12 ml-4">
              <div className="bg-gray-100 h-full rounded-md relative overflow-hidden">
                {/* Simplified chart representation */}
                <div className="absolute bottom-0 left-0 right-0 bg-blue-100 h-8" style={{ height: '70%' }}>
                  <div className="w-full h-full flex items-end">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 mx-0.5"
                        style={{
                          height: `${Math.max(20, Math.random() * 100)}%`,
                          backgroundColor: i === 6 ? '#3b82f6' : '#93c5fd'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Active Clients Widget */}
        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Active Clients</h3>
            <div className="text-xs text-gray-500">This Month</div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold text-gray-900">{analyticsData.activeClients.current}</span>
              <div className="flex items-center mt-1">
                {analyticsData.activeClients.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-xs ${analyticsData.activeClients.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  {analyticsData.activeClients.change}%
                </span>
              </div>
            </div>
            <div className="flex-1 h-12 ml-4">
              <div className="bg-gray-100 h-full rounded-md relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-green-100 h-8" style={{ height: '70%' }}>
                  <div className="w-full h-full flex items-end">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 mx-0.5"
                        style={{
                          height: `${Math.max(20, Math.random() * 100)}%`,
                          backgroundColor: i === 6 ? '#10b981' : '#a7f3d0'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Avg Position Change Widget */}
        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Avg Position Change</h3>
            <div className="text-xs text-gray-500">All Keywords</div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold text-gray-900">{analyticsData.avgPositionChange.current}</span>
              <div className="flex items-center mt-1">
                {analyticsData.avgPositionChange.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-xs ${analyticsData.avgPositionChange.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  {analyticsData.avgPositionChange.change}%
                </span>
              </div>
            </div>
            <div className="flex-1 h-12 ml-4">
              <div className="bg-gray-100 h-full rounded-md relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-yellow-100 h-8" style={{ height: '70%' }}>
                  <div className="w-full h-full flex items-end">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 mx-0.5"
                        style={{
                          height: `${Math.max(20, Math.random() * 100)}%`,
                          backgroundColor: i === 6 ? '#eab308' : '#fef08a'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Total Reports Widget */}
        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Total Reports</h3>
            <div className="text-xs text-gray-500">This Month</div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold text-gray-900">{analyticsData.totalReports.current}</span>
              <div className="flex items-center mt-1">
                {analyticsData.totalReports.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-xs ${analyticsData.totalReports.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  {analyticsData.totalReports.change}%
                </span>
              </div>
            </div>
            <div className="flex-1 h-12 ml-4">
              <div className="bg-gray-100 h-full rounded-md relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-purple-100 h-8" style={{ height: '70%' }}>
                  <div className="w-full h-full flex items-end">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 mx-0.5"
                        style={{
                          height: `${Math.max(20, Math.random() * 100)}%`,
                          backgroundColor: i === 6 ? '#8b5cf6' : '#ddd6fe'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Campaigns */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Active Campaigns</h2>
          <Link href="/dashboard/campaigns" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

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
                {campaignsData.map((campaign) => (
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
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-4 flex flex-col">
          <h3 className="text-base font-semibold text-gray-800 mb-2">Clients</h3>
          <p className="text-sm text-gray-500 mb-4">Manage your client accounts and add new clients</p>
          <div className="mt-auto">
            <Link href="/dashboard/clients" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <Users className="h-4 w-4 mr-1" />
              Manage Clients
            </Link>
          </div>
        </Card>

        <Card className="p-4 flex flex-col">
          <h3 className="text-base font-semibold text-gray-800 mb-2">Reports</h3>
          <p className="text-sm text-gray-500 mb-4">Create and schedule reports for your clients</p>
          <div className="mt-auto">
            <Link href="/dashboard/reports" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <FileText className="h-4 w-4 mr-1" />
              Manage Reports
            </Link>
          </div>
        </Card>

        <Card className="p-4 flex flex-col">
          <h3 className="text-base font-semibold text-gray-800 mb-2">Create Campaign</h3>
          <p className="text-sm text-gray-500 mb-4">Start a new campaign for one of your clients</p>
          <div className="mt-auto">
            <Link href="/dashboard/campaigns/new" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <Plus className="h-4 w-4 mr-1" />
              New Campaign
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
