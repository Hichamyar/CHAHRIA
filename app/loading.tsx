export default function Loading() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-amber-700">Loading...</p>
      </div>
    </div>
  )
}
