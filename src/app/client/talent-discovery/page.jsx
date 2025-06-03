export default function TalentDiscovery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Discover Talents</h1>

      {/* Filters */}
      <div className="grid md:grid-cols-6 gap-4 mb-8">
        <input type="text" placeholder="Search by name or keyword" className="col-span-2 px-4 py-2 border border-gray-300 rounded-lg" />

        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>Category</option>
          <option>Photographer</option>
          <option>Video Editor</option>
          <option>Influencer</option>
          <option>Designer</option>
        </select>

        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>Skills</option>
          <option>Figma</option>
          <option>After Effects</option>
          <option>Final Cut Pro</option>
          <option>Canva</option>
        </select>

        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>Location</option>
          <option>Remote</option>
          <option>Bangalore</option>
          <option>Mumbai</option>
          <option>Delhi</option>
        </select>

        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>Experience Level</option>
          <option>Entry</option>
          <option>Mid</option>
          <option>Senior</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>Availability</option>
          <option>Available Now</option>
          <option>In 1 Week</option>
        </select>

        <div className="flex gap-2">
          <input type="number" placeholder="Min Budget" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          <input type="number" placeholder="Max Budget" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </div>

        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>Sort by</option>
          <option>Newest</option>
          <option>Highest Rated</option>
        </select>
      </div>

      {/* Talent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-2xl p-5 shadow hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-3">
              <img src="https://via.placeholder.com/80" alt="Talent" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Ananya Rao</h2>
                <p className="text-sm text-gray-500">UI/UX Designer • Bangalore</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              5+ yrs of experience in designing mobile/web interfaces. Skilled in Figma, Sketch, and Adobe XD.
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Figma</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Prototyping</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Sketch</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-green-600 font-medium">Available Now</span>
              <span className="text-gray-500">⭐ 4.8 (35 reviews)</span>
            </div>
            <div className="mt-4 text-right">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
