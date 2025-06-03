'use client';

export default function AcceptAndBookTalent() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md dark:shadow-none">
      <h1 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">
        Accept & Book Talent
      </h1>

      <div className="mb-6 border rounded-xl p-4 bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700">
        <h2 className="text-lg font-medium mb-2 text-zinc-800 dark:text-zinc-100">Proposal Summary</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          <strong className="text-zinc-800 dark:text-zinc-200">Talent:</strong> Rama Krishna
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          <strong className="text-zinc-800 dark:text-zinc-200">Project:</strong> Social Media Campaign
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          <strong className="text-zinc-800 dark:text-zinc-200">Price:</strong> ₹50,000
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          <strong className="text-zinc-800 dark:text-zinc-200">Timeline:</strong> 3 weeks
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          <strong className="text-zinc-800 dark:text-zinc-200">Deliverables:</strong> 5 Reels, 1 Carousel, 1 Story Pack
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-zinc-700 dark:text-zinc-200">Payment Mode</label>
          <select className="w-full border p-2 rounded-md bg-white dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600">
            <option>Escrow</option>
            <option>Upfront</option>
            <option>50-50 Split</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-zinc-700 dark:text-zinc-200">Confirm Booking Terms</label>
          <textarea
            className="w-full p-2 border rounded-md bg-white dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600"
            rows={3}
            placeholder="Add any special instructions or terms..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
        >
          Accept & Book Talent
        </button>
      </form>
    </div>
  );
}
