import { Globe, Server, Shield } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "Enterprise AI",
    description: "Custom AI agents designed for enterprise-scale operations and decision-making",
  },
  {
    icon: Server,
    title: "Neural Operations",
    description: "Automated workflow optimization through distributed neural networks",
  },
  {
    icon: Shield,
    title: "Secure Intelligence",
    description: "Privacy-first AI solutions with military-grade security protocols",
  },
]

export default function Solutions() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-purple-500">AI Solutions</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Transforming industries with intelligent agents</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:outline hover:outline-1 hover:outline-purple-500 hover:shadow-lg"
            >
              <solution.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
