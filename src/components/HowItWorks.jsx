import { motion } from 'framer-motion'
import { CalendarCheck, PhoneCall, Moon } from 'lucide-react'

const cardVariants = {
  initial: { y: 10, opacity: 0 },
  animate: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }})
}

export default function HowItWorks(){
  const cards = [
    {
      icon: PhoneCall,
      title: 'Answers Your Calls',
      lines: ['Handles every call instantly','Sounds human, feels natural','Custom personality trained to your brand'],
      hover: (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className="w-1.5 rounded bg-gradient-to-t from-cyan-500/30 via-fuchsia-500/30 to-amber-400/30" style={{ height: `${8 + (i%7)*6}px`}} />
            ))}
          </div>
        </div>
      )
    },
    {
      icon: CalendarCheck,
      title: 'Books Appointments Automatically',
      lines: ['Integrates with Google, Outlook, Calendly','Real-time booking','No double bookings'],
      hover: (
        <div className="absolute inset-x-6 bottom-8 rounded-xl glass p-3">
          <div className="flex items-center justify-between text-xs text-slate-200/80">
            <span>11:30 AM</span>
            <span className="rounded bg-sky-400/20 px-2 py-0.5 text-sky-200">Booked</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded bg-white/10">
            <div className="h-full w-1/2 animate-[shimmer_1.8s_ease_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </div>
      )
    },
    {
      icon: Moon,
      title: 'Works 24/7',
      lines: ['Never misses a call','Works while you sleep','For founders and scaled teams'],
      hover: (
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 blur-xl" />
            <div className="absolute inset-2 rounded-full glass" />
          </div>
        </div>
      )
    },
  ]

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-b from-slate-100 to-slate-300 bg-clip-text text-transparent">How it works</h2>
        <p className="mt-3 text-slate-300/80 max-w-2xl">A premium, visual flow that explains how Pyrix AI handles calls, books, and never sleeps.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            custom={i}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition will-change-transform hover:scale-[1.02]"
          >
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px 200px at 50% 0%, rgba(56,189,248,0.12), transparent)' }} />
            <div className="relative z-10">
              <c.icon className="h-6 w-6 text-sky-300" />
              <h3 className="mt-4 text-xl font-semibold text-slate-100">{c.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-300/90">
                {c.lines.map(l => <li key={l}>• {l}</li>)}
              </ul>
            </div>
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {c.hover}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(200%)} }
      `}</style>
    </section>
  )
}
