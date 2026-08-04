"use client"

import { useState } from "react"
import { Briefcase, Calendar, Building, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface WorkExperience {
  id: number
  title: string
  company: string
  location: string
  period: string
  achievements: string[]
  skills: string[]
  logo: string
}

const experiences: WorkExperience[] = [
  {
    id: 1,
    title: "Software Development Engineer (SDE) Freelancer",
    company: "Xelron",
    location: "Remote",
    period: "June 2026 – Present",
    achievements: [
      "Built and curated 50+ benchmark datasets for evaluating Large Language Models (LLMs) on real-world financial reasoning using multi-document company reports.",
      "Designed end-to-end evaluation pipelines by creating analyst-style prompts, human-verified reference solutions, grading rubrics, and documented failure patterns for objective model assessment.",
      "Analyzed model outputs to identify calculation errors, reasoning failures, hallucinations, and document extraction issues, improving evaluation quality and reproducibility.",
      "Collaborated within a structured review workflow using Cursor, Git, and standardized repositories to deliver high-quality evaluation artifacts for large-scale AI benchmarking.",
    ],
    skills: ["LLM Evaluation", "Dataset Curation", "Prompt Engineering", "Git", "Cursor", "Financial Reasoning"],
    logo: "/placeholder-logo.png",
  },
  {
    id: 2,
    title: "Software Development Engineer (SDE) Intern",
    company: "Xelron",
    location: "Remote",
    period: "Feb 2026 – June 2026",
    achievements: [
      "Reviewed AI-generated coding solutions to ensure accuracy by analyzing execution traces and outputs.",
      "Improved AI evaluation quality through bug detection, logic validation, and prompt review.",
    ],
    skills: ["Code Review", "AI Evaluation", "Bug Detection", "Prompt Review", "Logic Validation"],
    logo: "/placeholder-logo.png",
  },
]

export default function WorkExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative pl-8 md:pl-0 animate-in group">
                <div className="hidden md:block absolute left-[50%] top-12 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 z-0"></div>

                <div className="hidden md:flex absolute left-[50%] top-8 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary/10 items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="md:hidden absolute left-0 top-6 bottom-0 w-0.5 bg-primary/20 z-0"></div>
                <div className="md:hidden absolute left-0 top-6 z-10 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center -translate-x-1/2 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>

                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                  <div className="hidden md:block md:col-span-2 md:text-right pr-12">
                    <div className="flex items-center justify-end mb-2">
                      <span className="text-lg text-muted-foreground mr-2 group-hover:text-foreground transition-colors">
                        {experience.period}
                      </span>
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="text-lg text-muted-foreground mr-2 group-hover:text-foreground transition-colors">
                        {experience.location}
                      </span>
                      <Building className="h-4 w-4 text-primary" />
                    </div>

                    <div className="mt-4 flex justify-end">
                      <div className="relative w-28 h-28 overflow-hidden rounded-md border border-muted bg-white">
                        <Image
                          src={experience.logo || "/placeholder.svg"}
                          alt={`${experience.company} logo`}
                          width={112}
                          height={112}
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 md:pl-28">
                    <div className="flex items-center mb-2 md:hidden">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span className="text-lg text-muted-foreground">{experience.period}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-semibold">{experience.title}</h3>
                      <Button
                        variant="ghost"
                        size="lg"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => toggleExpand(experience.id)}
                      >
                        {expandedId === experience.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xl text-primary font-medium mb-4">{experience.company}</p>

                    <div className="mb-4 md:hidden">
                      <div className="relative w-16 h-16 overflow-hidden rounded-md border border-muted bg-white">
                        <Image
                          src={experience.logo || "/placeholder.svg"}
                          alt={`${experience.company} logo`}
                          width={64}
                          height={64}
                          className="object-contain p-2"
                        />
                      </div>
                    </div>

                    <div className="flex items-center mb-4 md:hidden">
                      <Building className="h-4 w-4 text-primary mr-2" />
                      <span className="text-lg text-muted-foreground">{experience.location}</span>
                    </div>

                    {expandedId === experience.id && (
                      <div className="animate-in">
                        <ul className="text-lg space-y-3 mb-4 pl-5 border-l-2 border-primary/20">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="relative">
                              <span className="absolute -left-[11px] top-2 h-2 w-2 rounded-full bg-primary"></span>
                              <p className="pl-2">{achievement}</p>
                            </li>
                          ))}
                        </ul>

                        <div className="text-lg flex flex-wrap gap-1.5 mt-4">
                          {experience.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
