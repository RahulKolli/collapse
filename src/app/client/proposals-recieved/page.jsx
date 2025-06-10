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
      <h1 className="text-2xl font-bold mb-8">Received Proposals</h1>
      <div className="space-y-6">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="p-6 bg-card border border-border rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{proposal.name}</h2>
                <p className="text-sm text-muted-foreground">{proposal.role} from {proposal.city}</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                <p><span className="font-medium">Bid:</span> <span className="text-primary font-semibold">{proposal.bidAmount}</span></p>
                <p><span className="font-medium">Submitted:</span> {proposal.submittedOn}</p>
              </div>
            </div>
            <p className="text-foreground/90 text-sm mb-5">{proposal.coverLetter}</p>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition">View Full Proposal</button>
              <button className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Accept</button>
              <button className="px-5 py-2 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
