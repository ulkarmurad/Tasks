import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Dropdown from './assets/components/divSellector/sellector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dropdown/>
    </>
  )
}

export default App
