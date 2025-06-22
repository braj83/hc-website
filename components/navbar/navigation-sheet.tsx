"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { mobileNavConfig } from "./config";
import { Logo } from "./logo";
import { useState } from "react";

export const NavigationSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">Main Menu</SheetTitle>
            <SheetDescription className="sr-only">
              A list of navigation links to sections of the page.
            </SheetDescription>
        </SheetHeader>
        <div onClick={handleLinkClick}>
          <Logo />
        </div>

        <div className="mt-12 text-base space-y-1">
          {mobileNavConfig.map((item) =>
            item.subItems ? (
              <Accordion
                key={item.title}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={item.title} className="border-b-0">
                  <AccordionTrigger className="flex w-full items-center justify-start gap-2 py-2 text-lg font-medium text-foreground hover:no-underline hover:text-primary focus:text-primary">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="mt-2 space-y-3 ml-5 pl-4 border-l">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            onClick={handleLinkClick}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                          >
                            <subItem.icon className="h-5 w-5 mr-2" />
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={item.title}
                href={item.href!}
                onClick={handleLinkClick}
                className="block py-2 text-lg font-medium text-foreground transition-colors hover:text-primary focus:outline-none focus:text-primary"
              >
                {item.title}
              </Link>
            )
          )}
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-8 space-y-4">
          <Button variant="outline" className="w-full">
            Sign In
          </Button>
          <Button className="w-full">Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};