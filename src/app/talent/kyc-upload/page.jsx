'use client';

import { useState } from 'react';
// If you use ModeToggle for theme switching, you'd import it here:
// import { ModeToggle } from '@/components/ui/mode-toggle'; 

export default function KycUploadPage() {
  const [fullName, setFullName] = useState('');
  const [documentType, setDocumentType] = useState('aadhaar');
  const [documentFile, setDocumentFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [message, setMessage] = useState(null); // State for success/error messages
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages
    setErrors({}); // Clear previous errors

    let newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!documentFile) {
      newErrors.documentFile = 'Document file is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage({ type: 'error', text: 'Please correct the errors before submitting.' });
      return;
    }

    setIsLoading(true); // Start loading

    // Simulate an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2-second network delay

      // In a real application, you would send this data to your backend:
      // const formData = new FormData();
      // formData.append('fullName', fullName);
      // formData.append('documentType', documentType);
      // formData.append('documentFile', documentFile);
      // const response = await fetch('/api/kyc-upload', {
      //   method: 'POST',
      //   body: formData,
      // });
      // if (!response.ok) {
      //   throw new Error('KYC submission failed. Please try again.');
      // }
      // const result = await response.json();
      // console.log('KYC submission successful:', result);

      setMessage({ type: 'success', text: 'KYC submitted successfully! We will review your documents shortly.' });
      
      // Optionally reset form after successful submission
      setFullName('');
      setDocumentFile(null);
      // Note: documentType typically keeps its default or can be reset too
      
    } catch (error) {
      console.error('KYC submission error:', error);
      setMessage({ type: 'error', text: error.message || 'An unexpected error occurred during submission. Please try again.' });
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    // Main container using shadcn background and foreground colors
    <div className="min-h-screen bg-background text-foreground p-6 flex items-center justify-center transition-colors duration-300">
      {/* You can place ModeToggle here if you want it on this page */}
      {/* <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div> */}

      {/* Card container using shadcn card colors and border */}
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6 dark:backdrop-blur-md">
        <h2 className="text-3xl font-semibold text-center text-foreground">KYC Verification</h2>

        {/* Message Display */}
        {message && (
          <div className={`p-3 rounded-lg text-center font-medium ${
            message.type === 'success' ? 
              'bg-secondary/10 text-secondary-foreground dark:bg-secondary/30' : // Replaced green with secondary
              'bg-destructive/10 text-destructive dark:bg-destructive/30 dark:text-destructive-foreground'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block mb-2 font-medium text-foreground">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className={`w-full p-3 rounded-lg bg-input border ${errors.fullName ? 'border-destructive' : 'border-input'} 
                         placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Document Type */}
          <div>
            <label htmlFor="documentType" className="block mb-2 font-medium text-foreground">Document Type</label>
            <select
              id="documentType"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="w-full p-3 rounded-lg bg-input border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="aadhaar" className="bg-background text-foreground">Aadhaar</option>
              <option value="pan" className="bg-background text-foreground">PAN</option>
              <option value="passport" className="bg-background text-foreground">Passport</option>
              <option value="driver-license" className="bg-background text-foreground">Driver's License</option>
            </select>
          </div>

          {/* Upload File */}
          <div>
            <label htmlFor="documentFile" className="block mb-2 font-medium text-foreground">Upload Document</label>
            <input
              type="file"
              id="documentFile"
              accept="image/*,application/pdf"
              onChange={(e) => setDocumentFile(e.target.files[0])}
              className={`w-full p-2 bg-input text-foreground rounded-lg border ${errors.documentFile ? 'border-destructive' : 'border-input'}
                         file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 
                         file:text-sm file:font-semibold 
                         file:bg-primary file:text-primary-foreground 
                         hover:file:bg-primary/90`}
            />
            {documentFile && <p className="text-sm text-muted-foreground mt-1">Selected file: {documentFile.name}</p>}
            {errors.documentFile && <p className="text-destructive text-sm mt-1">{errors.documentFile}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 py-3 rounded-lg font-semibold text-primary-foreground transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : 'Submit KYC'}
          </button>
        </form>
      </div>
    </div>
  );
}