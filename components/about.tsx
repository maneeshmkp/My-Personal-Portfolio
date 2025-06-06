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
              <h3 className="text-2xl font-semibold mb-4">Full Stack Developer & UI/UX Designer</h3>
              <p className="text-muted-foreground mb-6">
                I’m a passionate full-stack developer, competitive programmer, 
                and machine learning enthusiast, currently pursuing my BTech 
                in Information Technology from the Indian Institute of Information Technology,
                 Sonepat. I love solving complex problems through Data Structures and Algorithms and
                  have solved over 600+ DSA problems across platforms like 
                  LeetCode and GeeksforGeeks. 
                  
              </p>
              <p className="text-muted-foreground mb-6">
                I enjoy building scalable web applications that combine clean design with 
                  efficient back-end systems, while also exploring machine learning to create data-driven
                    solutions. I’m a lifelong learner, driven by curiosity and teamwork,
                    always eager to grow, innovate, and contribute to impactful projects in the software
                      world.
              </p>

              <div className="grid grid-cols-2 gap-4">
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
                  <p className="text-muted-foreground">Sonipat, India</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-muted-foreground">Available for hire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
