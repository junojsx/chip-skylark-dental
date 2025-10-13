import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import Header from "@/components/(landing)/header";
import Hero from "@/components/(landing)/hero";
import HowItWorks from "@/components/(landing)/HowItWorks";
import WhatToAsk from "@/components/(landing)/whattoask";
import CTA from "@/components/(landing)/cta";
import GetPricing from "@/components/(landing)/getpricing";
import FooterPage from "@/components/(landing)/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <GetPricing />
      <CTA />
      <FooterPage />
    </div>
  );
}
