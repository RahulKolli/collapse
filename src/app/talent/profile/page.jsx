'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center p-6">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 w-full max-w-2xl shadow-2xl text-white space-y-6">
        <h1 className="text-3xl font-semibold text-center">Profile Setup</h1>
        <p className="text-sm text-center text-gray-300">Tell us more about yourself</p>

        {/* Profile Picture */}
        <div className="flex justify-center">
          <div className="relative w-28 h-28">
            <img
              src={profileImage || '/default-avatar.png'}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-2 border-white/20"
            />
            <label
              htmlFor="profile-upload"
              className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full cursor-pointer"
            >
              <Camera size={20} className="text-white" />
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

        <form className="space-y-5">
          {/* Bio */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Bio</label>
            <textarea
              rows={4}
              placeholder="Write a short bio about your experience and interests..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Categories</label>
            <select
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-600"
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
            <label className="block mb-1 text-sm text-gray-300">City</label>
            <input
              type="text"
              placeholder="Hyderabad, Mumbai, Delhi..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Skills</label>
            <input
              type="text"
              placeholder="e.g., video editing, photography, public speaking"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <p className="text-xs text-gray-400 mt-1">Comma-separated skills</p>
          </div>

          {/* Save Button */}
          <button
            type="button"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-3 rounded-lg font-semibold text-white"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
