'use client';

import { useParams } from 'next/navigation';

export default function GigTimeline() {
  const params = useParams();
  const id = params.id;

  const steps = [
    { title: 'Proposal Accepted', date: 'May 25', status: 'done' },
    { title: 'Kickoff Meeting', date: 'May 27', status: 'done' },
    { title: 'Content Creation', date: 'May 28 – June 3', status: 'in-progress' },
    { title: 'Content Review & Edits', date: 'June 4 – June 6', status: 'upcoming' },
    { title: 'Live Posting', date: 'June 7', status: 'upcoming' },
    { title: 'Payment Released', date: 'June 10', status: 'upcoming' },
  ];

  const statusColor = {
    done: 'bg-green-600',
    'in-progress': 'bg-yellow-500',
    upcoming: 'bg-gray-500',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 p-6 text-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-center">Gig Timeline</h1>
        <p className="text-center text-sm text-gray-400">
          Tracking progress for gig ID: <span className="text-white">{id}</span>
        </p>

        <div className="relative border-l border-white/20 mt-10 ml-4">
          {steps.map((step, index) => (
            <div key={index} className="mb-10 ml-6">
              <span
                className={`absolute -left-3 top-1 w-5 h-5 rounded-full ${statusColor[step.status]} border-4 border-gray-900`}
              ></span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.date}</p>
              <p className="text-xs text-gray-500 mt-1 capitalize">{step.status.replace('-', ' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
