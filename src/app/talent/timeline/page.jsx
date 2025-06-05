'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Loader } from 'lucide-react';

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
    done: 'text-primary border-primary',
    'in-progress': 'text-accent-foreground border-accent',
    upcoming: 'text-muted-foreground border-border',
  };

  const statusIcon = {
    done: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    'in-progress': <Loader className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />,
    upcoming: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold mb-2 text-center">Gig Timeline</h1>
        <p className="text-center text-sm text-muted-foreground">
          Tracking progress for gig ID: <span className="text-foreground font-medium">{id}</span>
        </p>

        {/* Centered timeline on mobile, left-aligned on md+ */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 md:gap-12 px-2 sm:px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center min-w-[120px]"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 mb-2 ${statusColor[step.status]}`}
              >
                {statusIcon[step.status]}
              </div>

              <h3 className="text-xs sm:text-sm font-medium">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.date}</p>
              <p className="text-xs capitalize text-muted-foreground mt-1">{step.status.replace('-', ' ')}</p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={`bg-border rounded-full mt-2 ${
                    'md:h-1 md:w-24 h-8 w-1'
                  }`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
