'use client';

import React from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';

// A simple way to map status to Tailwind classes for the icon background
const getStatusClasses = (status) => {
  switch (status) {
    case 'done':
      // Done: Purple/Green for done, light gray for dark mode (light theme)
      return 'bg-green-500 dark:bg-green-100 text-white dark:text-green-700'; // Green-ish for done
    case 'in progress':
      // In Progress: Blue/Orange for in progress
      return 'bg-blue-500 dark:bg-blue-100 text-white dark:text-blue-700'; // Blue-ish for in progress
    case 'upcoming':
      // Upcoming: Gray for upcoming
      return 'bg-gray-600 dark:bg-gray-200 text-white dark:text-gray-700'; // Gray-ish for upcoming
    default:
      return 'bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-800';
  }
};

export default function GigWorkflowProcess() {
  const processSteps = [
    {
      id: 1,
      label: 'Proposal Accepted',
      date: 'May 25',
      status: 'done',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), // Checkmark in a circle
      description: 'The proposal was accepted and all terms finalized.',
      gridArea: 'step1', // Custom grid area for layout
    },
    {
      id: 2,
      label: 'Kickoff Meeting',
      date: 'May 27',
      status: 'done',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ), // Calendar icon
      description: 'Initial project meeting conducted to align on strategy and deliverables.',
      gridArea: 'step2',
    },
    {
      id: 3,
      label: 'Content Creation',
      date: 'May 28 – June 3',
      status: 'in progress',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ), // Pen/Edit icon
      description: 'Developing creative assets: scripts, visuals, and copy.',
      gridArea: 'step3',
    },
    {
      id: 4,
      label: 'Content Review & Edits',
      date: 'June 4 – June 6',
      status: 'upcoming',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ), // Document icon
      description: 'Client provides feedback for final content revisions.',
      gridArea: 'step4',
    },
    {
      id: 5,
      label: 'Live Posting',
      date: 'June 7',
      status: 'upcoming',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ), // Camera/Card icon
      description: 'Scheduled publishing of content across chosen platforms.',
      gridArea: 'step5',
    },
    {
      id: 6,
      label: 'Payment Released',
      date: 'June 10',
      status: 'upcoming',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9.414A2 2 0 008 10.586L6.586 12A2 2 0 005 13.414V16a2 2 0 002 2h2m0-11V9m0 4h.01M17 13h.01" />
        </svg>
      ), // Wallet icon
      description: 'Final payment for the gig processed and transferred.',
      gridArea: 'step6',
    },
  ];

  return (
    // Main container: Dark background/text by default, light background/text when 'dark' class is active
    <div className="min-h-screen p-6 relative flex flex-col items-center justify-center
                    bg-gray-900 text-white /* Default: Dark visual theme */
                    dark:bg-white dark:text-black /* When 'dark' class active: Light visual theme */">

      {/* ModeToggle positioned at the top-right corner */}
      <div className="absolute top-4 right-4 z-20">
        <ModeToggle />
      </div>

      <div className="w-full max-w-6xl mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-12
                       text-white /* Default: White text */
                       dark:text-black /* When 'dark' class active: Black text */">
          GIG WORKFLOW PROCESS
        </h1>

        {/* This is the core layout using CSS Grid for precise positioning
            and pseudo-elements or specific divs for the connecting lines.
            The `grid-template-areas` defines the visual flow.
        */}
        <div className="relative w-full aspect-[16/9] max-h-[700px] mx-auto
                        grid grid-cols-3 grid-rows-3 gap-y-0 gap-x-0
                        md:grid-cols-7 md:grid-rows-2 md:gap-x-4 md:gap-y-8"
             style={{
               // Define grid areas for a complex, non-linear layout
               gridTemplateAreas: `
                 "step1 . step2 . step3 . step4"
                 ". . . . . . ." /* Spacing row if needed */
                 "step5 . step6 . step7 . step8" /* Placeholder for more steps */
               `,
               // Responsive adjustments for the grid on smaller screens to stack better
               '@media (max-width: 767px)': {
                 gridTemplateAreas: `
                   "step1 step1 step1"
                   "step2 step2 step2"
                   "step3 step3 step3"
                   "step4 step4 step4"
                   "step5 step5 step5"
                   "step6 step6 step6"
                 `,
                 height: 'auto', // Allow height to grow on small screens
                 gap: '32px', // More vertical gap
               },
             }}>

          {/* BACKGROUND PATH / CONNECTORS (challenging without SVG) */}
          {/* We'll simulate this with absolute positioned divs. This will need fine-tuning. */}
          {/* Top horizontal segment */}
          <div className="absolute h-6 rounded-full top-[18%] left-[10%] w-[20%]
                          bg-gray-700 dark:bg-gray-300 z-0"></div>
          <div className="absolute h-6 rounded-full top-[18%] left-[30%] w-[20%]
                          bg-gray-700 dark:bg-gray-300 z-0"></div>
          <div className="absolute h-6 rounded-full top-[18%] left-[50%] w-[20%]
                          bg-gray-700 dark:bg-gray-300 z-0"></div>
          {/* Top-right curve */}
          <div className="absolute w-16 h-16 rounded-full top-[15%] right-[10%] rotate-45 transform origin-bottom-left
                          bg-gray-700 dark:bg-gray-300 z-0"></div>
          {/* Downward vertical segment */}
          <div className="absolute w-6 rounded-full top-[18%] right-[10%] h-[40%]
                          bg-gray-700 dark:bg-gray-300 z-0"></div>
          {/* Bottom horizontal segment */}
          <div className="absolute h-6 rounded-full bottom-[18%] left-[10%] w-[20%]
                          bg-gray-700 dark:bg-gray-300 z-0"></div>
          <div className="absolute h-6 rounded-full bottom-[18%] left-[30%] w-[20%]
                          bg-gray-700 dark:bg-gray-300 z-0"></div>
          <div className="absolute h-6 rounded-full bottom-[18%] left-[50%] w-[20%]
                          bg-gray-700 dark:bg-gray-300 z-0"></div>
           {/* Bottom-left curve (to simulate the bend) */}
          <div className="absolute w-16 h-16 rounded-full bottom-[15%] left-[10%] -rotate-45 transform origin-top-right
                          bg-gray-700 dark:bg-gray-300 z-0"></div>


          {/* PROCESS STEP NODES */}
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-2 z-10"
              style={{ gridArea: `step${step.id}` }} // Position using grid-area
            >
              {/* Icon Circle */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md
                                ${getStatusClasses(step.status)}`}>
                {step.icon}
              </div>

              {/* Label (Title) */}
              <h3 className="font-semibold text-lg mb-1
                             text-white /* Default: White text */
                             dark:text-black /* When 'dark' class active: Black text */">
                {step.label}
              </h3>

              {/* Description */}
              <p className="text-sm
                            text-gray-300 /* Default: Light gray text */
                            dark:text-gray-700 /* When 'dark' class active: Darker gray text */">
                {step.description}
              </p>

              {/* Date/Status (can be combined or separate) */}
              <p className="text-xs italic mt-1
                            text-gray-400 /* Default: Gray text */
                            dark:text-gray-500 /* When 'dark' class active: Darker gray text */">
                {step.date} - <span className="font-medium capitalize">{step.status}</span>
              </p>
            </div>
          ))}

          {/* Specific positioning for nodes for the U-shape flow on larger screens */}
          {/* These will override the grid-area for larger screens to get the exact curve */}
          {/* You will need to fine-tune these 'top', 'left', 'right', 'bottom' values heavily */}
          {/* I'm commenting out the absolute positioning here to use grid areas as a more robust solution,
              but if grid areas don't give the precise control, you'd use absolute positioning like this: */}
          {/*
          <div className="absolute flex flex-col items-center text-center w-[150px]" style={{ top: '10%', left: '5%' }}></div>
          <div className="absolute flex flex-col items-center text-center w-[150px]" style={{ top: '10%', left: '30%' }}></div>
          <div className="absolute flex flex-col items-center text-center w-[150px]" style={{ top: '10%', left: '55%' }}></div>
          <div className="absolute flex flex-col items-center text-center w-[150px]" style={{ top: '10%', right: '5%' }}></div>
          <div className="absolute flex flex-col items-center text-center w-[150px]" style={{ bottom: '10%', left: '5%' }}></div>
          <div className="absolute flex flex-col items-center text-center w-[150px]" style={{ bottom: '10%', left: '30%' }}></div>
          <div className="absolute flex flex-col items-center text-center w-[150px]" style={{ bottom: '10%', left: '55%' }}></div>
          */}

        </div>
      </div>
    </div>
  );
}