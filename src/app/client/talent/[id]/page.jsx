export default function AcceptAndBookTalent() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Accept & Book Talent</h1>

        <div className="space-y-6">
          {/* Talent Info */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Talent Details</h2>
            <p className="text-sm text-gray-600">Name: <strong>John Doe</strong></p>
            <p className="text-sm text-gray-600">Proposal Budget: ₹15,000</p>
            <p className="text-sm text-gray-600">Timeline: 7 Days</p>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Payment Method</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none">
              <option value="escrow">Escrow (Recommended)</option>
              <option value="milestone">Milestone-based</option>
              <option value="upfront">Upfront Payment</option>
            </select>
          </div>

          {/* Terms and Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
            <textarea
              rows={4}
              placeholder="You can leave a message with terms or specific instructions..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Booking Button */}
          <div className="text-center pt-2">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
