export default function SubmitProposalForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Submit Proposal</h1>

        <form className="space-y-6">
          {/* Project Title (Read-only or pre-filled) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title</label>
            <input
              type="text"
              value="Brand Promo Campaign – June 2025"
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Proposal Summary */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Proposal Summary</label>
            <textarea
              rows={4}
              placeholder="Briefly describe your approach, ideas, and execution plan for this project..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Pricing */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Proposed Budget (INR)</label>
            <input
              type="number"
              placeholder="e.g., 15000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Estimated Timeline (in days)</label>
            <input
              type="number"
              placeholder="e.g., 7"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Attachments (optional)</label>
            <input
              type="file"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300"
            >
              Submit Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
