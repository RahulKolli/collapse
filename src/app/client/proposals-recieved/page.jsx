export default function ReceivedProposals() {
  const proposals = [
    {
      id: 1,
      name: "Arun Mehta",
      role: "UI/UX Designer",
      city: "Mumbai",
      bidAmount: "₹24,000",
      submittedOn: "May 30, 2025",
      coverLetter:
        "Hi, I’ve reviewed your project requirements. I can deliver a high-quality UI within 10 days. I’ve worked on multiple e-commerce platforms.",
    },
    {
      id: 2,
      name: "Ritika Sharma",
      role: "Frontend Developer",
      city: "Delhi",
      bidAmount: "₹26,500",
      submittedOn: "May 31, 2025",
      coverLetter:
        "I'm confident I can complete your UI with responsive design. Let’s connect to discuss further. I’ve attached samples.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Received Proposals</h1>

      <div className="space-y-6">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="p-5 bg-white shadow-md rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <div>
                <h2 className="text-lg font-medium text-gray-800">{proposal.name}</h2>
                <p className="text-sm text-gray-600">{proposal.role} from {proposal.city}</p>
              </div>
              <div className="text-sm text-gray-700 mt-3 md:mt-0">
                <p><span className="font-medium">Bid:</span> {proposal.bidAmount}</p>
                <p><span className="font-medium">Submitted:</span> {proposal.submittedOn}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">{proposal.coverLetter}</p>

            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Full Proposal</button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Accept</button>
              <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
