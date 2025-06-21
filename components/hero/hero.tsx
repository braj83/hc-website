import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import Image from 'next/image';

const Hero = () => {
  return (
    // 'relative' and 'overflow-hidden' are still useful for positioning child elements
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">

      {/* Main content container using Flexbox */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        
        {/* Text Content Block (z-10 brings it to the front) */}
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

        {/* Your Image (z-5 places it behind the text) */}
        <div className="relative z-5 mt-12 lg:mt-0 lg:-ml-20">
          <Image
            src="/chatbot-hero.webp"
            alt="Healthcare AI illustration"
            width={450}  // You can adjust this width
            height={450} // You can adjust this height
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;