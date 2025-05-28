'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 p-6 text-white">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold">Eco-Friendly Fashion Campaign</h1>
        <p className="text-sm text-gray-400">Posted by: <span className="text-white font-medium">GreenWear</span></p>

        {/* Tags & Location */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
          <span className="bg-white/10 px-2 py-1 rounded">#fashion</span>
          <span className="bg-white/10 px-2 py-1 rounded">#sustainability</span>
          <span className="bg-white/10 px-2 py-1 rounded">Location: Delhi</span>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Project Brief</h2>
          <p className="text-gray-300">
            We’re looking for fashion and lifestyle influencers to help us launch our new sustainable clothing line.
            The campaign includes Instagram Reels, a story post, and one carousel post. Influencers must be based in or able to travel to Delhi.
          </p>
        </div>

        {/* Requirements */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Requirements</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Minimum 10k followers on Instagram</li>
            <li>Experience with fashion-related content</li>
            <li>Deliverables: 1 Reel, 1 Story, 1 Carousel</li>
          </ul>
        </div>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/10 border border-white/10 p-4 rounded-lg">
            <h3 className="text-sm text-gray-400">Estimated Budget</h3>
            <p className="text-lg font-semibold text-green-400">₹25,000 - ₹35,000</p>
          </div>
          <div className="bg-white/10 border border-white/10 p-4 rounded-lg">
            <h3 className="text-sm text-gray-400">Timeline</h3>
            <p className="text-lg font-semibold">June 5 - June 20</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <button
            onClick={() => router.push(`/talent/project/${id}/submit`)}
            className="bg-purple-600 hover:bg-purple-700 transition-all px-6 py-3 rounded-lg font-semibold"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
