import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import { ActionButtons } from "./action-buttons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-20 top-6 inset-x-4 h-16 bg-background/50 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-md">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Link href="/" aria-label="Go to Homepage">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Reusable buttons for screen sizes larger than 'sm' */}
          <div className="hidden sm:flex items-center gap-3">
            <ActionButtons />
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;