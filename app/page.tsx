import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import MarqueeStrip from "@/components/marquee-strip"
import About from "@/components/about"
import WorkExperience from "@/components/work-experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import CodingProfiles from "@/components/coding-profiles"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Maneesh Kumar — Software Developer & Backend Engineer",
  description:
    "Portfolio of Maneesh Kumar — software development and backend engineering: scalable APIs, systems, and products that ship.",
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <WorkExperience />
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
