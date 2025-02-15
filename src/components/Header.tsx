"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-xl font-bold">
            <span className="text-purple-500 mr-2">□</span>
            Agentia World
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-purple-400">
              Features
            </Link>
            <Link href="#technology" className="hover:text-purple-400">
              Technology
            </Link>
            <Link href="#agents" className="hover:text-purple-400">
              Agents
            </Link>
            <Link href="#pricing" className="hover:text-purple-400">
              Pricing
            </Link>
            <Link href="#contact" className="hover:text-purple-400">
              Contact
            </Link>
          </div>
          <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
            Launch Console
          </button>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link href="#features" className="hover:text-purple-400">
              Features
            </Link>
            <Link href="#technology" className="hover:text-purple-400">
              Technology
            </Link>
            <Link href="#agents" className="hover:text-purple-400">
              Agents
            </Link>
            <Link href="#pricing" className="hover:text-purple-400">
              Pricing
            </Link>
            <Link href="#contact" className="hover:text-purple-400">
              Contact
            </Link>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md w-full">
              Launch Console
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

