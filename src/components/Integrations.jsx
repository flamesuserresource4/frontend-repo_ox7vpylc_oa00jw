import { motion } from 'framer-motion'
import { Calendar, CalendarClock, CalendarDays, NotepadText, Workflow, CreditCard, MessageSquare, Zap } from 'lucide-react'

const tools = [
  { name: 'Google Calendar', icon: CalendarDays },
  { name: 'Calendly', icon: CalendarClock },
  { name: 'Outlook', icon: Calendar },
  { name: 'Notion', icon: NotepadText },
  { name: 'HubSpot', icon: Workflow },
  { name: 'Stripe', icon: CreditCard },
  { name: 'Slack', icon: MessageSquare },
  { name: 'Zapier', icon: Zap },
]

export default function Integrations() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Integrates With Your Favorite Tools</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((t, i) => (
            <Tile key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(700px_400px_at_80%_-10%,rgba(56,189,248,0.5),transparent_60%)]" />
    </section>
  )
}

function Tile({ name, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur text-center"
    >
      <div className="mx-auto w-12 h-12 grid place-items-center rounded-lg border border-white/10 bg-white/5">
        <Icon className="h-6 w-6 text-white/80 group-hover:text-cyan-300 transition" />
      </div>
      <p className="mt-3 text-sm text-white/70">{name}</p>
      <div className="mt-4 h-1 w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  )
}
