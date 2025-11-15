"use client"
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'

const ClerkNextProvider = ({children}: {children  : React.ReactNode}) => {
  return (

     <ClerkProvider >

            {children}
    
     </ClerkProvider>
  )
}

export default ClerkNextProvider