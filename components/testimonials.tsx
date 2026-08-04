"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Senior Developer",
    company: "TechCorp",
    image: "/client1.jpg",
    quote:
      "Maneesh is an exceptional developer with a keen eye for detail. His ability to solve complex problems quickly made our project a success.",
  },
  {
    id: 2,
    name: "Edmond Dantès",
    position: "Project Manager",
    company: "InnovateSoft",
    image: "/client2.jpg",
    quote:
      "Working with Maneesh was a pleasure. He consistently delivered high-quality code ahead of schedule — collaboration felt seamless.",
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "UI/UX Designer",
    company: "DesignHub",
    image: "/client3.jpg",
    quote:
      "Maneesh has a rare mix of technical depth and design sense. He implemented my designs perfectly and suggested UX improvements.",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CTO",
    company: "StartupX",
    image: "/client4.jpg",
    quote:
      "He quickly understood our codebase and made significant improvements. His C++ optimizations delivered a 40% performance boost.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  return (
    <section id="testimonials" className="section-pad relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
      <div className="container max-w-4xl">
        <Reveal>
          <div className="flex items-end gap-6 mb-4 justify-center">
            <div className="hidden sm:block flex-1 hairline mb-1.5 max-w-[120px]" />
            <p className="font-mono-tech text-xs tracking-[0.22em] uppercase text-primary">06 — Words</p>
            <div className="hidden sm:block flex-1 hairline mb-1.5 max-w-[120px]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-14 text-center">
            What people say
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative rounded-[1.5rem] depth-card p-8 md:p-12 text-center">
            <Quote className="h-10 w-10 text-primary/30 mx-auto mb-6" />
            <p className="font-display text-xl md:text-2xl leading-relaxed text-balance mb-10">
              &ldquo;{active.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                <Image src={active.image} alt={active.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold">{active.name}</p>
                <p className="text-sm text-muted-foreground">
                  {active.position}, {active.company}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl"
                onClick={() => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-primary/30"
                    }`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl"
                onClick={() => setActiveIndex((i) => (i + 1) % testimonials.length)}
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
