import { Button } from "@/components/ui/button";
import Header from "@/components/ui/landing/Header";
import Hero from "@/components/ui/landing/Hero";
import HowItWorks from "@/components/ui/landing/HowItWorks";
import WhatToAsk from "@/components/ui/landing/WhatToAsk";
import PricingSection from "@/components/ui/landing/PricingSection";
import CTA from "@/components/ui/landing/CTA";
import Footer from "@/components/ui/landing/Footer";
import { SignUpButton,SignedIn,SignOutButton,SignedOut } from "@clerk/nextjs";
import Image from "next/image";


export default function Home() {
  return (
   <div className="min-h-screen bg-background">
    <Header/>
    <Hero/>
    <HowItWorks/>
    <WhatToAsk/>
    <PricingSection />
    <CTA/>
    <Footer />

   </div>
  );
}
