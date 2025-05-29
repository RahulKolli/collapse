'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle'; // Don't forget to import ModeToggle!

export default function SubmitProposal() {
  const params = useParams();
  const id = params.id;

  const [file, setFile] = useState(null);

  return (
    // Main container: Now light by default, gets dark colors in "dark" mode.
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 text-gray-900 dark:from-gray-950 dark:to-gray-900 dark:text-white relative">
      
      {/* ModeToggle positioned at the top-right corner */}
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>

      {/* Card container: Now light by default, gets dark colors in "dark" mode. */}
      <div className="max-w-3xl mx-auto bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-gray-300 dark:border-white/10 rounded-2xl shadow-lg p-8 space-y-6 text-gray-900 dark:text-white">
        <h1 className="text-3xl font-semibold text-center">Submit Your Proposal</h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400"> {/* Adjusted text color */}
          Project ID: <span className="text-gray-900 dark:text-white">{id}</span> {/* Adjusted text color */}
        </p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Proposal submitted!'); }}>
          {/* Scope of Work */}
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Scope of Work</label> {/* Adjusted label color */}
            <textarea
              rows="4"
              placeholder="Describe your approach, content ideas, or creative direction…"
              // Input styling: Now light by default, gets dark colors in "dark" mode.
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg text-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600
                         dark:bg-white/10 dark:border-white/10 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          {/* Proposed Budget */}
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Your Price (INR)</label> {/* Adjusted label color */}
            <input
              type="number"
              placeholder="e.g., 28000"
              // Input styling: Now light by default, gets dark colors in "dark" mode.
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600
                         dark:bg-white/10 dark:border-white/10 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          {/* Proposed Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Start Date</label> {/* Adjusted label color */}
              <input
                type="date"
                // Input styling: Now light by default, gets dark colors in "dark" mode.
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600
                           dark:bg-white/10 dark:border-white/10 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">End Date</label> {/* Adjusted label color */}
              <input
                type="date"
                // Input styling: Now light by default, gets dark colors in "dark" mode.
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600
                           dark:bg-white/10 dark:border-white/10 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Attachment (optional) */}
          <div>
            <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Attachment (optional)</label> {/* Adjusted label color */}
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={(e) => setFile(e.target.files[0])}
              // File input styling: Now light by default, gets darker colors in "dark" mode.
              className="block w-full text-sm text-gray-900 dark:text-white file:bg-purple-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:border-0 hover:file:bg-purple-700
                         dark:file:bg-purple-700 dark:hover:file:bg-purple-800"
            />
            {file && <p className="text-xs text-gray-700 dark:text-gray-500 mt-1">Selected file: {file.name}</p>} {/* Adjusted text color */}
            <p className="text-xs text-gray-700 dark:text-gray-500 mt-1">You can attach a concept note or reference deck.</p> {/* Adjusted text color */}
          </div>

          {/* Submit Button: Dark purple by default, slightly lighter in "dark" mode. */}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 py-3 rounded-lg font-semibold text-white transition-all
                       dark:bg-purple-600 dark:hover:bg-purple-700"
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
}