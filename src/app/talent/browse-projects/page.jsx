'use client';

export default function BrowseProjects() {
  return (
    // Main container using shadcn background and foreground colors
    // Light mode: bg-background (typically light), text-foreground (typically dark)
    // Dark mode: dark:bg-background (typically dark), dark:text-foreground (typically light)
    <div className="min-h-screen bg-background text-foreground p-6 relative">
      
      {/* ModeToggle positioned at the top-right corner of the page */}
      <div className="absolute top-4 right-4 z-10">
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-semibold text-foreground">Open Projects</h1> {/* Uses foreground for heading */}

          {/* Filters section */}
          <div className="flex flex-wrap gap-3">
            {/* Input fields using shadcn input colors */}
            <input
              type="text"
              placeholder="Search by tag (e.g., fashion, tech)"
              className="px-4 py-2 rounded-lg bg-input border border-input placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="text"
              placeholder="Search by location"
              className="px-4 py-2 rounded-lg bg-input border border-input placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {/* Apply Filters button using shadcn primary colors */}
            <button
              className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-semibold text-primary-foreground transition-colors duration-200"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              // Project card styling using shadcn card colors and border
              // backdrop-blur-lg added for dark mode as a specific effect if desired
              className="bg-card border border-border rounded-xl p-5 space-y-3 hover:shadow-xl transition-all text-card-foreground dark:backdrop-blur-lg"
            >
              <h2 className="text-xl font-semibold text-foreground">Brand Collaboration #{i + 1}</h2>
              {/* Description text using shadcn muted-foreground */}
              <p className="text-sm text-muted-foreground">
                Looking for lifestyle creators to promote our eco-friendly fashion line.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {/* Tag styling using shadcn muted colors */}
                <span className="bg-muted px-2 py-1 rounded text-muted-foreground">#fashion</span>
                <span className="bg-muted px-2 py-1 rounded text-muted-foreground">#eco</span>
                <span className="bg-muted px-2 py-1 rounded text-muted-foreground">Delhi</span>
              </div>
              {/* View Details button (link-style) using shadcn primary color */}
              <button
                className="mt-2 text-primary hover:text-primary/90 text-sm font-medium transition-colors duration-200"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}