import { Calendar, ChevronUp, Home, Inbox, Pencil, Search, Settings, User, User2 } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter , 
  
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { SignOutButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home",
    url: "chat",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/events",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
   {
    title: "Mes Prompts",
    url: "prompts",
    icon: Pencil,
  },
  {
    title: "Settings",
    url: "setting",
    icon: Settings,
  },
]

export function AppSidebar() {






  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
               <div className="flex flex-col w-full gap-4">
                    <div className="flex items-center justify-between  w-full mt-5 ">
                      <span className="text-2xl pl-1 font-semibold">PromptPro</span>
                      <SidebarTrigger className="text-6xl " />
                   </div>

                   <hr className="h-0.5 w-full border  text-black bg-black " />
               </div>
              

             
             
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-20">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild >
                      {/* <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a> */}

                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>

                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

                {/*  */}

                <SidebarFooter className="mb-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
      
                    <User2 /> Kawou
                  
      
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span> <SignOutButton /> </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>


    </Sidebar>
  )
}
{/* <SidebarMenuButton asChild isActive>
  <a href="#">Home</a>
</SidebarMenuButton> */}