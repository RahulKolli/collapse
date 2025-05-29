export default function DisputeForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Raise a Dispute</h1>

        <form className="space-y-6">
          {/* Project Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title</label>
            <input
              type="text"
              placeholder="e.g., Influencer Collaboration Campaign"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Talent/Client Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Other Party Name</label>
            <input
              type="text"
              placeholder="e.g., John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Dispute Reason */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Dispute</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Reason</option>
              <option value="payment">Payment not received</option>
              <option value="delivery">Deliverables not met</option>
              <option value="communication">Poor communication</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Detailed Description</label>
            <textarea
              rows={5}
              placeholder="Explain the issue clearly. Include important dates, actions taken, and any messages."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* File Upload (optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Supporting Files (optional)</label>
            <input
              type="file"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300"
            >
              Submit Dispute
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
