"use client"

import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Section = forwardRef<SectionProps, any>(
  ({ children, className, ...props }, ref) => {
    return (
      <section className={cn("py-24", className)} {...props} ref={ref}>
        {children}
      </section>
    )
  }
)

Section.displayName = "Section"

export default Section
