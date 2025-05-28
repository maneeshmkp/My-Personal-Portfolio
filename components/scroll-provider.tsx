"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ScrollContextType {
  scrollToSection: (sectionId: string) => void
  isInView: (sectionId: string) => boolean
  registerSection: (sectionId: string) => void
  unregisterSection: (sectionId: string) => void
  markSectionAsVisible: (sectionId: string) => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [registeredSections, setRegisteredSections] = useState<Set<string>>(new Set())

  // Safe scroll function that uses browser APIs
  const scrollToSection = (sectionId: string) => {
    if (typeof window === "undefined") return

    const id = sectionId.replace("#", "")
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      // Fallback to hash change
      window.location.hash = sectionId
    }
  }

  // Check if a section is in view
  const isInView = (sectionId: string) => {
    return visibleSections.has(sectionId)
  }

  // Register a section
  const registerSection = (sectionId: string) => {
    setRegisteredSections((prev) => {
      const newSet = new Set(prev)
      newSet.add(sectionId)
      return newSet
    })
  }

  // Unregister a section
  const unregisterSection = (sectionId: string) => {
    setRegisteredSections((prev) => {
      const newSet = new Set(prev)
      newSet.delete(sectionId)
      return newSet
    })

    setVisibleSections((prev) => {
      const newSet = new Set(prev)
      newSet.delete(sectionId)
      return newSet
    })
  }

  // Mark a section as visible
  const markSectionAsVisible = (sectionId: string) => {
    setVisibleSections((prev) => {
      const newSet = new Set(prev)
      newSet.add(sectionId)
      return newSet
    })
  }

  return (
    <ScrollContext.Provider
      value={{
        scrollToSection,
        isInView,
        registerSection,
        unregisterSection,
        markSectionAsVisible,
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider")
  }
  return context
}
