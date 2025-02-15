import { Brain, MessageSquare, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
  },
  {
    icon: MessageSquare,
    title: "Multi-Modal Intelligence",
    description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
  },
  {
    icon: Zap,
    title: "Cognitive Integration",
    description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
  },
  {
    icon: Shield,
    title: "Ethical AI Framework",
    description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-purple-500">Neural Capabilities</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Powered by next-generation artificial intelligence</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

