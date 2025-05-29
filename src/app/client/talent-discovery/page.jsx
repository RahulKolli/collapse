export default function TalentDiscovery() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Discover Talents</h1>
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <input type="text" placeholder="Search by name" className="p-2 border rounded" />
        <select className="p-2 border rounded">
          <option>Category</option>
          <option>Photographer</option>
          <option>Video Editor</option>
        </select>
        <select className="p-2 border rounded">
          <option>City</option>
          <option>Chennai</option>
          <option>Bangalore</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Filter</button>
      </div>

      {/* Talent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Talent Name</h2>
            <p className="text-sm text-gray-600">Category • Location</p>
            <button className="mt-3 text-blue-600 hover:underline">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}
