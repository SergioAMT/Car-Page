import { Footer, Navbar } from '@/components'
import '../app/globals.css'

// export const metadata = {
//   title: 'Car Hub',
//   description: 'Discover the best cars in the wordl.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className='relative'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
  )
}
