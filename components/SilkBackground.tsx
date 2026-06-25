'use client'

import dynamic from 'next/dynamic'

// react-three-fiber is browser-only — load client-side to avoid SSR.
const Silk = dynamic(() => import('./ui/Silk'), { ssr: false })

export default function SilkBackground() {
  return (
    <Silk
      speed={4}
      scale={1}
      color="#264D52"
      noiseIntensity={1.4}
      rotation={0.1}
    />
  )
}
