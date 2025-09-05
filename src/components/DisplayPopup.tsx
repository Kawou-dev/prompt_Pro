"use client"
import { usePopup } from "@/context/PopupContext"
import { useState } from "react"
import Popup from "./Popup";

const DisplayPopup = () => {

    const {isPopupOpen} = usePopup() ; 

  return (
    <div>
         {isPopupOpen && (
            <Popup />
         )}
    </div>
  )
}

export default DisplayPopup
