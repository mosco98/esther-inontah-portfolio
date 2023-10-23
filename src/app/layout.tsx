import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter } from "next/font/google"
import "../styles/globals.scss"

const inter = Inter({ subsets: ["latin"] })

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque"
})

export const metadata: Metadata = {
  title: "Esther Inontah",
  description:
    "I’m a product designer that enjoys the process of taking a project from an idea stage to a shippable stage. I design products with intent, creativity and open-mindedness with the single goal of creating design solutions that wholesomely solves the needs of the user and drives the achievement of business goals."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, bricolage.variable, "")}>
        <Navbar />

        <main className="pt-28 pb-24 min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
