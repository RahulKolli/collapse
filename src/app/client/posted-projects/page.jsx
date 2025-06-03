const dummyProjects = [
  {
    id: 1,
    title: "Logo Design for Startup",
    category: "Graphic Design",
    location: "Remote",
    budget: "₹5,000",
    status: "Open",
    postedDate: "2025-06-01",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    category: "Marketing",
    location: "Bangalore",
    budget: "₹15,000",
    status: "In Progress",
    postedDate: "2025-05-28",
  },
  {
    id: 3,
    title: "E-commerce Website UI",
    category: "UI/UX Design",
    location: "Remote",
    budget: "₹25,000",
    status: "Completed",
    postedDate: "2025-05-20",
  },
];

export default function PostedProjectsList() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Posted Projects</h2>

      <div className="grid grid-cols-1 gap-4">
        {dummyProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  project.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : project.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-500">{project.category} • {project.location}</p>
            <p className="text-sm text-gray-500 mt-1">Budget: {project.budget}</p>
            <p className="text-sm text-gray-400 mt-1">Posted on: {project.postedDate}</p>
            <div className="text-right mt-4">
              <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
