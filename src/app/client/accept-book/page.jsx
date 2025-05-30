export default function AcceptAndBookTalent() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Accept & Book Talent</h1>

      <div className="mb-6 border rounded p-4 bg-gray-50">
        <h2 className="text-lg font-medium mb-2">Proposal Summary</h2>
        <p><strong>Talent:</strong> Rama Krishna</p>
        <p><strong>Project:</strong> Social Media Campaign</p>
        <p><strong>Price:</strong> ₹50,000</p>
        <p><strong>Timeline:</strong> 3 weeks</p>
        <p><strong>Deliverables:</strong> 5 Reels, 1 Carousel, 1 Story Pack</p>
      </div>
      

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Payment Mode</label>
          <select className="w-full border p-2 rounded">
            <option>Escrow</option>
            <option>Upfront</option>
            <option>50-50 Split</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Confirm Booking Terms</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="Add any special instructions or terms..."
          ></textarea>
        </div>

        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          Accept & Book Talent
        </button>
      </form>
    </div>
  );
}
