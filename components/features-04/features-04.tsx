"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Bot,
  PaintbrushVertical,
  ShieldCheck,
  Blocks,
  PlugZap,
  BookMarked,
} from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Build faster with our Component library",
    description:
      "Explore a wide range of pre-built modules that help you launch Healthcare AI applications faster and with less effort than ever before.",
    cta: "Explore Library",
    media: (
      <Image
        src="/CuteRobotLibrary.png"
        alt="A visual of the Healthcare AI Component Library"
        width={1200}
        height={800}
        className="w-full h-full object-cover rounded-xl"
      />
    ),
  },
  {
    icon: Bot,
    title: "Build smarter with best-in-class AI models",
    description:
      "Use our curated library of models trained on clinical, financial, and operational data—or plug in your own.",
    cta: "See AI Models",
    media: (
      <Image
        src="/CuteRobotIntegrations.png"
        alt="A visual of the Healthcare AI Component Library"
        width={1200}
        height={800}
        className="w-full h-full object-cover rounded-xl"
      />
    ),
  },
  {
    icon: PaintbrushVertical,
    title: "Build easier with our Healthcare AI Studio",
    description:
      "Combine LLMs, specialized models, app functions, API connectors, and your data to create custom solutions that reduce costs, increase access, and improve patient outcomes.",
    cta: "Open the Studio",
    media: (
      <div className="w-full h-full bg-purple-50 rounded-xl flex items-center justify-center p-8 text-purple-900">
        <h3 className="text-2xl font-semibold">Screenshot of AI Studio</h3>
      </div>
    ),
  },
  {
    icon: PlugZap,
    title: "Seamless integration with your tech stack",
    description:
      "Our “Connector” architecture enables seamless and secure integration with a wide variety of enterprise platforms to ensure that your custom AI solutions are compatible with your existing tech stack.",
    cta: "View Integrations",
    media: (
      <div className="w-full h-full bg-orange-50 rounded-xl flex items-center justify-center p-8 text-orange-900">
        <h3 className="text-2xl font-semibold">Integration Logos</h3>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Secure, compliant, and auditable",
    description:
      "Our platform leverages blockchain technology to enable programmatic enforcement of policies governing data access and human/AI interactions.",
    cta: "Learn About Security",
    media: (
      <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center p-8 text-gray-800">
        <h3 className="text-2xl font-semibold">Security & Compliance Visual</h3>
      </div>
    ),
  },
  {
    icon: BookMarked,
    title: "Universal Healthcare Knowledgebase",
    description:
      "Universal Healthcare Knowledgebase and Clinical Data Exchange. A standards-based foundation of clinical, regulatory, and operational data powering safe, accurate, and scalable healthcare AI.",
    cta: "Explore Knowledgebase",
    media: (
      <div className="w-full h-full bg-indigo-50 rounded-xl flex items-center justify-center p-8 text-indigo-900">
        <h3 className="text-2xl font-semibold">Knowledgebase Diagram</h3>
      </div>
    ),
  },
];

const Features04Page = () => {
  const [activeItem, setActiveItem] = useState("item-0");
  const activeFeature = features.find(
    (_, index) => `item-${index}` === activeItem
  );

  return (
    <div id="platform" className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-12 px-6 lg:px-0">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-lg">
          Build faster with our Platform
        </h2>
        <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion
              value={activeItem}
              onValueChange={(value) => value && setActiveItem(value)}
              type="single"
              className="w-full"
            >
              {features.map(({ title, description, icon: Icon, cta, media }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden">
                    <div className="flex items-center gap-4">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    <p>{description}</p>
                      <div className="mt-6 md:hidden">
                        <div className="w-full h-[75vh] rounded-xl mb-4">
                          {media}
                        </div>
                        <div className="flex justify-end">
                          <Button>{cta}</Button>
                        </div>
                      </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden md:block w-full h-full rounded-xl relative">
            {activeFeature ? (
              <>
                {activeFeature.media}
                <Button className="absolute bottom-6 right-6">
                  {activeFeature.cta}
                </Button>
              </>
            ) : (
              <div className="w-full h-full bg-muted rounded-xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features04Page;