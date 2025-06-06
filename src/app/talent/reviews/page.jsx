'use client'

import React from 'react';
// import { ModeToggle } from '@/components/ui/mode-toggle';

export default function RatingsReviewHistory() {
  const reviews = [
    {
      id: 1,
      brand: 'GreenWear',
      rating: 5,
      comment: 'Amazing work, very professional and creative!',
      date: 'May 20, 2025',
      user: 'Alicia M.',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    {
      id: 2,
      brand: 'TechBlitz',
      rating: 4,
      comment: 'Good collaboration but delivery was a bit late.',
      date: 'Apr 15, 2025',
      user: 'Jason L.',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
    {
      id: 3,
      brand: 'FitPro',
      rating: 5,
      comment: 'Excellent engagement and quality content!',
      date: 'Mar 30, 2025',
      user: 'Priya S.',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
  ];

  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 transition-all duration-200 ${
            // Stars: Using primary for filled, muted-foreground for empty.
            i < count ? 'text-primary' : 'text-muted-foreground'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.39 2.462c-.783.57-1.838-.196-1.538-1.118l1.287-3.973a1 1 0 00-.364-1.118L3.605 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
        </svg>
      ));
  };

  return (
    // Main container using shadcn background and foreground colors
    // Light mode: bg-background (white), text-foreground (dark text)
    // Dark mode: dark:bg-background (dark gray/blue), dark:text-foreground (light text)
    <div className="min-h-screen bg-background text-foreground p-6 relative transition-colors duration-300">
      
      {/* ModeToggle positioned at the top-right corner */}
      <div className="absolute top-4 right-4 z-10">
        {/* <ModeToggle /> */}
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6">Ratings & Review History</h1>
        </div>
        {reviews.length === 0 ? (
          // Text for no reviews: Using muted-foreground for secondary text.
          <p className="text-center text-muted-foreground">No reviews yet.</p>
        ) : (
          <ul className="space-y-6">
            {reviews.map(({ id, brand, rating, comment, date, user, avatar }) => (
              <li
                key={id}
                // Review card:
                // Light mode: bg-card (white), border-border (light gray)
                // Dark mode: dark:bg-card (dark background, might be transparent depending on config), dark:border-border
                // Backdrop blur kept for dark mode as per previous request, but note that shadcn's card is typically opaque.
                className="bg-card border border-border rounded-xl p-6 shadow-md transition-all
                           hover:shadow-lg dark:hover:shadow-xl dark:backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={avatar}
                      alt={user}
                      // Avatar border: Using primary color for consistency with shadcn accents.
                      className="w-12 h-12 rounded-full border-2 border-primary shadow"
                    />
                    <div>
                      {/* Brand name: Using foreground for main text */}
                      <h2 className="text-lg font-semibold text-foreground">{brand}</h2>
                      {/* User name: Using muted-foreground for secondary text */}
                      <p className="text-sm text-muted-foreground">{user}</p>
                    </div>
                  </div>
                  <div className="flex">{renderStars(rating)}</div>
                </div>
                {/* Comment text: Using muted-foreground for review content */}
                <p className="text-muted-foreground mb-2">{comment}</p>
                {/* Date text: Using muted-foreground for consistent secondary text */}
                <p className="text-xs text-muted-foreground italic">{date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}