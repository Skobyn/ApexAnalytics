"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, BarChart2, Home, User, Settings, Search, Bell, Users, FileText, Activity } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const campaigns = [
    { id: 1575567, name: "Sample Campaign" },
    { id: 1575568, name: "Website SEO" },
    { id: 1575569, name: "Social Media Marketing" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="bg-[#0c3861] text-white w-16 md:w-60 flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-blue-800 flex items-center justify-center md:justify-start">
          <Image
            src="/yourLOGO.png"
            alt="Agency Logo"
            width={120}
            height={30}
            className="h-8 w-auto"
          />
        </div>

        <div className="flex flex-col overflow-y-auto flex-grow">
          <nav className="py-4">
            <div className="px-4 mb-2 text-xs font-medium text-blue-300 hidden md:block">NAVIGATION</div>

            <Link
              href="/dashboard"
              className="flex items-center py-2 px-4 hover:bg-blue-800 text-white"
            >
              <Home className="h-5 w-5 mr-3" />
              <span className="hidden md:inline">Dashboard</span>
            </Link>

            <button
              className="flex items-center justify-between w-full py-2 px-4 hover:bg-blue-800 text-white"
              onClick={() => toggleSection('campaigns')}
            >
              <div className="flex items-center">
                <BarChart2 className="h-5 w-5 mr-3" />
                <span className="hidden md:inline">Campaigns</span>
              </div>
              <ChevronDown className="h-4 w-4 hidden md:block" />
            </button>

            {openSection === 'campaigns' && (
              <div className="bg-blue-900 py-1 hidden md:block">
                {campaigns.map(campaign => (
                  <Link
                    key={campaign.id}
                    href={`/dashboard/campaign/${campaign.id}`}
                    className="flex items-center py-2 px-8 hover:bg-blue-800 text-blue-200"
                  >
                    {campaign.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/dashboard/users"
              className="flex items-center py-2 px-4 hover:bg-blue-800 text-white"
            >
              <Users className="h-5 w-5 mr-3" />
              <span className="hidden md:inline">Clients</span>
            </Link>

            <Link
              href="/dashboard/reports"
              className="flex items-center py-2 px-4 hover:bg-blue-800 text-white"
            >
              <FileText className="h-5 w-5 mr-3" />
              <span className="hidden md:inline">Reports</span>
            </Link>

            <Link
              href="/dashboard/activity"
              className="flex items-center py-2 px-4 hover:bg-blue-800 text-white"
            >
              <Activity className="h-5 w-5 mr-3" />
              <span className="hidden md:inline">Activity</span>
            </Link>
          </nav>

          <div className="mt-auto mb-4">
            <Link
              href="/dashboard/settings"
              className="flex items-center py-2 px-4 hover:bg-blue-800 text-white"
            >
              <Settings className="h-5 w-5 mr-3" />
              <span className="hidden md:inline">Settings</span>
            </Link>

            <Link
              href="/dashboard/profile"
              className="flex items-center py-2 px-4 hover:bg-blue-800 text-white"
            >
              <User className="h-5 w-5 mr-3" />
              <span className="hidden md:inline">Profile</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="bg-white border-b border-gray-200 py-2 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-5 w-5" />
              </button>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    A
                  </div>
                </div>
                <div className="ml-3 hidden md:block">
                  <div className="text-sm font-medium text-gray-900">Admin User</div>
                  <div className="text-xs text-gray-500">admin@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
