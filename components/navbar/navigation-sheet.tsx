"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { platformMenuItems } from "./config";
import { Logo } from "./logo";
import { useState } from "react";

export const NavigationSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />

        <div className="mt-12 text-base space-y-4">
          <Link href="#" onClick={() => setIsOpen(false)}>Home</Link>
          <div>
            <div className="font-bold">Platform</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {platformMenuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <item.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="#faq" onClick={() => setIsOpen(false)}>Use Cases</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link href="#news" onClick={() => setIsOpen(false)}>News</Link>
          {/* ... other mobile links ... */}
        </div>
      </SheetContent>
    </Sheet>
  );
};