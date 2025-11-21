import './globals.css'

export const metadata = {
  title: 'Your Name - Photographer',
  description: 'Photography portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
