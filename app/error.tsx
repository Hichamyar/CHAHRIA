"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center h-64">
      <h2 className="text-xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <button onClick={() => reset()} className="btn btn-primary">
        Try again
      </button>
    </div>
  )
}
