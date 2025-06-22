import {
  Blocks,
  Bot,
  Paintbrush,
  PlugZap,
  ShieldCheck,
  BookMarked,
} from "lucide-react";

export const platformMenuItems = [
  {
    title: "Component Library",
    href: "#component-library",
    description:
      "A library of pre-built modules to launch AI applications faster.",
    icon: Blocks,
  },
  {
    title: "Model Library",
    href: "#model-library",
    description:
      "Use our curated library of models trained on clinical and financial data.",
    icon: Bot,
  },
  {
    title: "AI Studio",
    href: "#ai-studio",
    description:
      "Create custom solutions by combining models, functions, and your data.",
    icon: Paintbrush,
  },
  {
    title: "Integrations",
    href: "#integrations",
    description: "Seamless and secure integration with a wide variety of platforms.",
    icon: PlugZap,
  },
  {
    title: "Security",
    href: "#security",
    description:
      "A secure, compliant, and auditable framework for data and AI governance.",
    icon: ShieldCheck,
  },
  {
    title: "Knowledgebase",
    href: "#knowledgebase",
    description:
      "A standards-based foundation of clinical, regulatory, and operational data.",
    icon: BookMarked,
  },
];

// This array will be used by the desktop nav-menu
export const mainNavLinks = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Use Cases",
    href: "#faq",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "News",
    href: "#news",
  },
];

// This array is used by the mobile navigation-sheet
export const mobileNavConfig = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Platform",
    subItems: platformMenuItems,
  },
  {
    title: "Use Cases",
    href: "#faq",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "News",
    href: "#news",
  },
];