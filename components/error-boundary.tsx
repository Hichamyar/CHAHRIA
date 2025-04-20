"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Caught error:", error)
      setHasError(true)
      setError(error.error)
    }

    window.addEventListener("error", errorHandler)
    return () => window.removeEventListener("error", errorHandler)
  }, [])

  if (hasError) {
    return (
      <div className="container mx-auto py-10 space-y-4">
        <h1 className="text-2xl font-bold text-red-500">Something went wrong</h1>
        <p className="text-muted-foreground">
          An error occurred while rendering the application. Please try refreshing the page.
        </p>
        {error && <pre className="p-4 bg-muted rounded-md overflow-auto text-sm">{error.message}</pre>}
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
      </div>
    )
  }

  return <>{children}</>
}
