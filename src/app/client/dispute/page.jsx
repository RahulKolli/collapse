// export default function DisputeForm() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Raise a Dispute</h1>

//         <form className="space-y-6">
//           {/* Project Name */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title</label>
//             <input
//               type="text"
//               placeholder="e.g., Influencer Collaboration Campaign"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Talent/Client Name */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">Other Party Name</label>
//             <input
//               type="text"
//               placeholder="e.g., John Doe"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Dispute Reason */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Dispute</label>
//             <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option value="">Select Reason</option>
//               <option value="payment">Payment not received</option>
//               <option value="delivery">Deliverables not met</option>
//               <option value="communication">Poor communication</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">Detailed Description</label>
//             <textarea
//               rows={5}
//               placeholder="Explain the issue clearly. Include important dates, actions taken, and any messages."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             ></textarea>
//           </div>

//           {/* File Upload (optional) */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">Supporting Files (optional)</label>
//             <input
//               type="file"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
//             />
//           </div>

//           {/* Submit */}
//           <div className="text-center pt-2">
//             <button
//               type="submit"
//               className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300"
//             >
//               Submit Dispute
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
// If you intend to use ModeToggle, uncomment the import:
// import { ModeToggle } from '@/components/ui/mode-toggle';

export default function RaiseDisputeForm() {
  const [disputeType, setDisputeType] = useState('');
  const [description, setDescription] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!disputeType || !description) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Dispute submitted successfully!');
  };

  return (
    // Main container using shadcn background and foreground colors.
    // Standard shadcn behavior: light theme by default, dark: applies dark theme.
    <div className="min-h-screen bg-background text-foreground p-6 flex items-center justify-center relative transition-colors duration-300">
      {/* ModeToggle positioned at the top-right corner.
          Uncomment the import above if you want to use it. */}
      <div className="absolute top-4 right-4 z-10">
        {/* <ModeToggle /> */}
      </div>

      {/* Form card using shadcn card colors and border. */}
      {/* Removed backdrop-blur-lg from light mode for consistency with shadcn's opaque card. */}
      {/* Kept dark:backdrop-blur-lg if explicit transparency is desired in dark mode, but shadcn's card is typically opaque. */}
      <div className="max-w-lg w-full bg-card border border-border rounded-2xl p-8 space-y-6 shadow-lg dark:backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-foreground">Raise a Dispute</h1>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Dispute Type */}
          <div>
            <label className="block text-foreground mb-2 font-medium">
              Dispute Type <span className="text-destructive">*</span> {/* Using destructive for required indicator */}
            </label>
            <select
              value={disputeType}
              onChange={(e) => setDisputeType(e.target.value)}
              className="w-full p-3 rounded-lg bg-input border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            >
              <option value="" disabled className="bg-background text-muted-foreground">
                Select a reason
              </option>
              <option value="payment" className="bg-background text-foreground">Payment Issue</option>
              <option value="content" className="bg-background text-foreground">Content Delivery Problem</option>
              <option value="communication" className="bg-background text-foreground">Communication Problem</option>
              <option value="other" className="bg-background text-foreground">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-foreground mb-2 font-medium">
              Description <span className="text-destructive">*</span>
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain your issue in detail..."
              className="w-full p-4 bg-input border border-input rounded-lg text-sm placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
              required
            />
          </div>

          {/* Attachment */}
          <div>
            <label className="block text-foreground mb-2 font-medium">Attachment (optional)</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
              // File input styling for shadcn
              className="block w-full text-sm text-foreground file:bg-primary file:text-primary-foreground file:rounded-lg file:px-4 file:py-2 file:border-0 file:mr-4 file:cursor-pointer hover:file:bg-primary/90"
            />
            {attachment && (
              <p className="text-xs text-muted-foreground mt-1">Selected file: {attachment.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 py-3 rounded-lg font-semibold text-primary-foreground transition-all shadow-md"
          >
            Submit Dispute
          </button>
        </form>
      </div>
    </div>
  );
}