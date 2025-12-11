import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Space_Grotesk } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin'] 
})
const spaceGrotesk = Space_Grotesk({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Pranshu Sharma Portfolio',
  description: 'Social Media Manager specializing in content strategy, paid media, and brand growth',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#ffffff',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
         <link rel="icon" href="/fav.png" sizes="any" />
      </head>
      <body className={`${poppins.className} antialiased transition-colors duration-300 bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
