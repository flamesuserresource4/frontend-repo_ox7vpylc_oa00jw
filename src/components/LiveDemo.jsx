import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, PhoneCall } from 'lucide-react'

const sampleConversation = [
  { role: 'agent', text: 'Hi! Thanks for calling. How can I help you today?' },
  { role: 'user', text: 'I need to book a consultation for tomorrow afternoon.' },
  { role: 'agent', text: 'Absolutely. I can do that. What time works best for you?' },
  { role: 'user', text: 'Anytime after 2pm.' },
  { role: 'agent', text: 'Got it. You’re booked for 2:30pm. You’ll receive a confirmation text in a moment.' },
]

export default function LiveDemo(){
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    let t
    if(playing){
      setIndex(0)
      t = setInterval(() => {
        setIndex(prev => {
          if(prev >= sampleConversation.length - 1){
            clearInterval(t)
            setPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, 1600)
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
          <p className="mt-3 text-slate-300/80">Call Pyrix AI and watch subtitles animate in real time.</p>
        </div>

        <div className="relative grid w-full grid-cols-1 items-start gap-8 sm:grid-cols-2">
          {/* Phone UI */}
          <div className="relative mx-auto w-[320px] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-slate-900/40 to-slate-900/80 p-4 shadow-[0_15px_120px_rgba(59,130,246,0.25)] backdrop-blur">
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
          <div className="space-y-3">
            {sampleConversation.map((m, i) => (
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
        </div>
      </div>
    </section>
  )
}
