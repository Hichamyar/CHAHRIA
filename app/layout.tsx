import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-amber-100 border-b border-amber-200 p-4">
            <div className="container">
              <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
              <nav className="mt-4">
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <a href="/" className="nav-link active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard" className="nav-link">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/expenses" className="nav-link">
                      Expenses
                    </a>
                  </li>
                  <li>
                    <a href="/budget" className="nav-link">
                      Budget
                    </a>
                  </li>
                  <li>
                    <a href="/reports" className="nav-link">
                      Reports
                    </a>
                  </li>
                  <li>
                    <a href="/settings" className="nav-link">
                      Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-1 py-6">
            <div className="container">{children}</div>
          </main>
          <footer className="bg-amber-100 border-t border-amber-200 p-4">
            <div className="container text-center">© {new Date().getFullYear()} Personal Finance Tracker</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
