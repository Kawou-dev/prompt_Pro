import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex justify-center flex-col items-center h-screen'>
        <SignUp />
    </div>
  )
}

export default SignUpPage