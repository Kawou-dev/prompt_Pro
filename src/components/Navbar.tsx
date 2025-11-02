"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { ModeToggle } from './toggleMode'

const navLinks = [
  {
    label: "Accueil", 
    href: "/" 
  }, 
  {
    label: "Blog", 
    href: "/blog" 
  }, 
  {
    label: "À propos", 
    href: "/about"
  }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-white dark:bg-black shadow-sm'
    }`}>
      <div className='max-w-7xl mx-auto flex items-center justify-between md:px-8 px-4 md:py-4 py-3'>
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              PromptPro
            </span>
          </Link>
        </div>

        {/* Navigation desktop */}
        <nav className='hidden md:flex items-center space-x-1'>
          <ul className='flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <Link 
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {link.label}
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 transition-transform duration-200 origin-center hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Boutons desktop */}
        <div className='hidden md:flex items-center gap-3'>
          <button className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200'>
            <Link href={"/sign-in"}>Se connecter</Link>
          </button>
          <button className='px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
            <Link href={"/sign-up"}>S&apos;inscrire</Link>
          </button>
          <div className="ml-2">
            <ModeToggle />
          </div>
        </div>

        {/* Menu mobile */}
        <div className='md:hidden flex items-center gap-3'>
          <div className="mr-1">
            <ModeToggle />
          </div>
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-5 bg-current transform transition duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}></span>
              <span className={`block h-0.5 w-5 bg-current transition duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block h-0.5 w-5 bg-current transform transition duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-xl border-t border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  onClick={closeMenu}
                  className="flex px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 border-l-2 border-transparent hover:border-purple-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className='flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800'>
            <button className='w-full px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 text-center'>
              <Link href={"/sign-in"} onClick={closeMenu}>Se connecter</Link>
            </button>
            <button className='w-full px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-md text-center'>
              <Link href={"/sign-up"} onClick={closeMenu}>S&apos;inscrire</Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar








// "use client"
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { ModeToggle } from './toggleMode'

// const navLinks = [
//   {
//      label: "Accueil", href: "/" 
//   }, 
//   {
//      label: "Blog", href: "/blog" 
//   }, 
//   {
//     label: "À propos", href: "/about"
//   }
// ]

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <header className='flex items-center justify-between md:px-12 px-5 md:py-4 py-2 shadow-md dark:bg-[#000000] relative'>
//       {/* Logo */}
//       <div className="flex items-center">
//         <h1>
//           <span className="self-center text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
//             PromptPro
//           </span>
//         </h1>
//       </div>

//       {/* Menu pour desktop */}
//       <nav className='hidden md:flex items-center justify-between'>
//         <ul className='flex items-center gap-6 font-semibold'>
//           {navLinks.map((link) => (
//             <li key={link.label} className='hover:opacity-50 cursor-pointer text-md'>
//               <Link href={link.href}>
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Boutons pour desktop */}
//       <div className='hidden md:flex gap-3'>
//         <button className='py-1 px-2 border-2 rounded cursor-pointer'>
//           <Link href={"/sign-in"}>Se connecter</Link>
//         </button>
//         <button className='py-1 px-2 border-2 rounded cursor-pointer'>
//           <Link href={"/sign-up"}>S&apos;inscrire</Link>
//         </button>
//         <ModeToggle />
//       </div>

//       {/* Menu hamburger pour mobile */}
//       <div className='md:hidden flex items-center gap-3'>
//         <ModeToggle />
//         <button 
//           onClick={toggleMenu}
//           className="p-2 rounded-md focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Menu mobile déroulant */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 right-0 bg-white dark:bg-black shadow-lg md:hidden z-10">
//           <nav className="px-5 py-4">
//             <ul className="flex flex-col gap-4 font-semibold">
//               {navLinks.map((link) => (
//                 <li key={link.label} className='hover:opacity-50 cursor-pointer text-md border-b border-gray-200 dark:border-gray-700 pb-2'>
//                   <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
            
//             <div className='flex flex-col gap-3 mt-4'>
//               <button className='py-2 px-4 border-2 rounded cursor-pointer text-center'>
//                 <Link href={"/sign-in"} onClick={() => setIsMenuOpen(false)}>Se connecter</Link>
//               </button>
//               <button className='py-2 px-4 border-2 rounded cursor-pointer text-center'>
//                 <Link href={"/sign-up"} onClick={() => setIsMenuOpen(false)}>S&apos;inscrire</Link>
//               </button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar