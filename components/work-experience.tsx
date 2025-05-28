"use client"

import { useState } from "react"
import { Briefcase, Calendar, Building, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface WorkExperience {
  id: number
  title: string
  company: string
  location: string
  period: string
  achievements: string[]
  skills: string[]
}

const experiences: WorkExperience[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Internship Studio",
    location: "Remote",
    period: "Mar 2024 - Apr 2024",
    achievements: [
      "Applied advanced C++ algorithms, improving code efficiency and execution speed by 40% for complex tasks.",
      "Developed an interactive console interface for the Employee Management System using C++, reducing the record retrieval time by 80% (from 10+ seconds to less than 2 seconds).",
      "Engineered a file handling architecture that seamlessly managed 1,000+ employee records, improving data processing efficiency by 60% while ensuring secure access controls 100%.",
    ],
    skills: ["C++", "Algorithms", "Data Structures", "File Handling", "Console UI"],
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
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative pl-8 md:pl-0 animate-in group">
                {/* Timeline line (visible on md and up) */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 z-0"></div>

                {/* Timeline dot (visible on md and up) */}
                <div className="hidden md:flex absolute left-[50%] top-0 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary/10 items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                {/* Mobile timeline line and dot */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 z-0"></div>
                <div className="md:hidden absolute left-0 top-0 z-10 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center -translate-x-1/2 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>

                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                  {/* Left side - Date (on desktop) */}
                  <div className="hidden md:block md:col-span-2 md:text-right pr-12">
                    <div className="flex items-center justify-end mb-2">
                      <span className="text-muted-foreground mr-2 group-hover:text-foreground transition-colors">
                        {experience.period}
                      </span>
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="text-muted-foreground mr-2 group-hover:text-foreground transition-colors">
                        {experience.location}
                      </span>
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="md:col-span-3 md:pl-12">
                    {/* Mobile date display */}
                    <div className="flex items-center mb-2 md:hidden">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
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
                    <p className="text-primary font-medium mb-4">{experience.company}</p>

                    {/* Mobile location display */}
                    <div className="flex items-center mb-4 md:hidden">
                      <Building className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{experience.location}</span>
                    </div>

                    {expandedId === experience.id && (
                      <div className="animate-in">
                        <ul className="space-y-3 mb-4 pl-5 border-l-2 border-primary/20">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="relative">
                              <span className="absolute -left-[11px] top-2 h-2 w-2 rounded-full bg-primary"></span>
                              <p className="pl-2">{achievement}</p>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
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
