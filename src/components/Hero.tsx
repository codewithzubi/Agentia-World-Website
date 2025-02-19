"use client"

import { useState, useEffect } from "react"
import { TbMessageChatbot } from "react-icons/tb";

export default function Hero() {
  // Text lines to display
  const textLines = [
    "Hello! I'm your AI agent. How can I enhance your business today?",
    "I can help optimize your workflows with neural networks.",
    "Let me assist you with advanced data analytics.",
    "Would you like to explore our AI integration solutions?"
  ]
  
  // States for managing text, line, and typing
  const [text, setText] = useState("") // Text being typed
  const [lineIndex, setLineIndex] = useState(0) // Track current line index
  const [charIndex, setCharIndex] = useState(0) // Track current character position
  const [isTyping, setIsTyping] = useState(true) // Flag to check if typing or erasing
  const [cursorVisible, setCursorVisible] = useState(true) // To toggle cursor visibility

  // Manage the typing and erasing effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        // Typing process
        if (charIndex < textLines[lineIndex].length) {
          setText(prevText => prevText + textLines[lineIndex][charIndex])
          setCharIndex(prevIndex => prevIndex + 1)
        } else {
          // Wait for a bit, then start erasing
          setTimeout(() => setIsTyping(false), 1000)
        }
      } else {
        // Erasing process
        if (charIndex > 0) {
          setText(prevText => prevText.slice(0, -1))
          setCharIndex(prevIndex => prevIndex - 1)
        } else {
          // Start typing the next line
          setIsTyping(true)
          setLineIndex((prevIndex) => (prevIndex + 1) % textLines.length)
        }
      }
      // Toggle cursor visibility on each step
      setCursorVisible(prev => !prev)

    }, 30) // Adjust speed here

    return () => clearTimeout(timeout)
  }, [charIndex, lineIndex, isTyping, textLines]) // ✅ textLines added to dependencies

  return (
    <section className="pt-24 pb-16 text-center">
      <div className="container mx-auto p-10">
        <div className="bg-purple-600 text-white inline-block px-4 py-2 rounded-lg mb-4">
          <p className="text-sm font-medium">POWERED BY PANAVERSITY</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="text-purple-500">Enterprise AI Agents</span>
          <br />
          for the Future
        </h1>
        <div className="bg-gray-800 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <div className="flex items-center">
            <div className="bg-purple-600 rounded-full p-2 mr-4">
              <TbMessageChatbot className="w-7 h-7"/>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                className="bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none w-full rounded-lg py-3 pl-14 pr-6 outline-none"
                value={text + (cursorVisible ? "|" : "")} // Add cursor conditionally
                readOnly
                placeholder="AI agent is typing..."
              />
              <div className="absolute left-0 top-0 w-full h-full bg-gray-800 rounded-lg opacity-60"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
            Deploy Your AI Agent
          </button>
          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
