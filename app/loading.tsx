export default function Loading() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="h-8 w-64 bg-muted/30 animate-pulse rounded-lg"></div>
      <div className="h-4 w-full max-w-md bg-muted/30 animate-pulse rounded-lg"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="h-40 bg-muted/30 animate-pulse rounded-lg"></div>
        <div className="h-40 bg-muted/30 animate-pulse rounded-lg"></div>
      </div>
    </div>
  )
}
