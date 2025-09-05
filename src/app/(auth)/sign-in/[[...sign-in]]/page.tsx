import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    // <main className='flex justify-between items-center h-screen border-2 border-red-400  '>
    //   <div>
    //         <h1>Hello Kawou</h1>
    //   </div>
    //   <div>
    //           <SignIn />
    //   </div>
    // </main>
   
   <div className='flex justify-center flex-col items-center h-screen'>
      <SignIn />
    </div>

  )
}

export default SignInPage
