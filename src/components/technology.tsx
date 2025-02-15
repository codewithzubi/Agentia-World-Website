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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-purple-500">Powered by Advanced AI</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Built on cutting-edge neural architectures</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6">
              <tech.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

