"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface SafeIntersectionObserverProps {
  children: React.ReactNode
  onIntersect?: () => void
  threshold?: number
  className?: string
  id?: string
}

export function SafeIntersectionObserver({
  children,
  onIntersect,
  threshold = 0.1,
  className = "",
  id,
}: SafeIntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined" || !ref.current) return

    let observer: IntersectionObserver | null = null

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setIsVisible(true)
              onIntersect?.()

              // Add animation class safely
              if (entry.target instanceof HTMLElement) {
                entry.target.classList.add("animate-in")
              }
            }
          })
        },
        { threshold },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }
    } catch (error) {
      console.warn("IntersectionObserver not supported:", error)
      // Fallback: just show the content
      setIsVisible(true)
      onIntersect?.()
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [isMounted, onIntersect, threshold, isVisible])

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  )
}
