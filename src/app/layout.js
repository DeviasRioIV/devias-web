'use client'

// External Modules
import React from 'react'

import {AppProvider} from './AppContext'
import {reducer, initialState} from './AppReducer'

import { Roboto } from "next/font/google"
import './styles/globals.css'


const roboto = Roboto({
  subsets: ['latin-ext'],
  weight: ['100', '300', '400', '700'],
  variable: '--font-roboto'
})

export default function RootLayout({ children }) {

  // Declare reducer
  const [state, dispatch] = React.useReducer(reducer, initialState)

  // Local state
  const [loading, setLoading] = React.useState(true)

  // Mount effect
  React.useEffect(() => {

    // Update loading
    setLoading(false)

  }, [])

  return (
    <html lang="en">
      <body className={roboto.variable}>
        {!loading &&
        <AppProvider value={{state, dispatch}}>
          {children}
        </AppProvider>
        }
      </body>
    </html>
  )
}
