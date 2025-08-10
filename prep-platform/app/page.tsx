export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold">Welcome to Prep Platform</h1>
        <p className="text-gray-600 max-w-2xl">
          Learn core concepts, practice company-style questions, and take mock assessments for TCS NQT, Wipro, and more.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="/tracks/tcs-nqt" className="rounded-lg border bg-white p-4 hover:shadow-sm">
          <div className="font-medium">TCS NQT Track</div>
          <div className="text-sm text-gray-600">Curated lessons and mock tests</div>
        </a>
        <a href="/tracks/wipro" className="rounded-lg border bg-white p-4 hover:shadow-sm">
          <div className="font-medium">Wipro Track</div>
          <div className="text-sm text-gray-600">Practice and assessment blueprints</div>
        </a>
        <a href="/assessments" className="rounded-lg border bg-white p-4 hover:shadow-sm">
          <div className="font-medium">Mock Assessments</div>
          <div className="text-sm text-gray-600">Timed exam-like experience</div>
        </a>
      </section>
    </div>
  )
}