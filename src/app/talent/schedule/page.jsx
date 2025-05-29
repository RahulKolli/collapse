'use client';

import { useState } from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function MeetingScheduling() {
  const [meetingType, setMeetingType] = useState('call');

  return (
    // Main container: Now light by default, displays darker colors in "dark" mode.
    <div className="relative min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 p-6 text-gray-900 dark:from-gray-950 dark:to-gray-900 dark:text-white flex items-center justify-center">
      {/* ModeToggle in top-right corner */}
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>

      {/* Card container: Now light by default, displays darker colors in "dark" mode. */}
      <div className="max-w-md w-full bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-gray-300 dark:border-white/10 rounded-2xl p-8 space-y-6 shadow-lg text-gray-900 dark:text-white">
        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">Schedule a Meeting</h1>

        <form className="space-y-5">
          {/* Meeting Type Label: Light by default, slightly darker in "dark" mode */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Meeting Type</label>
            <div className="flex gap-6">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="meetingType"
                  value="call"
                  checked={meetingType === 'call'}
                  onChange={() => setMeetingType('call')}
                  className="form-radio text-purple-600 dark:text-purple-500"
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
                  className="form-radio text-purple-600 dark:text-purple-500"
                />
                <span className="ml-2">In-Person</span>
              </label>
            </div>
          </div>

          {/* Date Input: Light by default, displays darker colors in "dark" mode. */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Select Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900
                         dark:bg-white/10 dark:text-white dark:border-white/10
                         focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Time Input: Light by default, displays darker colors in "dark" mode. */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Select Time</label>
            <input
              type="time"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900
                         dark:bg-white/10 dark:text-white dark:border-white/10
                         focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Location Input (conditional): Light by default, displays darker colors in "dark" mode. */}
          {meetingType === 'in-person' && (
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Meeting Location</label>
              <input
                type="text"
                placeholder="Enter location address"
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900
                           dark:bg-white/10 dark:text-white dark:border-white/10 dark:placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          )}

          {/* Submit Button: Dark purple by default, slightly lighter in "dark" mode. */}
          <button
            type="button"
            onClick={() => alert('Meeting scheduled!')}
            className="w-full bg-purple-700 hover:bg-purple-800 py-3 rounded-lg font-semibold text-white
                       dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white transition-all"
          >
            Schedule Meeting
          </button>
        </form>
      </div>
    </div>
  );
}