'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function TalentProfileSetup() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300 relative">
      
      {/* ✅ ModeToggle positioned at the top-right of the page */}
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>

      {/* Card container */}
      <div className="bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 w-full max-w-xl shadow-2xl space-y-5 transition-colors duration-300">
        <h1 className="text-2xl font-semibold text-center">Profile Setup</h1> {/* Decreased text size */}
        <p className="text-xs text-center text-gray-600 dark:text-gray-300">Tell us more about yourself</p> {/* Decreased text size */}

        {/* Profile Picture Upload */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24"> {/* Decreased size */}
            <img
              src={profileImage || '/default-avatar.png'}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-2 border-gray-300 dark:border-white/20"
            />
            <label
              htmlFor="profile-upload"
              className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full cursor-pointer"
            >
              <Camera size={18} className="text-white" /> {/* Decreased icon size */}
              <input
                type="file"
                accept="image/*"
                id="profile-upload"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <form className="space-y-4"> {/* Decreased space between form elements */}

          {/* ✅ Profile Name Field */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Profile Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Bio</label>
            <textarea
              rows={3} // Decreased rows
              placeholder="Write a short bio about your experience and interests..."
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none text-sm" // Decreased padding and text size
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Categories</label>
            <select
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm" // Decreased padding and text size
              defaultValue=""
            >
              <option value="" disabled>Select a category</option>
              <option value="fashion">Fashion</option>
              <option value="tech">Tech</option>
              <option value="fitness">Fitness</option>
              <option value="food">Food</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">City</label>
            <input
              type="text"
              placeholder="Hyderabad, Mumbai, Delhi..."
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm" // Decreased padding and text size
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Skills</label>
            <input
              type="text"
              placeholder="e.g., video editing, photography, public speaking"
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm" // Decreased padding and text size
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Comma-separated skills</p>
          </div>

          {/* Save Button */}
          <button
            type="button"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-2 rounded-lg font-semibold text-white text-sm" // Decreased padding and text size
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
