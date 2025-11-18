import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    priceMonthly: 79,
    features: [
      'Up to 500 minutes',
      'Core voice receptionist',
      'Basic booking flows',
      'Email + chat support',
    ],
  },
  {
    name: 'Pro',
    priceMonthly: 199,
    recommended: true,
    features: [
      'Up to 2,500 minutes',
      'Advanced workflows',
      'Calendar integrations',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    priceMonthly: 0,
    features: [
      'Unlimited minutes',
      'Custom workflows',
      'Dedicated success manager',
      'SLA + Security reviews',
    ],
    custom: true,
  },
]

export default function Pricing() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Transparent pricing</h2>
          <p className="mt-3 text-white/60">Choose a plan that scales with you. Switch anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl border ${p.recommended ? 'border-cyan-400/30' : 'border-white/10'} bg-white/5 backdrop-blur p-6 overflow-hidden`}
            >
              {p.recommended && (
                <span className="absolute right-4 top-4 rounded-full bg-cyan-500/20 px-2 py-1 text-[10px] tracking-widest uppercase text-cyan-300 animate-pulse">Recommended</span>
              )}
              <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(500px_200px_at_50%_-40%,rgba(56,189,248,0.2),transparent_60%)]" />
              <h3 className="text-lg font-medium text-white/90">{p.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                {p.custom ? (
                  <span className="text-3xl font-semibold">Custom</span>
                ) : (
                  <><span className="text-3xl font-semibold">${p.priceMonthly}</span><span className="text-white/40 mb-1">/mo</span></>
                )}
              </div>
              <ul className="mt-6 space-y-2">
                {p.features.map(f => (
                  <li key={f} className="text-sm text-white/70">• {f}</li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-lg border ${p.recommended ? 'border-cyan-300 bg-cyan-500/10' : 'border-white/15 bg-white/5'} py-2 text-sm hover:bg-white/10 transition`}>{p.custom ? 'Talk to sales' : 'Start now'}</button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(700px_400px_at_20%_-10%,rgba(56,189,248,0.5),transparent_60%)]" />
    </section>
  )
}
