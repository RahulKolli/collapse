"use client";

// src/ProposalReviewPage.jsx (or whatever you want to name this single file)

import React, { createContext, useContext, useEffect, useState } from 'react';

// --- ThemeProvider Component ---
const ThemeContext = createContext(null);

export function ThemeProvider({ children, defaultTheme = 'light', storageKey = 'vite-ui-theme' }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme) {
      return savedTheme;
    }
    if (defaultTheme === 'system' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// --- ModeToggle Component ---
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

 
}

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
    // Wrap the entire content with the ThemeProvider
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gray-50 text-gray-900
                      dark:bg-gray-900 dark:text-gray-50
                      flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
        {/* Theme Toggle Button positioned at the top right */}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Proposal Review</h1>

          {/* Main proposal card */}
          <div className="bg-white shadow-md rounded-xl p-6 space-y-6
                          dark:bg-gray-800">
            {/* Name and Role Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{proposal.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{proposal.role} • {proposal.city}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <p><span className="font-semibold text-gray-800 dark:text-gray-200">Submitted On:</span> {proposal.submittedOn}</p>
              <p><span className="font-semibold text-gray-800 dark:text-gray-200">Bid Amount:</span> {proposal.bidAmount}</p>
              <p><span className="font-semibold text-gray-800 dark:text-gray-200">Estimated Time:</span> {proposal.estimatedTime}</p>
            </div>

            {/* Cover Letter Section */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Cover Letter</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{proposal.coverLetter}</p>
            </div>

            {/* Attachments Section */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Attachments</h3>
              <ul className="list-disc pl-5 text-sm text-blue-600 dark:text-blue-400">
                {proposal.attachments.map((file, index) => (
                  <li key={index} className="hover:underline cursor-pointer">{file}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 ease-in-out">
                Accept Proposal
              </button>
              <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400
                                  dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500
                                  transition-colors duration-200 ease-in-out">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}