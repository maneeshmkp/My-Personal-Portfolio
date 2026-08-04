import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socials = [
  { href: "https://github.com/maneeshmkp", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/maneeshmkp/", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/ManeeshKum14044", label: "Twitter", icon: Twitter },
  { href: "mailto:connect.to.maneeshmkp@gmail.com", label: "Email", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/70">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/[0.06] to-transparent" />
      <div className="container max-w-6xl py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3">
              Maneesh <span className="text-gradient">Kumar</span>
            </p>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Software Developer &amp; Backend Engineer · Passionate about building scalable systems that ship.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <s.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/70 flex flex-col sm:flex-row justify-between gap-2 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Maneesh Kumar. All rights reserved.</p>
          <p className="font-mono-tech text-xs tracking-wider">Crafted to stand out</p>
        </div>
      </div>
    </footer>
  )
}
