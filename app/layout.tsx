import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FirstTimePrompt } from "@/components/first-time-prompt"
import { Toaster } from "@/components/toaster"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hicham's money sauce",
  description: "Track income, manage expenses, and monitor savings",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ErrorBoundary>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 w-full">{children}</main>
              <Footer />
              <FirstTimePrompt />
              <Toaster />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
