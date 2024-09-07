import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  const PassGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*`+-_="




  }, [length, numberAllowed, charAllowed])


  return (
    <>
      <div className="w-xl bg-gray-700">
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      </div>
    </>
  )
}

export default App
