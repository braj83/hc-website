// components/navbar/logo.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LogoLight } from "./logo_light";
import { LogoDark } from "./logo_dark";

export const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When the component mounts, we set the mounted state to true
  useEffect(() => {
    setMounted(true);
  }, []);

  // Before the component has mounted, we don't render anything to avoid a flash of the wrong theme
  if (!mounted) {
    return null;
  }

  // Once mounted, we render the correct logo based on the current theme
  return theme === "dark" ? <LogoDark /> : <LogoLight />;
};