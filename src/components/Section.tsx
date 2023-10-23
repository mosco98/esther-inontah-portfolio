"use client"

import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
}

const Section = ({ children, className }: SectionProps) => {
  return <section className={cn("py-24", className)}>{children}</section>
}

export default Section
