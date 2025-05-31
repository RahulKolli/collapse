'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function SubmitProposal() {
  const params = useParams();
  const id = params.id;

  const [file, setFile] = useState(null);

  return (
    // Main container using shadcn background and foreground colors
    <div className="min-h-screen bg-background text-foreground p-6 relative">
      
      {/* ModeToggle positioned at the top-right corner */}
      <div className="absolute top-4 right-4 z-10">
      </div>

      {/* Card container using shadcn card colors and border */}
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl shadow-lg p-8 space-y-6 text-card-foreground dark:backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-foreground">Submit Your Proposal</h1>
        <p className="text-center text-sm text-muted-foreground">
          Project ID: <span className="text-foreground">{id}</span>
        </p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Proposal submitted!'); }}>
          {/* Scope of Work */}
          <div>
            <label htmlFor="scope" className="block text-sm mb-2 text-foreground">Scope of Work</label>
            <textarea
              id="scope"
              rows="4"
              placeholder="Describe your approach, content ideas, or creative direction…"
              // Input styling using shadcn input colors
              className="w-full p-4 bg-input border border-input rounded-lg text-sm placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>

          {/* Proposed Budget */}
          <div>
            <label htmlFor="budget" className="block text-sm mb-2 text-foreground">Your Price (INR)</label>
            <input
              type="number"
              id="budget"
              placeholder="e.g., 28000"
              // Input styling using shadcn input colors
              className="w-full p-3 bg-input border border-input rounded-lg text-sm placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>

          {/* Proposed Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm mb-2 text-foreground">Start Date</label>
              <input
                type="date"
                id="startDate"
                // Input styling using shadcn input colors
                className="w-full p-3 bg-input border border-input rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm mb-2 text-foreground">End Date</label>
              <input
                type="date"
                id="endDate"
                // Input styling using shadcn input colors
                className="w-full p-3 bg-input border border-input rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
            </div>
          </div>

          {/* Attachment (optional) */}
          <div>
            <label htmlFor="attachment" className="block text-sm mb-2 text-foreground">Attachment (optional)</label>
            <input
              type="file"
              id="attachment"
              accept=".pdf,.jpg,.png"
              onChange={(e) => setFile(e.target.files[0])}
              // File input styling using shadcn primary colors for the button
              className="block w-full text-sm text-foreground 
                         file:bg-primary file:text-primary-foreground file:rounded-lg file:px-4 file:py-2 file:border-0 hover:file:bg-primary/90"
            />
            {file && <p className="text-xs text-muted-foreground mt-1">Selected file: {file.name}</p>}
            <p className="text-xs text-muted-foreground mt-1">You can attach a concept note or reference deck.</p>
          </div>

          {/* Submit Button using shadcn primary colors */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 py-3 rounded-lg font-semibold text-primary-foreground transition-all"
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
}