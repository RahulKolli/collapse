'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Paperclip } from 'lucide-react';

export default function TalentRegister() {
  const [kycFileName, setKycFileName] = useState('');
  const kycInputRef = useRef(null);

  // Handler for KYC file input change
  const handleKycFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setKycFileName(file.name);
    } else {
      setKycFileName('');
    }
  };

  // Handler to trigger the hidden KYC file input click
  const handleKycUploadClick = () => {
    kycInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4
                    bg-background text-foreground
                    relative">

      {/* Card Container - Shadow removed */}
      <Card className="w-full max-w-md mx-auto p-6 md:p-8
                       bg-card rounded-xl {/* Shadow removed here */}
                       transition-colors duration-300 border border-border">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
            Join Our Client Network
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground mt-2 max-w-sm mx-auto">
            Create your profile and take the first step towards new opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName" className="block text-sm font-medium mb-2 text-foreground">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full h-11 px-4 rounded-lg border border-input
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                           focus-visible:ring-offset-background"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@example.com"
                className="w-full h-11 px-4 rounded-lg border border-input
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                           focus-visible:ring-offset-background"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9876543210"
                className="w-full h-11 px-4 rounded-lg border border-input
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                           focus-visible:ring-offset-background"
              />
            </div>

            {/* KYC Upload */}
            <div>
              <Label htmlFor="kycDocument" className="block text-sm font-medium mb-2 text-foreground">KYC Document Upload</Label>
              <div className="flex items-center space-x-3">
                {/* Hidden native file input */}
                <input
                  id="kycDocument"
                  type="file"
                  ref={kycInputRef}
                  onChange={handleKycFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden" // Hide the actual file input
                />
                {/* Custom button to trigger file input */}
                <Button
                  type="button"
                  onClick={handleKycUploadClick}
                  variant="outline"
                  className="flex-shrink-0 flex items-center justify-center h-10 px-4 rounded-md
                             border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <Paperclip className="h-4 w-4 mr-2" /> Choose File
                </Button>
                {/* Display selected file name */}
                {kycFileName ? (
                  <span className="text-sm text-muted-foreground truncate flex-grow">
                    {kycFileName}
                  </span>
                ) : (
                  <span className="text-sm text-muted-foreground flex-grow">No file selected</span>
                )}
              </div>
              <p className="text-xs mt-2 text-muted-foreground">Accepted: PDF, JPG, PNG (Max 5MB)</p>
            </div>

            {/* Submit Button - Shadow removed */}
            <Button
              type="submit"
              className="w-full py-2.5 text-lg font-semibold rounded-lg
                         bg-primary text-primary-foreground
                         hover:bg-primary/90 transition-colors duration-300 ease-in-out
                         focus-visible:ring-2 focus-visible:ring-ring
                         focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Register Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}