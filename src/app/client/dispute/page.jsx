
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
className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"            />
            {attachment && (
              <p className="text-xs text-muted-foreground mt-1">Selected file: {attachment.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors">
            Submit Dispute
          </button>
        </form>
      </div>
    </div>
  );
}
