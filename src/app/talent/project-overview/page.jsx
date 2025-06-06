'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  DollarSign,
  Users,
  MessageSquare,
  Percent,
  CheckCircle,
  Plus,
  ArrowUpRight,
} from 'lucide-react';

// --- Dummy Data ---
const kpiData = {
  totalSpend: '₹5,20,000',
  totalReach: '2.5M',
  totalEngagements: '180K',
  avgEngagementRate: '7.2%',
  activeCampaigns: 12,
};

const chartData = [
  { name: 'Day 1', reach: 50000, engagements: 2000, spend: 10000 },
  { name: 'Day 2', reach: 60000, engagements: 2500, spend: 12000 },
  { name: 'Day 3', reach: 75000, engagements: 3000, spend: 15000 },
  { name: 'Day 4', reach: 70000, engagements: 2800, spend: 14000 },
  { name: 'Day 5', reach: 85000, engagements: 3500, spend: 17000 },
  { name: 'Day 6', reach: 90000, engagements: 3800, spend: 18000 },
  { name: 'Day 7', reach: 100000, engagements: 4200, spend: 20000 },
];

const topCampaigns = [
  {
    id: 1,
    name: 'Summer Style Campaign',
    platform: 'Instagram',
    reach: '500K',
    engagementRate: '8.5%',
    status: 'Active',
    image: '/images/campaign1.jpg', // Ensure these paths exist in your /public directory
  },
  {
    id: 2,
    name: 'Tech Gadget Launch',
    platform: 'YouTube',
    reach: '450K',
    engagementRate: '6.8%',
    status: 'Completed',
    image: '/images/campaign2.jpg',
  },
  {
    id: 3,
    name: 'Eco-Friendly Home Line',
    platform: 'TikTok',
    reach: '380K',
    engagementRate: '9.1%',
    status: 'Active',
    image: '/images/campaign3.jpg',
  },
];

const campaignStatusSummary = [
  { status: 'Active', count: 7, color: 'text-green-500' },
  { status: 'Pending Review', count: 3, color: 'text-yellow-500' },
  { status: 'Completed', count: 15, color: 'text-blue-500' },
  { status: 'Draft', count: 5, color: 'text-gray-500' },
];

export default function CampaignAnalyticsDashboard() {
  const [selectedMetric, setSelectedMetric] = useState('engagements');

  const metricOptions = [
    { value: 'reach', label: 'Reach' },
    { value: 'engagements', label: 'Engagements' },
    { value: 'spend', label: 'Spend' },
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-8xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <h1 className="text-2xl font-bold">Project Overview</h1>
            <span className="text-muted-foreground text-sm sm:text-lg">({new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })})</span>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <Button variant="outline" className="flex items-center gap-2 text-sm sm:text-base">
              <Plus className="w-4 h-4" /> New Project
            </Button>
          </div>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          <Card className="bg-card border border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Total Spend</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-foreground">{kpiData.totalSpend}</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Total Reach</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-foreground">{kpiData.totalReach}</div>
              <p className="text-xs text-muted-foreground">+18.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Total Engagements</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-foreground">{kpiData.totalEngagements}</div>
              <p className="text-xs text-muted-foreground">+25.3% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Avg. Engagement Rate</CardTitle>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-foreground">{kpiData.avgEngagementRate}</div>
              <p className="text-xs text-muted-foreground">Stable</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">Active Campaigns</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-foreground">{kpiData.activeCampaigns}</div>
              <p className="text-xs text-muted-foreground">Currently running</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Over Time Chart */}
        <Card className="bg-card border border-border shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-4">
            <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">Performance Over Time</CardTitle>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <label htmlFor="metric-select" className="sr-only">Select Metric</label>
              <select
                id="metric-select"
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="p-2 rounded-md bg-input border border-input text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {metricOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                Last 7 Days
              </Button>
            </div>
          </div>
          {/* Explicit visibility styling for the chart container */}
          <div className="h-[250px] sm:h-[350px]" style={{ visibility: 'visible', opacity: 1 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '0.5rem' }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={selectedMetric}
                  stroke="hsl(var(--primary))"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Bottom Section: Top Campaigns & Campaign Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Top Performing Campaigns */}
          <Card className="bg-card border border-border shadow-sm p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl font-semibold mb-4 text-foreground">Top Performing Campaigns</CardTitle>
            <div className="space-y-3 sm:space-y-4">
              {topCampaigns.map((campaign) => (
                <div key={campaign.id} className="flex items-center gap-3 sm:gap-4 p-3 bg-secondary/20 rounded-lg">
                  <Image
                    src={campaign.image || '/placeholder-campaign.jpg'}
                    alt={campaign.name}
                    width={56}
                    height={56}
                    className="rounded-md object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-foreground truncate">{campaign.name}</h3>
                    <p className="text-xs text-muted-foreground">{campaign.platform}</p>
                    <div className="flex flex-wrap gap-x-3 sm:gap-x-4 text-xs text-muted-foreground mt-1">
                      <span>Reach: <span className="font-medium text-foreground">{campaign.reach}</span></span>
                      <span>Eng. Rate: <span className="font-medium text-primary">{campaign.engagementRate}</span></span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0 text-muted-foreground hover:text-foreground">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Campaign Status Summary */}
          <Card className="bg-card border border-border shadow-sm p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl font-semibold mb-4 text-foreground">Campaign Status Summary</CardTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {campaignStatusSummary.map((statusItem, index) => (
                <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-secondary/20 rounded-lg">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{statusItem.status}</p>
                    <p className="text-xl sm:text-2xl font-bold text-foreground">{statusItem.count}</p>
                  </div>
                  <div className={`p-2 rounded-full ${statusItem.color} bg-current/10 flex-shrink-0`}>
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}