"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Profiles", href: "#coding-profiles" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 24)
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (typeof window !== "undefined") window.location.hash = href
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/50 shadow-[0_8px_30px_-18px_hsl(var(--foreground)/0.25)]" : "bg-transparent"
      }`}
    >
      <div
        className="scroll-progress absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-[hsl(var(--gold))] to-primary"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
      />

      <div className="container flex items-center justify-between h-16 md:h-[4.25rem]">
        <Link
          href="#home"
          className="font-display text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          MK<span className="text-gradient">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 rounded-xl border border-border/60 bg-background/40 p-1 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-lg transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-1 pl-1 border-l border-border/60">
            <ModeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-6 py-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-display text-2xl font-semibold block py-2 hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
