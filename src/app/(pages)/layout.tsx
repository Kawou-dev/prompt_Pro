"use client"

import {Home, MessageCirclePlus, MessageCircleReply, Search}  from "lucide-react"
import { SidebarHeader, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import SidebarLeft from "@/components/SidebarLeft"
import  {Share , EllipsisVertical, ChevronUp, User2}  from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu"
import {SidebarMenuButton} from "@/components/ui/sidebar"
import { SignOutButton } from "@clerk/nextjs"
import DisplayPopup from "@/components/DisplayPopup"
import { PopupProvider } from "@/context/PopupContext"

export default function Layout({ children }: { children: React.ReactNode }) {


  

     

  return (
    <SidebarProvider>
         <PopupProvider>
            <div className={`h-screen w-12 pl-2 flex flex-col border-2 md:mr-10 mr-0 ` }>
              <SidebarTrigger className="text-3xl  md:mt-5 mt-4 fixed  " />
              <SidebarLeft />
            </div>
        <AppSidebar />
          <main className="w-full flex flex-col  mr-16 ">
              <DisplayPopup />             
            {children}
          
          </main>

        </PopupProvider>
    </SidebarProvider>
  )
  
}
