"use client"

const items = [
  "1000+ DSA Problems",
  "LeetCode 850+",
  "LeetCode Rating 1669",
  "CodeChef 1553",
  "Flipkart GRiD 7.0 Semi-Finalist",
  "AWS Cloud Foundations",
  "TravelPlan · MERN + AI",
  "Xelron · LLM Evaluation",
  "IIIT Sonepat · CGPA 8.3",
]

export default function MarqueeStrip() {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-5 border-y border-border/70 bg-card/80 shadow-[0_8px_30px_-20px_hsl(var(--foreground)/0.2)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono-tech text-sm tracking-[0.08em] text-foreground/70 flex items-center gap-12"
          >
            <span>{item}</span>
            <span className="text-primary text-xs" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
