import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const ClerkNextProvider = ({children}: {children  : React.ReactNode}) => {
  return (
     <ClerkProvider>
        {children}
     </ClerkProvider>
  )
}

export default ClerkNextProvider