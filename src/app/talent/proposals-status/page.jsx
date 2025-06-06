// src/app/talent/proposals-status/page.jsx
"use client";

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
      statusColorClasses:
        "bg-destructive/10 text-destructive dark:bg-destructive/30 dark:text-destructive-foreground",
      dotColorClass: "bg-destructive",
      image: "/images/ayesha.png",
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
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Proposals Section */}
        <section>
          <h1 className="text-2xl font-bold mb-6">Your Proposals</h1>
          <p className="text-sm text-muted-foreground mb-4">
            Track your application status in real-time.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 pb-2">
            {["All", "Submitted", "Pending", "Completed", "In Progress"].map(
              (status, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground transition whitespace-nowrap"
                >
                  {status}
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {proposals.slice(0, visibleCount).map((proposal, index) => (
              <div
                key={index}
                className="bg-card border border-border p-5 rounded-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold">{proposal.title}</h2>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${proposal.statusClasses}`}
                  >
                    {proposal.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Brand: {proposal.brand}
                </p>
                <p className="text-sm text-muted-foreground">{proposal.date}</p>
                <p className="text-sm text-muted-foreground">
                  Budget Proposed:{" "}
                  <span className="text-primary">{proposal.budget}</span>
                </p>
                <button className="text-primary hover:underline text-sm">
                  View Proposal →
                </button>
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

        {/* Campaign Collaborations Section */}
        <section className="bg-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Campaign Collaborations</h2>

          {/* DESKTOP/LAPTOP VIEW: Traditional Table (visible on sm and up) */}
          <div className="hidden sm:block overflow-x-auto"> {/* Added overflow-x-auto for desktop scroll */}
            <table className="min-w-[600px] w-full text-sm"> {/* Reinstated min-w */}
              <thead className="text-left text-muted-foreground border-b border-border">
                <tr>
                  <th className="py-2 pr-4 pl-2">Influencer</th>
                  <th className="py-2 px-4">Platform</th>
                  <th className="py-2 px-4">Duration</th>
                  <th className="py-2 px-4">End Date</th>
                  <th className="py-2 px-4">Payout</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {influencers.map((influencer, index) => (
                  <tr key={index}>
                    <td className="flex items-center gap-3 py-3 px-2">
                      <Image
                        src={influencer.image}
                        alt={influencer.name}
                        width={36}
                        height={36}
                        className="rounded-full"
                        priority
                      />
                      <div>
                        <div className="font-medium">{influencer.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {influencer.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-4">{influencer.platform}</td>
                    <td className="px-4">{influencer.duration}</td>
                    <td className="px-4">{influencer.endDate}</td>
                    <td className="px-4 text-primary">{influencer.payout}</td>
                    <td className="px-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${influencer.statusColorClasses}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${influencer.dotColorClass}`}
                        ></span>
                        {influencer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW: Card-like Layout (hidden on sm and up) */}
          <div className="sm:hidden space-y-4">
            {influencers.map((influencer, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-4 flex flex-col space-y-3"
              >
                {/* Influencer */}
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground text-xs font-semibold">
                    Influencer:
                  </span>
                  <Image
                    src={influencer.image}
                    alt={influencer.name}
                    width={36}
                    height={36}
                    className="rounded-full flex-shrink-0"
                    priority
                  />
                  <div>
                    <div className="font-medium">{influencer.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {influencer.email}
                    </div>
                  </div>
                </div>

                {/* Platform */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Platform:{" "}
                  </span>
                  <span className="text-foreground break-words">{influencer.platform}</span>
                </div>

                {/* Duration */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Duration:{" "}
                  </span>
                  <span className="text-foreground break-words">{influencer.duration}</span>
                </div>

                {/* End Date */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    End Date:{" "}
                  </span>
                  <span className="text-foreground break-words">{influencer.endDate}</span>
                </div>

                {/* Payout */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Payout:{" "}
                  </span>
                  <span className="text-primary break-words">{influencer.payout}</span>
                </div>

                {/* Status */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Status:{" "}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${influencer.statusColorClasses} whitespace-nowrap`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${influencer.dotColorClass}`}
                    ></span>
                    {influencer.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Previous Projects Section */}
        <section className="bg-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Previous Projects</h2>

          {/* DESKTOP/LAPTOP VIEW: Traditional Table (visible on sm and up) */}
          <div className="hidden sm:block overflow-x-auto"> {/* Added overflow-x-auto for desktop scroll */}
            <table className="min-w-[700px] w-full text-sm"> {/* Reinstated min-w */}
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
                  <tr key={index}>
                    <td className="py-3 px-4 font-medium">{project.title}</td>
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

          {/* MOBILE VIEW: Card-like Layout (hidden on sm and up) */}
          <div className="sm:hidden space-y-4">
            {influencers[0].previousProjects.map((project, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-4 flex flex-col space-y-3"
              >
                {/* Title */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Title:{" "}
                  </span>
                  <span className="font-medium text-foreground break-words">{project.title}</span>
                </div>
                {/* Brand */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Brand:{" "}
                  </span>
                  <span className="text-foreground break-words">{project.brand}</span>
                </div>
                {/* Platform */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Platform:{" "}
                  </span>
                  <span className="text-foreground break-words">{project.platform}</span>
                </div>
                {/* Duration */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Duration:{" "}
                  </span>
                  <span className="text-foreground break-words">{project.duration}</span>
                </div>
                {/* End Date */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    End Date:{" "}
                  </span>
                  <span className="text-foreground break-words">{project.endDate}</span>
                </div>
                {/* Payout */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Payout:{" "}
                  </span>
                  <span className="text-primary break-words">{project.payout}</span>
                </div>
                {/* Link */}
                <div>
                  <span className="text-muted-foreground text-xs font-semibold">
                    Link:{" "}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-words"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}