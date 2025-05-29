'use client';

import { useState } from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function MeetingScheduling() {
  const [meetingType, setMeetingType] = useState('call');

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 dark:from-gray-900 dark:to-gray-950 p-6 text-white dark:text-gray-900 flex items-center justify-center">
      {/* ModeToggle in top-right corner */}
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>

      <div className="max-w-md w-full bg-white/5 dark:bg-gray-800 backdrop-blur-lg border border-white/10 dark:border-gray-700 rounded-2xl p-8 space-y-6 shadow-lg text-white dark:text-gray-100">
        <h1 className="text-3xl font-semibold text-center text-white dark:text-white">Schedule a Meeting</h1>

        <form className="space-y-5">
          {/* Meeting Type */}
          <div>
            <label className="block text-gray-300 dark:text-gray-400 mb-2 font-medium">Meeting Type</label>
            <div className="flex gap-6">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="meetingType"
                  value="call"
                  checked={meetingType === 'call'}
                  onChange={() => setMeetingType('call')}
                  className="form-radio text-purple-600 dark:text-purple-500" // Adjusted for dark mode
                />
                <span className="ml-2">Call</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="meetingType"
                  value="in-person"
                  checked={meetingType === 'in-person'}
                  onChange={() => setMeetingType('in-person')}
                  className="form-radio text-purple-600 dark:text-purple-500" // Adjusted for dark mode
                />
                <span className="ml-2">In-Person</span>
              </label>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-300 dark:text-gray-400 mb-2 font-medium">Select Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white
                         dark:bg-gray-700 dark:text-white dark:border-gray-600
                         focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-gray-300 dark:text-gray-400 mb-2 font-medium">Select Time</label>
            <input
              type="time"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white
                         dark:bg-gray-700 dark:text-white dark:border-gray-600
                         focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Location */}
          {meetingType === 'in-person' && (
            <div>
              <label className="block text-gray-300 dark:text-gray-400 mb-2 font-medium">Meeting Location</label>
              <input
                type="text"
                placeholder="Enter location address"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 text-white
                           dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => alert('Meeting scheduled!')}
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold text-white
                       dark:bg-purple-700 dark:hover:bg-purple-800 dark:text-white transition-all"
          >
            Schedule Meeting
          </button>
        </form>
      </div>
    </div>
  );
}