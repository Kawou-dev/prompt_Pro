import React from 'react'
import { getPrompt } from '../lib/actions/getPrompts'

const page =async() => {

  const prompts = await getPrompt() ; 
  console.log("Les prompts",  prompts) ; 

  return (
    <div>
       <a href="https://wa.me/212619424117?text=Bonjour%20je%20viens%20du%20site" 
   target="_blank" 
   className="display:inline-block;background-color:#25D366;color:white;padding:10px 20px;border-radius:5px;text-decoration:none;font-weight:bold;">
   💬 Envoyer un message WhatsApp
</a>

    </div>
  )
}

export default page
