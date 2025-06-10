const dummyProjects = [
  {
    id: 1,
    title: "Logo Design for Startup",
    category: "Graphic Design",
    location: "Remote",
    minBudget: "₹5,000",
    maxBudget: "₹10,000",
    status: "Open",
    postedDate: "2025-06-01",
    proposals: 3,
    selectedTalent: null,
    timeline: "2025-06-10",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    category: "Marketing",
    location: "Bangalore",
    minBudget: "₹10,000",
    maxBudget: "₹20,000",
    status: "In Progress",
    postedDate: "2025-05-28",
    proposals: 5,
    selectedTalent: "Ananya Rao",
    timeline: "2025-06-15",
  },
  {
    id: 3,
    title: "E-commerce Website UI",
    category: "UI/UX Design",
    location: "Remote",
    minBudget: "₹20,000",
    maxBudget: "₹30,000",
    status: "Completed",
    postedDate: "2025-05-20",
    proposals: 8,
    selectedTalent: "Rohan Mehta",
    timeline: "2025-06-05",
  },
];

export default function PostedProjectsList() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-foreground">Posted Projects</h2>

      <div className="grid grid-cols-1 gap-5">
        {dummyProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col gap-2"
          >
            <div className="flex flex-col gap-1 xs:flex-row xs:justify-between xs:items-center mb-1">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground break-words">{project.title}</h3>
              <span
                className={`mt-1 xs:mt-0 text-xs px-3 py-1 rounded-full font-medium ${
                  project.status === "Open"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                    : project.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-1 text-sm text-muted-foreground">
              <span>{project.category}</span>
              <span>{project.location}</span>
              <span>Budget: {project.minBudget} – {project.maxBudget}</span>
              <span>Timeline: {project.timeline}</span>
              <span>Proposals: {project.proposals}</span>
              <span>{project.selectedTalent ? `Talent: ${project.selectedTalent}` : "Talent Not Yet Selected"}</span>
              <span>Posted: {project.postedDate}</span>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 justify-end items-stretch sm:items-center text-right mt-2 flex-wrap">
              <button className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-xl hover:bg-primary/90 transition w-full sm:w-auto">
                View Details
              </button>
              <button className="text-sm border border-border px-4 py-2 rounded-xl hover:bg-muted transition w-full sm:w-auto">
                View Proposals
              </button>
              {project.status === "In Progress" && (
                <button className="text-sm bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition w-full sm:w-auto">
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
