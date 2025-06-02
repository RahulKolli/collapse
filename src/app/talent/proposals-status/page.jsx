"use client"

import React, { useState } from "react";
import Image from "next/image";
export default function ProposalStatus() {
  const proposals = [
    {
      title: "Eco-Friendly Fashion Campaign",
      brand: "GreenWear",
      date: "Submitted on May 25",
      status: "In Progress",
      budget: "₹28,000",
      statusClasses: "bg-accent text-accent-foreground",
    },
    {
      title: "Gadget Review Collab",
      brand: "TechBlitz",
      date: "Accepted on May 22",
      status: "Completed",
      budget: "₹15,000",
      statusClasses: "bg-secondary text-secondary-foreground",
    },
    {
      title: "Fitness Brand Shoutout",
      brand: "FitPro",
      date: "Submitted on May 18",
      status: "Pending",
      budget: "₹20,000",
      statusClasses: "bg-destructive text-destructive-foreground",
    },
  ];

  const influencers = [
    {
      name: "Ayesha Khan",
      email: "ayesha@influenz.com",
      platform: "Instagram",
      duration: "May 01 - May 20, 2025",
      endDate: "May 20, 2025",
      payout: "₹15,000",
      status: "Pending",
      statusColorClasses: "bg-destructive/10 text-destructive dark:bg-destructive/30 dark:text-destructive-foreground",
      dotColorClass: "bg-destructive",
      image: "/images/ayesha.png", // Ensure this image path is correct or provide a dummy image
      previousProjects: [
        {
          title: "Summer Style Haul 2024",
          brand: "Urban Vogue",
          platform: "Instagram",
          duration: "Feb 10 – Mar 10, 2024",
          endDate: "March 10, 2024",
          payout: "₹18,000",
          link: "https://instagram.com/p/xyz1",
        },
        {
          title: "Eco Clean Skincare Reel",
          brand: "PureGlow",
          platform: "Instagram",
          duration: "Jan 01 – Jan 25, 2024",
          endDate: "January 25, 2024",
          payout: "₹12,000",
          link: "https://instagram.com/p/xyz2",
        },
      ],
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const handleShowMore = () => setVisibleCount((prev) => prev + 2);

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex justify-end">
        </div>

        {/* Proposals Section */}
        <section>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Your Proposals</h1>
          <p className="text-sm text-muted-foreground mb-4">Track your application status in real-time.</p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {["All", "Submitted", "Pending", "Completed", "In Progress"].map((status, index) => (
              <button
                key={index}
                className="px-4 py-2 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border 
                           hover:bg-primary hover:text-primary-foreground transition whitespace-nowrap"
              >
                {status}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {proposals.slice(0, visibleCount).map((proposal, index) => (
              <div
                key={index}
                className="bg-card border border-border backdrop-blur p-5 rounded-xl space-y-3 text-card-foreground"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold text-foreground">{proposal.title}</h2>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${proposal.statusClasses}`}>
                    {proposal.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Brand: {proposal.brand}</p>
                <p className="text-sm text-muted-foreground">{proposal.date}</p>
                <p className="text-sm text-muted-foreground">
                  Budget Proposed: <span className="text-primary">{proposal.budget}</span>
                </p>
                <button className="text-primary hover:underline text-sm">View Proposal →</button>
              </div>
            ))}
          </div>
          {visibleCount < proposals.length && (
            <div className="flex justify-center">
              <button
                onClick={handleShowMore}
                className="mt-4 px-5 py-2 rounded-lg bg-primary hover:bg-primary/90 transition text-sm text-primary-foreground"
              >
                Show More
              </button>
            </div>
          )}
        </section>

        {/* Campaign Collaborations Table */}
        <section className="bg-card text-card-foreground p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Campaign Collaborations</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-muted-foreground border-b border-border">
                <tr>
                  <th className="py-2 pr-4 pl-2">Influencer</th>
                  <th className="py-2 px-4">Platform</th>
                  <th className="py-2 px-4">Campaign Duration</th>
                  <th className="py-2 px-4">End Date</th>
                  <th className="py-2 px-4">Payout</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {influencers.map((influencer, index) => (
                  // FIX: Removed the comment that caused the syntax error
                  <tr key={index}><td className="flex items-center gap-3 py-3 px-2">
                      <Image
                        src={influencer.image}
                        alt={influencer.name}
                        width={36}
                        height={36}
                        className="rounded-full"
                        priority
                      />
                      <div>
                        <div className="font-medium text-foreground">{influencer.name}</div>
                        <div className="text-xs text-muted-foreground">{influencer.email}</div>
                      </div>
                    </td>
                    <td className="px-4">{influencer.platform}</td>
                    <td className="px-4">{influencer.duration}</td>
                    <td className="px-4">{influencer.endDate}</td>
                    <td className="px-4 text-primary">{influencer.payout}</td>
                    <td className="px-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${influencer.statusColorClasses}`}>
                        <span className={`w-2 h-2 rounded-full ${influencer.dotColorClass}`}></span>
                        {influencer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Previous Projects */}
        <section className="bg-card text-card-foreground p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Previous Projects</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-left text-muted-foreground border-b border-border">
                <tr>
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">Brand</th>
                  <th className="py-2 px-4">Platform</th>
                  <th className="py-2 px-4">Duration</th>
                  <th className="py-2 px-4">End Date</th>
                  <th className="py-2 px-4">Payout</th>
                  <th className="py-2 px-4">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {influencers[0].previousProjects.map((project, index) => (
                  // FIX: Removed the comment that caused the syntax error
                  <tr key={index}><td className="py-3 px-4 font-medium text-foreground">{project.title}</td>
                    <td className="px-4">{project.brand}</td>
                    <td className="px-4">{project.platform}</td>
                    <td className="px-4">{project.duration}</td>
                    <td className="px-4">{project.endDate}</td>
                    <td className="px-4 text-primary">{project.payout}</td>
                    <td className="px-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}