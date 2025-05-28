'use client';

import { useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 p-6 text-white flex items-center justify-center">
      <div className="max-w-lg w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 space-y-6 shadow-lg">
        <h1 className="text-3xl font-semibold text-center">Raise a Dispute</h1>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Dispute Type */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Dispute Type <span className="text-red-500">*</span>
            </label>
            <select
              value={disputeType}
              onChange={(e) => setDisputeType(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="" disabled>
                Select a reason
              </option>
              <option value="payment">Payment Issue</option>
              <option value="content">Content Delivery Problem</option>
              <option value="communication">Communication Problem</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain your issue in detail..."
              className="w-full p-4 bg-white/10 border border-white/10 rounded-lg text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Attachment */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">Attachment (optional)</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
              className="block w-full text-sm text-white file:bg-purple-700 file:text-white file:rounded-lg file:px-4 file:py-2 file:border-0"
            />
            {attachment && (
              <p className="text-xs text-gray-400 mt-1">Selected file: {attachment.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold text-white transition-all"
          >
            Submit Dispute
          </button>
        </form>
      </div>
    </div>
  );
}
