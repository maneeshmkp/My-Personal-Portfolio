"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/components/reveal"
import { cn } from "@/lib/utils"

interface WorkExperienceItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  achievements: string[]
  skills: string[]
  logo: string
}

const experiences: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Software Development Engineer (SDE) Freelancer",
    company: "Xelron",
    location: "Remote",
    period: "June 2026 – Present",
    achievements: [
      "Built and curated 50+ benchmark datasets for evaluating LLMs on real-world financial reasoning using multi-document company reports.",
      "Designed end-to-end evaluation pipelines with analyst-style prompts, human-verified solutions, grading rubrics, and documented failure patterns.",
      "Analyzed model outputs for calculation errors, reasoning failures, hallucinations, and extraction issues — improving evaluation quality and reproducibility.",
      "Delivered high-quality evaluation artifacts via structured review workflows with Cursor, Git, and standardized repositories.",
    ],
    skills: ["LLM Evaluation", "Dataset Curation", "Prompt Engineering", "Git", "Cursor"],
    logo: "/xelron-logo.png",
  },
  {
    id: 2,
    title: "Software Development Engineer (SDE) Intern",
    company: "Xelron",
    location: "Remote",
    period: "Feb 2026 – June 2026",
    achievements: [
      "Reviewed AI-generated coding solutions for accuracy by analyzing execution traces and outputs.",
      "Improved AI evaluation quality through bug detection, logic validation, and prompt review.",
    ],
    skills: ["Code Review", "AI Evaluation", "Bug Detection", "Prompt Review"],
    logo: "/xelron-logo.png",
  },
]

export default function WorkExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="experience" className="section-pad relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
      <div className="container max-w-6xl">
        <Reveal>
          <div className="flex items-end gap-6 mb-4">
            <p className="font-mono-tech text-xs tracking-[0.22em] uppercase text-primary">02 — Experience</p>
            <div className="hidden sm:block flex-1 hairline mb-1.5" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Where I&apos;ve been building
          </h2>
        </Reveal>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const open = expandedId === exp.id
            return (
              <Reveal key={exp.id} delay={index === 0 ? 1 : 2}>
                <article className="depth-card rounded-[1.25rem] overflow-hidden">
                  <button
                    type="button"
                    className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
                    onClick={() => setExpandedId(open ? null : exp.id)}
                    aria-expanded={open}
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-white p-2 shadow-sm">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain p-1.5"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono-tech text-xs text-primary tracking-wider mb-2">{exp.period}</p>
                        <h3 className="font-display text-xl md:text-2xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground mt-1">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 mt-1",
                        open && "rotate-180 text-primary"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-4">
                        <ul className="space-y-3 border-l-2 border-primary/30 pl-5">
                          {exp.achievements.map((item) => (
                            <li key={item} className="text-muted-foreground leading-relaxed relative">
                              <span className="absolute -left-[1.4rem] top-2 h-2 w-2 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="rounded-md font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
