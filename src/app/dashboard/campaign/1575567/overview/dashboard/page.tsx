"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

// Utility function to generate random line chart data
const generateLineData = (points = 30, min = 0, max = 100) => {
  return Array.from({ length: points }, () => min + Math.random() * (max - min));
};

// Utility function to generate random bar chart data
const generateBarData = (categories = 4, min = 0, max = 100) => {
  return Array.from({ length: categories }, () => min + Math.random() * (max - min));
};

// Chart components
const LineChart = ({
  data,
  color = "#3b82f6",
  height = 80,
  width = "100%",
  showAxis = false,
  showDots = false
}) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  // Normalize data to fit within the chart height
  const normalizedData = data.map(value => ((value - min) / range) * 0.8 + 0.1);

  // Create the SVG path
  const points = normalizedData.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - (point * 100);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div style={{ height, width }} className="relative">
      {showAxis && (
        <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-xs text-gray-500">
          <span>{max.toLocaleString()}</span>
          <span>{min.toLocaleString()}</span>
        </div>
      )}

      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />

        {showDots && normalizedData.map((point, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - (point * 100);
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="0.8"
              fill={color}
              stroke="white"
              strokeWidth="0.3"
            />
          );
        })}
      </svg>
    </div>
  );
};

const BarChart = ({ data, colors, labels, height = 150 }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);

  return (
    <div style={{ height }} className="flex items-end justify-around">
      {data.map((value, index) => {
        const height = (value / max) * 100;
        return (
          <div key={index} className="flex flex-col items-center">
            <div
              style={{
                height: `${height}%`,
                backgroundColor: colors[index % colors.length],
                width: '24px'
              }}
              className="rounded-sm"
            />
            {labels && <div className="mt-2 text-xs text-gray-500">{labels[index]}</div>}
          </div>
        );
      })}
    </div>
  );
};

const SmallMetricWidget = ({
  title,
  value,
  icon,
  chartData = [],
  chartColor = "#3b82f6",
  showNoData = false,
  subtitle = ""
}) => {
  return (
    <Card className="overflow-hidden bg-white border border-gray-200 rounded-md">
      <div className="p-4">
        <div className="flex items-center mb-3">
          {icon && <div className="mr-2">{icon}</div>}
          <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        </div>

        <div className="mb-2">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>

        {showNoData ? (
          <div className="h-8 flex items-center justify-center text-sm text-gray-500">
            No data found for your date range
          </div>
        ) : (
          <div className="h-8">
            <LineChart data={chartData} color={chartColor} height={30} />
          </div>
        )}
      </div>
    </Card>
  );
};

