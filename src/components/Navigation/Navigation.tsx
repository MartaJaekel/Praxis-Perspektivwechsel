import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navigation() {
  return (
    <header className="flex justify-between w-full p-8">
      <h1 className="text-3xl text-gray-800 text-left">
        Praxis <br /> PERSPEKTIVWECHSEL
      </h1>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="https://www.praxis-dritterweg.de/">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">Über mich</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="https://www.praxis-dritterweg.de">
              Therapie
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Kontakt</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Preise</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger className="flex lg:hidden">
          <img src="/svg/menu.svg" height={24} width={24} />
        </SheetTrigger>
        <SheetContent className="bg-[#faebd7] flex flex-col items-center justify-center">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-center space-y-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="https://www.praxis-dritterweg.de/"
                      className="text-lg"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="https://www.praxis-dritterweg.de/"
                      className="text-lg"
                    >
                      Über uns
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="bg-transparent">
                    <NavigationMenuTrigger className="bg-transparent p-0 text-lg">
                      {" "}
                      Angebote
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="https://www.praxis-dritterweg.de/"
                      className="text-lg"
                    >
                      Kosten & Erstattung
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink href="#" className="text-lg">
                      Kontakt
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="https://www.praxis-dritterweg.de"
                      className="text-lg"
                    >
                      Hilfsangebote
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
