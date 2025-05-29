export default function ReceivedProposals() {
  const proposals = [
    {
      id: 1,
      creator: "John Doe",
      budget: "₹15,000",
      timeline: "7 days",
      summary: "I will create engaging social media content tailored to your brand...",
    },
    {
      id: 2,
      creator: "Anita Sharma",
      budget: "₹12,500",
      timeline: "5 days",
      summary: "Ready to deliver a high-quality influencer campaign on Instagram and YouTube...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Received Proposals</h1>

        {proposals.length === 0 ? (
          <p className="text-gray-500 text-center">No proposals received yet.</p>
        ) : (
          <div className="space-y-6">
            {proposals.map((proposal) => (
              <div
                key={proposal.id}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{proposal.creator}</h2>
                    <p className="text-sm text-gray-500">{proposal.timeline} • {proposal.budget}</p>
                  </div>
                  <button className="mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm">
                    View Full Proposal
                  </button>
                </div>
                <p className="text-gray-700 mt-3 text-sm">{proposal.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
