import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prep Platform',
  description: 'Learn, practice, and ace TCS NQT, Wipro and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
            <a href="/" className="font-semibold">Prep Platform</a>
            <nav className="flex gap-4 text-sm text-gray-600">
              <a href="/learn" className="hover:text-gray-900">Learn</a>
              <a href="/tracks" className="hover:text-gray-900">Tracks</a>
              <a href="/assessments" className="hover:text-gray-900">Assessments</a>
              <a href="/admin" className="hover:text-gray-900">Admin</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  )
}