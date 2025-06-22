"use client";
import { useEffect } from "react";
import { animate } from "motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, AudioLines } from "lucide-react";
import React from "react";
import Image from 'next/image';

const Hero = () => {
  useEffect(() => {
    animate(
      "#hero-image",
      {
        y: ["0rem", "-0.75rem", "0rem"],
      },
      {
        duration: 8,              // Speed of one full bounce (slower is more subtle)
        repeat: Infinity,         // Loop forever
        ease: "easeInOut",        // Makes the movement smooth and gentle
      }
    );
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="relative z-10 text-center lg:text-left max-w-2xl">
          <Badge className="bg-primary rounded-md py-1 border-none">
            Early access available now! 🚀
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
              Schedule a Demo <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base shadow-none"
            >
              <AudioLines className="!h-5 !w-5" /> Call sample Agent
            </Button>
          </div>
        </div>

        {/* Hero Image (z-5 places it behind the text) */}
        <div className="relative z-5 mt-12 lg:mt-0 lg:-ml-20">
          <Image
            id="hero-image"
            src="/cute-robot-say-hello.png"
            alt="Healthcare AI illustration"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;