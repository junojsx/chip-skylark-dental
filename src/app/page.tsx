import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatToAsk from "@/components/landing/whattoask";
import CTA from "@/components/landing/cta";
import GetPricing from "@/components/landing/getpricing";
import FooterPage from "@/components/landing/footer";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  if (user) redirect("/dashboard");

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