const MetricWidget = ({
  title,
  value,
  icon,
  chartData = [],
  chartColor = "#3b82f6",
  subtitle,
  showNoData = false,
  dateLabels = []
}) => {
  return (
    <Card className="overflow-hidden bg-white border border-gray-200 rounded-md">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {icon && <div className="mr-2">{icon}</div>}
            <h3 className="text-sm font-medium text-gray-700">{title}</h3>
          </div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>

        {showNoData ? (
          <div className="h-40 flex items-center justify-center text-sm text-gray-500">
            No data found for your date range
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="text-2xl font-bold text-gray-900">{value}</div>
            </div>

            <div className="h-40 relative">
              <LineChart
                data={chartData}
                color={chartColor}
                height={150}
                showAxis={true}
                showDots={true}
              />

              {dateLabels.length > 0 && (
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  {dateLabels.map((label, index) => (
                    <span key={index}>{label}</span>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

// Mock data for the dashboard
const mockData = {
  googleAds: {
    conversions: 0,
    impressions: 0,
    clicks: 0,
    avgCPC: 0,
  },
  googleAnalytics: {
    engagedSessions: 6923,
    sessions: 11607,
    keyEvents: 0,
    eventCount: 69229,
    engagedSessionsChart: generateLineData(30, 100, 400),
    sessionsDates: ['22 Feb', '24 Feb', '26 Feb', '28 Feb', '2 Mar', '4 Mar', '6 Mar', '8 Mar', '10 Mar', '12 Mar', '14 Mar', '16 Mar', '18 Mar', '20 Mar', '22 Mar'],
    sessionsChart: generateLineData(30, 10000, 12000),
    keyEventsChart: generateLineData(30, 0, 0),
    eventCountChart: generateLineData(30, 60000, 70000),
  },
  googleBusinessProfile: {
    impressions: 37745,
    callClicks: 200,
    websiteClicks: 2361,
    reviews: 14,
    phoneCalls: 0,
    costPerLead: 0,
    cost: 0,
    impressionsCategories: ['Mobile Maps', 'Mobile Search', 'Desktop Search', 'Desktop Maps'],
    impressionsValues: [17000, 14000, 3500, 1500],
    impressionsColors: ['#d946ef', '#f59e0b', '#10b981', '#60a5fa'],
    callClicksChart: generateLineData(30, 150, 250),
    websiteClicksChart: generateLineData(30, 2200, 2500),
    reviewsChart: generateLineData(30, 5, 20),
  },
  googleSearchConsole: {
    clicks: 5165,
    impressions: "311K",
    ctr: "1.66%",
    avgPosition: "8.0",
    clicksChart: generateLineData(30, 130, 250),
    impressionsChart: generateLineData(30, 280000, 320000),
    ctrChart: generateLineData(30, 1.5, 1.8),
    avgPositionChart: generateLineData(30, 7.8, 8.2),
  },
  klaviyo: {
    clickRate: "1.51%",
    openRate: "",
    bounceRate: "",
    campaignCount: 0,
  }
};

export default function CampaignDashboard() {
  const [currentSection, setCurrentSection] = useState("Smart Section");

  // Create an icon component function to display platform icons
  const PlatformIcon = ({ platform }) => {
    const iconMap = {
      "google-analytics": "https://ext.same-assets.com/1044981387/2818150891.svg",
      "google-ads": "https://ext.same-assets.com/1044981387/4263905291.svg",
      "google-business": "https://ext.same-assets.com/1044981387/2338669436.svg",
      "google-search": "https://ext.same-assets.com/1044981387/3162334539.svg",
      "klaviyo": "https://ext.same-assets.com/1044981387/3251570025.svg",
    };

    return (
      <Image
        src={iconMap[platform] || ""}
        alt={platform}
        width={20}
        height={20}
        className="h-5 w-5"
      />
    );
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-sm font-medium text-blue-600">{currentSection}</h2>
          <button className="ml-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>

      {/* Google Ads Widget */}
      <div className="bg-white p-4 border border-gray-200 rounded-md">
        <div className="flex items-center mb-4">
          <PlatformIcon platform="google-ads" />
          <h3 className="ml-2 text-base font-medium">Google Ads</h3>
        </div>

        <div className="h-40 flex items-center justify-center text-sm text-gray-500">
          No Conversions found for your date range
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <SmallMetricWidget
            title="Impressions"
            value="0"
            icon={<PlatformIcon platform="google-ads" />}
            showNoData={true}
          />

          <SmallMetricWidget
            title="Clicks"
            value="0"
            icon={<PlatformIcon platform="google-ads" />}
            showNoData={true}
          />

          <SmallMetricWidget
            title="Avg CPC"
            value="$0.00"
            icon={<PlatformIcon platform="google-ads" />}
            showNoData={true}
          />
        </div>
      </div>

      {/* Google Analytics Widget */}
      <div className="bg-white p-4 border border-gray-200 rounded-md">
        <div className="flex items-center mb-4">
          <PlatformIcon platform="google-analytics" />
          <h3 className="ml-2 text-base font-medium">Google Analytics 4</h3>
        </div>

        <MetricWidget
          title="Engaged Sessions"
          value={mockData.googleAnalytics.engagedSessions.toLocaleString()}
          icon={<PlatformIcon platform="google-analytics" />}
          chartData={mockData.googleAnalytics.engagedSessionsChart}
          chartColor="#3b82f6"
          dateLabels={mockData.googleAnalytics.sessionsDates}
        />

        <div className="grid grid-cols-3 gap-4 mt-4">
          <SmallMetricWidget
            title="Sessions"
            value={mockData.googleAnalytics.sessions.toLocaleString()}
            icon={<PlatformIcon platform="google-analytics" />}
            chartData={mockData.googleAnalytics.sessionsChart.map(v => v/100)}
            chartColor="#3b82f6"
            subtitle="Total sessions"
          />

          <SmallMetricWidget
            title="Key Events"
            value="0"
            icon={<PlatformIcon platform="google-analytics" />}
            showNoData={true}
            subtitle="Key user actions"
          />

          <SmallMetricWidget
            title="Event Count"
            value={mockData.googleAnalytics.eventCount.toLocaleString()}
            icon={<PlatformIcon platform="google-analytics" />}
            chartData={mockData.googleAnalytics.eventCountChart.map(v => v/1000)}
            chartColor="#3b82f6"
            subtitle="Total tracked events"
          />
        </div>
      </div>

      {/* Google Business Profile Widget */}
      <div className="bg-white p-4 border border-gray-200 rounded-md">
        <div className="flex items-center mb-4">
          <PlatformIcon platform="google-business" />
          <h3 className="ml-2 text-base font-medium">Google Business Profile</h3>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <PlatformIcon platform="google-business" />
              <span className="ml-2 text-sm">Impressions</span>
            </div>
            <span className="text-sm font-bold">{mockData.googleBusinessProfile.impressions.toLocaleString()}</span>
          </div>

          <div className="h-40">
            <BarChart
              data={mockData.googleBusinessProfile.impressionsValues}
              colors={mockData.googleBusinessProfile.impressionsColors}
              labels={mockData.googleBusinessProfile.impressionsCategories}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <SmallMetricWidget
            title="Call Clicks"
            value={mockData.googleBusinessProfile.callClicks}
            icon={<PlatformIcon platform="google-business" />}
            chartData={mockData.googleBusinessProfile.callClicksChart}
            chartColor="#3b82f6"
            subtitle="Clicks on call button"
          />

          <SmallMetricWidget
            title="Website Clicks"
            value={mockData.googleBusinessProfile.websiteClicks.toLocaleString()}
            icon={<PlatformIcon platform="google-business" />}
            chartData={mockData.googleBusinessProfile.websiteClicksChart}
            chartColor="#3b82f6"
            subtitle="Clicks to website"
          />

          <SmallMetricWidget
            title="Reviews"
            value={mockData.googleBusinessProfile.reviews}
            icon={<PlatformIcon platform="google-business" />}
            chartData={mockData.googleBusinessProfile.reviewsChart}
            chartColor="#3b82f6"
            subtitle="Business reviews"
          />

          <SmallMetricWidget
            title="Phone Calls"
            value="0"
            icon={<PlatformIcon platform="google-business" />}
            showNoData={true}
            subtitle="Direct phone calls"
          />

          <SmallMetricWidget
            title="Cost per Lead"
            value="$0.00"
            icon={<PlatformIcon platform="google-business" />}
            showNoData={true}
            subtitle="Average lead cost"
          />

          <SmallMetricWidget
            title="Cost"
            value="$0.00"
            icon={<PlatformIcon platform="google-business" />}
            showNoData={true}
            subtitle="Total campaign cost"
          />
        </div>
      </div>

      {/* Google Search Console */}
      <div className="bg-white p-4 border border-gray-200 rounded-md">
        <div className="flex items-center mb-4">
          <PlatformIcon platform="google-search" />
          <h3 className="ml-2 text-base font-medium">Google Search Console</h3>
        </div>

        <MetricWidget
          title="Clicks"
          value={mockData.googleSearchConsole.clicks.toLocaleString()}
          icon={<PlatformIcon platform="google-search" />}
          chartData={mockData.googleSearchConsole.clicksChart}
          chartColor="#3b82f6"
          dateLabels={mockData.googleAnalytics.sessionsDates}
          subtitle="Total search clicks"
        />

        <div className="grid grid-cols-3 gap-4 mt-4">
          <SmallMetricWidget
            title="Impressions"
            value={mockData.googleSearchConsole.impressions}
            icon={<PlatformIcon platform="google-search" />}
            chartData={mockData.googleSearchConsole.impressionsChart.map(v => v/1000)}
            chartColor="#3b82f6"
            subtitle="Total impressions"
          />

          <SmallMetricWidget
            title="CTR"
            value={mockData.googleSearchConsole.ctr}
            icon={<PlatformIcon platform="google-search" />}
            chartData={mockData.googleSearchConsole.ctrChart}
            chartColor="#3b82f6"
            subtitle="Click-through rate"
          />

          <SmallMetricWidget
            title="Avg Position"
            value={mockData.googleSearchConsole.avgPosition}
            icon={<PlatformIcon platform="google-search" />}
            chartData={mockData.googleSearchConsole.avgPositionChart}
            chartColor="#3b82f6"
            subtitle="Average position"
          />
        </div>
      </div>

      {/* Klaviyo */}
      <div className="bg-white p-4 border border-gray-200 rounded-md">
        <div className="flex items-center mb-4">
          <PlatformIcon platform="klaviyo" />
          <h3 className="ml-2 text-base font-medium">Klaviyo</h3>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <PlatformIcon platform="klaviyo" />
                <span className="ml-2 text-sm">Click Rate</span>
              </div>
              <span className="text-sm font-bold">{mockData.klaviyo.clickRate}</span>
            </div>

            <div className="h-40 bg-gray-50 flex items-center justify-center rounded-md border border-gray-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 text-gray-500">
                    <polyline points="4,15 12,7 20,15"></polyline>
                  </svg>
                </div>
                <div className="text-xs text-gray-500">Set up widget</div>
              </div>
            </div>
          </div>

          <SmallMetricWidget
            title="Open Rate"
            value=""
            icon={<PlatformIcon platform="klaviyo" />}
            showNoData={true}
            subtitle="Email open rate"
          />

          <SmallMetricWidget
            title="Bounce Rate"
            value=""
            icon={<PlatformIcon platform="klaviyo" />}
            showNoData={true}
            subtitle="Email bounce rate"
          />

          <SmallMetricWidget
            title="Campaign Count"
            value="0"
            icon={<PlatformIcon platform="klaviyo" />}
            showNoData={true}
            subtitle="Total campaigns"
          />
        </div>
      </div>
    </div>
  );
}
