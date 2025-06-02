"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    image: "/client1.jpg?height=100&width=100",
    quote:
      "Maneesh is an exceptional developer with a keen eye for detail. His ability to solve complex problems quickly made our project a success. I would gladly work with him again on future projects.",
  },
  {
    id: 2,
    name: "Edmond Dantès",
    position: "Project Manager",
    company: "InnovateSoft",
    image: "/client2.jpg?height=100&width=100",
    quote:
      "Working with Maneesh was a pleasure. His technical skills are impressive, and he consistently delivered high-quality code ahead of schedule. His communication skills made collaboration seamless.",
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "UI/UX Designer",
    company: "DesignHub",
    image: "/client3.jpg?height=100&width=100",
    quote:
      "Maneesh has a rare combination of technical expertise and design sensibility. He implemented my designs perfectly and even suggested improvements that enhanced the user experience.",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CTO",
    company: "StartupX",
    image: "/client4.jpg?height=100&width=100",
    quote:
      "I was impressed by Maneesh's ability to quickly understand our complex codebase and make significant improvements. His C++ optimizations resulted in a 40% performance boost for our application.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in">
            Client <span className="text-primary">Testimonials</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="border bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <Quote className="h-8 w-8 text-primary/30 mb-2" />
                            <p className="text-lg italic mb-6">{testimonial.quote}</p>
                            <div className="text-right">
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.position}, {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-0 -translate-y-1/2 md:-left-12"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-0 -translate-y-1/2 md:-right-12"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
