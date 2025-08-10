interface Props {
  params: { id: string }
}

export default function AssessmentDetailsPage({ params }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Assessment {params.id}</h2>
      <p className="text-gray-600">Read the instructions before starting. (MVP placeholder)</p>
      <a href={`/assessments/${params.id}/take`} className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm">Start</a>
    </div>
  )
}