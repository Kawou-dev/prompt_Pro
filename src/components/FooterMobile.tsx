"use client"
import { usePopup } from '@/context/PopupContext'
import Link from 'next/link'
import React from 'react'
import { FaChartLine, FaFilter, FaSearch, FaUser } from 'react-icons/fa'


const footerbuttons = [
    { name: 'Recherche', icon: <FaSearch size={16} /> , href: "/rechercher" },
    { name: 'Filtres', icon: <FaFilter size={16} /> , href: "/filtres" },
    { name: 'Stats', icon: <FaChartLine size={16} /> , href: "/stats" },
    { name: 'Profil', icon: <FaUser size={16} /> , href: "/profil" },
]

// 

const FooterMobile = () => {


  const {openPopup , closePopup} = usePopup()

  return (
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40">
        <div className="flex justify-around items-center">
          
          {/*  */}
          
          <button  
          className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
            <Link href={"/rechercher"}
              className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600" >
                <FaSearch   size={16} />
                <span className="text-xs">Recherche</span>
            </Link>
          </button>
          <button onClick={openPopup}
          className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
            <FaFilter size={16} />
            <span className="text-xs">Filtres</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
            <FaChartLine size={16} />
            <span className="text-xs">Stats</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600">
            <FaUser size={16} />

            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
  )
}

export default FooterMobile
//   {footerbuttons.map((button) => (
// //             <button 
// //               key={button.name}
// //               className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600"
// //               >
// //                 {button.icon}
// //                 <span className="text-xs">{button.name}</span>
// //               </button>
// //         ))}