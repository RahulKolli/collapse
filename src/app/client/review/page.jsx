export default function ClientReviewForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Post Project Review</h1>

        <form className="space-y-6">
          {/* Talent Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Talent Name</label>
            <input
              type="text"
              value="John Doe"
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Project Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title</label>
            <input
              type="text"
              value="Social Media Campaign - March 2025"
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Overall Rating</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
              <option value="">Select Rating</option>
              <option value="5">★★★★★ Excellent</option>
              <option value="4">★★★★☆ Good</option>
              <option value="3">★★★☆☆ Average</option>
              <option value="2">★★☆☆☆ Poor</option>
              <option value="1">★☆☆☆☆ Bad</option>
            </select>
          </div>

          {/* Written Feedback */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Feedback</label>
            <textarea
              rows={4}
              placeholder="Share your experience working with this talent..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
