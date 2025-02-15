"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Hello! I'm your AI agent. How can I enhance your business today?"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index])
        setIndex((prevIndex) => prevIndex + 1)
      }, 50)

      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setText("")
        setIndex(0)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section className="pt-24 pb-16 text-center">
      <div className="container mx-auto p-10">
        <p className="text-purple-300 mb-4">POWERED BY PANAVERSITY</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="text-purple-500">Enterprise AI Agents</span>
          <br />
          for the Future
        </h1>
        <div className="bg-gray-800 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <div className="flex items-center">
            <div className="bg-purple-600 rounded-full p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="bg-transparent border-none outline-none text-white w-full"
              value={text}
              readOnly
              placeholder="AI agent is typing..."
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md font-semibold">
            Deploy Your AI Agent
          </button>
          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md font-semibold">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}

