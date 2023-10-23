"use client"

import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"

const Hero = () => {
  return (
    <section className="bg-black py-32">
      <div className="max-w-[880px] text-center mx-auto relative">
        <h2 className="font-medium font-bricolage text-white">
          Designing Innovative & Purposeful Digital Solutions
        </h2>

        <div className="absolute top-8 right-[26%]">
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_34_91836)">
              <path
                d="M21.9076 25.9277L22.2616 24.9684C22.487 24.3576 22.5997 24.0523 22.8371 23.8531C23.0744 23.6539 23.3947 23.596 24.0353 23.4801L25.0416 23.2981C27.9069 22.7797 29.3396 22.5204 29.4577 21.686C29.5758 20.8516 28.2714 20.2049 25.6626 18.9115L18.5025 15.3618C16.454 14.3462 15.4298 13.8385 14.8453 14.3289C14.2608 14.8194 14.5829 15.9162 15.2274 18.1099L17.4799 25.7776C18.3006 28.5714 18.7109 29.9683 19.5532 29.9969C20.3955 30.0254 20.8995 28.6595 21.9076 25.9277Z"
                fill="#7F56D9"
              />
            </g>
            <defs>
              <clipPath id="clip0_34_91836">
                <rect
                  width={28}
                  height={28}
                  fill="white"
                  transform="translate(17.998 39.8662) rotate(-130)"
                />
              </clipPath>
            </defs>
          </svg>

          <span className="py-1 px-3 rounded-[6px] bg-[#7F56D9] text-sm font-medium text-white ml-7 block -mt-2">
            Esther Inontah
          </span>
        </div>
      </div>

      <p className="max-w-[820px] mx-auto text-[#D0D5DD] text-center mt-4">
        I’m a product designer that enjoys the process of taking a project from
        an idea stage to a shippable stage. I design products with intent,
        creativity and open-mindedness with the single goal of creating design
        solutions that wholesomely solves the needs of the user and drives the
        achievement of business goals.
      </p>

      <div className="mt-10 flex items-center justify-center gap-10">
        <Link
          href={"#selectedstudies"}
          className={buttonVariants({
            variant: "secondary",
            className: "gap-1 font-semibold"
          })}
        >
          Selected case studies{" "}
          <svg
            width={21}
            height={20}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 4.16669V15.8334M10.5 15.8334L16.3333 10M10.5 15.8334L4.66666 10"
              stroke="#1D2939"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Button
          className="text-[#98A2B3] gap-1 font-semibold group"
          variant={"ghost"}
        >
          View my Resume
          <svg
            width={21}
            height={20}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1666 1.8913V5.33341C12.1666 5.80012 12.1666 6.03348 12.2575 6.21174C12.3374 6.36854 12.4649 6.49602 12.6217 6.57592C12.7999 6.66675 13.0333 6.66675 13.5 6.66675H16.9421M13.8333 10.8334H7.16665M13.8333 14.1667H7.16665M8.83331 7.50002H7.16665M12.1666 1.66669H7.83331C6.43318 1.66669 5.73312 1.66669 5.19834 1.93917C4.72793 2.17885 4.34548 2.56131 4.1058 3.03171C3.83331 3.56649 3.83331 4.26656 3.83331 5.66669V14.3334C3.83331 15.7335 3.83331 16.4336 4.1058 16.9683C4.34548 17.4387 4.72793 17.8212 5.19834 18.0609C5.73312 18.3334 6.43318 18.3334 7.83331 18.3334H13.1666C14.5668 18.3334 15.2668 18.3334 15.8016 18.0609C16.272 17.8212 16.6545 17.4387 16.8942 16.9683C17.1666 16.4336 17.1666 15.7335 17.1666 14.3334V6.66669L12.1666 1.66669Z"
              stroke="#98A2B3"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-black transition"
            />
          </svg>
        </Button>
      </div>
    </section>
  )
}

export default Hero
