import { Mail, Globe, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-16 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Get in Touch
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Ready to transform your business with AI?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-purple-500 mr-2" />
              <a href="mailto:contact@agentiaworld.com" className="hover:text-purple-500">
                contact@agentiaworld.com
              </a>
            </div>
            <div className="flex items-center mb-8">
              <Globe className="w-6 h-6 text-purple-500 mr-2" />
              <a
                href="https://www.agentiaworld.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500"
              >
                www.agentiaworld.com
              </a>
            </div>
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
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 text-white rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-gray-800 text-white rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 rounded-md hover:from-purple-700 hover:to-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

