
'use client';

import { ModeToggle } from '@/components/ui/mode-toggle';

export default function TalentRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300 relative">
      
      {/* ✅ Theme Toggle Button */}
      <div className="absolute top-4 right-4 z-10">
        
      </div>

      {/* ✅ Card Container */}
      <div className="bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 w-full max-w-xl shadow-2xl space-y-5 transition-colors duration-300">
        <h1 className="text-2xl font-semibold text-center">Client Registration</h1>
        <p className="text-xs text-center text-gray-600 dark:text-gray-300">
          Join our platform and verify your identity
        </p>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
            />
          </div>

          {/* KYC Upload */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">KYC Document Upload</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold 
                         file:bg-primary/90 file:text-white hover:file:bg-primary/90 cursor-pointer"
            />
            <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">Accepted: PDF, JPG, PNG</p>
          </div>

          {/* Submit Button */}
          <button
            type="button"
className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-lg transition"          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
