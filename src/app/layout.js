import { Roboto } from "next/font/google"
import "./globals.css"


const roboto = Roboto({
  subsets: ['latin-ext'],
  weight: ['100', '300', '400', '700'],
  variable: '--font-roboto'
})

export const metadata = {
  title: "Devias",
  description: "Humanizing Digital Products",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>{children}</body>
    </html>
  )
}
