"use client"

import { useRef, useState, type ReactNode, type MouseEvent, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface Tilt3DProps {
  children: ReactNode
  className?: string
  intensity?: number
  glare?: boolean
}

export default function Tilt3D({ children, className, intensity = 12, glare = true }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<CSSProperties>({})
  const [glareStyle, setGlareStyle] = useState<CSSProperties>({ opacity: 0 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * intensity
    const rotateX = (0.5 - y) * intensity

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`,
    })
    setGlareStyle({
      opacity: 0.35,
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.55), transparent 55%)`,
    })
  }

  const handleLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)",
    })
    setGlareStyle({ opacity: 0 })
  }

  return (
    <div
      ref={ref}
      className={cn("tilt-3d relative will-change-transform", className)}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 mix-blend-overlay"
          style={glareStyle}
          aria-hidden
        />
      )}
    </div>
  )
}
