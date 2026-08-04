"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send email")
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-in">
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new
                projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="text-lg space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">connect.to.maneeshmkp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+91 8077439938</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Agra, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-in">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              {isSubmitted ? (
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                  <p className="text-lg text-muted-foreground">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                  <Button className="text-lg mt-4" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-destructive/10 p-3 rounded-lg text-destructive text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" required className="bg-muted/50" />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" required className="bg-muted/50" />
                  </div>
                  <div>
                    <Input type="text" name="subject" placeholder="Subject" required className="bg-muted/50" />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" rows={5} required className="bg-muted/50 resize-none" />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="text-lg flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
