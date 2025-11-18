import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import React from 'react'

const testimonials = [
  { name: 'Dr. Elena Park', company: 'Aurora Clinic', quote: 'Pyrix AI filters calls and books patients flawlessly. Our front desk is finally calm.', rating: 5 },
  { name: 'Marcus Hale', company: 'Volt Fitness', quote: 'Membership queries get answered day or night. Conversions up 34%.', rating: 5 },
  { name: 'Sofia Mendes', company: 'Neon Aesthetics', quote: 'No more missed appointments. Clients love the reminders and confirmations.', rating: 5 },
  { name: 'Liam Carter', company: 'BlueForge Realty', quote: 'Viewings scheduled automatically with zero back-and-forth. We just show up.', rating: 5 },
  { name: 'Amira K.', company: 'Zen Dental', quote: 'Fewer no-shows, happier staff. The AI sounds human and gets details right.', rating: 5 },
  { name: 'Rohan I.', company: 'Atlas Clinics', quote: 'We switched off the voicemail. Every lead is captured and routed correctly.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(700px_400px_at_80%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-300">Loved by modern teams</h2>
          <p className="mt-2 text-white/60">Real stories from companies that never miss a call now.</p>
        </div>

        {/* Continuous marquee rows */}
        <div className="mt-10 space-y-6">
          <Marquee reverse={false} />
          <Marquee reverse />
        </div>
      </div>
    </section>
  )
}

function Marquee({ reverse }){
  return (
    <div className="relative overflow-hidden rounded-2xl glass">
      <motion.div
        initial={{ x: reverse ? '-50%' : '0%' }}
        animate={{ x: reverse ? '0%' : '-50%' }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        className="flex min-w-[200%] gap-6 p-6"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </motion.div>
    </div>
  )
}

function Card({ t }){
  return (
    <div className="min-w-[320px] max-w-[360px] flex-1 rounded-xl glass p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-lg glass p-2">
          <Quote className="h-5 w-5 text-cyan-300" />
        </div>
        <div>
          <div className="flex gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-300" fill="currentColor" />
            ))}
          </div>
          <p className="mt-3 text-white/80 leading-relaxed line-clamp-4">“{t.quote}”</p>
          <p className="mt-5 text-sm text-white/60">{t.name} — {t.company}</p>
        </div>
      </div>
    </div>
  )
}
