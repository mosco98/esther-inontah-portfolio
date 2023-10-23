"use client"

import Link from "next/link"
import Logo from "./Logo"
import { Button } from "./ui/button"

const Navbar = () => {
  //TODO: add shadow on scroll
  return (
    <nav className="fixed top-0 bg-white w-full z-50">
      <div className="container py-8 flex items-center justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>

        <div className="flex items-center gap-9">
          <Link href={"/"} className="font-semibold">
            <p>Work</p>
          </Link>

          <Link href={"/"}>
            <p>About</p>
          </Link>

          <Link href={"/"}>
            <p>Playground</p>
          </Link>

          <Link href={"/"} className="flex items-center gap-1">
            <p>Resume</p>

            <svg
              width={19}
              height={18}
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1.70215V4.80005C11 5.22009 11 5.43011 11.0817 5.59055C11.1537 5.73167 11.2684 5.8464 11.4095 5.91831C11.5699 6.00005 11.78 6.00005 12.2 6.00005H15.2979M12.5 9.75H6.5M12.5 12.75H6.5M8 6.75H6.5M11 1.5H7.1C5.83988 1.5 5.20982 1.5 4.72852 1.74524C4.30516 1.96095 3.96095 2.30516 3.74524 2.72852C3.5 3.20982 3.5 3.83988 3.5 5.1V12.9C3.5 14.1601 3.5 14.7902 3.74524 15.2715C3.96095 15.6948 4.30516 16.039 4.72852 16.2548C5.20982 16.5 5.83988 16.5 7.1 16.5H11.9C13.1601 16.5 13.7902 16.5 14.2715 16.2548C14.6948 16.039 15.039 15.6948 15.2548 15.2715C15.5 14.7902 15.5 14.1601 15.5 12.9V6L11 1.5Z"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div>
          <Button>Contact me</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
