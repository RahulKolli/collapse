export default function ClientReviewForm() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-10 transition-colors duration-300">
      <div className="w-full max-w-3xl bg-card border border-border rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-foreground">Post Project Review</h1>

        <form className="space-y-6">
          {/* Talent Name */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-foreground">Talent Name</label>
            <input
              type="text"
              value="John Doe"
              readOnly
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-muted-foreground cursor-not-allowed"
            />
          </div>

          {/* Project Title */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-foreground">Project Title</label>
            <input
              type="text"
              value="Social Media Campaign - March 2025"
              readOnly
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-muted-foreground cursor-not-allowed"
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-foreground">Overall Rating</label>
            <select className="w-full px-4 py-3 rounded-lg bg-input border border-input text-foreground">
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
            <label className="block text-sm font-semibold mb-1 text-foreground">Feedback</label>
            <textarea
              rows={4}
              placeholder="Share your experience working with this talent..."
              className="w-full px-4 py-3 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-lg transition duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
