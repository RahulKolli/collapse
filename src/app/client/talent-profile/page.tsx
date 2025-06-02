export default function TalentProfile() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Talent"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Ananya Rao</h2>
            <p className="text-gray-600 mt-1">UI/UX Designer • Bangalore</p>
            <div className="mt-4">
              <p className="text-gray-700">
                Passionate designer with 5+ years of experience in creating modern and intuitive interfaces. Available for freelance and full-time projects.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Figma</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Sketch</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Prototyping</span>
            </div>
          </div>
        </div>

        <hr className="my-6" />

        <div>
          <h3 className="text-xl font-medium mb-2">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://via.placeholder.com/300x200" alt="Project 1" className="rounded-xl" />
            <img src="https://via.placeholder.com/300x200" alt="Project 2" className="rounded-xl" />
            <img src="https://via.placeholder.com/300x200" alt="Project 3" className="rounded-xl" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-medium mb-2">Contact Info</h3>
          <p className="text-gray-700">Email: ananya.rao@example.com</p>
          <p className="text-gray-700">Phone: +91 98765 43210</p>
        </div>

        <div className="mt-6 text-right">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
