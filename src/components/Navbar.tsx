"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ModeToggle } from './toggleMode'

const navLinks = [
  {
     label: "Accueil", href: "/" 
  }, 
  {
     label: "Blog", href: "/blog" 
  }, 
  {
    label: "À propos", href: "/propos"
  }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='flex items-center justify-between md:px-12 px-5 md:py-4 py-2 shadow-md dark:bg-[#000000] relative'>
      {/* Logo */}
      <div className="flex items-center">
        <h1>
          <span className="self-center text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            PromptPro
          </span>
        </h1>
      </div>

      {/* Menu pour desktop */}
      <nav className='hidden md:flex items-center justify-between'>
        <ul className='flex items-center gap-6 font-semibold'>
          {navLinks.map((link) => (
            <li key={link.label} className='hover:opacity-50 cursor-pointer text-md'>
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Boutons pour desktop */}
      <div className='hidden md:flex gap-3'>
        <button className='py-1 px-2 border-2 rounded cursor-pointer'>
          <Link href={"/sign-in"}>Se connecter</Link>
        </button>
        <button className='py-1 px-2 border-2 rounded cursor-pointer'>
          <Link href={"/sign-up"}>S&apos;inscrire</Link>
        </button>
        <ModeToggle />
      </div>

      {/* Menu hamburger pour mobile */}
      <div className='md:hidden flex items-center gap-3'>
        <ModeToggle />
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-black shadow-lg md:hidden z-10">
          <nav className="px-5 py-4">
            <ul className="flex flex-col gap-4 font-semibold">
              {navLinks.map((link) => (
                <li key={link.label} className='hover:opacity-50 cursor-pointer text-md border-b border-gray-200 dark:border-gray-700 pb-2'>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className='flex flex-col gap-3 mt-4'>
              <button className='py-2 px-4 border-2 rounded cursor-pointer text-center'>
                <Link href={"/sign-in"} onClick={() => setIsMenuOpen(false)}>Se connecter</Link>
              </button>
              <button className='py-2 px-4 border-2 rounded cursor-pointer text-center'>
                <Link href={"/sign-up"} onClick={() => setIsMenuOpen(false)}>S&apos;inscrire</Link>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar