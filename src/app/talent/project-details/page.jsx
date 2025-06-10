'use client';

import { UserCircle, MapPin, Calendar, Tag } from 'lucide-react';
import Image from "next/image";
import { useParams, useRouter } from 'next/navigation';

export default function TalentProjectDetailsView() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background px-4 text-foreground transition-colors duration-300 relative">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Project Details</h1>
      </div>
      <div className="max-w-3xl mx-auto bg-card rounded-xl p-6 sm:p-10">
        {/* Header with Logo & Title */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 border-b border-border/60 pb-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              {/* Placeholder for logo/avatar */}
              <UserCircle className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Eco-Friendly Fashion Campaign</h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><UserCircle className="w-4 h-4" /> GreenWear</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Delhi</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 py-4 border-b border-border/60 bg-muted/40">
          <span className="inline-flex items-center gap-1 bg-secondary/80 px-3 py-1 rounded-full text-xs font-medium"><Tag className="w-3 h-3" /> fashion</span>
          <span className="inline-flex items-center gap-1 bg-secondary/80 px-3 py-1 rounded-full text-xs font-medium"><Tag className="w-3 h-3" /> sustainability</span>
          <span className="inline-flex items-center gap-1 bg-secondary/80 px-3 py-1 rounded-full text-xs font-medium"><Tag className="w-3 h-3" /> eco-conscious</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8 py-8">
          {/* Project Brief */}
          <section>
            <h3 className="text-lg font-semibold mb-1 text-primary">Project Brief</h3>
            <p className="text-sm text-foreground/90">
              We’re looking for fashion and lifestyle influencers to launch our new sustainable clothing line. The campaign includes Instagram Reels, a story post, and one carousel post. Influencers must be based in or able to travel to Delhi.
            </p>
          </section>

          {/* Requirements */}
          <section>
            <h3 className="text-lg font-semibold mb-1 text-primary">Requirements</h3>
            <ul className="list-disc list-inside text-sm text-foreground/90 space-y-1 pl-4">
              <li>Minimum 10k followers on Instagram</li>
              <li>Experience in fashion content</li>
              <li>Deliverables: 1 Reel, 1 Story, 1 Carousel</li>
            </ul>
          </section>

          {/* Budget & Timeline */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary/60 p-4 rounded-lg flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="font-medium">Budget</span> <span className="hidden md:inline">|</span></span>
              <span className="text-lg font-bold text-primary">₹25,000 - ₹35,000</span>
            </div>
            <div className="bg-secondary/60 p-4 rounded-lg flex flex-col gap-1">
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="w-4 h-4" /> Timeline</span>
              <span className="text-lg font-semibold text-foreground">June 5 – June 20</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
