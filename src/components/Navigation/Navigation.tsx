"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      router.push(href); 
    }, 300); 
  };

  return (
    <header className="flex justify-between w-full p-8">
      <h1 className="text-[1.5rem] text-gray-800 text-left md:text-3xl lg:text-4xl font-">
        <strong> PRAXIS</strong> <br /> PERSPEKTIVWECHSEL
      </h1>
      <NavigationMenu className="hidden md:hidden lg:flex">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">Über Uns</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/#angebote">Angebote</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/#kontakt">Kontakt</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/#preise">Preise</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex lg:hidden absolute right-3 top-2">
          <img src="/svg/menu.svg" height={30} width={30} alt="menu" />
        </SheetTrigger>
        <SheetContent className="bg-[#d9963e] flex flex-col items-center justify-center">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-center space-y-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      onClick={() => handleLinkClick("/")}
                      className="text-lg text-white">
                    
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      onClick={() => handleLinkClick("/about")}
                   className="text-lg text-white"
                    >
                      Über Uns
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      onClick={() => handleLinkClick("/#angebote")}
                    className="text-lg text-white"
                    >
                      Angebote
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      onClick={() => handleLinkClick("/#kontakt")}
                      className="text-lg text-white"
                    >
                      Kontakt
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      onClick={() => handleLinkClick("/#preise")}
                  className="text-lg text-white"
                    >
                      Preise
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
