import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Solutions from "@/components/solutions"
import Technology from "@/components/technology"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Technology />
      <Features />
      <Solutions />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

