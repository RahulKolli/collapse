// page.js
import HeroSection from "@/components/hero-section";
import Login from "@/components/login";
import Signin from "@/components/sign-up-one"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Login />
      <Signin />
    </>
  );
}