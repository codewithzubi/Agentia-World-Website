import { Brain, Cpu, Code, Globe } from "lucide-react"

const technologies = [
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
  },
  {
    icon: Code,
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Distributed AI processing across global networks",
  },
]

export default function Technology() {
  return (
    <section className="py-16 bg-black" id="technology">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Powered by Advanced AI
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-8">Built on cutting-edge neural architectures</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:outline-none hover:ring-4 hover:ring-purple-500 relative"
            >
              <div className="bg-purple-600 rounded-lg p-2 mb-3 transform transition-all duration-300 group-hover:rotate-45">
                <tech.icon className="w-6 h-6 text-white transform transition-all duration-300 group-hover:rotate-45" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
              <p className="text-sm text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
