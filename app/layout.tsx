import '../styles/globals.css'

export const metadata = {
  title: 'Core CSS - Фреймворк для быстрого создания пользовательских интерфейсов.',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className='h-full antialiased'>
        {children}
      </body>
    </html>
  )
}
