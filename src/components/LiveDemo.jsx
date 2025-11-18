import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, PhoneCall, CalendarCheck2 } from 'lucide-react'

const script = [
  { role: 'agent', text: 'Hi! You\'re through to Pyrix AI for Nova Dental. How can I help today?' },
  { role: 'user', text: 'Hi, I\'d like to book a new patient consultation.' },
  { role: 'agent', text: 'Happy to help. Do mornings or afternoons work better?' },
  { role: 'user', text: 'Afternoons please.' },
  { role: 'agent', text: 'Got it. I\'m seeing options this week on Wednesday at 2:00, 2:30, or 3:15. Which would you prefer?' },
  { role: 'user', text: '2:30 works.' },
  { role: 'agent', text: 'Perfect, a few quick details — can I get your full name?' },
  { role: 'user', text: 'It\'s Jordan Rivera.' },
  { role: 'agent', text: 'Thanks Jordan. Best contact number?' },
  { role: 'user', text: '555‑0192.' },
  { role: 'agent', text: 'Email for confirmation and forms?' },
  { role: 'user', text: 'jordan@example.com.' },
  { role: 'agent', text: 'Great. Any concerns you want the doctor to focus on?' },
  { role: 'user', text: 'Teeth sensitivity on the left side.' },
  { role: 'agent', text: 'Noted. I\'ve reserved Wednesday 2:30pm for you. I\'m sending a confirmation with directions and a calendar invite.' },
  { role: 'user', text: 'Sounds good.' },
  { role: 'agent', text: 'One more thing — would you like SMS reminders 24 hours and 2 hours before the appointment?' },
  { role: 'user', text: 'Yes please.' },
  { role: 'agent', text: 'Done. You\'re all set. Anything else I can help with?' },
  { role: 'user', text: 'That\'s all. Thanks.' },
  { role: 'agent', text: 'My pleasure. I\'ll stay on the line while your booking opens. You can also reschedule anytime via the link.' },
]

export default function LiveDemo(){
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [index, setIndex] = useState(-1)
  const [showCalendly, setShowCalendly] = useState(false)

  useEffect(() => {
    let t
    if(playing){
      setIndex(0)
      t = setInterval(() => {
        setIndex(prev => {
          if(prev >= script.length - 1){
            clearInterval(t)
            setPlaying(false)
            setTimeout(() => setShowCalendly(true), 800)
            return prev
          }
          return prev + 1
        })
      }, 1400)
    } else {
      setIndex(-1)
    }
    return () => clearInterval(t)
  }, [playing])

  const handleCall = () => {
    if(playing){
      setPlaying(false)
      audioRef.current && audioRef.current.pause()
    } else {
      setShowCalendly(false)
      setPlaying(true)
      audioRef.current && audioRef.current.play()
    }
  }

  return (
    <section id="demo" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="absolute inset-0 -z-10 grid place-items-center">
        <div className="h-72 w-72 rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.15),rgba(217,70,239,0.15),rgba(251,191,36,0.15),rgba(56,189,248,0.15))] blur-2xl animate-pulse" />
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-b from-slate-100 to-slate-300 bg-clip-text text-transparent">Live Demo</h2>
          <p className="mt-3 text-slate-300/80">Realistic call flow with automatic booking at the end.</p>
        </div>

        <div className="relative grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Phone UI */}
          <div className="relative mx-auto w-[320px] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-slate-900/40 to-slate-900/80 p-4 shadow-[0_15px_120px_rgba(59,130,246,0.25)] backdrop-blur lg:col-span-1">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="mx-auto h-[540px] rounded-[1.2rem] border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-900/80 p-6">
                <div className="flex items-center justify-between text-slate-200">
                  <div className="text-sm">Pyrix AI</div>
                  <Phone className="h-4 w-4 opacity-70" />
                </div>
                <div className="mt-16 grid place-items-center">
                  <div className="relative h-40 w-40">
                    <div className="absolute inset-0 animate-[ping_2s_linear_infinite] rounded-full bg-sky-500/20" />
                    <div className="absolute inset-0 rounded-full border border-sky-400/40" />
                    <div className="absolute inset-6 rounded-full border border-fuchsia-400/30" />
                    <div className="absolute inset-12 rounded-full border border-amber-400/20" />
                  </div>
                </div>
                <button onClick={handleCall} className="mt-16 w-full rounded-xl bg-gradient-to-b from-sky-400 to-sky-600 py-3 font-semibold text-slate-900 shadow hover:brightness-110 transition">
                  {playing ? 'End Call' : 'Call Pyrix AI'}
                </button>
                <audio ref={audioRef} src="/sample-call.mp3" preload="auto" />
              </div>
            </div>
          </div>

          {/* Subtitles */}
          <div className="space-y-3 lg:col-span-1">
            {script.map((m, i) => (
              <motion.div
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={index >= i ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`max-w-xl rounded-2xl border border-white/10 px-4 py-3 text-sm backdrop-blur ${m.role==='agent' ? 'ml-0 bg-white/10 text-slate-100' : 'ml-16 bg-sky-500/10 text-sky-100'}`}
              >
                <div className="flex items-center gap-2">
                  {m.role==='agent' ? <PhoneCall className="h-4 w-4 opacity-70" /> : null}
                  <p>{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Calendly */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={showCalendly ? { opacity: 1, y: 0 } : { opacity: 0.4 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 text-white/70 text-sm">
                <CalendarCheck2 className="h-4 w-4 text-cyan-300" />
                <span>Calendly • Auto‑booking</span>
              </div>
              <div className="aspect-[9/14] w-full">
                <iframe
                  title="Book with Pyrix AI"
                  src="https://calendly.com/your-calendly/pyrix-ai-demo"
                  className="h-full w-full"
                  frameBorder="0"
                />
              </div>
            </motion.div>
            <p className="mt-2 text-xs text-white/60">When the conversation finishes, the calendar opens automatically.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
