import { motion } from 'framer-motion'
import { Briefcase, Building2, Calendar, Scissors, Stethoscope, Wrench, Home, Dumbbell, Utensils, Sparkles } from 'lucide-react'

const industries = [
  { name: 'Clinics & Medical', icon: Stethoscope, blurb: 'Answers triage, books appointments, sends reminders.' },
  { name: 'Beauty & Aesthetics', icon: Scissors, blurb: 'Manages bookings, cancellations, and follow-ups.' },
  { name: 'Trades', icon: Wrench, blurb: 'Schedules site visits, routes emergencies, captures details.' },
  { name: 'Real Estate', icon: Home, blurb: 'Qualifies leads, books viewings, shares property info.' },
  { name: 'Gyms & Coaches', icon: Dumbbell, blurb: 'Trials, memberships, class bookings—24/7.' },
  { name: 'Agencies', icon: Briefcase, blurb: 'Captures leads, pre-qualifies, schedules consults.' },
  { name: 'Restaurants', icon: Utensils, blurb: 'Takes reservations, notes allergies, confirms via SMS.' },
]

export default function Industries() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(600px_300px_at_20%_0%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(700px_400px_at_80%_30%,rgba(56,189,248,0.35),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-cyan-300" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Industries we elevate</h2>
        </div>
        <div className="relative">
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: [0, -400, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            viewport={{ once: false }}
            className="flex gap-6 will-change-transform"
          >
            {[...industries, ...industries].map((it, idx) => (
              <Tile key={idx} {...it} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Tile({ name, icon: Icon, blurb }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative w-[280px] shrink-0 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent" />
      <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.2),rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative z-10 flex items-start gap-3">
        <div className="rounded-lg bg-white/10 p-2 border border-white/10">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <div>
          <h3 className="font-medium text-white/90">{name}</h3>
          <p className="text-xs text-white/60 mt-1 leading-relaxed">{blurb}</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="mt-6 rounded-lg border border-white/10 bg-black/20 p-3"
      >
        <div className="h-10 w-full grid grid-cols-12 gap-1 opacity-80">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0.2 }}
              animate={{ scaleY: [0.2, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.05, ease: 'easeInOut' }}
              className="origin-bottom bg-gradient-to-t from-cyan-500/40 to-purple-400/40 rounded-sm"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
