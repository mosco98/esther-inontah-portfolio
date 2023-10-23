"use client"

import Hero from "@/components/Hero"
import Section from "@/components/Section"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <>
      <Hero />

      <Section className="container">
        <div className="text-center">
          <h3 className="font-medium font-bricolage">Selected case studies</h3>
          <h6 className="max-w-[510px] mx-auto mt-3">
            Check out some of my most exciting projects. I hope you enjoy
            scanning through them as much as I enjoyed working on them.
          </h6>
        </div>

        <div className="grid grid-cols-2 mt-16">
          <div className="h-[300px] bg-red-500"></div>
          <div className="h-[300px] bg-green-500"></div>
          <div className="h-[300px] bg-purple-500"></div>
          <div className="h-[300px] bg-pink-500"></div>
          <div className="h-[300px] bg-red-500"></div>
          <div className="h-[300px] bg-green-500"></div>
        </div>
      </Section>

      <Section className="bg-[#1E1E1E]">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              UI/UX design
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              UX research
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              Research synthesising
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              Prototyping
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              Interaction design
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              Responsive design
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              Usability testing
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              Stakeholder management
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              HTML & CSS
            </span>

            <span className="text-xs font-medium p-[10px] border-[0.4px] border-white rounded-[100px] text-white">
              Webflow
            </span>
          </div>

          <div className="max-w-[867px] mx-auto mt-12 mb-10">
            <h1 className="text-white font-bricolage">
              Think I’m a good fit for your company? Contact me
            </h1>

            <p className="text-[#D0D5DD] mt-6">
              Beyond giving my best to be a productive part of any team I work
              with, I am constantly looking out for ways to be better at my
              craft. Learning is my jam. I'm always taking courses, attending
              workshops, and staying updated with the demands of the field.
            </p>
          </div>

          <Button className="px-[60px] py-7" variant={"secondary"} size={"lg"}>
            Contact me
          </Button>
        </div>
      </Section>
    </>
  )
}

export default HomePage
