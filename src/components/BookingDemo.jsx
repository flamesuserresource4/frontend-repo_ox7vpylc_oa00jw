import { motion } from 'framer-motion'
import { CalendarCheck2, Sparkles } from 'lucide-react'

export default function BookingDemo() {
  return (
    <section id="booking" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(700px_400px_at_80%_-10%,rgba(56,189,248,0.5),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Book a live demo in seconds</h2>
          <p className="mt-3 text-white/70">See Pyrix AI handle real conversations and watch it auto‑schedule meetings. Choose a time that suits you — no back‑and‑forth.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 text-white/70 text-sm">
            <CalendarCheck2 className="h-4 w-4 text-cyan-300" />
            <span>Calendly • Instant scheduling</span>
          </div>
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Book a Pyrix AI demo"
              src="https://calendly.com/your-calendly/pyrix-ai-demo"
              className="h-full w-full"
              frameBorder="0"
            />
          </div>
        </motion.div>

        <div className="mt-6 text-center text-white/60 text-sm flex items-center gap-2 justify-center">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span>Pick your preferred voice during the demo — we support multiple premium voices.</span>
        </div>
      </div>
    </section>
  )
}
