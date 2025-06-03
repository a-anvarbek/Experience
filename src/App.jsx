import { useState } from 'react'
import './App.css'
import MainProject from "./MainProject";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainProject />
    </>
  )
}

export default App
