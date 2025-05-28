"use client"

import { createContext, useContext, type ReactNode } from "react"

interface ScrollContextType {
  scrollToSection: (sectionId: string) => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollToSection = (sectionId: string) => {
    if (typeof window === "undefined") return

    try {
      const id = sectionId.replace("#", "")
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.warn("Scroll failed:", error)
    }
  }

  return <ScrollContext.Provider value={{ scrollToSection }}>{children}</ScrollContext.Provider>
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider")
  }
  return context
}
