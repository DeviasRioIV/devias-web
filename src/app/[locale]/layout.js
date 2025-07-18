// External Modules
import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { Roboto } from "next/font/google"
import './global.css'
import 'swiper/css'
import 'swiper/css/autoplay'

// Internal modules
import ClarityInit from '@/app/Components/Clarity/Clarity'



const roboto = Roboto({
  subsets: ['latin-ext'],
  weight: ['100', '300', '400', '700'],
  variable: '--font-roboto'
})

export default async function RootLayout({ children, params }) {

  /* // Local state
  const [loading, setLoading] = React.useState(true)

  // Mount effect
  React.useEffect(() => {

    // Update loading
    setLoading(false)

  }, []) */

  const locale = params?.locale || 'en'

  const messages = await getMessages(locale)

  return (
    <html lang={locale}>

      <head>
        <title>Devias</title>
        <meta name="description" content="Humanizing Digital Products" />
        <ClarityInit />
      </head>

      <body className={roboto.variable}>

        <NextIntlClientProvider messages={messages}>

          <div id="root">

            {children}

          </div>


        </NextIntlClientProvider>

      </body>
    </html>
  )
}
