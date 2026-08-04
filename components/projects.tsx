"use client"

import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Reveal from "@/components/reveal"

const projects = [
  {
    title: "TravelPlan",
    subtitle: "AI-Powered Travel Management Platform",
    description:
      "Full-stack AI travel platform with 40+ REST APIs — itineraries, bookings, expenses, flights, weather, maps, documents, and real-time notifications.",
    image: "/travel.jpg",
    tags: ["MERN", "Redis", "Socket.IO", "Docker", "Swagger/OpenAPI", "Playwright", "Rate Limiting", "AWS S3", "Gemini/OpenAI"],
    liveUrl: "https://travel-itinerary-application-system.vercel.app",
    githubUrl: "https://github.com/maneeshmkp/Travel-Itinerary-Application-System",
    featured: true,
  },
  {
    title: "SHL Assessment System",
    subtitle: "Recommendation Engine",
    description:
      "Recommends cognitive, personality, and situational assessments for roles using Gemini-powered matching.",
    image: "/assessment.jpg",
    tags: ["Next.js", "TypeScript", "FastAPI", "Gemini"],
    liveUrl: "https://shl-assessment-recommendation-system-wine.vercel.app/",
    githubUrl: "https://github.com/maneeshmkp/SHL-Assessment-Recommendation-System",
  },
  {
    title: "Influencer Score Prediction",
    subtitle: "LightGBM Regression",
    description:
      "Predicts Instagram influencer scores from engagement, followers, and content features.",
    image: "/instaInfluer.jpg",
    tags: ["Python", "LightGBM", "Next.js", "ML"],
    liveUrl: "#",
    githubUrl: "https://github.com/maneeshmkp/Instagram-Influencer-Score-Prediction-Using-LightGBM-Regression",
  },
  {
    title: "Weather Dashboard",
    subtitle: "Real-time Monitoring",
    description: "Live weather updates, forecasts, and alerts across multiple locations.",
    image: "/weather.jpg",
    tags: ["Next.js", "OpenWeather", "Chart.js"],
    liveUrl: "https://real-time-weather-monitoring-using-next-js-k8vf-7gk5pa4l1.vercel.app/",
    githubUrl: "https://github.com/maneeshmkp/Real-Time-Weather-Monitoring-using-Next.js",
  },
  {
    title: "Employee Management",
    subtitle: "C++ Systems",
    description: "Console EMS with file handling, fast retrieval, and secure access controls.",
    image: "/employee.jpg",
    tags: ["C++", "DSA", "File Handling"],
    liveUrl: "#",
    githubUrl: "https://github.com/maneeshmkp/Employee-Management-System",
  },
  {
    title: "This Portfolio",
    subtitle: "Personal Brand Site",
    description: "Editorial portfolio built with Next.js — motion, theme, and performance-focused.",
    image: "/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/maneeshmkp/My-Personal-Portfolio",
  },
]

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="section-pad relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 via-muted/20 to-transparent" />
      <div className="container max-w-6xl">
        <Reveal>
          <div className="flex items-end gap-6 mb-4">
            <p className="font-mono-tech text-xs tracking-[0.22em] uppercase text-primary">04 — Projects</p>
            <div className="hidden sm:block flex-1 hairline mb-1.5" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Selected work
          </h2>
        </Reveal>

        <Reveal>
          <article className="group relative mb-8 overflow-hidden rounded-[1.5rem] depth-card">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[440px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <p className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-primary mb-3">
                  Featured project
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground mb-4">{featured.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-tech text-xs px-2.5 py-1 rounded-lg bg-muted/80 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Live demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2 === 0 ? 1 : 2) as 1 | 2}>
              <article className="group h-full flex flex-col depth-card rounded-[1.25rem] overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60" />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display text-xl font-semibold mb-1 tracking-tight">{project.title}</h3>
                  <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-tech text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border/70">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                    >
                      Demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
