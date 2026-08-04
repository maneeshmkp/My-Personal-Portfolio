"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Tilt3D from "@/components/tilt-3d"

const roles = [
  "Software Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "Competitive Programmer",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [spot, setSpot] = useState({ x: 50, y: 40 })

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (hash: string) => {
    if (typeof window !== "undefined") window.location.hash = hash
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden grain pt-28 pb-20"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setSpot({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }}
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 transition-[background] duration-500"
          style={{
            background: `radial-gradient(640px circle at ${spot.x}% ${spot.y}%, hsl(var(--primary) / 0.2), transparent 45%)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.55)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.55)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_65%_55%_at_35%_40%,black,transparent)]" />
        <div className="blob absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-primary/25 blur-3xl" />
        <div className="blob blob-delay absolute top-[18%] right-[-8%] h-[440px] w-[440px] rounded-full bg-[hsl(var(--gold)/0.22)] blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background via-background/85 to-transparent" />
      </div>

      <div className="container relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-7 animate-rise glass rounded-xl px-3 py-1.5 border border-border/60">
              <span className="relative flex h-2 w-2">
                <span className="soft-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <p className="font-mono-tech text-[11px] md:text-xs tracking-[0.22em] uppercase text-muted-foreground">
                Available · Agra, India
              </p>
            </div>

            <h1 className="font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.88] font-extrabold tracking-[-0.04em] animate-rise animate-rise-delay-1 title-3d">
              Maneesh
              <br />
              <span className="text-gradient">Kumar</span>
            </h1>

            <div className="mt-8 md:mt-9 max-w-lg animate-rise animate-rise-delay-2">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                Passionate about software development and backend engineering — designing APIs, scalable systems, and products that ship. Building TravelPlan and more.
              </p>
              <div className="mt-4 h-7 overflow-hidden">
                <p
                  key={roleIndex}
                  className="font-mono-tech text-sm md:text-base text-foreground/85 animate-rise"
                >
                  <span style={{ color: "hsl(var(--gold))" }}>◆</span> {roles[roleIndex]}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-rise animate-rise-delay-3">
              <Button
                size="lg"
                className="font-display text-base h-12 px-8 rounded-xl shadow-[0_14px_40px_-10px_hsl(var(--primary)/0.55)] hover:-translate-y-1 hover:shadow-[0_20px_48px_-10px_hsl(var(--primary)/0.65)] transition-all"
                onClick={() => scrollTo("#projects")}
              >
                View work
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <a href="/Maneesh_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-display text-base h-12 px-8 rounded-xl w-full sm:w-auto glass border-border hover:-translate-y-1 transition-all"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md animate-rise animate-rise-delay-2 scene-3d">
            <div className="orbit-ring absolute inset-[-12%] rounded-full border border-dashed border-primary/30 pointer-events-none" />
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-[hsl(var(--gold)/0.2)] blur-2xl -z-10" />
            <Tilt3D className="rounded-[1.75rem]" intensity={14}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] frame-3d">
                <Image
                  src="https://avatars.githubusercontent.com/u/149099977?v=4"
                  alt="Maneesh Kumar"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-white/10" />
              </div>
            </Tilt3D>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo("#about")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-10"
        aria-label="Scroll to about"
      >
        <span className="font-mono-tech text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  )
}
