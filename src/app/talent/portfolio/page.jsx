export default function PortfolioManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center p-6">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 w-full max-w-5xl shadow-2xl text-white space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Manage Portfolio</h1>
          <button className="bg-purple-600 hover:bg-purple-700 transition-all px-4 py-2 rounded-lg font-semibold text-white">
            Upload New
          </button>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center space-y-2">
          <p className="text-gray-300">Drag & drop files here or click to browse</p>
          <input type="file" accept="image/*,video/*" multiple className="hidden" />
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md text-sm text-white">
            Select Files
          </button>
          <p className="text-xs text-gray-500">Accepted formats: JPG, PNG, MP4</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="relative group bg-white/10 border border-white/10 rounded-lg overflow-hidden"
            >
              <img
                src={`https://source.unsplash.com/random/300x300?sig=${item}`}
                alt="Portfolio Item"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <button className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
