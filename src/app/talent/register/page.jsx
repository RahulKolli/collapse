'use client';

import { ModeToggle } from "@/components/ui/mode-toggle";

export default function TalentRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="relative bg-white border border-gray-200 dark:bg-white/10 dark:border-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-lg shadow-2xl space-y-6 transition-colors duration-300">
        
        {/* Mode toggle button */}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <h1 className="text-3xl font-semibold text-center">Talent Registration</h1>
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Join our platform and verify your identity
        </p>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* KYC Upload */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">KYC Document Upload</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Accepted: PDF, JPG, PNG</p>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-3 rounded-lg font-semibold text-white"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
