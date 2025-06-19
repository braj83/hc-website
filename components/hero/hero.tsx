import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import LogoCloud from "../logo-cloud";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      
      {/* 1. Blurred Full-Screen Background Image */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-xl">
        <Image
          src="/chatbot-hero.webp" // This is your blurred background
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Main content container using Flexbox */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        
        {/* 2. Text Content Block (on top) */}
        <div className="relative z-10 text-center lg:text-left max-w-2xl">
          <Badge className="bg-primary rounded-md py-1 border-none">
            v1.0.0 is available now! 🚀
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Build and deploy Healthcare AI apps that create value and solve problems
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            HealthCloud is a development platform that empowers you to quickly and responsibly implement custom AI solutions integrated with your data and existing tech stack.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4 lg:justify-start">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base"
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>

        {/* 3. Medium Image Block (behind text, pulled left for overlap) */}
        <div className="relative z-0 lg:-ml-20">
          <Image
            src="/your-medium-image.png" // IMPORTANT: Replace with your image file name
            alt="Healthcare AI illustration"
            width={500}  // Adjust width as needed
            height={500} // Adjust height as needed
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Logo Cloud at the bottom */}
      <LogoCloud className="mt-24 max-w-3xl mx-auto relative z-10" />
    </div>
  );
};

export default Hero;