import { useState } from "react"
import Counter from "./components/counter"
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  function increment() {
    if (count >= 20) {
      return
    }
    setCount(count + 1)
  }

  function decrement() {
    if (count <= 0) {
      return
    }
    setCount(count - 1)
  }



  return (
    <>
      <div className="upper">
        <Counter counterVal={10} />
        <Counter counterVal={5} />
      </div>

      <div className="bottom">
        <div className="section-1">
          <h1>hey I'm a counter</h1>
          <h2>Works together : {count}</h2>
          <button onClick={increment}>Increase Value together : {count} </button>
          <button onClick={decrement}>Decrease Value together : {count}</button>
        </div>
        <div className="section-2">
          <h1>hey I'm a counter too, different but same</h1>
          <h2>Works together : {count}</h2>
          <button onClick={increment}>Increase Value : {count} </button>
          <button onClick={decrement}>Decrease Value : {count}</button>
        </div>
      </div>
    </>
  )
}

export default App
