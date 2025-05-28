"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      window.location.hash = sectionId
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(149,76,233,0.15),transparent_50%)]" />

      <div className="container max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in">
          Hi, I'm <span className="text-primary">Maneesh Kumar</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in">
          Full Stack Developer & UI/UX Designer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in">
          <Button size="lg" className="text-base" onClick={() => scrollToSection("#experience")}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="text-base">
            Download CV
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={() => scrollToSection("#about")} aria-label="Scroll down">
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  )
}
