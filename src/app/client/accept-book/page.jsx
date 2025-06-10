'use client';

export default function AcceptAndBookTalent() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-background rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Accept & Book Talent</h1>

      <div className="mb-8 border border-border rounded-xl p-6 bg-muted/60">
        <h2 className="text-lg font-semibold mb-3 text-foreground">Proposal Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <div><span className="font-medium text-muted-foreground">Talent:</span> <span className="text-foreground">Rama Krishna</span></div>
          <div><span className="font-medium text-muted-foreground">Project:</span> <span className="text-foreground">Social Media Campaign</span></div>
          <div><span className="font-medium text-muted-foreground">Price:</span> <span className="text-primary font-semibold">₹50,000</span></div>
          <div><span className="font-medium text-muted-foreground">Timeline:</span> <span className="text-foreground">3 weeks</span></div>
          <div className="sm:col-span-2"><span className="font-medium text-muted-foreground">Deliverables:</span> <span className="text-foreground">5 Reels, 1 Carousel, 1 Story Pack</span></div>
        </div>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-foreground">Payment Mode</label>
          <select className="w-full border border-border p-3 rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition">
            <option>Escrow</option>
            <option>Upfront</option>
            <option>50-50 Split</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-foreground">Confirm Booking Terms</label>
          <textarea
            className="w-full p-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
            rows={3}
            placeholder="Add any special instructions or terms..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg tracking-wide transition"
        >
          Accept & Book Talent
        </button>
      </form>
    </div>
  );
}
