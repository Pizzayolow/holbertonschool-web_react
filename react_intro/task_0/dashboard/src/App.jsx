import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="App-header">
        <img src="public/assets/holberton-logo.jpg" alt="holberton-logo"></img>
        <h1 style="text-color: #e1003c">School Dashboard</h1>
      </div>

      <div class="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div class="App-footer">
        <p>"Copyright the current year e.g: 2025 - holberton School</p>
      </div>
      
    </>
  )
}

export default App
