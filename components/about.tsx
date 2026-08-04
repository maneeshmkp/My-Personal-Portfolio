"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-in">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://avatars.githubusercontent.com/u/149099977?v=4"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            </div>

            <div className="animate-in">
              <h3 className="text-2xl font-semibold mb-4">Full Stack Developer & AI Engineer</h3>
              <p className="text-lg text-muted-foreground mb-6">
                I&apos;m a full-stack developer and competitive programmer pursuing BTech in Information
                Technology at the Indian Institute of Information Technology, Sonepat (CGPA 8.3/10,
                Nov 2022 – May 2026). I currently work as an SDE Freelancer at Xelron, building LLM
                evaluation datasets and pipelines for financial reasoning benchmarks.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Coursework includes DSA, DBMS, Operating Systems, TCP/IP, Computer Networks, SDLC,
                and OOP. I&apos;ve solved 800+ DSA problems and shipped products like TravelPlan — an
                AI-powered travel management platform. National Semi-Finalist at Flipkart GRiD 7.0 &amp;
                Unstop Talent Park 2025; AWS Cloud Foundations certified.
              </p>

              <div className="text-lg grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">Maneesh Kumar</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">connect.to.maneeshmkp@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-muted-foreground">Agra, Uttar Pradesh</p>
                </div>
                <div>
                  <p className="font-medium">Education:</p>
                  <p className="text-muted-foreground">Nov 2022 – May 2026</p>
                </div>
                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-muted-foreground">+91 8077439938</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-muted-foreground">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
