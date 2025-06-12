"use client";

// src/ProposalReviewPage.jsx (or whatever you want to name this single file)

import React from 'react';

// --- ProposalReview Component ---
export default function ProposalReviewPage() { // Renamed to avoid conflict if already an App.jsx
  const proposal = {
    name: "Ritika Sharma",
    role: "Frontend Developer",
    city: "Delhi",
    submittedOn: "May 31, 2025",
    bidAmount: "₹26,500",
    estimatedTime: "12 days",
    coverLetter:
      "Hello! I'm excited about your project. I have 3+ years of experience in React, Tailwind, and responsive UI development. Please find my previous work attached.",
    attachments: ["UI_Mockup.pdf", "Portfolio_Samples.zip"],
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
        {/* Theme Toggle Button positioned at the top right */}
        <div className="absolute top-4 right-4">
          {/* Remove ModeToggle or replace with a static button if needed */}
        </div>
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-2xl font-bold mb-6 text-left">Proposal Review</h1>
          {/* Main proposal card */}
          <div className="bg-gradient-to-br from-card via-muted/60 to-background border border-border rounded-3xl p-0 overflow-hidden">
            {/* Top Bar */}
            <div className="bg-primary/90 px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold text-primary-foreground leading-tight">{proposal.name}</h2>
                <p className="text-base text-primary-foreground/80 mt-1">{proposal.role} • {proposal.city}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 text-sm text-primary-foreground/80">
                <span><span className="font-semibold">Bid:</span> <span className="text-white font-bold">{proposal.bidAmount}</span></span>
                <span><span className="font-semibold">Submitted:</span> {proposal.submittedOn}</span>
                <span><span className="font-semibold">Est. Time:</span> {proposal.estimatedTime}</span>
              </div>
            </div>
            {/* Content Sections */}
            <div className="p-8 flex flex-col gap-8">
              {/* Cover Letter Section */}
              <div className="bg-background/80 border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-primary mb-2">Cover Letter</h3>
                <p className="text-foreground/90 text-base leading-relaxed">{proposal.coverLetter}</p>
              </div>
              {/* Attachments Section */}
              <div className="bg-muted/60 border border-border rounded-xl p-6">
                <h3 className="font-semibold text-lg text-primary mb-2">Attachments</h3>
                <ul className="list-disc pl-5 text-base text-primary">
                  {proposal.attachments.map((file, index) => (
                    <li key={index} className="hover:underline cursor-pointer transition-colors duration-150">{file}</li>
                  ))}
                </ul>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-md hover:from-green-600 hover:to-green-800 transition">Accept Proposal</button>
                <button className="flex-1 bg-muted text-foreground px-8 py-3 rounded-xl font-bold text-lg shadow-md hover:bg-muted/80 transition">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}