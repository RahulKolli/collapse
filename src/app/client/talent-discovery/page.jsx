export default function TalentDiscovery() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-8 md:py-12">
      <h1 className="text-2xl mb-6 font-bold ">Discover Talents</h1>

      {/* Filters */}
      <div className="bg-card border border-border rounded-2xl p-4 md:p-6 mb-8 md:mb-10 shadow-sm flex gap-3 flex-nowrap overflow-x-auto scrollbar-hide md:flex-wrap md:overflow-visible md:gap-4 md:items-end">
        <input type="text" placeholder="Search by name or keyword" className="flex-shrink-0 w-full min-w-[180px] max-w-xs px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
        <select className="flex-shrink-0 w-full min-w-[160px] max-w-xs px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition">
          <option>Category</option>
          <option>Photographer</option>
          <option>Video Editor</option>
          <option>Influencer</option>
          <option>Designer</option>
        </select>
        <select className="flex-shrink-0 w-full min-w-[160px] max-w-xs px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition">
          <option>Skills</option>
          <option>Figma</option>
          <option>After Effects</option>
          <option>Final Cut Pro</option>
          <option>Canva</option>
        </select>
        <select className="flex-shrink-0 w-full min-w-[140px] max-w-xs px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition">
          <option>Location</option>
          <option>Remote</option>
          <option>Bangalore</option>
          <option>Mumbai</option>
          <option>Delhi</option>
        </select>
        <select className="flex-shrink-0 w-full min-w-[140px] max-w-xs px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition">
          <option>Experience Level</option>
          <option>Entry</option>
          <option>Mid</option>
          <option>Senior</option>
        </select>
        <select className="flex-shrink-0 w-full min-w-[140px] max-w-xs px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition">
          <option>Availability</option>
          <option>Available Now</option>
          <option>In 1 Week</option>
        </select>
        <div className="flex gap-2 flex-shrink-0 w-full min-w-[200px] max-w-xs">
          <input type="number" placeholder="Min Budget" className="w-1/2 px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
          <input type="number" placeholder="Max Budget" className="w-1/2 px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
        </div>
        <select className="flex-shrink-0 w-full min-w-[140px] max-w-xs px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition">
          <option>Sort by</option>
          <option>Newest</option>
          <option>Highest Rated</option>
        </select>
      </div>

      {/* Talent Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card border border-border rounded-3xl p-5 md:p-7 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden max-w-full">
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary/80 to-secondary/80 w-24 h-24 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition" />
            <div className="flex items-center gap-4 md:gap-5 mb-3 md:mb-4">
              <img src="https://via.placeholder.com/80" alt="Talent" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-primary/40 shadow" />
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition">Ananya Rao</h2>
                <p className="text-xs md:text-sm text-muted-foreground">UI/UX Designer • Bangalore</p>
              </div>
            </div>
            <p className="text-foreground/90 text-sm md:text-base mb-3 md:mb-4">5+ yrs of experience in designing mobile/web interfaces. Skilled in Figma, Sketch, and Adobe XD.</p>
            <div className="flex flex-wrap gap-2 text-xs mb-3 md:mb-4">
              <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium">Figma</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">Prototyping</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Sketch</span>
            </div>
            <div className="flex justify-between items-center text-xs md:text-sm mb-1 md:mb-2">
              <span className="text-green-600 font-semibold">Available Now</span>
              <span className="text-muted-foreground">⭐ 4.8 (35 reviews)</span>
            </div>
            <div className="mt-3 md:mt-4 text-right">
              <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-5 md:px-6 py-2 rounded-xl font-bold shadow hover:from-primary/90 hover:to-secondary/90 transition-all">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
