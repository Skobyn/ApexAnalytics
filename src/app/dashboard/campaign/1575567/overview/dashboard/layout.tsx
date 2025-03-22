"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  HelpCircle,
  Bell,
  Settings,
  Share2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardCampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Trial notice banner */}
      <div className="bg-blue-500 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span>14 days left in your free trial</span>
          <Button size="sm" variant="outline" className="ml-2 text-white border-white hover:bg-blue-600 text-xs">
            Upgrade Now
          </Button>
        </div>
        <button className="text-white hover:text-gray-200">
          <span className="sr-only">Close</span>
          <span className="text-xl">&times;</span>
        </button>
      </div>

      {/* Top navbar */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/1287963695/1098597131.svg"
                alt="AgencyAnalytics"
                width={150}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <div className="relative ml-4">
              <button className="flex items-center bg-blue-500 text-white text-xs px-3 py-1 rounded">
                <span>All Clients</span>
                <ChevronDown className="h-3 w-3 ml-1" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="text-gray-500 hover:text-gray-700">
              <Image
                src="/yourLOGO.png"
                alt="Document"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-5 w-5" />
            </button>
            <button className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-gray-700">
              SB
            </button>
          </div>
        </div>
      </header>

      {/* Secondary navbar with tabs */}
      <div className="bg-white border-b border-gray-200 px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            <Link href="#" className="font-medium text-gray-900 px-1 py-3 border-b-2 border-transparent">
              Overview
            </Link>
            <Link href="#" className="font-medium text-blue-600 px-1 py-3 border-b-2 border-blue-600">
              Dashboard
            </Link>
            <Link href="#" className="font-medium text-gray-900 px-1 py-3 border-b-2 border-transparent">
              Tasks
            </Link>
            <Link href="#" className="font-medium text-gray-900 px-1 py-3 border-b-2 border-transparent">
              Goals
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" className="text-xs flex items-center">
              <span>Ask AI</span>
            </Button>
            <div className="flex items-center border border-gray-300 rounded px-2">
              <span className="text-xs text-gray-700">Last 30 Days</span>
              <ChevronDown className="h-3 w-3 ml-1 text-gray-500" />
            </div>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <Share2 className="h-4 w-4" />
            </button>
            <Button size="sm" variant="primary" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
              Edit Dashboard Sections
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow bg-gray-100 overflow-auto p-4">
        {children}
      </main>
    </div>
  );
}

// Add ChevronDown component
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
