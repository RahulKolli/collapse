"use client";

import React, { useState, useEffect } from 'react';
// import { ModeToggle } from '@/components/ui/mode-toggle'; // Import ModeToggle - keeping this commented as it's not provided

// AvailabilityFormModal Component (Same as before, no changes needed here)
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
        if (!allDay && (startTime >= endTime)) {
            alert("End time must be after start time.");
            return;
        }
        if (repeating && repeatFrequency !== 'day' && repeatDays.length === 0) {
            alert("Please select at least one day for weekly/bi-weekly repeats.");
            return;
        }

        const newPreference = {
            id: initialData ? initialData.id : null,
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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
            <div className="rounded-lg shadow-xl w-full max-w-lg flex flex-col max-h-[90vh] overflow-hidden transition-colors duration-300 bg-card border border-border text-card-foreground">
                <div className="flex justify-between items-center p-4 sm:p-6 border-b transition-colors duration-300 bg-muted border-border">
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                        {initialData ? 'Edit Detailed Availability' : 'Add New Detailed Availability'} for {selectedDate.toDateString()}
                    </h2>
                    <button onClick={onClose} className="text-2xl leading-none text-muted-foreground hover:text-foreground">
                        &times;
                    </button>
                </div>
                <div className="p-4 sm:p-6 flex-grow overflow-y-auto">
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
                                                        ? 'bg-primary text-primary-foreground border-primary'
                                                        : 'bg-muted text-muted-foreground border-border hover:bg-accent'
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
                <div className="flex justify-end p-4 sm:p-6 border-t gap-3 transition-colors duration-300 bg-muted border-border">
                    {initialData && (
                        <button
                            onClick={handleDelete}
                            className="px-3 py-1.5 border border-destructive text-destructive bg-transparent font-normal rounded-md focus:outline-none focus:ring-2 focus:ring-destructive/30 transition"
                        >
                            Delete
                        </button>
                    )}
                    <button
                        onClick={onClose}
                        className="px-3 py-1.5 border border-secondary text-secondary bg-transparent font-normal rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/30 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-3 py-1.5 border border-primary text-primary bg-transparent font-normal rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main WorkPreferences component
export default function WorkPreferences() {
    const [selectedDate, setSelectedDate] = useState(() => {
        // Ensure deterministic date for hydration: use string, not Date object
        if (typeof window !== 'undefined') {
          // On client, use today
          const today = new Date();
          today.setHours(0,0,0,0);
          return today;
        }
        // On server, use a fixed date string (ISO format)
        return new Date('2025-06-09T00:00:00.000Z');
      });
    const [availabilityData, setAvailabilityData] = useState({
        '2025-06-01': [{ id: '1', type: 'unavailable', startTime: '09:00', endTime: '17:00', note: 'Doctor appointment' }],
        '2025-06-05': [{ id: '2', type: 'preferred', startTime: '10:00', endTime: '14:00', note: 'Prefer short shift' }],
        '2025-06-10': [{ id: '3', type: 'unavailable', allDay: true, repeating: true, repeatFrequency: 'week', repeatDays: ['Tuesday'], endsOn: '2025-12-31', note: 'Every Tuesday class' }],
        '2025-07-15': [{ id: '4', type: 'preferred', allDay: true, note: 'Available all day' }],
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPreference, setEditingPreference] = useState(null);

    // States for General Preferences
    const [availableDays, setAvailableDays] = useState([]);
    const [preferredTimeSlot, setPreferredTimeSlot] = useState('');
    const [workTypePreference, setWorkTypePreference] = useState('');
    const [projectPreferences, setProjectPreferences] = useState('');

    // New state to manage active tab: 'general' or 'detailed'
    const [activeTab, setActiveTab] = useState('general'); // Default to General Preferences

    const formatDate = (date) => date.toISOString().split('T')[0];

    const handleAddPreference = () => {
        setEditingPreference(null);
        setIsModalOpen(true);
    };

    const handleEditPreference = (preference) => {
        const preferenceDateKey = Object.keys(availabilityData).find(key =>
            availabilityData[key].some(p => p.id === preference.id)
        );
        if (preferenceDateKey) {
            setSelectedDate(new Date(preferenceDateKey));
        }
        setEditingPreference(preference);
        setIsModalOpen(true);
    };

    const handleSavePreference = (newPreference) => {
        const dateKey = formatDate(selectedDate);
        const currentDayAvailability = availabilityData[dateKey] || [];

        let updatedAvailability;
        if (newPreference.id) {
            updatedAvailability = currentDayAvailability.map(p =>
                p.id === newPreference.id ? newPreference : p
            );
        } else {
            updatedAvailability = [...currentDayAvailability, { ...newPreference, id: Date.now().toString() }];
        }

        setAvailabilityData(prevData => ({
            ...prevData,
            [dateKey]: updatedAvailability,
        }));
        setIsModalOpen(false);
        setEditingPreference(null);
    };

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

    const handleResetAllFuture = () => {
        if (window.confirm("Are you sure you want to delete all future detailed availability preferences? This cannot be undone.")) {
            const todayKey = formatDate(new Date());
            const updatedData = {};
            for (const date in availabilityData) {
                if (date < todayKey) {
                    updatedData[date] = availabilityData[date];
                }
            }
            setAvailabilityData(updatedData);
        }
    };

    const preferencesForSelectedDate = availabilityData[formatDate(selectedDate)] || [];

    const handleDayToggle = (day) => {
        setAvailableDays(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    const handleSaveGeneralPreferences = () => {
        console.log("Saving General Preferences:", {
            availableDays,
            preferredTimeSlot,
            workTypePreference,
            projectPreferences,
        });
        alert("General preferences saved!");
    };

    return (
        <div className="min-h-screen flex justify-center p-6 font-sans transition-colors duration-300 bg-background text-foreground">
            <div className="absolute top-4 right-4 z-10">
                {/* <ModeToggle /> */}
            </div>

            <div className="rounded-2xl p-6 sm:p-8 w-full max-w-4xl space-y-6 relative transition-colors duration-300 bg-card text-card-foreground dark:backdrop-blur-lg">
                <h1 className="text-2xl font-bold mb-6">Availability & Preferences</h1>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">Let us know when you're free and what work you prefer</p>

                {/* --- Tab Navigation --- */}
                <div className="flex gap-2 mb-6 border-b border-border">
                  <button
                    onClick={() => setActiveTab('general')}
                    className={`py-3 px-6 text-lg font-medium transition-colors duration-200 rounded-t-md border border-b-0 focus:outline-none focus:ring-2 focus:ring-primary/30
                      ${activeTab === 'general'
                        ? 'bg-primary text-primary-foreground border-primary z-10'
                        : 'bg-muted text-muted-foreground border-border hover:bg-accent'}
                    `}
                    type="button"
                    style={{ marginBottom: '-1px' }}
                  >
                    General Preferences
                  </button>
                  <button
                    onClick={() => setActiveTab('detailed')}
                    className={`py-3 px-6 text-lg font-medium transition-colors duration-200 rounded-t-md border border-b-0 focus:outline-none focus:ring-2 focus:ring-primary/30
                      ${activeTab === 'detailed'
                        ? 'bg-primary text-primary-foreground border-primary z-10'
                        : 'bg-muted text-muted-foreground border-border hover:bg-accent'}
                    `}
                    type="button"
                    style={{ marginBottom: '-1px' }}
                  >
                    Detailed Availability
                  </button>
                </div>

                {/* --- Tab Content: General Preferences --- */}
                {activeTab === 'general' && (
                    <div className="rounded-xl p-4 sm:p-8 border border-border bg-card shadow-lg animate-fade-in">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">Your General Work Preferences</h2>
                          <p className="text-sm text-muted-foreground">Let us know your preferred days, times, and work types.</p>
                        </div>
                      </div>
                      <form className="space-y-6">
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
                                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg border-primary'
                                    : 'bg-background hover:bg-accent text-foreground border-border'
                                  }`}
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
                              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%234b5563' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
                              background-repeat: no-repeat;
                              background-position: right 0.75rem center;
                              background-size: 0.8rem 0.8rem;
                            }
                            html.dark .custom-select {
                              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
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
                                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg border-primary'
                                    : 'bg-muted hover:bg-accent text-foreground border-border'
                                  }`}
                              >
                                <input
                                  type="radio"
                                  name="workType"
                                  value={type}
                                  checked={workTypePreference === type}
                                  onChange={(e) => setWorkTypePreference(e.target.value || '')}
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
                            value={typeof projectPreferences === 'string' ? projectPreferences : ''}
                            onChange={(e) => setProjectPreferences(e.target.value)}
                            placeholder="e.g., product shoots, brand collaborations, reels"
                            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-input border border-border text-foreground placeholder-muted-foreground"
                          />
                          <p className="text-xs mt-1 text-muted-foreground">Separate multiple preferences with commas</p>
                        </div>
                        {/* Save General Preferences Button */}
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={handleSaveGeneralPreferences}
                            className="px-6 py-3 border border-primary text-primary bg-transparent hover:bg-primary/10 transition-all rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30"
                          >
                            Save General Preferences
                          </button>
                        </div>
                      </form>
                    </div>
                )}

                {/* --- Tab Content: Detailed Availability --- */}
                {activeTab === 'detailed' && (
                    <div className="rounded-xl p-4 sm:p-8 border border-border bg-card shadow-lg animate-fade-in">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">Detailed Availability</h2>
                          <p className="text-sm text-muted-foreground">Set your availability for specific dates and recurring patterns.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                          <label className="block text-base font-medium text-foreground mb-1 sm:mb-0">Select a Date:</label>
                          <input
                            type="date"
                            value={formatDate(selectedDate)}
                            onChange={(e) => setSelectedDate(new Date(e.target.value))}
                            className="w-full sm:w-auto px-4 py-2 rounded-md border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                      </div>

                      <div className="p-4 sm:p-6 rounded-lg shadow-inner bg-muted border border-border dark:backdrop-blur-lg">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 pb-2 border-b text-card-foreground border-border">
                          Availability for {selectedDate.toDateString()}
                        </h3>
                        {preferencesForSelectedDate.length === 0 ? (
                          <p className="text-center py-6 border border-dashed rounded-md mb-6 text-muted-foreground border-border">
                            No detailed preferences set for this day. Click "Add New" to set one.
                          </p>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {preferencesForSelectedDate.map(pref => (
                              <div
                                key={pref.id}
                                className="rounded-lg p-4 shadow-sm flex flex-col justify-between bg-background border border-border"
                              >
                                <div>
                                  <div className={`text-lg font-bold mb-2 ${pref.type === 'unavailable' ? 'text-destructive' : 'text-primary'}`}>
                                    {pref.type === 'unavailable' ? 'Unavailable' : 'Preferred'}
                                  </div>
                                  {pref.allDay ? (
                                    <p className="text-sm text-muted-foreground mb-1">All Day</p>
                                  ) : (
                                    <p className="text-sm text-muted-foreground mb-1">
                                      {pref.startTime} - {pref.endTime}
                                    </p>
                                  )}
                                  {pref.repeating && (
                                    <p className="text-xs text-muted-foreground mb-1">
                                      Repeats: {pref.repeatFrequency === 'day' ? 'Every Day' : `Every ${pref.repeatFrequency === 'week' ? 'Week' : '2 Weeks'}`}
                                      {pref.repeatFrequency !== 'day' && pref.repeatDays.length > 0 && ` on ${pref.repeatDays.map(d => d.substring(0, 3)).join(', ')}`}
                                      {pref.endsOn && ` until ${new Date(pref.endsOn).toDateString()}`}
                                    </p>
                                  )}
                                  {pref.note && (
                                    <p className="text-sm italic text-muted-foreground">"{pref.note}"</p>
                                  )}
                                </div>
                                <button
                                  onClick={() => handleEditPreference(pref)}
                                  className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 self-end"
                                >
                                  Edit
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                          <button
                            onClick={handleAddPreference}
                            className="w-full sm:w-auto px-6 py-3 border border-primary text-primary bg-transparent hover:bg-primary/10 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                          >
                            Add New Preference for {selectedDate.toDateString()}
                          </button>
                          <button
                            onClick={handleResetAllFuture}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-destructive text-destructive bg-transparent hover:bg-destructive/10 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-destructive/30 transition"
                          >
                            Reset All Future
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h1m4 4h-1v-4h1m-5 9h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                )}
            </div>

            {/* AvailabilityFormModal for adding/editing preferences */}
            <AvailabilityFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSavePreference}
                onDelete={handleDeletePreference}
                initialData={editingPreference}
                selectedDate={selectedDate}
            />
        </div>
    );
}