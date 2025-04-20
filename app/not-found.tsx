import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <h2 className="text-xl font-bold mb-4">Page Not Found</h2>
      <p className="text-amber-700 mb-4">Could not find the requested resource</p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  )
}
