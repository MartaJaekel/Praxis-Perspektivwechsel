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

export default function Navigation() {
    return (
    <header className="flex justify-between w-full p-8">
      <h1 className="text-2xl text-gray-800 text-left lg:text-3xl">
        Praxis <br /> PERSPEKTIVWECHSEL
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
            <NavigationMenuLink href="#angebote">Angebote</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#kontakt">Kontakt</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#preise">Preise</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger className="flex lg:hidden absolute right-3 top-2">
          <img src="/svg/menu.svg" height={30} width={30} />
        </SheetTrigger>
        <SheetContent className="bg-[#faebd7] flex flex-col items-center justify-center">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-center space-y-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="text-lg">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/about" className="text-lg">
                      Über uns
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#angebote" className="text-lg">
                      Angebote
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink href="#preise" className="text-lg">
                      Kosten & Erstattung
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink href="#" className="text-lg">
                      Kontakt
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#angebote" className="text-lg">
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
