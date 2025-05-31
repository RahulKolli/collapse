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
    // Main container using shadcn background and foreground colors.
    // Light mode: bg-background, text-foreground
    // Dark mode: dark:bg-background, dark:text-foreground
    <div className="min-h-screen flex items-center justify-center p-4 bg-background text-foreground transition-colors duration-300 relative">
      
      {/* ✅ ModeToggle positioned at the top-right of the page */}
      <div className="absolute top-4 right-4 z-10">
       
      </div>

      {/* Card container using shadcn card colors and border */}
      {/* Backdrop blur kept for dark mode, assuming desired effect. shadcn's card is typically opaque. */}
      <div className="bg-card border border-border rounded-xl p-6 w-full max-w-xl shadow-2xl space-y-5 transition-colors duration-300 dark:backdrop-blur-lg">
        <h1 className="text-2xl font-semibold text-center text-foreground">Profile Setup</h1>
        <p className="text-xs text-center text-muted-foreground">Tell us more about yourself</p>

        {/* Profile Picture Upload */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
            <img
              src={profileImage || '/default-avatar.png'}
              alt="Profile"
              // Border using shadcn border color
              className="w-full h-full object-cover rounded-full border-2 border-border"
            />
            <label
              htmlFor="profile-upload"
              // Overlay with fixed black transparency for the camera icon
              className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full cursor-pointer"
            >
              <Camera size={18} className="text-white" /> {/* Camera icon remains white for contrast */}
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

        <form className="space-y-4">
          {/* ✅ Profile Name Field */}
          <div>
            <label className="block mb-1 text-sm text-foreground">Profile Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              // Input styling using shadcn input colors
              className="w-full px-3 py-2 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block mb-1 text-sm text-foreground">Bio</label>
            <textarea
              rows={3}
              placeholder="Write a short bio about your experience and interests..."
              // Textarea styling using shadcn input colors
              className="w-full px-3 py-2 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none text-sm"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block mb-1 text-sm text-foreground">Categories</label>
            <select
              // Select styling using shadcn input colors
              className="w-full px-3 py-2 rounded-lg bg-input text-foreground border border-input focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              defaultValue=""
            >
              <option value="" disabled className="bg-background text-muted-foreground">Select a category</option>
              <option value="fashion" className="bg-background text-foreground">Fashion</option>
              <option value="tech" className="bg-background text-foreground">Tech</option>
              <option value="fitness" className="bg-background text-foreground">Fitness</option>
              <option value="food" className="bg-background text-foreground">Food</option>
              <option value="lifestyle" className="bg-background text-foreground">Lifestyle</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block mb-1 text-sm text-foreground">City</label>
            <input
              type="text"
              placeholder="Hyderabad, Mumbai, Delhi..."
              // Input styling using shadcn input colors
              className="w-full px-3 py-2 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-1 text-sm text-foreground">Skills</label>
            <input
              type="text"
              placeholder="e.g., video editing, photography, public speaking"
              // Input styling using shadcn input colors
              className="w-full px-3 py-2 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            />
            <p className="text-xs text-muted-foreground mt-1">Comma-separated skills</p>
          </div>

          {/* Save Button */}
          <button
            type="button"
            // Button styling using shadcn primary colors
            className="w-full bg-primary hover:bg-primary/90 transition-all py-2 rounded-lg font-semibold text-primary-foreground text-sm"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}