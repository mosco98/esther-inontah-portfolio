"use client"

import Section from "@/components/Section"
import { Button } from "@/components/ui/button"

const PlaygroundPage = () => {
  return (
    <>
      <Section className="container py-20">
        <div className="text-center">
          <h2 className="font-bricolage font-medium">
            A few visual design explorations
          </h2>

          <p className="max-w-[840px] mx-auto mt-2">
            Here are some of my recent design explorations. I hope you enjoy
            going through them as much as I enjoyed working on them.
          </p>
        </div>
      </Section>

      <section className="grid grid-cols-2 gap-12 container">
        <div className="h-[592px] bg-[#98A2B3] rounded-[20px] p-4"></div>
        <div className="h-[592px] bg-[#98A2B3] rounded-[20px] p-4"></div>
        <div className="h-[592px] bg-[#98A2B3] rounded-[20px] p-4"></div>
        <div className="h-[592px] bg-[#98A2B3] rounded-[20px] p-4"></div>
        <div className="h-[592px] bg-[#98A2B3] rounded-[20px] p-4"></div>
        <div className="h-[592px] bg-[#98A2B3] rounded-[20px] p-4"></div>
        <div className="h-[592px] bg-[#98A2B3] rounded-[20px] p-4"></div>
        <div className="h-[592px] bg-[#98A2B3] rounded-[20px] p-4"></div>
      </section>

      <section className="container text-center mt-20">
        <Button size={"lg"}>Contact me</Button>
      </section>
    </>
  )
}

export default PlaygroundPage
