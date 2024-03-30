import * as React from "react"
import { Link } from "react-router-dom"
import { HoverCards } from '../../Home/Name'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"



export function NotLog() {
  return (
    <NavigationMenu className="flex justify-between px-6 py-2 overflow-x-hidden">
      <NavigationMenuList>
      <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to={"/"}
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mt-2 text-lg font-medium">
                      <HoverCards/>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    It takes just one job to develop a successful relationship that can propel your career forward.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem title="Introduction">
                This is the site that helps you to find the career.
              </ListItem>
              <ListItem title="Contributers">
                Google,Microsoft and many more companies are ready to hire you.
              </ListItem>
              <ListItem title="SupportCare">
                We have 24/7 Support Service.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Link to={"/login"}>
        <Button variant="outline" className="hover:bg-green-900">Sign In</Button>
      </Link>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={"/"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
