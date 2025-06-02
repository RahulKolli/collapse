
export default function ProjectPostingForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Post a New Project</h1>

        <form className="space-y-6">
          {/* Project Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title</label>
            <input
              type="text"
              placeholder="Social Media Campaign for Product Launch"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Select Category</option>
              <option>Influencer Marketing</option>
              <option>Video Production</option>
              <option>Photography</option>
              <option>Brand Promotion</option>
            </select>
          </div>

          {/* Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Minimum Budget</label>
              <input
                type="number"
                placeholder="₹10,000"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Maximum Budget</label>
              <input
                type="number"
                placeholder="₹50,000"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">City / Location</label>
            <input
              type="text"
              placeholder="e.g., Bangalore, Mumbai or Remote"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Project Timeline</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Project Description</label>
            <textarea
              rows={5}
              placeholder="Describe your project goals, deliverables, expectations..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-300"
            >
              Post Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
