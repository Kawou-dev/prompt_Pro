import { usePopup } from '@/context/PopupContext'
import React from 'react'
import {SquareX , X , Search}  from "lucide-react"
import Link from 'next/link'



const themes = [
  {
    label : "Actualités" , value: "actualités"
  }, 
  {
    label : "Annonce" , value: "annonce"
  }, 
  {
    label : "Facebook" , value: "facebook"
  }, 
   {
    label : "LinkedIn" , value: "linkedin"
  }, 
  {
    label : "Humour" , value: "humour"
  }, 
  {
    label : "Campus France" , value: "Campus"
  }, 




]


const Popup = () => {

    const {closePopup} = usePopup() ; 

  return (
    <div className='fixed inset-0 w-full h-full    bg-[rgba(0,0,0,0.1)] z-100    '>
        <div className='flex justify-center h-screen items-center'>
                    <div className='md:w-[500px] w-[300px]  h-[310px]   bg-white text-black rounded-xl rounded-b-md  '>
                           
                         
                                <form className='relative rounded mb-1'>

                                      <div className='rounded'>
                                        
                                        <button className='cursor-pointer absolute left-2 top-3 '>
                                          <Search size={20} className='opacity-50' />
                                         </button>
                                        
                                        <input type="text" 
                                        className=' border-b-2 w-full p-2 rounded-t outline-none pl-10 '
                                        />
                                          <button className='cursor-pointer absolute right-2 top-3 '
                                         title='Fermer' onClick={closePopup}> 
                                           < X  className='opacity-65'/> 
                                         </button>
                                    </div>


                                </form>

                        <div className='h-[270px] overflow-y-scroll  '>
                                <div className='mt-2 ml-1 mb-2 '>
                                     
                                     <div className='mb-1 pl-2'>
                                        {/* <p>Ensemble de volet</p> */}
                                     </div>

                                    <div className='flex flex-col gap-1 px-1 mb-2'>

                                      {themes.map( (item) => (
                                        <div key={item.value} className='w-full border-2 py-2 px-2 rounded   ' >
                                            <a href={`/prompts?category=${item.value}`}>
                                            <p>{item.label}</p>
                                            </a> 
                                        </div>
                                     
                                     ) )}
                                        
                                      
                                    </div>
                                </div>

                        </div>

                    </div>
        </div> 
    </div>
  )
}

export default Popup
