'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/ui/mode-toggle';

import {
  Bookmark,
  Share2,
  MapPin,
  Calendar,
  Wallet,
  Target,
  ListChecks,
  Briefcase,
  Megaphone,
  User,
  Mail,
  Phone,
  Tag,
} from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams(); // 'id' will come from the URL, e.g., /talent/project-details/eco-fashion-campaign-123
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Dummy project data - In a real application, this data would be fetched from an API
  // based on the 'id' parameter from the URL.
  const dummyProjects = [
    {
      id: 'eco-fashion-campaign-123',
      title: 'Eco-Friendly Fashion Campaign: Summer Collection',
      brand: 'GreenWear',
      brandLogo: 'https://placehold.co/80x80/60A5FA/FFFFFF/png?text=GW', // Placeholder logo
      campaignHeroImage: 'https://images.unsplash.com/photo-1595066929916-d352136067b5?auto=format&fit=crop&w=1200&q=80', // Hero image for the campaign
      postedBy: 'GreenWear Marketing Team',
      location: 'Remote (Global)',
      tags: ['fashion', 'sustainability', 'eco-friendly', 'clothing', 'lifestyle'],
      brief: 'We are launching our new sustainable summer clothing line and seeking authentic fashion and lifestyle influencers to showcase our commitment to ethical sourcing and eco-conscious production. This campaign aims to raise awareness and drive sales among environmentally-aware consumers.',
      requirements: [
        'Minimum 10k engaged followers on Instagram or 5k subscribers on YouTube.',
        'Proven experience creating high-quality fashion or lifestyle content.',
        'Authentic alignment with sustainable and ethical values.',
        'Strong storytelling ability and clear communication.',
        'Ability to meet strict content submission deadlines.',
      ],
      deliverables: [
        { type: 'Instagram Reel', count: 1, description: '30-60 seconds, showcasing sustainable outfit in daily life.' },
        { type: 'Instagram Story', count: 2, description: '15-second segments, behind-the-scenes or quick style tips, linking to product.' },
        { type: 'Instagram Carousel Post', count: 1, description: '3-5 slides, detailing product features, materials, and sustainability efforts.' },
        { type: 'Optional: YouTube Haul/Styling Video', count: 1, description: '5-8 minutes, in-depth review or styling session (additional compensation).' },
      ],
      targetAudience: 'Fashion-conscious individuals, ages 18-35, interested in sustainable living, ethical consumption, and conscious brands.',
      budget: '₹25,000 - ₹35,000 (negotiable based on reach & deliverables)',
      timeline: 'June 5 - June 20, 2025 (Content submission by June 15)',
      brandContact: {
        name: 'Alex Green',
        email: 'partnerships@greenwear.com',
        phone: '+91 98765 43210',
      },
    },
    {
      id: 'tech-gadget-launch-456',
      title: 'Next-Gen Smartwatch Launch: FutureWear Pro',
      brand: 'FutureTech Innovations',
      brandLogo: 'https://placehold.co/80x80/2C3E50/FFFFFF/png?text=FT',
      campaignHeroImage: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80',
      postedBy: 'FutureTech Marketing',
      location: 'Remote',
      tags: ['tech', 'gadgets', 'smartwatch', 'innovation', 'wearables'],
      brief: 'We are launching our revolutionary new smartwatch, the FutureWear Pro, and seeking tech influencers to create significant buzz. Highlight its cutting-edge features, extended battery life, and advanced health tracking capabilities through engaging video content.',
      requirements: [
        'Minimum 20k subscribers on YouTube or 50k followers on TikTok/Instagram.',
        'Expertise in tech product reviews, unboxing, and demonstrations.',
        'High-quality video production with clear audio.',
        'Ability to explain complex features in an accessible way.',
      ],
      deliverables: [
        { type: 'YouTube Review Video', count: 1, description: '5-8 minutes, in-depth feature review and user experience.' },
        { type: 'Instagram Reel', count: 1, description: '15-30 seconds, quick feature highlight or unboxing snippet.' },
      ],
      targetAudience: 'Tech enthusiasts, early adopters, ages 20-45, interested in wearables, smart devices, and health technology.',
      budget: '₹30,000 - ₹50,000',
      timeline: 'July 1 - July 15, 2025 (Content submission by July 10)',
      brandContact: {
        name: 'Sarah Innovate',
        email: 'collab@futuretech.com',
        phone: null, // No phone contact for this dummy project
      },
    },
  ];

  useEffect(() => {
    // Simulate fetching project data based on the URL 'id'
    const foundProject = dummyProjects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      // Simulate checking bookmark status from local storage
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedProjects') || '[]');
      setIsBookmarked(bookmarks.includes(id));
    } else {
      // If project not found, redirect to a general projects list page
      router.push('/talent/projects');
    }
  }, [id, router]); // Dependencies: re-run when ID or router changes

  // Function to toggle bookmark status
  const handleBookmarkToggle = () => {
    setIsBookmarked(prev => {
      const newBookmarkedState = !prev;
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedProjects') || '[]');
      if (newBookmarkedState) {
        // Add to bookmarks
        localStorage.setItem('bookmarkedProjects', JSON.stringify([...bookmarks, id]));
      } else {
        // Remove from bookmarks
        localStorage.setItem('bookmarkedProjects', JSON.stringify(bookmarks.filter(bId => bId !== id)));
      }
      return newBookmarkedState;
    });
  };

  // Function to share project details using Web Share API or fallback
  const handleShare = async () => {
    if (navigator.share && project) { // Ensure Web Share API is available and project data is loaded
      try {
        await navigator.share({
          title: project.title,
          text: project.brief.substring(0, 100) + '...', // Short description for sharing
          url: window.location.href, // Current page URL
        });
        console.log('Project shared successfully!');
      } catch (error) {
        console.error('Error sharing project:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API (e.g., desktop Chrome)
      // You could implement a custom modal here instead of alert
      alert(`You can share this link: ${window.location.href}`);
    }
  };

  // Show loading state while project data is being fetched
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p>Loading project details...</p>
      </div>
    );
  }

  return (
    // Main container uses Shadcn's background and foreground colors for theme consistency
    <div className="min-h-screen bg-background text-foreground relative">
      {/* ModeToggle positioned at the top-right corner for theme switching */}
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>

      {/* Hero Section: Displays campaign image, brand logo, title, and tags */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
        <Image
          src={project.campaignHeroImage}
          alt={project.title}
          layout="fill" // Makes the image fill its parent container
          objectFit="cover" // Ensures the image covers the area without distortion
          className="transition-transform duration-500 hover:scale-105" // Subtle zoom effect on hover
          unoptimized // Use unoptimized for placeholder images or if domains are not configured in next.config.js
        />
        {/* Gradient overlay for text readability on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl w-full mx-auto text-white"> {/* Text color explicitly white for contrast against dark overlay */}
            <div className="flex items-center gap-3 mb-2">
              {/* Brand Logo */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white">
                <Image
                  src={project.brandLogo}
                  alt={`${project.brand} logo`}
                  layout="fill"
                  objectFit="cover"
                  unoptimized // Remove if you configure image domains
                />
              </div>
              <p className="text-sm sm:text-base font-medium text-white">{project.brand}</p>
            </div>
            {/* Project Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
              {project.title}
            </h1>
            {/* Project Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-primary/80 px-3 py-1 rounded-full text-xs sm:text-sm text-primary-foreground drop-shadow-sm">
                  <Tag className="inline-block w-3 h-3 mr-1 align-middle" />#{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Overlaps the hero section slightly for visual effect */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 -mt-16 sm:-mt-20 lg:-mt-24 relative z-10 bg-background rounded-t-2xl shadow-xl"> {/* Added bg-background and rounded-t-2xl for a clean overlap */}

        {/* Action Buttons: Bookmark, Share, Submit Proposal */}
        <div className="flex justify-end gap-2 sm:gap-3 mb-6">
          <Button variant="outline" size="icon" onClick={handleBookmarkToggle}
                  className={`hover:bg-primary/20 ${isBookmarked ? 'text-primary' : 'text-muted-foreground'}`}>
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </Button>
          <Button variant="outline" size="icon" onClick={handleShare} className="text-muted-foreground hover:bg-primary/20">
              <Share2 className="w-5 h-5" />
          </Button>
          <Button
            onClick={() => router.push(`/talent/project/${id}/submit`)} // Link to proposal submission page
            size="lg"
            className="text-base sm:text-lg"
          >
            Submit Proposal
          </Button>
        </div>

        {/* Key Info Cards: Budget, Timeline, Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-card border border-border p-4 rounded-lg flex items-center gap-3 shadow-sm">
            <Wallet className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <CardDescription className="text-sm text-muted-foreground">Estimated Budget</CardDescription>
              <CardTitle className="text-lg sm:text-xl font-bold text-primary">{project.budget}</CardTitle>
            </div>
          </Card>
          <Card className="bg-card border border-border p-4 rounded-lg flex items-center gap-3 shadow-sm">
            <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <CardDescription className="text-sm text-muted-foreground">Timeline</CardDescription>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground">{project.timeline}</CardTitle>
            </div>
          </Card>
          <Card className="bg-card border border-border p-4 rounded-lg flex items-center gap-3 shadow-sm">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <CardDescription className="text-sm text-muted-foreground">Location</CardDescription>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground">{project.location}</CardTitle>
            </div>
          </Card>
        </div>

        {/* Project Brief Section */}
        <section className="bg-card border border-border rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><Briefcase className="w-5 h-5 text-muted-foreground" /> Project Brief</h2>
          <p className="text-foreground text-sm sm:text-base leading-relaxed">{project.brief}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Target className="w-4 h-4" />
            <p><span className="font-medium text-foreground">Target Audience:</span> {project.targetAudience}</p>
          </div>
        </section>

        <Separator className="my-6" /> {/* Visual separator */}

        {/* Requirements & Deliverables Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border border-border rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><ListChecks className="w-5 h-5 text-muted-foreground" /> Key Requirements</h2>
            <ul className="list-disc list-inside text-foreground space-y-2 text-sm sm:text-base">
              {project.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </Card>
          <Card className="bg-card border border-border rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><Megaphone className="w-5 h-5 text-muted-foreground" /> Deliverables</h2>
            <ul className="list-disc list-inside text-foreground space-y-2 text-sm sm:text-base">
              {project.deliverables.map((del, index) => (
                <li key={index}>
                  <span className="font-medium">{del.count} {del.type}</span>: {del.description}
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <Separator className="my-6" />

        {/* Brand Contact Information Section */}
        <section className="bg-card border border-border rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2"><User className="w-5 h-5 text-muted-foreground" /> Brand Contact</h2>
          <p className="text-foreground text-sm sm:text-base mb-3">
            For further inquiries after expressing interest or submitting your proposal, you can reach out to:
          </p>
          <div className="space-y-2">
            {project.brandContact.name && (
              <div className="flex items-center gap-3 text-foreground">
                <User className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm sm:text-base font-medium">{project.brandContact.name}</p>
              </div>
            )}
            <div className="flex items-center gap-3 text-foreground">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <p className="text-sm sm:text-base break-words">Email: <a href={`mailto:${project.brandContact.email}`} className="text-primary hover:underline">{project.brandContact.email}</a></p>
            </div>
            {project.brandContact.phone && (
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm sm:text-base">Phone: <a href={`tel:${project.brandContact.phone}`} className="text-primary hover:underline">{project.brandContact.phone}</a></p>
              </div>
            )}
          </div>
          <p className="text-xs text-muted-foreground italic mt-4">
            Note: This contact information is provided for talent who are seriously considering the project.
          </p>
        </section>

        {/* Final Call to Action Button */}
        <div className="text-center pt-8">
          <Button
            onClick={() => router.push(`/talent/project/${id}/submit`)} // Link to proposal submission page
            size="lg"
            className="text-base sm:text-lg w-full sm:w-auto"
          >
            Submit Proposal
          </Button>
        </div>
      </div>
    </div>
  );
}