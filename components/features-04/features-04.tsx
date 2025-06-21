import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  },
  {
    icon: Bot,
    title: "Build smarter with best-in-class AI models",
    description:
      "Use our curated library of models trained on clinical, financial, and operational data—or plug in your own.",
  },
  {
    icon: PaintbrushVertical,
    title: "Build easier with our Healthcare AI Studio",
    description:
      "Combine LLMs, specialized models, app functions, API connectors, and your data to create custom solutions that that reduce costs, increase access, and improve patient outcomes.",
  },
  {
    icon: PlugZap,
    title: "Seamless integration with your tech stack",
    description:
      "Our “Connector” architecture enables seamless and secure integration with a wide variety of enterprise platforms to ensure that your custom AI solutions are compatible with your existing tech stack.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, compliant, and auditable",
    description:
      "Our platform leverages blockchain technology to enable programmatic enforcement of policies governing data access and human/AI interactions.",
  },
  {
    icon: BookMarked,
    title: "Universal Healthcare Knowledgebase",
    description:
      "Universal Healthcare Knowledgebase and Clinical Data Exchange. A standards-based foundation of clinical, regulatory, and operational data powering safe, accurate, and scalable healthcare AI.",
  },
];

const Features04Page = () => {
  return (
    <div id="platform" className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-12 px-6 lg:px-0">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-lg">
          Build faster with our Platform
        </h2>
        <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
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
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden md:block w-full h-full bg-muted rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Features04Page;
