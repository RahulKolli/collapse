export default function PostedProjects() {
  const projects = [
    {
      id: 1,
      title: "Fashion Influencer Campaign",
      postedOn: "May 20, 2025",
      location: "Mumbai",
      status: "Open",
    },
    {
      id: 2,
      title: "YouTube Brand Integration",
      postedOn: "May 15, 2025",
      location: "Remote",
      status: "Closed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Posted Projects</h1>

        <div className="space-y-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                  <p className="text-sm text-gray-600">
                    Posted on {project.postedOn} • Location: {project.location}
                  </p>
                </div>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700">
                  View Details
                </button>
              </div>
              <span
                className={`inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full ${
                  project.status === "Open" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
