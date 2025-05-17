"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I create visual identities that leave a lasting impression."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          <span className="relative">
            Alex Johnson
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#BBFF00] animate-underline"></span>
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground font-light">Graphic Designer & Logo Specialist</p>
      </div>
      <div className="h-20">
        <p className="text-lg md:text-xl max-w-[600px] text-">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="animate-fadeIn bg-[#BBFF00] hover:bg-[#9ac32a] text-black" style={{ animationDelay: "1.5s" }}>
          <Link href="#projects">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" className="animate-fadeIn" style={{ animationDelay: "1.8s" }}>
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </div>
    </section>
  )
}
