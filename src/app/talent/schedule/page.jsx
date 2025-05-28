'use client';

import { useState } from 'react';

export default function MeetingScheduling() {
  const [meetingType, setMeetingType] = useState('call');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 p-6 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 space-y-6 shadow-lg">
        <h1 className="text-3xl font-semibold text-center">Schedule a Meeting</h1>

        <form className="space-y-5">
          {/* Meeting Type */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Meeting Type</label>
            <div className="flex gap-6">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="meetingType"
                  value="call"
                  checked={meetingType === 'call'}
                  onChange={() => setMeetingType('call')}
                  className="form-radio text-purple-600"
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
                  className="form-radio text-purple-600"
                />
                <span className="ml-2">In-Person</span>
              </label>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Select Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Select Time</label>
            <input
              type="time"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Location (if in-person) */}
          {meetingType === 'in-person' && (
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Meeting Location</label>
              <input
                type="text"
                placeholder="Enter location address"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => alert('Meeting scheduled!')}
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold text-white transition-all"
          >
            Schedule Meeting
          </button>
        </form>
      </div>
    </div>
  );
}
