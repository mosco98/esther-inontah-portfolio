"use client"

import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t-[0.3px] border-[#D0D5DD] pt-24 pb-16">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <h5 className="font-semibold">
              Let’s build great products together
            </h5>
            <p className="text-[#1D2939]">
              Send an email to{" "}
              <a href="mailto:estherinontah@gmail.com" className="underline">
                estherinontah@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-8">
            <div>
              <span className="text-xs font-medium text-[#667085]">MAIN</span>

              <ul className="space-y-4 [&_li]:font-semibold [&_li]:text-sm mt-3">
                <li>
                  <Link href={"/"}>Work</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/playground"}>Playground</Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-medium text-[#667085]">
                CONTACT
              </span>

              <ul className="space-y-4 [&_li]:font-semibold [&_li]:text-sm mt-3">
                <li className="flex items-center gap-1">
                  Resume{" "}
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33341 1.51294V4.26663C9.33341 4.64 9.33341 4.82669 9.40608 4.96929C9.46999 5.09473 9.57198 5.19672 9.69742 5.26064C9.84003 5.3333 10.0267 5.3333 10.4001 5.3333H13.1538M10.6667 8.66659H5.33341M10.6667 11.3333H5.33341M6.66675 5.99992H5.33341M9.33341 1.33325H5.86675C4.74664 1.33325 4.18659 1.33325 3.75877 1.55124C3.38244 1.74299 3.07648 2.04895 2.88473 2.42527C2.66675 2.85309 2.66675 3.41315 2.66675 4.53325V11.4666C2.66675 12.5867 2.66675 13.1467 2.88473 13.5746C3.07648 13.9509 3.38244 14.2569 3.75877 14.4486C4.18659 14.6666 4.74664 14.6666 5.86675 14.6666H10.1334C11.2535 14.6666 11.8136 14.6666 12.2414 14.4486C12.6177 14.2569 12.9237 13.9509 13.1154 13.5746C13.3334 13.1467 13.3334 12.5867 13.3334 11.4666V5.33325L9.33341 1.33325Z"
                      stroke="black"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/estherinontah/"
                    className="flex items-center gap-1"
                    target="_blank"
                  >
                    Linkedin{" "}
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12L12 4M12 4H6.66667M12 4V9.33333"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/estherinontah_"
                    className="flex items-center gap-1"
                    target="_blank"
                  >
                    Twitter{" "}
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12L12 4M12 4H6.66667M12 4V9.33333"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="font-medium">
            ©{new Date().getFullYear()} Esther Inontah. All Rights Reserved
          </p>

          <span className="mt-1 text-sm text-[#475467]">
            Designed with ❤️ by Esther Inontah and developed by{" "}
            <span className="underline">Moses Enyinnaya</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
