import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*`+-_="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => { passGenerator() }, [length, numberAllowed, charAllowed, passGenerator])

  const copyToClipboard = useCallback(function copyToClipboard() {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='bg-gray-700 w-1/3 mx-auto my-8 p-3'>
        <h1 className='text-4xl text-center text-white my-2 py-'>Password Generator</h1>
        <input type='text' className='ml-14 my-2 py-2 px-10 rounded-md text-orange-400' value={password} readOnly ref={passwordRef} />
        <button className='bg-orange-400 py-2 px-10 rounded-md ml-0 text-white' onClick={copyToClipboard} >Copy</button>
        <br />
        <input type='range' min={6} max={100} value={length} className='ml-10' onChange={(e) => setLength(e.target.value)} />
        <label className='text-orange-300 mx-3'>length ({length})</label>
        <input type='checkbox' id='numberinput' defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} />
        <label htmlFor='numberinput' className='text-orange-300 mx-3'>Numbers</label>
        <input type='checkbox' id='characterinput' defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
        <label htmlFor='characterinput' className='text-orange-300 mx-2'>Characters</label>
      </div >
    </>
  )
}

export default App