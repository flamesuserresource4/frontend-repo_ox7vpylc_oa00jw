import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const AudioCtx = createContext({
  enabled: false,
  toggle: () => {},
  playClick: () => {},
  playChime: () => {},
  playDing: () => {},
})

export function AudioProvider({ children }) {
  const [enabled, setEnabled] = useState(false)
  const audioRef = useRef(null)
  const ambientGainRef = useRef(null)

  const ensureContext = useCallback(() => {
    if (!audioRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const masterGain = ctx.createGain()
      masterGain.gain.value = 0.0
      masterGain.connect(ctx.destination)
      audioRef.current = { ctx, masterGain }
    }
    return audioRef.current
  }, [])

  // Ambient "futuristic hum" using detuned oscillators
  const startAmbient = useCallback(() => {
    const a = ensureContext()
    const ctx = a.ctx
    if (ambientGainRef.current) return

    const gain = ctx.createGain()
    gain.gain.value = 0.0

    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const osc3 = ctx.createOscillator()

    osc1.type = 'sine'
    osc2.type = 'sawtooth'
    osc3.type = 'triangle'

    osc1.frequency.value = 48
    osc2.frequency.value = 96
    osc3.frequency.value = 24

    osc2.detune.value = 5
    osc3.detune.value = -7

    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.type = 'sine'
    lfo.frequency.value = 0.05
    lfoGain.gain.value = 0.02

    lfo.connect(lfoGain)
    lfoGain.connect(gain.gain)

    osc1.connect(gain)
    osc2.connect(gain)
    osc3.connect(gain)

    gain.connect(a.masterGain)

    osc1.start()
    osc2.start()
    osc3.start()
    lfo.start()

    ambientGainRef.current = { gain, nodes: [osc1, osc2, osc3, lfo] }

    // fade in
    const now = ctx.currentTime
    a.masterGain.gain.cancelScheduledValues(now)
    a.masterGain.gain.linearRampToValueAtTime(0.0, now)
    a.masterGain.gain.linearRampToValueAtTime(0.15, now + 1.2)
  }, [ensureContext])

  const stopAmbient = useCallback(() => {
    const a = audioRef.current
    const amb = ambientGainRef.current
    if (!a || !amb) return
    const now = a.ctx.currentTime
    a.masterGain.gain.cancelScheduledValues(now)
    a.masterGain.gain.linearRampToValueAtTime(0.0, now + 0.6)
  }, [])

  const toggle = useCallback(() => {
    const next = !enabled
    setEnabled(next)
    if (next) {
      startAmbient()
    } else {
      stopAmbient()
    }
  }, [enabled, startAmbient, stopAmbient])

  // SFX helpers
  const playTone = useCallback((freq = 440, duration = 0.12, type = 'sine', volume = 0.25) => {
    const a = ensureContext()
    const ctx = a.ctx
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = type
    osc.frequency.value = freq
    gain.gain.value = 0
    osc.connect(gain)
    gain.connect(a.masterGain)
    const now = ctx.currentTime
    gain.gain.linearRampToValueAtTime(enabled ? volume : 0, now + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    osc.start(now)
    osc.stop(now + duration)
  }, [enabled, ensureContext])

  const playClick = useCallback(() => {
    playTone(320, 0.08, 'square', 0.2)
  }, [playTone])

  const playChime = useCallback(() => {
    playTone(880, 0.12, 'sine', 0.22)
    setTimeout(() => playTone(1320, 0.12, 'sine', 0.18), 70)
  }, [playTone])

  const playDing = useCallback(() => {
    playTone(740, 0.14, 'triangle', 0.22)
  }, [playTone])

  const value = useMemo(() => ({ enabled, toggle, playClick, playChime, playDing }), [enabled, toggle, playClick, playChime, playDing])

  return (
    <AudioCtx.Provider value={value}>
      {children}
    </AudioCtx.Provider>
  )
}

export function useAudio() {
  return useContext(AudioCtx)
}

export function AudioToggleFloating() {
  const { enabled, toggle } = useAudio()
  return (
    <button onClick={toggle} className="fixed right-4 top-4 z-50 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-2 text-xs text-white hover:bg-white/10 transition flex items-center gap-2">
      {enabled ? <Volume2 className="h-4 w-4 text-cyan-300" /> : <VolumeX className="h-4 w-4 text-white/70" />}
      <span className="hidden sm:inline">{enabled ? 'Sound on' : 'Sound off'}</span>
    </button>
  )
}
