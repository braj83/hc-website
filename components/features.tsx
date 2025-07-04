import {
  Workflow,
  BotMessageSquare,
  Package,
  Webcam,
  HeartPulse,
  FileJson2,
  TestTubes,
  ShieldCheck,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: FileJson2,
    title: "EHR/CRM Integrations",
    description:
      "Design your space with drag-and-drop simplicity—create grids, lists, or galleries in seconds.",
  },
  {
    icon: Workflow,
    title: "Clinical Workflow Automation",
    description:
      "Embed polls, quizzes, or forms to keep your audience engaged.",
  },
  {
    icon: BotMessageSquare,
    title: "Voice Agents",
    description:
      "Generate summaries, auto-format content, or translate into multiple languages seamlessly.",
  },
  {
    icon: Webcam,
    title: "Sync/Async Telehealth",
    description:
      "Connect with Spotify, Instagram, or your own media library for dynamic visuals and sound.",
  },
  {
    icon: TestTubes,
    title: "Reference Lab Integrations",
    description:
      "Track engagement, clicks, and user activity with intuitive charts and reports.",
  },
  {
    icon: ShieldCheck,
    title: "AI Governance and Trust Framework",
    description:
      "Comment, tag, and assign tasks directly within your documents.",
  },
  {
    icon: Package,
    title: "Uber/DoorDash Deliver",
    description:
      "Track engagement, clicks, and user activity with intuitive charts and reports.",
  },
  {
    icon: HeartPulse,
    title: "RPM Automation",
    description:
      "Comment, tag, and assign tasks directly within your documents.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full max-w-screen-xl mx-auto py-16 px-6 xs:py-16 xl:px-0">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Healthcare AI Platform
      </h2>
      <p className="mt-6 max-w-[60ch] text-center mx-auto xs:text-lg text-muted-foreground">
            Modularized platform architecture with high degree of configurability to meet diverse requirements of patients, providers, and payers.
          </p>
      <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col h-full bg-background border rounded-xl p-6"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
