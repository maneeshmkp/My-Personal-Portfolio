"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Reveal from "@/components/reveal"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send email")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-[hsl(var(--gold)/0.1)] blur-3xl -z-10" />
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <Reveal>
            <p className="font-mono-tech text-xs tracking-[0.22em] uppercase text-primary mb-3">07 — Contact</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance leading-[1.05]">
              Let&apos;s build something that{" "}
              <span className="text-gradient">stands out</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md">
              Open to software development and backend engineering roles — full-time, freelance, or collaboration.
              Drop a message — I usually reply within a day.
            </p>

            <ul className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "connect.to.maneeshmkp@gmail.com", href: "mailto:connect.to.maneeshmkp@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 8077439938", href: "tel:+918077439938" },
                { icon: MapPin, label: "Location", value: "Agra, Uttar Pradesh", href: undefined },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono-tech text-xs tracking-wider uppercase text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-base md:text-lg font-medium hover:text-primary transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base md:text-lg font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] depth-card p-10 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Message sent</h3>
                <p className="text-muted-foreground mb-6">Thanks — I&apos;ll get back to you soon.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-xl">
                  Send another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[1.5rem] depth-card p-6 md:p-8 space-y-4"
              >
                {error && (
                  <div className="rounded-lg bg-destructive/10 text-destructive text-sm p-3">{error}</div>
                )}
                <Input name="name" placeholder="Your name" required className="h-12 bg-muted/50 border-border/50 rounded-xl" />
                <Input name="email" type="email" placeholder="Your email" required className="h-12 bg-muted/50 border-border/50 rounded-xl" />
                <Input name="subject" placeholder="Subject" required className="h-12 bg-muted/50 border-border/50 rounded-xl" />
                <Textarea
                  name="message"
                  placeholder="Tell me about the role or idea…"
                  rows={5}
                  required
                  className="bg-muted/50 border-border/50 rounded-xl resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl font-display text-base shadow-[0_12px_36px_-12px_hsl(var(--primary)/0.5)]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send message <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
