export default function BrowseProjects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 p-6 text-white">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-semibold">Open Projects</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="Search by tag (e.g., fashion, tech)"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Search by location"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-semibold">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 space-y-3 hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold">Brand Collaboration #{i + 1}</h2>
              <p className="text-sm text-gray-300">
                Looking for lifestyle creators to promote our eco-friendly fashion line.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                <span className="bg-white/10 px-2 py-1 rounded">#fashion</span>
                <span className="bg-white/10 px-2 py-1 rounded">#eco</span>
                <span className="bg-white/10 px-2 py-1 rounded">Delhi</span>
              </div>
              <button className="mt-2 text-purple-400 hover:text-purple-200 text-sm font-medium">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
