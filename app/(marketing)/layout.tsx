// app/layout.js
import '../app/globals.css'

export const metadata = {
  title: 'My Next.js App',
  description: 'Learning Next.js 16 with Turbopack',
}

export default function MarketingLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>

        {children}

        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
