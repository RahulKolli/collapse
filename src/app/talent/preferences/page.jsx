export default function WorkPreferences() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center p-6">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 w-full max-w-3xl shadow-2xl text-white space-y-6">
        <h1 className="text-3xl font-semibold text-center">Availability & Preferences</h1>
        <p className="text-sm text-center text-gray-300">Let us know when you're free and what work you prefer</p>

        <form className="space-y-6">
          {/* Availability Days */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Available Days</label>
            <div className="grid grid-cols-3 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <button
                  key={day}
                  type="button"
                  className="bg-white/10 hover:bg-purple-600 text-white py-2 rounded-lg border border-white/10 text-sm"
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Available Time Slots */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Preferred Time Slots</label>
            <select
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              defaultValue=""
            >
              <option value="" disabled>Select time slot</option>
              <option value="morning">Morning (9am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 4pm)</option>
              <option value="evening">Evening (4pm - 8pm)</option>
              <option value="night">Night (8pm - 11pm)</option>
            </select>
          </div>

          {/* Work Type Preference */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Work Type</label>
            <div className="flex gap-4 flex-wrap">
              {['Remote', 'In-Person', 'Hybrid'].map((type) => (
                <label
                  key={type}
                  className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg text-white hover:bg-purple-600 cursor-pointer"
                >
                  <input type="radio" name="workType" className="hidden" />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Project Preferences */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Project Preferences</label>
            <input
              type="text"
              placeholder="e.g., product shoots, brand collaborations, reels"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <p className="text-xs text-gray-400 mt-1">Separate multiple preferences with commas</p>
          </div>

          {/* Save Button */}
          <button
            type="button"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-3 rounded-lg font-semibold text-white"
          >
            Save Preferences
          </button>
        </form>
      </div>
    </div>
  );
}
