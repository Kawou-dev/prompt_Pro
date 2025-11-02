"use client"
import { usePopup } from "@/context/PopupContext"
import { useUser } from "@clerk/nextjs"
import { Divide, Home, MessageCirclePlus, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"




const SidebarLeft = () => {


    const {openPopup } = usePopup() ; 

    const leftIcons = [
  {
     title: "Nouveau chat",  
     icon : <MessageCirclePlus />  , 
     href: "/chat"
  } , 
  {
     title: "Rechercher", 
     icon :  <Search />  , 
     href: "" , 
     onclick : () => openPopup() , 
  } , 
   {
     title: "Home", 
     icon : <Home />  , 
     href: "/chat"
  } , 
]


    const { user} = useUser() ; 
    if(!user) return ; 

    // console.log("The user ----> " , user) ; 


  return (
     <div className="mt-20 fixed flex flex-col justify-between h-full mr-10    " >
              
             <div className="flex flex-col gap-3 mt-4">
              {/* <MessageCirclePlus /> 
              <Search  onClick={openPopup}/>
              <Home /> */}
              {/* <ul className="flex flex-col gap-3">
                {leftIcons.map((icon) => (
                   <li key={icon.title} title={icon.title}  onClick={icon.onclick}
                   className="cursor-pointer">

                    {icon.href && !icon.onclick ?  (
                      <Link href={icon.href}> {icon.icon}</Link> ) : ( 
                      icon.icon )}
                   
                   
                   </li> 
                ))}
              </ul> */}


             </div>
           
              <div className="flex justify-end mb-5  relative ">
                  <div className="flex justify-cente mr-3 h-full w-full    ">
                     
                      <img 
                    src={user.imageUrl}
                    alt={user.fullName || "Profile"}
                    className=" object-cover     w-[56px] h-[36px] cursor-pointer rounded-full  "
                />
                  </div>
              </div>

            </div>
  )
}

export default SidebarLeft