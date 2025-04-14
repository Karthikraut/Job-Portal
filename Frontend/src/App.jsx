import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-red-500'>Hello, Let's build some together....</h1>
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
    </>
  )
}

export default App
