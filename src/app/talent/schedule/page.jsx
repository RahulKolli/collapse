'use client';

import { useState, useEffect } from 'react';
// Assuming ModeToggle is another component you have
// import { ModeToggle } from '@/components/ui/mode-toggle'; // Example import path

export default function MeetingScheduling() {
  const [meetingType, setMeetingType] = useState('call');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingLocation, setMeetingLocation] = useState('');

  // Initialize date and time on the client side to avoid hydration mismatches
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    setSelectedDate(`${year}-${month}-${day}`);

    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    setSelectedTime(`${hours}:${minutes}`);
  }, []); // Empty dependency array means this runs once on mount (client-side)

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log({
      meetingType,
      selectedDate,
      selectedTime,
      meetingLocation: meetingType === 'in-person' ? meetingLocation : 'N/A',
    });
    alert('Meeting scheduled!');
    // In a real application, you would send this data to an API
  };

  return (
    // Main container: Using shadcn's background and foreground colors.
    // The subtle gradient is approximated using default background or a slight variation.
    <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      {/* ModeToggle in top-right corner */}
      <div className="absolute top-4 right-4 z-10">
        {/* <ModeToggle /> */} {/* Uncomment and import if you have this component */}
      </div>

      {/* Card container: Using shadcn's card background, text, and border colors. */}
      <div className="max-w-md w-full bg-card backdrop-blur-lg border border-border rounded-2xl p-8 space-y-6 shadow-lg text-card-foreground">
        <h1 className="text-2xl font-bold mb-6">Schedule a Meeting</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Meeting Type Label: Using muted-foreground for labels */}
          <div>
            <label className="block text-muted-foreground mb-2 font-medium">Meeting Type</label>
            <div className="flex gap-6">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="meetingType"
                  value="call"
                  checked={meetingType === 'call'}
                  onChange={() => setMeetingType('call')}
                  // Using shadcn's primary color for radio button accent
                  className="form-radio text-primary focus:ring-primary"
                />
                <span className="ml-2 text-foreground">Call</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="meetingType"
                  value="in-person"
                  checked={meetingType === 'in-person'}
                  onChange={() => setMeetingType('in-person')}
                  // Using shadcn's primary color for radio button accent
                  className="form-radio text-primary focus:ring-primary"
                />
                <span className="ml-2 text-foreground">In-Person</span>
              </label>
            </div>
          </div>

          {/* Date Input: Using shadcn's input background, border, text, and primary focus ring. */}
          <div>
            <label htmlFor="meetingDate" className="block text-muted-foreground mb-2 font-medium">Select Date</label>
            <input
              id="meetingDate"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-input border border-input text-foreground
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Time Input: Using shadcn's input background, border, text, and primary focus ring. */}
          <div>
            <label htmlFor="meetingTime" className="block text-muted-foreground mb-2 font-medium">Select Time</label>
            <input
              id="meetingTime"
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-3 rounded-lg bg-input border border-input text-foreground
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Location Input (conditional): Using shadcn's input background, border, text, placeholder, and primary focus ring. */}
          {meetingType === 'in-person' && (
            <div>
              <label htmlFor="meetingLocation" className="block text-muted-foreground mb-2 font-medium">Meeting Location</label>
              <input
                id="meetingLocation"
                type="text"
                placeholder="Enter location address"
                value={meetingLocation}
                onChange={(e) => setMeetingLocation(e.target.value)}
                className="w-full p-3 rounded-lg bg-input border border-input placeholder-muted-foreground text-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          )}

          {/* Submit Button: Using shadcn's primary button colors. */}
          <button
            type="submit" // Change to type="submit" to trigger form's onSubmit
            className="w-full bg-primary hover:bg-primary/90 py-3 rounded-lg font-semibold text-primary-foreground transition-colors"
          >
            Schedule Meeting
          </button>
        </form>
      </div>
    </div>
  );
}