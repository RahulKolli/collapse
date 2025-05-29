'use client';

import { ModeToggle } from '@/components/ui/mode-toggle'; // Import the ModeToggle component

export default function BrowseProjects() {
  return (
    // Main container: Now dark by default, gets light colors in "dark" mode
    // (meaning when the 'dark' class is present on html, it shows the light theme)
    <div className="min-h-screen bg-gray-100 to-gray-200 p-6 text-gray-900 dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-900 dark:text-white relative">
      
      {/* ModeToggle positioned at the top-right corner of the page */}
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-semibold">Open Projects</h1>

          {/* Filters section */}
          <div className="flex flex-wrap gap-3">
            {/* Input fields: Now light by default, gets dark colors in "dark" mode */}
            <input
              type="text"
              placeholder="Search by tag (e.g., fashion, tech)"
              className="px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600
                         dark:bg-white/10 dark:border-white/10 dark:placeholder-gray-400 dark:text-white"
            />
            <input
              type="text"
              placeholder="Search by location"
              className="px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600
                         dark:bg-white/10 dark:border-white/10 dark:placeholder-gray-400 dark:text-white"
            />
            {/* Apply Filters button: Now has a dark background by default, gets lighter in "dark" mode */}
            <button
              className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg text-sm font-semibold text-white
                         dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              // Project card styling: Now light by default, gets dark in "dark" mode
              className="bg-white/70 backdrop-blur-lg border border-gray-300 rounded-xl p-5 space-y-3 hover:shadow-xl transition-all text-gray-900
                         dark:bg-white/5 dark:border-white/10 dark:text-white"
            >
              <h2 className="text-xl font-semibold">Brand Collaboration #{i + 1}</h2>
              {/* Description text: Adjusts text color */}
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Looking for lifestyle creators to promote our eco-friendly fashion line.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                {/* Tag styling: Adjusts background and text colors */}
                <span className="bg-gray-300 px-2 py-1 rounded text-gray-800 dark:bg-white/10 dark:text-gray-400">#fashion</span>
                <span className="bg-gray-300 px-2 py-1 rounded text-gray-800 dark:bg-white/10 dark:text-gray-400">#eco</span>
                <span className="bg-gray-300 px-2 py-1 rounded text-gray-800 dark:bg-white/10 dark:text-gray-400">Delhi</span>
              </div>
              {/* View Details button (link-style): Adjusts text and hover colors */}
              <button
                className="mt-2 text-purple-600 hover:text-purple-800 text-sm font-medium
                           dark:text-purple-400 dark:hover:text-purple-200"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}