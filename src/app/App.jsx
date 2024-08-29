// External Modules
import React from 'react'
import {RouterProvider} from 'react-router-dom'

// Router
import router from './Router/routes'
import {AppProvider} from './AppContext'
import {reducer} from './AppReducer'

export default function App() {

  // Declare reducer
  const [state, dispatch] = React.useReducer(...reducer)

  // Local state
  const [loading, setLoading] = React.useState(true)

  // Mount effect
  React.useEffect(() => {

    // getLanguage()


    // Update loading
    setLoading(false)

    // Config fontAwesome
    const configFA = document?.createElement('script')
    configFA.innerHTML = 'FontAwesomeConfig = { autoReplaceSvg: "nest"};'
    document?.body.appendChild(configFA)

  }, [])

  // const getLanguage = async () => {
  //   const res = await fetch('/api/language/english')

  //   console.log(res)
  // }

  return (

    !loading &&
    <AppProvider value={{state, dispatch}}>
      <RouterProvider router={router} />
    </AppProvider>

  )

}
