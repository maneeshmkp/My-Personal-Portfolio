"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { useScroll } from "./scroll-provider"

interface SectionObserverProps {
  sectionId: string
  children: React.ReactNode
  className?: string
  threshold?: number
}

export function SectionObserver({ sectionId, children, className = "", threshold = 0.1 }: SectionObserverProps) {
  const { registerSection, unregisterSection, markSectionAsVisible } = useScroll()
  const ref = useRef<HTMLElement>(null)
  const id = sectionId.replace("#", "")

  useEffect(() => {
    // Register this section with the scroll context
    registerSection(sectionId)

    return () => {
      // Clean up on unmount
      unregisterSection(sectionId)
    }
  }, [sectionId, registerSection, unregisterSection])

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markSectionAsVisible(sectionId)

            // Add animation class directly to the element
            if (entry.target instanceof HTMLElement) {
              entry.target.classList.add("animate-in")
            }
          }
        })
      },
      { threshold },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [sectionId, markSectionAsVisible, threshold])

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  )
}
