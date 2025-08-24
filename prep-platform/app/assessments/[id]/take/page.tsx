interface Props {
  params: { id: string }
}

export default function TakeAssessmentPage({ params }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Exam: {params.id}</h2>
        <div className="rounded border px-3 py-1 text-sm">Time: 00:30:00</div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <button key={i} className="rounded border bg-white py-2 text-sm hover:bg-gray-50">{i + 1}</button>
            ))}
          </div>
        </aside>
        <section className="col-span-9 space-y-3">
          <div className="rounded border bg-white p-4">
            <div className="font-medium">Q1. Sample question stem (placeholder)</div>
            <div className="mt-3 space-y-2">
              {["Option A", "Option B", "Option C", "Option D"].map((opt, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input type="radio" name="q1" />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="rounded border px-3 py-2 text-sm">Previous</button>
            <div className="flex gap-2">
              <button className="rounded border px-3 py-2 text-sm">Flag</button>
              <button className="rounded bg-black text-white px-3 py-2 text-sm">Submit Section</button>
            </div>
            <button className="rounded border px-3 py-2 text-sm">Next</button>
          </div>
        </section>
      </div>
    </div>
  )
}