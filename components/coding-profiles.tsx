"use client"

import type React from "react"

import { ExternalLink, Trophy, Target, Code2, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CodingProfile {
  platform: string
  username: string
  profileUrl: string
  stats: {
    label: string
    value: string
  }[]
  achievements: string[]
  icon: React.ReactNode
  colors: {
    bg: string
    border: string
    text: string
    accent: string
  }
}

const profiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "maneeshmkp",
    profileUrl: "https://leetcode.com/u/maneeshmkp/",
    stats: [
      { label: "Problems Solved", value: "550+" },
      { label: "Contest Rating", value: "1503" },
      { label: "Global Ranking", value: "Top 50%" },
    ],
    achievements: ["4058 Global Rank in Biweekly Contest 153", "100 Days Badge", "50 Days Badge", "Top SQL 50 Badge", "12 different types of Badges"],
    icon: <Code2 className="h-6 w-6" />,
    colors: {
      bg: "bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30",
      border: "border-orange-200 dark:border-orange-800",
      text: "text-orange-700 dark:text-orange-300",
      accent: "bg-orange-500 dark:bg-orange-600",
    },
  },
  {
    platform: "CodeChef",
    username: "maneeshp",
    profileUrl: "https://www.codechef.com/users/maneeshp",
    stats: [
      { label: "Current Rating", value: "1453" },
      { label: "Max Rating", value: "1453" },
      { label: "Global Rank", value: "2 Star" },
    ],
    achievements: ["244 Global Rank in Starters 174", "Contest Contender - Bronze Badge", "Problem Solver - Bronze Badge"],
    icon: <Trophy className="h-6 w-6" />,
    colors: {
      bg: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
      border: "border-amber-200 dark:border-amber-800",
      text: "text-amber-700 dark:text-amber-300",
      accent: "bg-amber-500 dark:bg-amber-600",
    },
  },
  {
    platform: "Codeforces",
    username: "Maneeshmkp",
    profileUrl: "https://codeforces.com/profile/Maneeshmkp",
    stats: [
      { label: "Current Rating", value: "395" },
      { label: "Max Rating", value: "395" },
      { label: "Rank", value: "newbie" },
    ],
    achievements: ["newbie", "Div 2 Participant", "Problem Setter"],
    icon: <Target className="h-6 w-6" />,
    colors: {
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-700 dark:text-blue-300",
      accent: "bg-blue-500 dark:bg-blue-600",
    },
  },
  {
    platform: "GeeksforGeeks",
    username: "maneeshmkp",
    profileUrl: "https://www.geeksforgeeks.org/user/maneeshmkp/",
    stats: [
      { label: "Coding Score", value: "450" },
      { label: "Problems Solved", value: "150+" },
      { label: "Contest-Rating", value: "1719" },
      { label: "Global Rank", value: "3 star" },
    ],
    achievements: ["Top Contributor", "Problem Setter"],
    icon: <Brain className="h-6 w-6" />,
    colors: {
      bg: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-700 dark:text-green-300",
      accent: "bg-green-500 dark:bg-green-600",
    },
  },
  {
    platform: "code360 by Coding Ninjas",
    username: "Maneeshmkp38",
    profileUrl: "https://www.naukri.com/code360/profile/Maneeshmkp38",
    stats: [
      { label: "Ninja Points", value: "2500" },
      { label: "Problems Solved", value: "130+" },
      { label: "Course Progress", value: "85%" },
    ],
    achievements: ["Expert at code360", "Ninja DSA Badges", "4 master, 12 Specialist and 22 Achiever Badges", "2 Guided Paths : OOPs in C++ & Java"],
    icon: <Zap className="h-6 w-6" />,
    colors: {
      bg: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
      border: "border-purple-200 dark:border-purple-800",
      text: "text-purple-700 dark:text-purple-300",
      accent: "bg-purple-500 dark:bg-purple-600",
    },
  },
]

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-in">
            Coding <span className="text-primary">Profiles</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 animate-in">
            My competitive programming journey across various platforms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <div key={index} className="animate-in">
                <Card
                  className={`overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${profile.colors.bg} ${profile.colors.border}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${profile.colors.accent} text-white`}>{profile.icon}</div>
                        <div>
                          <CardTitle className={`text-lg ${profile.colors.text}`}>{profile.platform}</CardTitle>
                          <p className="text-sm text-muted-foreground">@{profile.username}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`${profile.colors.text} hover:bg-white/20 dark:hover:bg-black/20`}
                        asChild
                      >
                        <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Stats */}
                    <div className="space-y-3">
                      <h4 className={`font-semibold text-sm ${profile.colors.text}`}>Statistics</h4>
                      <div className="space-y-2">
                        {profile.stats.map((stat, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{stat.label}</span>
                            <span className={`font-semibold text-sm ${profile.colors.text}`}>{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className={`font-semibold text-sm ${profile.colors.text}`}>Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {profile.achievements.map((achievement, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className={`text-xs ${profile.colors.bg} ${profile.colors.text} border-0`}
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Visit Profile Button */}
                    <Button className={`w-full ${profile.colors.accent} hover:opacity-90 text-white border-0`} asChild>
                      <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
                        <span>Visit Profile</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Overall Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border border-indigo-200 dark:border-indigo-800">
              <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">700+</div>
              <div className="text-sm text-muted-foreground">Total Problems</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-emerald-200 dark:border-emerald-800">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Contests</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border border-rose-200 dark:border-rose-800">
              <div className="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400 mb-2">45+</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border border-violet-200 dark:border-violet-800">
              <div className="text-2xl md:text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
