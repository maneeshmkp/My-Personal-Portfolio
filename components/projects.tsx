"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "SHL-Assessment-Recommendation-System",
    description:
      "The SHL Assessment System recommends cognitive, personality, and situational tests for roles, ensuring data-driven, competency-based talent selection.",
    image: "/assessment.jpg?height=400&width=600",
    tags: ["JavaScript", "Next.js","TypeScript", "Tailwind CSS", "Fast APIs", "Gemini API"],
    liveUrl: "https://shl-assessment-recommendation-system-wine.vercel.app/",
    githubUrl: "https://github.com/maneeshmkp/SHL-Assessment-Recommendation-System",
  },
  {
    title: "Travel Itinerary App",
    description: "A full-stack travel management system using FastAPI and SQLAlchemy, supporting day-wise itineraries, hotels, activities, and MCP-powered recommendations.",
    image: "/travel.jpg?height=400&width=600",
    tags: ["Python","JavaScript", "TypeScript", "Fast API", "SQLAlchemy", "PostgreSQL", "Next.js"],
    liveUrl: "https://travel-itinerary-app-beta.vercel.app/",
    githubUrl: "https://github.com/maneeshmkp/travel-itinerary-app",
  },
  {
    title: "Instagram Influencer Score Prediction Using LightGBM Regression",
    description: "Predicts Instagram influencer scores using LightGBM regression, analyzing engagement metrics, follower counts, and content features for accurate insights.",
    image: "/instaInfluer.jpg?height=400&width=600",
    tags: ["React.js", "Next.js",  "TypeScript","Python", "LightGBM", "Numpy", "scikit-learn", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "https://github.com/maneeshmkp/Instagram-Influencer-Score-Prediction-Using-LightGBM-Regression",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio site built with Next.js, showcasing projects, skills, and achievements with seamless UX and performance.",
    image: "/portfolio.jpg?height=400&width=600",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/maneeshmkp/My-Personal-Portfolio",
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather monitoring application built using Next.js, providing live weather updates, forecasts, and alerts for multiple locations.",
    image: "/weather.jpg?height=400&width=600",
    tags: ["React.js", "TypeScript", "Next.js", "OpenWeather API", "Chart.js"],
    liveUrl: "https://real-time-weather-monitoring-using-next-js-k8vf-7gk5pa4l1.vercel.app/",
    githubUrl: "https://github.com/maneeshmkp/Real-Time-Weather-Monitoring-using-Next.js",
  },
  
  {
    title: "Employee Management System",
    description: "A C++ console-based Employee Management System enabling efficient employee record handling, data retrieval, file management, and secure access controls.",
    image: "/employee.jpg?height=400&width=600",
    tags: ["C++", "DSA", "File Handling", "Console UI"],
    liveUrl: "#",
    githubUrl: "https://github.com/maneeshmkp/Employee-Management-System",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-in">
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button size="sm" className="flex items-center gap-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
