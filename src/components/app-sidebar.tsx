"use client"
import { Calendar, ChevronUp, Home, Inbox, Pencil, Search, Settings, User, User2 , MessageSquareMore , Star, MessageCirclePlus , SquarePen} from "lucide-react"
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
  SidebarFooter, 
  useSidebar, 
  
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { SignedOut, SignOutButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { usePopup } from "@/context/PopupContext"
import { items } from "@/app/lib/data/data"

// Menu items.


export function AppSidebar() {

  
   
  const {openPopup } = usePopup() ;
  
  const {toggleSidebar} = useSidebar()

  const { user} = useUser() ; 
  if(!user) return ; 




  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
               <div className="flex flex-col w-full gap-4">
                    <div className="flex items-center justify-between  w-full mt-5 ">
                      <span className="text-2xl pl-1 font-semibold">Eloque_Pro</span>
                      <SidebarTrigger className="text-6xl  " />
                   </div>

                   <hr className="h-0.5 w-full border  text-black bg-black " />
               </div>
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-20  ">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}  >
                    <SidebarMenuButton asChild >
                      {/* <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a> */}
                     
                      <Link  href={item.url}
                        onClick={toggleSidebar}>
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

                {/* border-2  border-red-500  */}

                 {/* className="border-2  border-red-500 p-3 */}

                <SidebarFooter >
          <SidebarMenu>
            <SidebarMenuItem >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton >
                  
                  <div className="p-3 flex items-center gap-3 rounded-full  ">
                    <img  src={user.imageUrl} alt={user.fullName || "Profile"}
                      className=" object-cover     w-[36px] h-[30px] cursor-pointer rounded-full  "
                       />
                      <span className="ml-2">{user.firstName}</span>
                    </div>
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
                    {/* sign out button */}
                    <span className="text-red-500"> <SignOutButton /> </span>
                 
                 
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>


    </Sidebar>
  )
}

      