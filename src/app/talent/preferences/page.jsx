"use client" // This directive marks the component as a Client Component

import React, { useState, useEffect } from 'react';
// import { ModeToggle } from '@/components/ui/mode-toggle'; // Import ModeToggle

// Main WorkPreferences component
export default function WorkPreferences() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Retained for modal context
  const [availabilityData, setAvailabilityData] = useState({
    // Dummy data for demonstration. In a real app, this would come from an API/database.
    '2025-06-01': [{ id: '1', type: 'unavailable', startTime: '09:00', endTime: '17:00', note: 'Doctor appointment' }],
    '2025-06-05': [{ id: '2', type: 'preferred', startTime: '10:00', endTime: '14:00', note: 'Prefer short shift' }],
    '2025-06-10': [{ id: '3', type: 'unavailable', allDay: true, repeating: true, repeatFrequency: 'week', repeatDays: ['Tuesday'], endsOn: '2025-12-31', note: 'Every Tuesday class' }],
    '2025-07-15': [{ id: '4', type: 'preferred', allDay: true, note: 'Available all day' }],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPreference, setEditingPreference] = useState(null); // Null for new, object for editing

  // States for General Preferences (these were the additional fields)
  const [availableDays, setAvailableDays] = useState([]); // e.g., ['Mon', 'Wed']
  const [preferredTimeSlot, setPreferredTimeSlot] = useState(''); // e.g., 'morning'
  const [workTypePreference, setWorkTypePreference] = useState(''); // e.g., 'Remote'
  const [projectPreferences, setProjectPreferences] = useState(''); // e.g., 'product shoots, brand collaborations'

  // New state to toggle visibility of general preferences - now true by default
  const [showGeneralPreferences, setShowGeneralPreferences] = useState(true);

  // Helper to format date to 'YYYY-MM-DD' for object keys
  const formatDate = (date) => date.toISOString().split('T')[0];

  // Opens the modal for adding a new detailed availability preference
  const handleAddPreference = () => {
    setEditingPreference(null); // Clear any existing editing data
    setIsModalOpen(true);
  };

  // Opens the modal for editing an existing detailed availability preference
  const handleEditPreference = (preference) => {
    // When editing, make sure the selectedDate matches the preference's date
    const preferenceDateKey = Object.keys(availabilityData).find(key =>
      availabilityData[key].some(p => p.id === preference.id)
    );
    if (preferenceDateKey) {
      setSelectedDate(new Date(preferenceDateKey));
    }
    setEditingPreference(preference);
    setIsModalOpen(true);
  };

  // Saves a new or updated detailed availability preference
  const handleSavePreference = (newPreference) => {
    const dateKey = formatDate(selectedDate);
    const currentDayAvailability = availabilityData[dateKey] || [];

    let updatedAvailability;
    if (newPreference.id) {
      // Editing an existing preference
      updatedAvailability = currentDayAvailability.map(p =>
        p.id === newPreference.id ? newPreference : p
      );
    } else {
      // Adding a new preference (assign a unique ID)
      updatedAvailability = [...currentDayAvailability, { ...newPreference, id: Date.now().toString() }];
    }

    setAvailabilityData(prevData => ({
      ...prevData,
      [dateKey]: updatedAvailability,
    }));
    setIsModalOpen(false);
    setEditingPreference(null);
  };

  // Deletes a specific detailed availability preference
  const handleDeletePreference = (idToDelete) => {
    const dateKey = formatDate(selectedDate);
    const currentDayAvailability = availabilityData[dateKey] || [];
    const updatedAvailability = currentDayAvailability.filter(p => p.id !== idToDelete);

    setAvailabilityData(prevData => ({
      ...prevData,
      [dateKey]: updatedAvailability,
    }));
    setIsModalOpen(false);
    setEditingPreference(null);
  };

  // Resets (deletes) all future detailed availability preferences
  const handleResetAllFuture = () => {
    if (window.confirm("Are you sure you want to delete all future detailed availability preferences? This cannot be undone.")) {
      const todayKey = formatDate(new Date());
      const updatedData = {};
      // Keep only past preferences
      for (const date in availabilityData) {
        if (date < todayKey) {
          updatedData[date] = availabilityData[date];
        }
      }
      setAvailabilityData(updatedData);
    }
  };

  // Get detailed preferences for the currently selected date
  const preferencesForSelectedDate = availabilityData[formatDate(selectedDate)] || [];

  // Handle toggle for general available days selection
  const handleDayToggle = (day) => {
    setAvailableDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  // Handles saving of general preferences (e.g., to an API endpoint)
  const handleSaveGeneralPreferences = () => {
    console.log("Saving General Preferences:", {
      availableDays,
      preferredTimeSlot,
      workTypePreference,
      projectPreferences,
    });
    // In a real application, you would send this data to your backend
    alert("General preferences saved!"); // Simple alert for demonstration
  };

  return (
    // Main container using shadcn background and foreground colors
    <div className="min-h-screen flex justify-center p-6 font-sans transition-colors duration-300 bg-background text-foreground">
      {/* ModeToggle positioned at the top-right of the page */}
      <div className="absolute top-4 right-4 z-10">
        {/* <ModeToggle /> */}
      </div>

      {/* Card container using shadcn card colors and border */}
      <div className="rounded-2xl p-6 sm:p-8 w-full max-w-4xl shadow-2xl space-y-6 relative transition-colors duration-300 bg-card border border-border text-card-foreground dark:backdrop-blur-lg">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Availability & Preferences</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Let us know when you're free and what work you prefer</p>

        {/* --- General Preferences Section with Toggle --- */}
        <div className="pb-6 border-b border-border">
          <button
            onClick={() => setShowGeneralPreferences(!showGeneralPreferences)}
            className="w-full text-left py-3 px-4 rounded-lg text-lg font-semibold flex justify-between items-center transition duration-200 bg-muted hover:bg-muted/80 text-foreground"
          >
            General Preferences
            <span className="text-xl">{showGeneralPreferences ? '▲' : '▼'}</span>
          </button>
          {showGeneralPreferences && (
            <form className="space-y-6 mt-4">
              {/* Available Days */}
              <div>
                <label className="block mb-3 text-base font-medium text-foreground">Available Days</label>
                <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${availableDays.includes(day)
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg border-primary' // Selected state
                          : 'bg-background hover:bg-accent text-foreground border-border' // Default unselected state
                        }
                      `}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Time Slots */}
              <div>
                <label className="block mb-3 text-base font-medium text-foreground">Preferred Time Slots</label>
                <select
                  value={preferredTimeSlot}
                  onChange={(e) => setPreferredTimeSlot(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring appearance-none custom-select bg-input border border-border text-foreground"
                >
                  <option value="" disabled className="bg-background text-muted-foreground">Select time slot</option>
                  <option value="morning" className="bg-background text-foreground">Morning (9am - 12pm)</option>
                  <option value="afternoon" className="bg-background text-foreground">Afternoon (12pm - 4pm)</option>
                  <option value="evening" className="bg-background text-foreground">Evening (4pm - 8pm)</option>
                  <option value="night" className="bg-background text-foreground">Night (8pm - 11pm)</option>
                </select>
                <style jsx>{`
                  .custom-select {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%234b5563' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"); /* Default (light mode) dark gray arrow */
                    background-repeat: no-repeat;
                    background-position: right 0.75rem center;
                    background-size: 0.8rem 0.8rem;
                  }
                  /* Dark mode arrow (when 'dark' class is present on html) */
                  html.dark .custom-select {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"); /* White arrow */
                  }
                `}</style>
              </div>

              {/* Work Type Preference */}
              <div>
                <label className="block mb-3 text-base font-medium text-foreground">Work Type</label>
                <div className="flex flex-wrap gap-4">
                  {['Remote', 'In-Person', 'Hybrid'].map((type) => (
                    <label
                      key={type}
                      className={`px-5 py-2 border rounded-lg cursor-pointer transition-all duration-200 ${workTypePreference === type
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg border-primary' // Selected state
                          : 'bg-muted hover:bg-accent text-foreground border-border' // Default unselected state
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="workType"
                        value={type}
                        checked={workTypePreference === type}
                        onChange={(e) => setWorkTypePreference(e.target.value)}
                        className="hidden"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Preferences */}
              <div>
                <label className="block mb-3 text-base font-medium text-foreground">Project Preferences</label>
                <input
                  type="text"
                  value={projectPreferences}
                  onChange={(e) => setProjectPreferences(e.target.value)}
                  placeholder="e.g., product shoots, brand collaborations, reels"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground placeholder-muted-foreground"
                />
                <p className="text-xs mt-1 text-muted-foreground">Separate multiple preferences with commas</p>
              </div>

              {/* Save General Preferences Button (accent color, consistent) */}
              <button
                type="button"
                onClick={handleSaveGeneralPreferences}
                className="w-full bg-primary hover:bg-primary/90 transition-all py-3 rounded-lg font-semibold text-primary-foreground shadow-lg"
              >
                Save General Preferences
              </button>
            </form>
          )}
        </div>

        {/* --- Detailed Availability Section (Calendar & Specific Preferences) --- */}
        <div className="pt-6 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Detailed Availability (Specific Dates)</h2>

          {/* Availability List for Selected Date */}
          <div className="p-4 sm:p-6 rounded-lg shadow-md bg-card border border-border dark:backdrop-blur-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 pb-2 border-b text-card-foreground border-border">
              Availability for {selectedDate.toDateString()}
            </h3>
            {preferencesForSelectedDate.length === 0 ? (
              <p className="text-center py-6 border border-dashed rounded-md mb-6 text-muted-foreground border-border">
                No detailed preferences set for this day.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {preferencesForSelectedDate.map(pref => (
                  <div
                    key={pref.id}
                    className="rounded-lg p-4 shadow-sm flex flex-col justify-between bg-muted border border-border"
                  >
                    <div>
                      {pref.type === 'unavailable' ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-destructive/10 text-destructive border border-destructive/20">
                          Unavailable
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                          Preferred
                        </span>
                      )}
                      <p className="text-lg font-bold mt-2 text-foreground">
                        {pref.allDay ? 'All Day' : `${pref.startTime} - ${pref.endTime}`}
                      </p>
                      {pref.repeating && (
                        <p className="text-sm mt-1 text-muted-foreground">
                          Repeats {pref.repeatFrequency === 'day' ? 'Daily' : pref.repeatFrequency === 'week' ? `Weekly on ${pref.repeatDays.join(', ')}` : `Bi-weekly on ${pref.repeatDays.join(', ')}`}
                          {pref.endsOn && ` until ${pref.endsOn}`}
                        </p>
                      )}
                      {pref.note && <p className="text-sm mt-2 italic text-muted-foreground">Note: {pref.note}</p>}
                    </div>
                    <button
                      onClick={() => handleEditPreference(pref)}
                      className="mt-4 self-end px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition ease-in-out duration-150 shadow-md"
                    >
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddPreference}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition ease-in-out duration-150"
              >
                + Add New Detailed Preference
              </button>
              <button
                onClick={handleResetAllFuture}
                className="flex-1 px-6 py-3 bg-destructive text-destructive-foreground font-semibold rounded-lg shadow-md hover:bg-destructive/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition ease-in-out duration-150"
              >
                Reset All Future Detailed Preferences
              </button>
            </div>
          </div>
        </div>

        {/* --- Availability Form Modal --- */}
        {isModalOpen && (
          <AvailabilityFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSavePreference}
            onDelete={handleDeletePreference}
            initialData={editingPreference}
            selectedDate={selectedDate}
          />
        )}
      </div>
    </div>
  );
}

// AvailabilityFormModal Component (Full-screen modal)
const AvailabilityFormModal = ({ isOpen, onClose, onSave, onDelete, initialData, selectedDate }) => {
  const [preferenceType, setPreferenceType] = useState('unavailable');
  const [allDay, setAllDay] = useState(true);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const [repeating, setRepeating] = useState(false);
  const [repeatFrequency, setRepeatFrequency] = useState('week'); // 'day', 'week', '2weeks'
  const [repeatDays, setRepeatDays] = useState([]); // e.g., ['Monday', 'Wednesday']
  const [endsOn, setEndsOn] = useState(''); //YYYY-MM-DD
  const [note, setNote] = useState('');

  const daysOfWeekFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    // Populate form if editing an existing preference
    if (initialData) {
      setPreferenceType(initialData.type);
      setAllDay(initialData.allDay || false);
      setStartTime(initialData.startTime || '09:00');
      setEndTime(initialData.endTime || '17:00');
      setRepeating(initialData.repeating || false);
      setRepeatFrequency(initialData.repeatFrequency || 'week');
      setRepeatDays(initialData.repeatDays || []);
      setEndsOn(initialData.endsOn || '');
      setNote(initialData.note || '');
    } else {
      // Reset form for new preference
      setPreferenceType('unavailable');
      setAllDay(true);
      setStartTime('09:00');
      setEndTime('17:00');
      setRepeating(false);
      setRepeatFrequency('week');
      setRepeatDays([]);
      setEndsOn('');
      setNote('');
    }
  }, [initialData]);

  const handleRepeatDayToggle = (day) => {
    setRepeatDays(prevDays =>
      prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
    );
  };

  // Generates time options for select inputs (e.g., "00:00", "00:30", etc.)
  const generateTimeOptions = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hour = h.toString().padStart(2, '0');
        const minute = m.toString().padStart(2, '0');
        times.push(`${hour}:${minute}`);
      }
    }
    return times;
  };

  const handleSave = () => {
    // Basic validation
    if (!allDay && (startTime >= endTime)) {
      alert("End time must be after start time.");
      return;
    }
    if (repeating && repeatFrequency !== 'day' && repeatDays.length === 0) {
      alert("Please select at least one day for weekly/bi-weekly repeats.");
      return;
    }

    const newPreference = {
      id: initialData ? initialData.id : null, // Keep ID if editing
      type: preferenceType,
      allDay: allDay,
      startTime: allDay ? null : startTime,
      endTime: allDay ? null : endTime,
      repeating: repeating,
      repeatFrequency: repeating ? repeatFrequency : null,
      repeatDays: repeating && repeatFrequency !== 'day' ? repeatDays : [],
      endsOn: repeating ? endsOn : null,
      note: note,
    };
    onSave(newPreference);
  };

  const handleDelete = () => {
    if (initialData && window.confirm("Are you sure you want to delete this availability preference?")) {
      onDelete(initialData.id);
    }
  };

  if (!isOpen) return null; // Don't render if modal is not open

  return (
    // Modal background overlay
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
      {/* Modal content container using shadcn card colors and border */}
      <div className="rounded-lg shadow-xl w-full max-w-lg flex flex-col max-h-[90vh] overflow-hidden transition-colors duration-300 bg-card border border-border text-card-foreground">
        
        {/* Modal Header using shadcn muted background and border */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b transition-colors duration-300 bg-muted border-border">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            {initialData ? 'Edit Detailed Availability' : 'Add New Detailed Availability'} for {selectedDate.toDateString()}
          </h2>
          <button onClick={onClose} className="text-2xl leading-none text-muted-foreground hover:text-foreground">
            &times;
          </button>
        </div>

        {/* Modal Body (Form) */}
        <div className="p-4 sm:p-6 flex-grow overflow-y-auto">
          {/* Preference Type */}
          <div className="mb-5">
            <label className="block text-sm font-bold mb-2 text-foreground">Preference Type:</label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="unavailable"
                  checked={preferenceType === 'unavailable'}
                  onChange={() => setPreferenceType('unavailable')}
                  className="form-radio h-4 w-4 text-destructive rounded border-border bg-input"
                />
                <span className="ml-2 text-foreground">Unavailable to work</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="preferred"
                  checked={preferenceType === 'preferred'}
                  onChange={() => setPreferenceType('preferred')}
                  className="form-radio h-4 w-4 text-primary rounded border-border bg-input"
                />
                <span className="ml-2 text-foreground">Prefer to work</span>
              </label>
            </div>
          </div>

          {/* Time */}
          <div className="mb-5">
            <label className="block text-sm font-bold mb-2 text-foreground">Time:</label>
            <label className="inline-flex items-center mb-3">
              <input
                type="checkbox"
                checked={allDay}
                onChange={(e) => setAllDay(e.target.checked)}
                className="form-checkbox h-4 w-4 text-primary rounded border-border bg-input"
              />
              <span className="ml-2 text-foreground">All Day</span>
            </label>
            {!allDay && (
              <div className="flex items-center gap-3">
                <select
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="block w-full p-2 rounded-md shadow-sm focus:ring-ring focus:border-ring sm:text-sm bg-input border border-border text-foreground"
                >
                  {generateTimeOptions().map(time => (
                    <option key={time} value={time} className="bg-background text-foreground">{time}</option>
                  ))}
                </select>
                <span className="text-foreground">to</span>
                <select
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="block w-full p-2 rounded-md shadow-sm focus:ring-ring focus:border-ring sm:text-sm bg-input border border-border text-foreground"
                >
                  {generateTimeOptions().map(time => (
                    <option key={time} value={time} className="bg-background text-foreground">{time}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Repeats */}
          <div className="mb-5">
            <label className="block text-sm font-bold mb-2 text-foreground">Repeats:</label>
            <label className="inline-flex items-center mb-3">
              <input
                type="checkbox"
                checked={repeating}
                onChange={(e) => setRepeating(e.target.checked)}
                className="form-checkbox h-4 w-4 text-primary rounded border-border bg-input"
              />
              <span className="ml-2 text-foreground">Enable repeating</span>
            </label>
            {repeating && (
              <>
                <div className="flex flex-wrap gap-4 mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="day"
                      checked={repeatFrequency === 'day'}
                      onChange={() => setRepeatFrequency('day')}
                      className="form-radio h-4 w-4 text-primary border-border bg-input"
                    />
                    <span className="ml-2 text-foreground">Every Day</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="week"
                      checked={repeatFrequency === 'week'}
                      onChange={() => setRepeatFrequency('week')}
                      className="form-radio h-4 w-4 text-primary border-border bg-input"
                    />
                    <span className="ml-2 text-foreground">Every Week</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="2weeks"
                      checked={repeatFrequency === '2weeks'}
                      onChange={() => setRepeatFrequency('2weeks')}
                      className="form-radio h-4 w-4 text-primary border-border bg-input"
                    />
                    <span className="ml-2 text-foreground">Every 2 Weeks</span>
                  </label>
                </div>
                {repeatFrequency !== 'day' && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {daysOfWeekFull.map(day => (
                      <button
                        key={day}
                        onClick={() => handleRepeatDayToggle(day)}
                        className={`px-3 py-1 rounded-full text-sm font-medium border transition ease-in-out duration-150 ${repeatDays.includes(day)
                            ? 'bg-primary text-primary-foreground border-primary' // Selected
                            : 'bg-muted text-muted-foreground border-border hover:bg-accent' // Unselected
                          }
                        `}
                      >
                        {day.substring(0, 3)}
                      </button>
                    ))}
                  </div>
                )}
                <div className="mb-4">
                  <label htmlFor="endsOn" className="block text-sm font-bold mb-2 text-foreground">Ends On (optional):</label>
                  <input
                    type="date"
                    id="endsOn"
                    value={endsOn}
                    onChange={(e) => setEndsOn(e.target.value)}
                    className="block w-full p-2 rounded-md shadow-sm focus:ring-ring focus:border-ring sm:text-sm bg-input border border-border text-foreground"
                  />
                </div>
              </>
            )}
          </div>

          {/* Note */}
          <div className="mb-5">
            <label htmlFor="note" className="block text-sm font-bold mb-2 text-foreground">Note (optional):</label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows="3"
              placeholder="Add a note about this availability"
              className="block w-full p-2 rounded-md shadow-sm focus:ring-ring focus:border-ring sm:text-sm resize-y bg-input border border-border text-foreground placeholder-muted-foreground"
            ></textarea>
          </div>
        </div>

        {/* Modal Footer (Buttons) */}
        <div className="flex justify-end p-4 sm:p-6 border-t gap-3 transition-colors duration-300 bg-muted border-border">
          {initialData && (
            <button
              onClick={handleDelete}
              className="px-5 py-2 bg-destructive text-destructive-foreground font-semibold rounded-md hover:bg-destructive/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition ease-in-out duration-150 mr-auto shadow-md"
            >
              Delete
            </button>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition ease-in-out duration-150 shadow-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition ease-in-out duration-150 shadow-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};