"use client";

import Logo from "@/registry/default/components/navbar-components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Links shown in the navigation menu
const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#analyze", label: "Analyze" },
  { href: "#export", label: "Export" },
];

export default function JourneyNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md px-4 md:px-6">
      <div className="flex h-16 items-center justify-between">
        {/* Left side: Logo and Navigation */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-40 p-2 md:hidden">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="flex-col items-start">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={link.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-white"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo and Desktop Navigation */}
          <a href="#home" className="flex items-center space-x-2">
            <Logo />
            <span className="text-white font-bold text-lg">
              Journey<span className="text-indigo-400">AI</span>
            </span>
          </a>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-4 ml-6">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side: Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="text-sm text-white">
            <a href="#">Sign In</a>
          </Button>
          <Button asChild size="sm" className="text-sm bg-indigo-500 hover:bg-indigo-600 text-white">
            <a href="#">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  )
} 