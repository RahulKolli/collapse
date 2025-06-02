'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
// import { ModeToggle } from '@/components/ui/mode-toggle'; // Uncommented the import
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

  // Using shadcn/ui colors for status indicators
  const statusColor = {
    done: 'text-primary border-primary', // Primary color for completed steps
    'in-progress': 'text-accent-foreground border-accent', // Accent color for in-progress
    upcoming: 'text-muted-foreground border-border', // Muted foreground for upcoming, border for outline
  };

  const statusIcon = {
    done: <CheckCircle className="w-6 h-6" />,
    'in-progress': <Loader className="w-6 h-6 animate-spin" />,
    upcoming: <Clock className="w-6 h-6" />,
  };

  return (
    // Main container using shadcn background and foreground colors
    // Light mode: bg-background (white), text-foreground (dark text)
    // Dark mode: dark:bg-background (dark gray/blue), dark:text-foreground (light text)
    <div className="min-h-screen p-6 bg-background text-foreground transition-colors duration-300 relative">
      <div className="absolute top-4 right-4 z-10">
        {/* <ModeToggle />  */}
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl font-semibold text-foreground text-center">Gig Timeline</h1>
        <p className="text-center text-sm text-muted-foreground">
          Tracking progress for gig ID: <span className="text-foreground">{id}</span>
        </p>

        <div className="flex items-center overflow-x-auto space-x-10 px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="flex flex-col items-center text-center min-w-[140px]"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-4 mb-2 ${statusColor[step.status]}`}
              >
                {statusIcon[step.status]}
              </div>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.date}</p>
              <p className="text-xs mt-1 capitalize text-muted-foreground">{step.status.replace('-', ' ')}</p>
              {index < steps.length - 1 && (
                // Using shadcn border color for the timeline connector
                <div className="h-1 w-24 bg-border mt-3 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}