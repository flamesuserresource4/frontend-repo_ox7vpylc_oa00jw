import { motion } from 'framer-motion'
import { Check, XCircle } from 'lucide-react'

const comparisons = [
  { label: 'Availability: 24/7 with instant response', ai: true, human: false },
  { label: 'Never misses a call or forgets details', ai: true, human: false },
  { label: 'Consistent script that always follows best practices', ai: true, human: false },
  { label: 'Scales to spikes in demand without wait times', ai: true, human: false },
  { label: 'Data‑driven improvements from every call', ai: true, human: false },
  { label: 'Fluent in multiple languages and accents on demand', ai: true, human: false },
  { label: 'Seamless calendar booking and confirmation flows', ai: true, human: true },
  { label: 'Compliance: call recording, audit trail, opt‑ins', ai: true, human: false },
  { label: 'No sick days, no turnover, no hiring overhead', ai: true, human: false },
  { label: 'Lower cost per successful booking at scale', ai: true, human: false },
]

export default function WhyPyrix() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Pyrix AI vs. Human Receptionists</h2>
        <p className="mt-3 text-center text-white/70">Valid, practical reasons teams switch: performance, reliability, and measurable outcomes.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Column title="Pyrix AI" positive values={comparisons.map(c => ({ label: c.label, val: c.ai }))} />
          <Column title="Human Receptionists" values={comparisons.map(c => ({ label: c.label, val: c.human }))} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(700px_400px_at_50%_-10%,rgba(56,189,248,0.5),transparent_60%)]" />
    </section>
  )
}

function Column({ title, values, positive }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-white/90">{title}</h3>
        {positive && <span className="text-[10px] uppercase tracking-widest text-cyan-300/80">Recommended</span>}
      </div>
      <div className="mt-4 divide-y divide-white/10">
        {values.map((r, i) => (
          <div key={r.label} className="flex items-center justify-between py-3">
            <span className="text-sm text-white/70">{r.label}</span>
            <motion.span
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: i * 0.04 }}
              className="ml-6"
            >
              {r.val ? (
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
