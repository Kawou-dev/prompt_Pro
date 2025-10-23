"use client"
import  {Share , EllipsisVertical, ChevronUp, User2}  from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import {SidebarMenuButton, useSidebar} from "@/components/ui/sidebar"
import { SignOutButton } from "@clerk/nextjs"





const Nav2 = () => {

    const { open } = useSidebar()  

  return (

    <header
      className={`fixed top-0 right-0 h-12 flex items-center justify-between px-6 shadow-sm bg-white z-50 transition-all
      ${open ? "md:left-64 left-12" : "left-12"}`}
    >
      <div>
        <h1 className={`text-xl font-bold   ${open ? "md:hidden" : ""}  `}>
           <span className="text-2xl pl-1 font-semibold">PromptPro</span>
        </h1>
      </div>

      {/* <div className="flex items-center gap-2">
            <p className="cursor-pointer">Se connecter</p>
            <div className="flex items-center gap-4">
              <Share className="text-sm" />
             
           </div>
      </div>
     */}

     <div>
        <p>Filter </p>
     </div>
    
    
    
    </header>
    
  )
}

export default Nav2


// <header className="flex  fixed w-[1000px] bg-white z-50 justify-between  border-2   shadow-sm  md:px-10 px-4 py-4 border-red-500  mr-10   ">

    //     {/* <div className="flex items-center justify-between w-full md:mr-28 sm:mr-28   border-4 border-red-600 "> */}
    //           <div>
    //                 <h1 className="font-semibold text-md " >PromptPro</h1>
    //           </div>
          
    //           <div className=" items-center gap-5  flex ">
                 
                 
    //               <div className="md:flex hidden items-center gap-2 ">
    //                 <Share className="text-sm"/> <span>Partager</span>
    //               </div>

      

    //               <div className="">
    //                  <DropdownMenu>
    //             <DropdownMenuTrigger asChild>
    //               <SidebarMenuButton>
    //                 {/* <User2 /> Kawou
    //                 <ChevronUp className="ml-auto" /> */}
    //                 <EllipsisVertical />
    //               </SidebarMenuButton>
    //             </DropdownMenuTrigger>
    //             <DropdownMenuContent
    //               side="top"
    //               className="w-[--radix-popper-anchor-width]"
    //             >
    //               <DropdownMenuItem>
    //                 <span>Profile</span>
    //               </DropdownMenuItem>
    //               <DropdownMenuItem>
    //                 <span>Billing</span>
    //               </DropdownMenuItem>
    //               <DropdownMenuItem>
    //                 <span><SignOutButton /></span>
    //                 <button>  </button>
    //               </DropdownMenuItem>
    //             </DropdownMenuContent>
    //           </DropdownMenu>
    //               </div>

    //           </div>
    //     {/* </div>       */}
    // </header>