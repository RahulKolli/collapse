export default function TalentRegister() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center p-6">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 w-full max-w-lg shadow-2xl space-y-6 text-white">
        <h1 className="text-3xl font-semibold text-center">Talent Registration</h1>
        <p className="text-sm text-center text-gray-300">Join our platform and verify your identity</p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">KYC Document Upload</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer"
            />
            <p className="text-xs text-gray-400 mt-1">Accepted: PDF, JPG, PNG</p>
          </div>

          <button
            type="button"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-3 rounded-lg font-semibold text-white"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
