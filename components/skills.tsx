"use client"

import { Code, Database, Layout, Palette, Server, Smartphone } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8 mb-4 text-primary" />,
    items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 mb-4 text-primary" />,
    items: ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    category: "Design",
    icon: <Palette className="h-8 w-8 mb-4 text-primary" />,
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Wireframing"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    items: ["React Native", "Flutter", "iOS", "Android", "PWA"],
  },
  {
    category: "Other",
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    items: ["Git", "Docker", "CI/CD", "AWS", "Vercel"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow animate-in"
              >
                <div className="text-center mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center text-muted-foreground">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
