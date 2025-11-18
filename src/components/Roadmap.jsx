import { motion } from 'framer-motion'
import { Brain, PhoneCall, Settings, Database, GraduationCap, Rocket, PlugZap } from 'lucide-react'

const steps = [
  {
    title: 'Discovery & Goals',
    desc: 'We map your ideal outcomes, brand voice, and call flows. You choose your preferred voice.',
    icon: Brain
  },
  {
    title: 'Data Intake',
    desc: 'We ingest your site, FAQs, offers, pricing logic, and playbooks so Pyrix knows your business inside‑out.',
    icon: Database
  },
  {
    title: 'Design Call Scripts',
    desc: 'We craft persuasive scripts that convert — objections, qualifiers, and next‑step framing.',
    icon: GraduationCap
  },
  {
    title: 'Configure Brain',
    desc: 'We tune policies, memory, and guardrails. The AI mirrors your best rep, consistently.',
    icon: Settings
  },
  {
    title: 'Phone Integration',
    desc: 'Plug into your phone system. Set to answer when you miss calls — or 24/7. Your choice.',
    icon: PlugZap
  },
  {
    title: 'Go Live & Iterate',
    desc: 'We launch, monitor, and train on real calls weekly. You request tweaks anytime — included.',
    icon: Rocket
  }
]

export default function Roadmap() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(700px_400px_at_80%_30%,rgba(56,189,248,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">How Pyrix Learns Your Business</h2>
        <p className="mt-3 text-center text-white/70">A clear, visual path from discovery to bookings — built for speed and precision.</p>

        <div className="mt-12 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ delay: i * 0.05 }}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${i % 2 ? 'md:text-left' : 'md:text-right'}`}
              >
                <div className={`${i % 2 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60">Step {i+1}</div>
                  <h3 className="mt-3 text-xl font-medium text-white/90">{s.title}</h3>
                  <p className="mt-2 text-white/70 max-w-xl">{s.desc}</p>
                </div>
                <div className={`${i % 2 ? 'md:order-1' : ''} mx-auto`}>
                  <div className="grid h-28 w-28 place-items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                    <s.icon className="h-12 w-12 text-cyan-300" />
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-5 w-5 rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-white/70 text-sm">
          Monthly subscription covers ongoing tweaks and fixes — request changes anytime, we iterate weekly.
        </div>
      </div>
    </section>
  )
}
