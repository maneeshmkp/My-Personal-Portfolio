"use client"

import Image from "next/image"
import Reveal from "@/components/reveal"
import Tilt3D from "@/components/tilt-3d"

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-4">
            <p className="font-mono-tech text-xs tracking-[0.22em] uppercase text-primary">01 — About</p>
            <div className="hidden sm:block flex-1 hairline mb-1.5 max-w-xs ml-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-16 max-w-3xl text-balance leading-[1.1] title-3d">
            Software developer focused on backend engineering
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 scene-3d" delay={1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 to-[hsl(var(--gold)/0.12)] blur-xl -z-10" />
              <div className="absolute -inset-3 rounded-[1.75rem] border border-dashed border-primary/25" />
              <Tilt3D className="rounded-[1.5rem]" intensity={10}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] frame-3d bg-muted">
                  <Image
                    src="https://avatars.githubusercontent.com/u/149099977?v=4"
                    alt="Maneesh Kumar"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-[hsl(var(--gold)/0.2)] mix-blend-overlay" />
                </div>
              </Tilt3D>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={1}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Strong interest in software development and backend engineering — APIs, databases, auth, caching,
                and production systems. Currently an SDE Freelancer at Xelron. Building TravelPlan — a production
                MERN platform with 40+ REST APIs, Redis, Docker, and real-time features.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                1000+ DSA problems solved (850+ on LeetCode). National Semi-Finalist at Flipkart GRiD 7.0 &amp; Unstop Talent Park
                2025. AWS Cloud Foundations certified. Education: Nov 2022 – May 2026.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <dl className="grid sm:grid-cols-2 gap-4 pt-6">
                {[
                  { label: "Location", value: "Agra, Uttar Pradesh" },
                  { label: "Email", value: "connect.to.maneeshmkp@gmail.com" },
                  { label: "Phone", value: "+91 8077439938" },
                  { label: "Status", value: "Open to opportunities" },
                ].map((item) => (
                  <div key={item.label} className="depth-card rounded-2xl p-4">
                    <dt className="font-mono-tech text-[10px] tracking-[0.18em] uppercase text-muted-foreground mb-1.5">
                      {item.label}
                    </dt>
                    <dd className="text-sm md:text-base font-medium break-all">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
