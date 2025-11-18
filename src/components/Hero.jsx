import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Play, Volume2 } from 'lucide-react'

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
}

export default function Hero() {
  const splineRef = useRef(null)

  // Enable pointer-driven interactions by forwarding pointer events to Spline canvas
  useEffect(() => {
    const container = splineRef.current
    if(!container) return
    const forward = (e) => {
      const canvas = container.querySelector('canvas')
      if(!canvas) return
      const evt = new PointerEvent(e.type, e)
      canvas.dispatchEvent(evt)
    }
    container.addEventListener('pointermove', forward)
    container.addEventListener('pointerdown', forward)
    container.addEventListener('pointerup', forward)
    container.addEventListener('touchstart', forward, { passive: true })
    container.addEventListener('touchmove', forward, { passive: true })
    container.addEventListener('touchend', forward)
    return () => {
      container.removeEventListener('pointermove', forward)
      container.removeEventListener('pointerdown', forward)
      container.removeEventListener('pointerup', forward)
      container.removeEventListener('touchstart', forward)
      container.removeEventListener('touchmove', forward)
      container.removeEventListener('touchend', forward)
    }
  }, [])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden text-white">
      {/* 3D Spline background */}
      <div ref={splineRef} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/12w3jTHz4S8WORwK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Liquid glass backdrop and tones */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.0)_0%,rgba(10,11,13,0.35)_30%,rgba(10,11,13,0.6)_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headlineVariants}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 metallic-sheen">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400"></span>
            <span className="text-xs tracking-widest text-slate-200/80">PYRIX AI • VOICE AGENT</span>
          </div>

          <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-6xl bg-gradient-to-b from-slate-50 via-slate-200 to-slate-300 bg-clip-text text-transparent">
            Your Business, Fully Automated.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-300/90 max-w-2xl">
            A fully autonomous voice agent that answers calls, books appointments, handles customers, and works while you sleep.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#demo" className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-slate-50 to-slate-300 px-6 py-3 text-slate-900 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] hover:shadow-[0_0_30px_rgba(168,221,255,0.25)] transition on-light">
              <Play className="h-4 w-4" />
              <span className="font-semibold">Book a Demo</span>
            </a>

            <button className="group relative inline-flex items-center gap-3 rounded-xl glass px-6 py-3">
              <Volume2 className="h-4 w-4 text-sky-300" />
              <span className="font-semibold text-slate-200">Hear The AI in Action</span>
              {/* Hover waveform */}
              <span className="absolute -bottom-7 left-0 right-0 mx-auto h-6 w-[220px] overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full items-end gap-1">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <span
                      key={i}
                      className="block w-[4px] bg-gradient-to-t from-sky-500/60 via-fuchsia-500/60 to-amber-400/60 rounded-full"
                      style={{ height: `${8 + Math.abs(Math.sin(i)) * 16}px`, animation: `wave 1.2s ease-in-out ${i * 0.03}s infinite alternate` }}
                    />
                  ))}
                </div>
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes wave { from { transform: scaleY(0.7); opacity: 0.8 } to { transform: scaleY(1.6); opacity: 1 } }
      `}</style>
    </section>
  )
}
