import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import WorkExperience from "@/components/work-experience"
import MotivationalQuote from "@/components/motivational-quote"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import CodingProfiles from "@/components/coding-profiles"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Portfolio | Maneesh Kumar",
  description: "Professional portfolio showcasing my work and skills",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <MotivationalQuote />
        <Skills />
        <Projects />
         <CodingProfiles />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
