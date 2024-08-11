import './globals.css'

export const metadata = {
  title: 'Vedant Jain Portfolio',
  description: 'Portfolio website of Vedant Jain, Blockchain Developer and Computer Engineering student',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}
