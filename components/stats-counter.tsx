"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCounterProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

export default function StatsCounter({ value, label, prefix = "", suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            let start = 0
            const duration = 2000
            const step = Math.ceil(value / (duration / 16))

            const animate = () => {
              start += step
              if (start < value) {
                setCount(start)
                requestAnimationFrame(animate)
              } else {
                setCount(value)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [value])

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div ref={countRef} className="text-4xl font-bold text-primary">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </div>
        <p className="mt-2 text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  )
}

