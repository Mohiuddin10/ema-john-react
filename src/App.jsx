import { useState } from 'react'
import logo from './images/Logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      
       
    </div>
  )
}

export default App
