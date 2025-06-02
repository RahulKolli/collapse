'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { IndianRupee, ShoppingBag, Gift, Circle, BarChartBig, TrendingUp } from 'lucide-react'; // Example icons from lucide-react

export default function EarningsPage() {
  // Dummy Data - Adjust as per your actual data structure
  const chartData = [
    { name: 'Influencer Outreach', value: 40000, color: '#8884d8' }, // Blue-ish
    { name: 'Content Creation', value: 30000, color: '#82ca9d' }, // Green-ish
    { name: 'Campaign Management', value: 20000, color: '#ffc658' }, // Orange-ish
    { name: 'Other', value: 10000, color: '#ff7300' }, // Darker Orange
  ];

  const summaryData = {
    totalEarning: '₹1,50,000',
    itemEarning: '₹1,20,000',
    contributorBonus: '₹30,000',
  };

  const tableData = [
    { id: 1, item: 'Summer Fashion Campaign', category: 'Influencer Outreach', earnings: '₹40,000', color: '#8884d8' },
    { id: 2, item: 'Tech Gadget Review', category: 'Content Creation', earnings: '₹30,000', color: '#82ca9d' },
    { id: 3, item: 'Winter Marketing Drive', category: 'Campaign Management', earnings: '₹20,000', color: '#ffc658' },
    { id: 4, item: 'Brand Ambassador Program', category: 'Influencer Outreach', earnings: '₹40,000', color: '#8884d8' },
    { id: 5, item: 'Social Media Management', category: 'Campaign Management', earnings: '₹10,000', color: '#ffc658' },
  ];

  const currentMonth = "May 2025"; // Example dynamic month
  const totalEarningsValue = '₹1,50,000'; // Value to show in the center of the donut chart

  const [activeTab, setActiveTab] = useState('earnings'); // 'earnings' or 'analytics'

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Replace with your logo if available, or keep a placeholder */}
            <Image
              src="/placeholder-logo.svg" // Replace with your logo path
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <div>
              <p className="text-sm text-muted-foreground">{currentMonth}</p>
              <h1 className="text-2xl font-bold">Earnings Report</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Add any other header elements like user avatar/menu here */}
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex space-x-4 border-b border-border pb-2">
          <button
            onClick={() => setActiveTab('earnings')}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              activeTab === 'earnings'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
            } transition-colors`}
          >
            Earnings Report
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              activeTab === 'analytics'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
            } transition-colors`}
          >
            Analytics
          </button>
        </nav>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section: Donut Chart & Earnings Table */}
          <section className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm space-y-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Earnings By Item Type</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Donut Chart */}
              <div className="w-full md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none" // Remove border around slices
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                      <Label
                        value={totalEarningsValue}
                        position="center"
                        className="font-bold text-xl fill-foreground"
                      />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Chart Legend / Breakdown */}
              <div className="w-full md:w-1/2 space-y-2 text-sm">
                {chartData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between text-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
                      <span>{entry.name}</span>
                    </div>
                    <span>{`₹${entry.value.toLocaleString('en-IN')}`}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Earnings By Item Type Table */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Detailed Earnings</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="text-left text-muted-foreground border-b border-border">
                    <tr>
                      <th className="py-2 px-2">Item</th>
                      <th className="py-2 px-4">Category</th>
                      <th className="py-2 px-4 text-right">Earnings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {tableData.map((row) => (
                      <tr key={row.id}>
                        <td className="py-3 px-2 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: row.color || '#ccc' }}></span> {/* Use chart color for consistency */}
                          <span className="font-medium text-foreground">{row.item}</span>
                        </td>
                        <td className="px-4 text-muted-foreground">{row.category}</td>
                        <td className="px-4 text-right text-primary">{row.earnings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Right Section: Earnings Report Summary */}
          <section className="lg:col-span-1 bg-card border border-border rounded-xl p-6 shadow-sm space-y-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Earnings Report</h2>

            {/* Total Earning Card */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 text-secondary-foreground border border-border">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <IndianRupee className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Earning</p>
                <p className="text-2xl font-bold text-foreground">{summaryData.totalEarning}</p>
              </div>
            </div>

            {/* Item Earning Card */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 text-secondary-foreground border border-border">
              <div className="p-3 rounded-full bg-orange-500/20 text-orange-500"> {/* Using direct orange for icon background */}
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Item Earning</p>
                <p className="text-2xl font-bold text-foreground">{summaryData.itemEarning}</p>
              </div>
            </div>

            {/* Contributor Bonus Card */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 text-secondary-foreground border border-border">
              <div className="p-3 rounded-full bg-purple-500/20 text-purple-500"> {/* Using direct purple for icon background */}
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contributor Bonus</p>
                <p className="text-2xl font-bold text-foreground">{summaryData.contributorBonus}</p>
              </div>
            </div>

            {/* Placeholder for "Show More" or other actions */}
            <div className="flex justify-center pt-4">
              <button className="text-primary hover:underline text-sm flex items-center gap-1">
                Show More <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}