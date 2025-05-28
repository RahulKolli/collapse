'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function SubmitProposal() {
  const params = useParams();
  const id = params.id;

  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 p-6 text-white">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-center">Submit Your Proposal</h1>
        <p className="text-center text-sm text-gray-400">
          Project ID: <span className="text-white">{id}</span>
        </p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Proposal submitted!'); }}>
          {/* Scope of Work */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Scope of Work</label>
            <textarea
              rows="4"
              placeholder="Describe your approach, content ideas, or creative direction…"
              className="w-full p-4 bg-white/10 border border-white/10 rounded-lg text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Proposed Budget */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Your Price (INR)</label>
            <input
              type="number"
              placeholder="e.g., 28000"
              className="w-full p-3 bg-white/10 border border-white/10 rounded-lg text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Proposed Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-gray-300">Start Date</label>
              <input
                type="date"
                className="w-full p-3 bg-white/10 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-300">End Date</label>
              <input
                type="date"
                className="w-full p-3 bg-white/10 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>

          {/* Attachment (optional) */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Attachment (optional)</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-sm text-white file:bg-purple-700 file:text-white file:rounded-lg file:px-4 file:py-2 file:border-0"
            />
            {file && <p className="text-xs text-gray-500 mt-1">Selected file: {file.name}</p>}
            <p className="text-xs text-gray-500 mt-1">You can attach a concept note or reference deck.</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold text-white transition-all"
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
}
