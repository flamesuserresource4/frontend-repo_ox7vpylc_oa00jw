import { motion } from 'framer-motion'
import { Check, XCircle } from 'lucide-react'

const rows = [
  { label: 'Never late', ai: true },
  { label: 'Never sleeps', ai: true },
  { label: 'Handles unlimited calls', ai: true },
  { label: '100% consistent', ai: true },
  { label: '95% cheaper', ai: true },
  { label: 'No staffing issues', ai: true },
  { label: 'Instant scalability', ai: true },
]

export default function WhyPyrix() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Why Businesses Choose Pyrix AI Over Human Receptionists</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Column title="Pyrix AI" positive />
          <Column title="Human Receptionists" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(700px_400px_at_50%_-10%,rgba(56,189,248,0.5),transparent_60%)]" />
    </section>
  )
}

function Column({ title, positive }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-white/90">{title}</h3>
        {positive && <span className="text-[10px] uppercase tracking-widest text-cyan-300/80">Recommended</span>}
      </div>
      <div className="mt-4 divide-y divide-white/10">
        {rows.map((r, i) => (
          <div key={r.label} className="flex items-center justify-between py-3">
            <span className="text-sm text-white/70">{r.label}</span>
            <motion.span
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: i * 0.05 }}
              className="ml-6"
            >
              {positive ? (
                <Check className="h-5 w-5 text-cyan-300" />
              ) : (
                <XCircle className="h-5 w-5 text-white/40" />
              )}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  )
}
