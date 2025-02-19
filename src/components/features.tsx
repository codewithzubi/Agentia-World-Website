import { Brain, MessageSquare, Zap, Shield } from "lucide-react";
import '../../styles/globals.css';

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
    description:
      "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
  },
  {
    icon: Zap,
    title: "Cognitive Integration",
    description:
      "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
  },
  {
    icon: Shield,
    title: "Ethical AI Framework",
    description:
      "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-black" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Neural Capabilities
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Powered by next-generation artificial intelligence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-lg p-4 transform transition-all duration-300 
                hover:scale-105 
                shadow-lg 
                ${index === 0 ? "animate-shadow-1" : ""}
                ${index === 1 ? "animate-shadow-2" : ""}
                ${index === 2 ? "animate-shadow-3" : ""}
                ${index === 3 ? "animate-shadow-4" : ""}`}
            >
              <div className="bg-purple-600 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-3">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
