export default function TracksPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Company Tracks</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li><a className="underline" href="/tracks/tcs-nqt">TCS NQT</a></li>
        <li><a className="underline" href="/tracks/wipro">Wipro</a></li>
      </ul>
    </div>
  )
}