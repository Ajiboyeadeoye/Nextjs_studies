// app/layout.js
import '../app/globals.css'

export const metadata = {
  title: 'My Next.js App',
  description: 'Learning Next.js 16 with Turbopack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
