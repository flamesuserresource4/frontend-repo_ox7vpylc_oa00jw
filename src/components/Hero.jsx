import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Play, Volume2 } from 'lucide-react'

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.15),transparent),linear-gradient(to_bottom_right,#0b1020,#0a0f1a_40%,#0b0f16)] text-white">
      {/* 3D Aura */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Holographic gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(147,197,253,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headlineVariants}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
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
            <a href="#demo" className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-slate-50 to-slate-300 px-6 py-3 text-slate-900 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] hover:shadow-[0_0_30px_rgba(168,221,255,0.25)] transition">
              <Play className="h-4 w-4" />
              <span className="font-semibold">Book a Demo</span>
            </a>

            <button className="group relative inline-flex items-center gap-3 rounded-xl border border-sky-400/30 bg-white/5 px-6 py-3 backdrop-blur-md transition hover:bg-white/10">
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
