// export default function ProjectDetailView() {
//   const project = {
//     title: "E-commerce Website UI Design",
//     client: "XYZ Media Pvt Ltd",
//     location: "Remote",
//     category: "UI/UX Design",
//     budget: "₹25,000",
//     timeline: "June 1 - June 15, 2025",
//     status: "In Progress",
//     deliverables: [
//       "Homepage design",
//       "Product listing page",
//       "Product detail page",
//       "Checkout flow",
//       "Mobile responsiveness",
//     ],
//     description:
//       "We are looking for a talented UI/UX designer to revamp our e-commerce platform with a fresh, modern user interface. The design must be responsive and optimized for mobile and desktop screens.",
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
//       <h1 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
//         <p><span className="font-medium text-gray-700">Client:</span> {project.client}</p>
//         <p><span className="font-medium text-gray-700">Location:</span> {project.location}</p>
//         <p><span className="font-medium text-gray-700">Category:</span> {project.category}</p>
//         <p><span className="font-medium text-gray-700">Budget:</span> {project.budget}</p>
//         <p><span className="font-medium text-gray-700">Timeline:</span> {project.timeline}</p>
//         <p>
//           <span className="font-medium text-gray-700">Status:</span>{" "}
//           <span className={`inline-block px-3 py-1 rounded-full text-white ${
//             project.status === "In Progress" ? "bg-yellow-500" : "bg-green-600"
//           }`}>
//             {project.status}
//           </span>
//         </p>
//       </div>

//       <div className="mt-6">
//         <h2 className="text-lg font-medium text-gray-800 mb-2">Description</h2>
//         <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
//       </div>

//       <div className="mt-6">
//         <h2 className="text-lg font-medium text-gray-800 mb-2">Deliverables</h2>
//         <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
//           {project.deliverables.map((item, idx) => (
//             <li key={idx}>{item}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="mt-6 text-right">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Edit Project
//         </button>
//       </div>
//     </div>
//   );
// }
'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();

  return (
    // Main container: Using shadcn's background and foreground colors.
    // The gradient is approximated by the default background.
    <div className="min-h-screen bg-background p-6 text-foreground">
      {/* Card container: Using shadcn's card background, text, and border colors. */}
      <div className="max-w-4xl mx-auto bg-card backdrop-blur-lg border border-border rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-foreground">Eco-Friendly Fashion Campaign</h1>
        {/* Using muted-foreground for subtle text, foreground for emphasized text */}
        <p className="text-sm text-muted-foreground">Posted by: <span className="text-foreground font-medium">GreenWear</span></p>

        {/* Tags & Location: Using secondary background and foreground for distinct tags */}
        <div className="flex flex-wrap gap-2 text-xs text-secondary-foreground">
          <span className="bg-secondary px-2 py-1 rounded">#fashion</span>
          <span className="bg-secondary px-2 py-1 rounded">#sustainability</span>
          <span className="bg-secondary px-2 py-1 rounded">Location: Delhi</span>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Project Brief</h2>
          {/* Using foreground for main content text */}
          <p className="text-foreground">
            We’re looking for fashion and lifestyle influencers to help us launch our new sustainable clothing line.
            The campaign includes Instagram Reels, a story post, and one carousel post. Influencers must be based in or able to travel to Delhi.
          </p>
        </div>

        {/* Requirements */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Requirements</h2>
          {/* Using foreground for list items */}
          <ul className="list-disc list-inside text-foreground">
            <li>Minimum 10k followers on Instagram</li>
            <li>Experience with fashion-related content</li>
            <li>Deliverables: 1 Reel, 1 Story, 1 Carousel</li>
          </ul>
        </div>

        {/* Budget & Timeline: Using secondary background for these informational cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-secondary border border-border p-4 rounded-lg">
            <h3 className="text-sm text-muted-foreground">Estimated Budget</h3>
            {/* Using primary for important values like budget */}
            <p className="text-lg font-semibold text-primary">₹25,000 - ₹35,000</p>
          </div>
          <div className="bg-secondary border border-border p-4 rounded-lg">
            <h3 className="text-sm text-muted-foreground">Timeline</h3>
            <p className="text-lg font-semibold text-foreground">June 5 - June 20</p>
          </div>
        </div>

        {/* CTA Button: Using shadcn's primary button styles */}
        <div className="text-center pt-6">
          <button
            onClick={() => router.push(`/talent/project/${id}/submit`)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors px-6 py-3 rounded-lg font-semibold"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  );
}