"use client"

import Reveal from "@/components/reveal"

const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript (ES6+)", "SQL"],
  },
  {
    category: "Development",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "Rate Limiting", "Swagger/OpenAPI", "Docker"],
  },
  {
    category: "Data & Cloud",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Redis", "AWS (EC2, S3, IAM)"],
  },
  {
    category: "Deploy & Testing",
    items: ["CloudFront", "CI/CD", "Vercel", "Render", "Playwright", "Linux"],
  },
  {
    category: "Tools",
    items: ["Git/GitHub", "Cursor", "Postman", "Co-pilot", "LLM Integrations", "OpenAI / Gemini"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container max-w-6xl">
        <Reveal>
          <div className="flex items-end gap-6 mb-4">
            <p className="font-mono-tech text-xs tracking-[0.22em] uppercase text-primary">03 — Skills</p>
            <div className="hidden sm:block flex-1 hairline mb-1.5" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Stack I use to ship
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-14">
            Backend-first toolkit from TravelPlan and production work — APIs, Docker, Redis, testing, and cloud.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              delay={(i % 3) as 0 | 1 | 2 | 3}
              className="depth-card rounded-[1.25rem] p-7 md:p-8"
            >
              <h3 className="font-display text-lg font-semibold mb-5 tracking-tight">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-muted-foreground text-sm md:text-base">
                    <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
