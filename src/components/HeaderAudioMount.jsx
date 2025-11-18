import React, { useEffect } from 'react'
import { AudioToggleFloating, AudioProvider, useAudio } from './AudioProvider'

export default function HeaderAudioMount({ children }) {
  return (
    <AudioProvider>
      <StartupSound />
      <AudioToggleFloating />
      {children}
    </AudioProvider>
  )
}

function StartupSound() {
  const { playChime } = useAudio()
  useEffect(() => {
    // Play a short subtle chime once the user interacts (mobile restriction friendly)
    const onFirst = () => {
      try { playChime() } catch {}
      window.removeEventListener('pointerdown', onFirst)
      window.removeEventListener('keydown', onFirst)
    }
    window.addEventListener('pointerdown', onFirst, { once: true })
    window.addEventListener('keydown', onFirst, { once: true })
    return () => {
      window.removeEventListener('pointerdown', onFirst)
      window.removeEventListener('keydown', onFirst)
    }
  }, [playChime])
  return null
}
