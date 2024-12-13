//import { createContext, Dispatch, useState } from 'react'
//import { Dispatch } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'

/*ztype ContextType = {
  theme: string
  setTheme: Dispatch<React.SetStateAction<string>>
}*/

//export const ThemeContext = createContext<ContextType | null>(null)

function App() {
  //console.log(allBeans)
  //console.log(allFacts)
  return (
    <RouterProvider router={router} />
  )
}
export default App

