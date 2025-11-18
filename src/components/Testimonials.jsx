import { motion, useAnimation } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import React from 'react'

const testimonials = [
  { name: 'Dr. Elena Park', company: 'Aurora Clinic', quote: 'Pyrix AI filters calls and books patients flawlessly. Our front desk is finally calm.', rating: 5 },
  { name: 'Marcus Hale', company: 'Volt Fitness', quote: 'Membership queries get answered day or night. Conversions up 34%.', rating: 5 },
  { name: 'Sofia Mendes', company: 'Neon Aesthetics', quote: 'No more missed appointments. Clients love the reminders and confirmations.', rating: 5 },
  { name: 'Liam Carter', company: 'BlueForge Realty', quote: 'Viewings scheduled automatically with zero back-and-forth. We just show up.', rating: 5 },
]

export default function Testimonials() {
  const [index, setIndex] = React.useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(700px_400px_at_80%_30%,rgba(56,189,248,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Loved by modern teams</h2>
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <motion.div
              key={index}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-2 border border-white/10">
                  <Quote className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-300" fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-3 text-white/80 leading-relaxed max-w-2xl">“{testimonials[index].quote}”</p>
                  <p className="mt-5 text-sm text-white/60">{testimonials[index].name} — {testimonials[index].company}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 flex justify-between">
            <button onClick={prev} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10 transition flex items-center gap-2 text-sm"><ChevronLeft className="h-4 w-4" />Prev</button>
            <button onClick={next} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10 transition flex items-center gap-2 text-sm">Next<ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
