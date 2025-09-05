// app/context/popup-context.tsx
"use client"
import { createContext, useContext, useState, ReactNode } from "react"

type PopupContextType = {
  isPopupOpen: boolean
  openPopup: () => void
  closePopup: () => void
}


// 1   CREATION DU CONTEXT
// 2   INSTALLATION DU PROVIDER
// 3   CONSOMMATION DU CONTEXT (UTILISATION)


// EXPORT PROVIDER & CONTEXT

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  )
}



export const usePopup = () => {
  const context = useContext(PopupContext)
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider")
  }
  return context
}
