"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
]

export default function MotivationalQuote() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isMounted])

  if (!isMounted) {
    return (
      <div className="py-8 md:py-12 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center relative">
            <Quote className="h-10 w-10 text-primary/20 mx-auto mb-4" />
            <div className="h-24"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 md:py-12 bg-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center relative">
          <Quote className="h-10 w-10 text-primary/20 mx-auto mb-4" />

          <div className="transition-opacity duration-1000">
            <p className="text-xl md:text-2xl font-medium italic mb-4">"{quotes[currentQuote].text}"</p>
            <p className="text-sm md:text-base text-muted-foreground">— {quotes[currentQuote].author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
