'use client';

import { Star, Eye, Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image'; // Recommended for Next.js image optimization


// Import Shadcn UI components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const talent = {
  id: 3,
  name: 'Tatianamania',
  location: 'Orlando, United States',
  profileImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=256&q=80',
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
      media: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      views: 87000,
      likes: 10100,
      comments: 175,
      year: 2024,
    },
    {
      id: 'p3',
      title: 'FitStyle Apparel Promo',
      description: 'Modeled the new activewear collection for FitStyle with workout integrations.',
      media: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
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
      media: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      views: 94000,
      likes: 11400,
      comments: 210,
      year: 2024,
    },
    {
      id: 'p6',
      title: 'Hydration with AquaFuel',
      description: 'Collaborated with AquaFuel to highlight the importance of hydration in workouts.',
      media: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      views: 69000,
      likes: 7300,
      comments: 160,
      year: 2024,
    },
  ],
};

export default function TalentPortfolioPage() {
  return (
    <div className="min-h-screen bg-background px-4 text-foreground transition-colors duration-300 relative">
      {/* ModeToggle positioned at the top-right corner */}
      <div className="absolute top-4 right-4 z-10">
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Portfolio Heading */}
        <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
        {/* Header */}
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Profile Image */}
            <Image
              src={talent.profileImage}
              alt={talent.name}
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-border"
              unoptimized
            />
            <div>
              <h1 className="text-xl font-bold">{talent.name}</h1>
              <p className="text-muted-foreground">{talent.location}</p>
            </div>
          </div>

          {/* Platforms - side by side */}
          {/* Changed to use Shadcn primary for links */}
          <div className="flex flex-wrap gap-6 text-sm text-primary underline">
            {talent.platforms.map((platform) => (
              <a
                key={platform}
                href={`https://www.${platform.toLowerCase()}.com/${talent.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary/80" // Slightly darker primary on hover
              >
                {platform}
              </a>
            ))}
          </div>
        </header>

        {/* Talent Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-10">
          {/* Using Shadcn Card component for each info block */}
          <Card className="p-4 flex flex-col justify-between">
            <CardDescription className="text-muted-foreground">Followers</CardDescription>
            <CardContent className="p-0 font-semibold text-xl">{talent.followersDisplay}</CardContent>
          </Card>
          <Card className="p-4 flex flex-col justify-between">
            <CardDescription className="text-muted-foreground">Engagement Rate</CardDescription>
            <CardContent className="p-0 font-semibold text-xl">{talent.engagement}%</CardContent>
          </Card>
          <Card className="p-4 flex flex-col justify-between">
            <CardDescription className="text-muted-foreground">Avg. Reviews</CardDescription>
            <CardContent className="p-0 font-semibold text-xl">
              <span className="flex items-center">
                {/* Star color fixed to yellow, as it's typically an accent that doesn't theme */}
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                {talent.reviews.average} ({talent.reviews.count})
              </span>
            </CardContent>
          </Card>
          <Card className="p-4 flex flex-col justify-between">
            <CardDescription className="text-muted-foreground">Post Price</CardDescription>
            {/* Uses Shadcn primary color for price */}
            <CardContent className="p-0 font-semibold text-xl text-primary">{talent.priceDisplay}</CardContent>
          </Card>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-8 text-xs">
          {/* Using Shadcn secondary colors for tags */}
          <span className="bg-secondary px-2 py-1 rounded text-secondary-foreground">{talent.category}</span>
          <span className="bg-secondary px-2 py-1 rounded text-secondary-foreground">{talent.gender}</span>
          <span className="bg-secondary px-2 py-1 rounded text-secondary-foreground">Age: {talent.age}</span>
          <span className="bg-secondary px-2 py-1 rounded text-secondary-foreground">{talent.location}</span>
        </div>

        {/* Projects Grid */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Latest Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {talent.projects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col h-full"> {/* Ensure cards are same height */}
                <div className="relative w-full h-48">
                    <Image
                      src={project.media}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      unoptimized // Consider removing if you configure image domains
                    />
                </div>
                <CardContent className="p-4 flex-grow">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.description}</p> {/* Uses Shadcn muted-foreground */}
                  <p className="text-xs text-muted-foreground/80 mb-4">Year: {project.year}</p> {/* Muted foreground with opacity */}

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
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
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1">
                      {talent.reviews.average} ({talent.reviews.count} reviews)
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Projects</Button> {/* Shadcn button */}
          </div>
        </section>
      </div>
    </div>
  );
}