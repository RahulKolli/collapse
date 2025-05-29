'use client'

import React from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';

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
            i < count ? 'text-yellow-400' : 'text-gray-500 dark:text-gray-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.39 2.462c-.783.57-1.838-.196-1.538-1.118l1.287-3.973a1 1 0 00-.364-1.118L3.605 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
        </svg>
      ));
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Ratings & Review History</h1>
          <ModeToggle />
        </div>
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No reviews yet.</p>
        ) : (
          <ul className="space-y-6">
            {reviews.map(({ id, brand, rating, comment, date, user, avatar }) => (
              <li
                key={id}
                className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl p-6 backdrop-blur-md shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={avatar}
                      alt={user}
                      className="w-12 h-12 rounded-full border-2 border-purple-600 shadow"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{brand}</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{user}</p>
                    </div>
                  </div>
                  <div className="flex">{renderStars(rating)}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{comment}</p>
                <p className="text-xs text-gray-500 italic">{date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
