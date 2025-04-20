import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Navigation from "@/components/navigation"

// Load the custom Mistal font (you'll need to provide this font file)
const mistal = localFont({
  src: "../public/fonts/mistal.woff2",
  variable: "--font-mistal",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Personal Finance Tracker",
  description: "Track your finances with style",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mistal.variable} bg-amber-50 text-amber-900`}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-amber-200 p-6 bg-amber-100">
            <div className="container mx-auto">
              <h1 className="text-3xl font-mistal">Personal Finance Tracker</h1>
              <Navigation />
            </div>
          </header>
          <main className="flex-1 container mx-auto p-6">{children}</main>
          <footer className="border-t border-amber-200 p-6 bg-amber-100">
            <div className="container mx-auto text-center">© {new Date().getFullYear()} Personal Finance Tracker</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
