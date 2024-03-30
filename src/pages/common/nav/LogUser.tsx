import * as React from "react"
import { Link } from "react-router-dom"
import { HoverCards } from '../../Home/Name'
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { logoutState } from "@/redux/Slice/userSlice"


export default function LogUser({user}:any) {
  console.log(user);
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logoutState())
  }

  return (
    <NavigationMenu  className="w-screen flex justify-between p-4 z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to={"/"}
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
              <Link to={user.isRec?"/jobpost":"/joblisting" }>
              <ListItem title="Job Listing">
                This is the site that helps you to find the career.
              </ListItem>
              </Link>
              <ListItem title="Contributers">
                Google,Microsoft and many more companies are ready to hire you.
              </ListItem>
              <ListItem title="SupportCare">
                We have 24/7 Support Service.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
              <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/profile"
                  >
                    <img src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp' className="rounded-full w-32 lg:w-48" alt=''/>
                    <div className="mb-2 mt-4 text-lg font-medium m-auto">
                    </div>     
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem className="h-100 hover:bg-transparent" title="Details">
                  <Link to={"/profile"}>
                  <div className="">
                    <div className="flex justify-spacebetween">
                    Name: {user.username}
                    </div>
                    <div className="">
                    Age: {'18'}
                    </div>
                    <div>
                    gmail: {user.gmail}
                    </div>
                    <div>
                    Skills: {'Full-Stack'}
                    </div>
                    <div>
                    Experience: {'2 years'}
                    </div>
                  </div>
                  </Link>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
      <Button variant="outline" onClick={() => Logout()} className="hover:bg-red-900">Logout</Button>
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
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className=" text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
