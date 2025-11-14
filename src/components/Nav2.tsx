"use client"
import {
  EllipsisVertical,
  ChevronUp,
} from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useUser } from "@clerk/nextjs"
import { FaBell, FaUser } from "react-icons/fa"
import { useState } from "react"

const Nav2 = () => {
  const { user } = useUser();
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  if (!user) return null;

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <SidebarTrigger className="text-gray-700 hover:text-gray-900 transition" />

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              PromptPro
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 relative">

            {/* Notifications */}
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition">
              <FaBell size={18} />
            </button>

            {/* User Avatar */}
            <div
              className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer transition hover:opacity-90"
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <FaUser className="text-white text-sm" />
            </div>

            {/* ACCOUNT MENU */}
            {showAccountMenu && (
              <div
                className="
                  absolute top-12 right-0 w-56 bg-white shadow-xl 
                  rounded-xl border p-4 z-50 animate-in fade-in slide-in-from-top-3
                "
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={user.imageUrl}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="mt-2 font-semibold text-gray-800">{user.firstName}</p>
                  <p className="text-sm text-gray-500">{user.emailAddresses[0]?.emailAddress}</p>
                </div>

                <div className="mt-4 border-t pt-3">
                  <button
                    className="
                      w-full px-4 py-2 rounded-md bg-red-50 text-red-600 
                      font-semibold text-sm hover:bg-red-100 transition
                    "
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav2;






// "use client"
// import  {Share , EllipsisVertical, ChevronUp, User2, ClosedCaption, Hamburger, PanelLeftClose, PanelLeftOpen, User2Icon, User}  from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
// import {SidebarMenuButton, SidebarTrigger, useSidebar} from "@/components/ui/sidebar"
// import { SignOutButton, useUser } from "@clerk/nextjs"
// import { FaBars, FaBell, FaCog, FaUser } from "react-icons/fa"
// import { useState } from "react"





// const Nav2 = () => {

//     const { open , setOpen } = useSidebar()  
//     const [showAccountMenu, setShowAccountMenu] = useState(false) ;


//     const { user} = useUser() ; 
//     if(!user) return ; 

//   return (

 
//       <header className="bg-white border-b border-gray-200 fixed top-0 left-2 right-0 z-50">
          
//             <div className="px-4 sm:px-6 py-4">
             
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
                    
                    
                    
                  
                 
//                       <><SidebarTrigger className="text-6xl   " /></>
                 
                 
                 
//                   <h1 className="text-xl sm:text-2xl font-bold text-gray-900">PromptPro</h1>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
//                     <FaBell size={18} />
//                   </button>
   
                
//                   <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
//                     <FaUser   onClick={() => setShowAccountMenu(!showAccountMenu)}
//                      className="text-white text-sm cursor-pointer" />
                     
                     
                     
//                       <div className={` ${showAccountMenu ? "bloc" : "hidden"}  absolute z-50 bg-white  w-44 h-60 border-2  rounded-md top-16  right-0    `}>
//                           <div className="flex flex-col  items-center p-4  w-full">
                            
//                             <div className="flex flex-col  items-center mb-4">
//                               <img  src={user.imageUrl} alt={user.fullName || "Profile"} className="object-cover w-10 h-10 rounded-full" />
//                               <span className="mt-2 font-md">{user.firstName}</span>
//                             </div>

//                             <div>
//                               <p>LogOut</p>
//                             </div>


//                          </div>


//                     </div>
                     
     
                
//                   </div>
                
//                 </div>
//               </div>
//             </div>
//       </header>

      
    
//   )
// }

// export default Nav2
   // <header
    //   className={`fixed top-0 right-0 h-12 flex items-center justify-between px-6 shadow-sm bg-white z-50 transition-all
    //   ${open ? "md:left-64 left-12" : "left-12"}`}
    // >
    //   <div>
    //     <h1 className={`text-xl font-bold   ${open ? "md:hidden" : ""}  `}>
    //        <span className="text-2xl pl-1 font-semibold">PromptPro</span>
    //     </h1>
    //   </div>

    //   {/* <div className="flex items-center gap-2">
    //         <p className="cursor-pointer">Se connecter</p>
    //         <div className="flex items-center gap-4">
    //           <Share className="text-sm" />
             
    //        </div>
    //   </div>
    //  */}

    //  <div>
    //     <p>Filter </p>
    //  </div>
    
    
    
    // </header>


 {/* <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    
                    <User className=" text-sm" />
               
                  </div> */}

                    {/* <div className="p-3 flex items-center gap-3 rounded-full  ">
                    <img  src={user.imageUrl} alt={user.fullName || "Profile"}
                      className=" object-cover     w-[36px] h-[30px] cursor-pointer rounded-full  "
                       />
                      <span className="ml-2">{user.firstName}</span>
                    </div> */}


    {/* //           <div>
    //                 <h1 className="font-semibold text-md " >PromptPro</h1>
    //           </div>
          
    //           <div className=" items-center gap-5  flex ">
                 
                 
    //               <div className="md:flex hidden items-center gap-2 ">
    //                 <Share className="text-sm"/> <span>Partager</span>
    //               </div> */}

      

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