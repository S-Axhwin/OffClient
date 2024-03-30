import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCards() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div>OffIcium</div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/" />
            <AvatarFallback>OI</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-m font-semibold">Officium</h4>
            <p className="text-sm">
              We are happy to have you.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70 text-muted-foreground" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined March 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
