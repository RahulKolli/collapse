'use client';

import { Star, Eye, Heart, MessageCircle } from 'lucide-react';

const talent = {
  id: 3,
  name: 'Tatianamania',
  location: 'Orlando, United States',
  platforms: ['Instagram', 'YouTube', 'Twitter'],
  followers: 80600,
  followersDisplay: '80.6k',
  engagement: 1,
  category: 'Sports & Fitness',
  gender: 'Female (60%)',
  age: '22-42',
  price: 102,
  priceDisplay: '$102',
  views: 110000,
  reviews: {
    average: 4.8,
    count: 25,
  },
  projects: [
    {
      id: 'p1',
      title: '30-Day Fitness Challenge',
      description: 'Hosted a month-long fitness transformation series with daily workout tips.',
      media: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      views: 98000,
      likes: 11200,
      comments: 190,
      year: 2024,
    },
    {
      id: 'p2',
      title: 'Healthy Meal Prep Tutorial',
      description: 'Shared weekly meal prep strategies focusing on clean, protein-rich foods.',
      media: 'https://images.unsplash.com/photo-1606788075762-0e0071c7fe5d?auto=format&fit=crop&w=800&q=80',
      views: 87000,
      likes: 10100,
      comments: 175,
      year: 2024,
    },
    {
      id: 'p3',
      title: 'FitStyle Apparel Promo',
      description: 'Modeled the new activewear collection for FitStyle with workout integrations.',
      media: 'https://images.unsplash.com/photo-1593011952213-7b0ee166553b?auto=format&fit=crop&w=800&q=80',
      views: 75000,
      likes: 8900,
      comments: 120,
      year: 2023,
    },
    {
      id: 'p4',
      title: 'Mindful Morning Series',
      description: 'Demonstrated morning mindfulness and breathing routines to boost wellness.',
      media: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      views: 80000,
      likes: 9700,
      comments: 150,
      year: 2023,
    },
    {
      id: 'p5',
      title: 'Running Tips for Beginners',
      description: 'Introduced safe and effective techniques for those starting their running journey.',
      media: 'https://images.unsplash.com/photo-1571019613915-469b2a91b3d7?auto=format&fit=crop&w=800&q=80',
      views: 94000,
      likes: 11400,
      comments: 210,
      year: 2024,
    },
    {
      id: 'p6',
      title: 'Hydration with AquaFuel',
      description: 'Collaborated with AquaFuel to highlight the importance of hydration in workouts.',
      media: 'https://images.unsplash.com/photo-1622551139993-768adcc6793e?auto=format&fit=crop&w=800&q=80',
      views: 69000,
      likes: 7300,
      comments: 160,
      year: 2024,
    },
  ],
};

export default function TalentPortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">{talent.name}</h1>
          <p className="text-gray-600 mb-1">{talent.location}</p>

          {/* Platforms - stacked links */}
          <div className="flex flex-col gap-1 text-sm text-blue-600 underline">
            {talent.platforms.map((platform) => (
              <a
                key={platform}
                href={`https://www.${platform.toLowerCase()}.com/${talent.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform}
              </a>
            ))}
          </div>
        </header>

        {/* Talent Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-10">
          <div>
            <p className="text-gray-500">Followers</p>
            <p className="font-semibold">{talent.followersDisplay}</p>
          </div>
          <div>
            <p className="text-gray-500">Engagement Rate</p>
            <p className="font-semibold">{talent.engagement}%</p>
          </div>
          <div>
            <p className="text-gray-500">Avg. Reviews</p>
            <p className="font-semibold">★ {talent.reviews.average} ({talent.reviews.count})</p>
          </div>
          <div>
            <p className="text-gray-500">Post Price</p>
            <p className="font-semibold text-blue-600">{talent.priceDisplay}</p>
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-8 text-xs">
          <span className="bg-gray-200 px-2 py-1 rounded">{talent.category}</span>
          <span className="bg-gray-200 px-2 py-1 rounded">{talent.gender}</span>
          <span className="bg-gray-200 px-2 py-1 rounded">Age: {talent.age}</span>
          <span className="bg-gray-200 px-2 py-1 rounded">{talent.location}</span>
        </div>

        {/* Projects Grid */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Latest Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {talent.projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow overflow-hidden">
                <img
                  src={project.media}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                  <p className="text-xs text-gray-400 mb-4">Year: {project.year}</p>

                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {(project.views / 1000).toFixed(1)}k
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {(project.likes / 1000).toFixed(1)}k
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {project.comments}
                    </span>
                  </div>

                  <div className="flex items-center text-xs text-yellow-600">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span className="ml-1">
                      {talent.reviews.average} ({talent.reviews.count} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
