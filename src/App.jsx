import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import LiveDemo from './components/LiveDemo'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#070b12_0%,#090e15_50%,#070b12_100%)] text-white">
      {/* Subtle grid / metallic texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(56,189,248,0.12),transparent_70%)]" />

      <Hero />
      <HowItWorks />
      <LiveDemo />
      <Features />
      <Footer />
    </div>
  )
}

export default App
