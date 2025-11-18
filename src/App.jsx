import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Industries from './components/Industries'
import WhyPyrix from './components/WhyPyrix'
import LiveDemo from './components/LiveDemo'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Roadmap from './components/Roadmap'
import BookingDemo from './components/BookingDemo'

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      {/* Global overlays for liquid-glass ambience */}
      <div className="noise-overlay" />
      <div className="vignette-overlay" />

      {/* Neutral graphite background to match hero greys */}
      <div className="min-h-screen bg-[linear-gradient(180deg,#0b0c0f_0%,#0a0b0d_40%,#0a0a0b_100%)]">
        {/* Subtle radial bloom */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(255,255,255,0.06),transparent_70%)]" />

        <Hero />
        <HowItWorks />
        <Industries />
        <WhyPyrix />
        <LiveDemo />
        <Features />
        <Testimonials />
        <Roadmap />
        <BookingDemo />
        <Footer />
      </div>
    </div>
  )
}

export default App
