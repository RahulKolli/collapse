export default function ProjectPostingForm() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12 transition-colors">
      <div className="w-full max-w-4xl bg-card border border-border rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Post a New Project</h1>

        <form className="space-y-6">
          {/* Project Title */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-foreground">Project Title</label>
            <input
              type="text"
              placeholder="Social Media Campaign for Product Launch"
              className="w-full px-4 py-3 border border-input rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-foreground">Category</label>
            <select className="w-full px-4 py-3 border border-input rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring">
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
              <label className="block text-sm font-semibold mb-1 text-foreground">Minimum Budget</label>
              <input
                type="number"
                placeholder="₹10,000"
                className="w-full px-4 py-3 border border-input rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-foreground">Maximum Budget</label>
              <input
                type="number"
                placeholder="₹50,000"
                className="w-full px-4 py-3 border border-input rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-foreground">City / Location</label>
            <input
              type="text"
              placeholder="e.g., Bangalore, Mumbai or Remote"
              className="w-full px-4 py-3 border border-input rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-foreground">Project Timeline</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-input rounded-xl bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-foreground">Project Description</label>
            <textarea
              rows={5}
              placeholder="Describe your project goals, deliverables, expectations..."
              className="w-full px-4 py-3 border border-input rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl transition duration-300"
            >
              Post Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
