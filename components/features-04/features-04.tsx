"use client";
import { useState, useEffect  } from "react";
import Image from "next/image";
import { useAnimate, type AnimationSequence } from "motion/react";
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
import Link from 'next/link';

const features = [
  {
    icon: Blocks,
    title: "Build faster with our Component library",
    description:
      "Explore a wide range of pre-built modules that help you launch Healthcare AI applications faster and with less effort than ever before.",
    cta: "Explore Library",
    media: (
      <div className="w-full h-full relative">
        <Image
        src="/cute-robot-bring-box.png"
        alt="A visual of the healthcare AI component library"
        width={1200}
        height={800}
        className="w-full h-full object-contain rounded-xl"
        />
        <Button className="absolute bottom-6 right-6">Explore Library</Button>
      </div>
    ),
  },
  {
    icon: Bot,
    title: "Build smarter with best-in-class AI models",
    description:
      "Use our curated library of models trained on clinical, financial, and operational data—or plug in your own.",
    cta: "See AI Models",
    media: (
      <div className="w-full h-full relative">
        <Image
        src="/cute-robot-with-badge.png"
        alt="A visual of the healthcare AI component library"
        width={1200}
        height={800}
        className="w-full h-full object-contain rounded-xl"
        />
        <Button className="absolute bottom-6 right-6">See AI Models</Button>
      </div>
    ),
  },
  {
    icon: PaintbrushVertical,
    title: "Build easier with our Healthcare AI Studio",
    description:
      "Combine LLMs, specialized models, app functions, API connectors, and your data to create custom solutions that reduce costs, increase access, and improve patient outcomes.",
    cta: "Open the Studio",
    media: (
      <div className="w-full h-full relative">
        <Image
        src="/cute-robot-with-creative-idea.png"
        alt="A visual of the healthcare AI component library"
        width={1200}
        height={800}
        className="w-full h-full object-contain rounded-xl"
        />
        <Button className="absolute bottom-6 right-6">Open the Studio</Button>
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
      <div className="w-full h-full relative">
        <Image
        src="/cute-robot-with-puzzle.png"
        alt="A visual of the healthcare AI component library"
        width={1200}
        height={800}
        className="w-full h-full object-contain rounded-xl"
        />
        <Button className="absolute bottom-6 right-6">View Integrations</Button>
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
      <div className="w-full h-full relative">
        <Image
        src="/cute-robot-open-the-box.png"
        alt="A visual of the healthcare AI component library"
        width={1200}
        height={800}
        className="w-full h-full object-contain rounded-xl"
        />
        <Button className="absolute bottom-6 right-6">Learn About Security</Button>
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
      <div className="w-full h-full relative">
        <Image
        src="/cute-robot-reading-book.png"
        alt="A visual of the healthcare AI component library"
        width={1200}
        height={800}
        className="w-full h-full object-contain rounded-xl"
        />
        <Link href="/knowledgebase">
        <Button className="absolute bottom-6 right-6">Explore Knowledgebase</Button>
        </Link>
      </div>
    ),
  },
];

const Features04Page = () => {
  const [activeItem, setActiveItem] = useState("item-0");
  const [scope, animate] = useAnimate();
  const activeFeature = features.find(
    (_, index) => `item-${index}` === activeItem
  );
  useEffect(() => {
    if (!scope.current) return;
    const animationSequence: AnimationSequence = [
      [scope.current, { opacity: 0, y: "1rem" }, { duration: 0 }],
      [scope.current, { opacity: 1, y: "0rem" }, { duration: 0.5, ease: "easeOut" }],
    ] as const;
    animate(animationSequence);
  }, [activeFeature]);

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
              {features.map(({ title, description, icon: Icon, media }, index) => (
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
                        <div className="w-full h-[45vh] rounded-xl mb-4">
                          {media}
                        </div>
                      </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div ref={scope} className="hidden md:block w-full h-full rounded-xl relative">
            {activeFeature ? activeFeature.media : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features04Page;