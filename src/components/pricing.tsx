import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$499",
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
  },
  {
    name: "Professional",
    price: "$999",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-16 bg-black" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Choose Your Plan
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Scale your AI capabilities with our flexible pricing</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-gray-900 rounded-lg p-8 ${index === 1 ? "border-2 border-purple-500" : ""}`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-sm font-normal text-gray-400">/month</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-purple-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-md font-semibold ${
                  index === 1
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

