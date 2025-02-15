import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const footerSections = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Documentation", "API"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Compliance"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center text-xl font-bold mb-4">
              <span className="text-purple-500 mr-2">□</span>
              Agentia World
            </Link>
            <p className="mb-4">Next-generation AI agents powering the future of enterprise intelligence.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-purple-500">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2025 Agentia World. Powered by Panaversity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

