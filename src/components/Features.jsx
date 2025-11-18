import { motion } from 'framer-motion'
import { Clock, CalendarDays, Languages, Cpu, Stars, CheckCircle2, MessageSquare, Bot, FileText, Sparkles } from 'lucide-react'

const items = [
  { icon: Clock, label: '24/7 Automatic Answering' },
  { icon: CalendarDays, label: 'Calendar & Booking Integration' },
  { icon: Stars, label: 'Natural Voice & Tone' },
  { icon: Languages, label: 'Multi-Language Support' },
  { icon: Cpu, label: 'CRM Integration' },
  { icon: Bot, label: 'Custom Personality Training' },
  { icon: CheckCircle2, label: 'Lead Qualification' },
  { icon: FileText, label: 'Call Transcripts' },
  { icon: MessageSquare, label: 'Instant SMS Follow-Ups' },
]

export default function Features(){
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-b from-slate-100 to-slate-300 bg-clip-text text-transparent">Engineered for scale</h2>
        <p className="mt-3 text-slate-300/80">Premium feature set designed for modern businesses.</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i*0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-sky-500/10 via-fuchsia-500/10 to-amber-400/10 blur-2xl" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-sky-300 shadow-inner">
                <it.icon className="h-5 w-5" />
              </div>
              <p className="font-medium text-slate-100">{it.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
