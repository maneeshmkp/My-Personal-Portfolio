"use client"

import { ExternalLink, Trophy, Target, Code2, Brain, Zap } from "lucide-react"
import type React from "react"
import Reveal from "@/components/reveal"

interface CodingProfile {
  platform: string
  username: string
  profileUrl: string
  stats: { label: string; value: string }[]
  achievements: string[]
  icon: React.ReactNode
}

const profiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "maneeshmkp",
    profileUrl: "https://leetcode.com/u/maneeshmkp/",
    stats: [
      { label: "Solved", value: "850+" },
      { label: "Rating", value: "1669" },
      { label: "Best Rank", value: "2945" },
    ],
    achievements: ["Biweekly 159 · Rank 2945"],
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    platform: "CodeChef",
    username: "maneeshp",
    profileUrl: "https://www.codechef.com/users/maneeshp",
    stats: [
      { label: "Rating", value: "1553" },
      { label: "Stars", value: "2★" },
      { label: "Best Rank", value: "42" },
    ],
    achievements: ["Starters 189 · Rank 42"],
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    platform: "Codeforces",
    username: "Maneeshmkp",
    profileUrl: "https://codeforces.com/profile/Maneeshmkp",
    stats: [
      { label: "Rating", value: "395" },
      { label: "Max", value: "395" },
      { label: "Rank", value: "newbie" },
    ],
    achievements: ["Div 2 Participant"],
    icon: <Target className="h-5 w-5" />,
  },
  {
    platform: "GeeksforGeeks",
    username: "maneeshmkp",
    profileUrl: "https://www.geeksforgeeks.org/user/maneeshmkp/",
    stats: [
      { label: "Score", value: "450" },
      { label: "Solved", value: "150+" },
      { label: "Stars", value: "3★" },
    ],
    achievements: ["Contest Rating 1719"],
    icon: <Brain className="h-5 w-5" />,
  },
  {
    platform: "Coding Ninjas",
    username: "Maneeshmkp38",
    profileUrl: "https://www.naukri.com/code360/profile/Maneeshmkp38",
    stats: [
      { label: "Points", value: "2500" },
      { label: "Solved", value: "130+" },
      { label: "Progress", value: "85%" },
    ],
    achievements: ["Expert · Ninja DSA Badges"],
    icon: <Zap className="h-5 w-5" />,
  },
]

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="section-pad">
      <div className="container max-w-6xl">
        <Reveal>
          <div className="flex items-end gap-6 mb-4">
            <p className="font-mono-tech text-xs tracking-[0.22em] uppercase text-primary">05 — Profiles</p>
            <div className="hidden sm:block flex-1 hairline mb-1.5" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Competitive coding
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-14">
            Consistent practice across platforms — ratings, ranks, and problem counts that prove the grind.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "1000+", label: "Problems" },
            { value: "1669", label: "LeetCode" },
            { value: "1553", label: "CodeChef" },
            { value: "3+", label: "Years" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <div className="depth-card rounded-[1.25rem] p-5 md:p-6 text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                <p className="font-mono-tech text-[10px] tracking-[0.18em] uppercase text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((profile, i) => (
            <Reveal key={profile.platform} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full depth-card rounded-[1.25rem] p-6"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">{profile.platform}</h3>
                      <p className="font-mono-tech text-xs text-muted-foreground">@{profile.username}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-muted/60 px-2 py-2 text-center">
                      <p className="font-display font-semibold text-sm">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">{profile.achievements[0]}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
