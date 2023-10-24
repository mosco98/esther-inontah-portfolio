/* eslint-disable react/no-unescaped-entities */
"use client"

import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const PlaygroundDetailsPage = () => {
  const router = useRouter()

  return (
    <>
      <Section className="container py-20">
        <div className="text-center relative">
          <span
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-80 transition absolute left-0 top-8"
            onClick={() => router.back()}
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 9H3M3 9L7.5 13.5M3 9L7.5 4.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h2 className="font-bricolage font-medium">
            Payvest - Finance Dashboard Design
          </h2>

          <p className="max-w-[840px] mx-auto mt-2">
            Payvest is a self-assigned design project that aimed to piece
            together a financial platform (with focus on the dashboard) that
            enables easy payment scheduling, tracking of past payment insights
            and history, retrieval and management of employee data, making the
            scheduled payments on the set date and more. It is basically a
            financial platform targeted at aiding the workflow of HR teams.
          </p>
        </div>
      </Section>

      <section className="max-w-[987px] mx-auto space-y-20">
        <div className="h-[702px] rounded-[34px] overflow-hidden p-5 bg-red-500"></div>
        <div className="h-[702px] rounded-[34px] overflow-hidden p-5 bg-red-500"></div>
        <div className="h-[702px] rounded-[34px] overflow-hidden p-5 bg-red-500"></div>
        <div className="h-[702px] rounded-[34px] overflow-hidden p-5 bg-red-500"></div>
      </section>

      <section className="container text-center mt-20">
        <Button size={"lg"}>Contact me</Button>
      </section>

      <Section className="container">
        <h5 className="font-bricolage font-medium">More UI explorations</h5>

        <div className="mt-4 grid grid-cols-4 gap-3">
          <div className="h-[202px] about-card p-2 border-[0.5px] border-[#D0D5DD] rounded-[8px] overflow-hidden bg-red-500 cursor-pointer"></div>
          <div className="h-[202px] about-card p-2 border-[0.5px] border-[#D0D5DD] rounded-[8px] overflow-hidden bg-red-500 cursor-pointer"></div>
          <div className="h-[202px] about-card p-2 border-[0.5px] border-[#D0D5DD] rounded-[8px] overflow-hidden bg-red-500 cursor-pointer"></div>
          <div className="h-[202px] about-card p-2 border-[0.5px] border-[#D0D5DD] rounded-[8px] overflow-hidden bg-red-500 cursor-pointer"></div>
        </div>
      </Section>
    </>
  )
}

export default PlaygroundDetailsPage
