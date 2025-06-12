// page.js
import Features from "@/components/features-2";
import FeaturesSection from "@/components/features-6";
import FooterSection from "@/components/footer";

import HeroSection from "@/components/hero-section";
import Login from "@/components/login";
import Signin from "@/components/sign-up-one";


export default function Home() {
  return (
    <>
      <HeroSection />

      <Features />
      <FeaturesSection />
      
      <FooterSection />
    </>
  );
}