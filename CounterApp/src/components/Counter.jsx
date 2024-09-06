import React from 'react'
import { useState } from "react"

function Counter(props) {

    const [currCount, setCurrCount] = useState(props.counterVal)

    function increment() {
        if (currCount >= 20) {
            return
        }
        setCurrCount(currCount + 1)
    }

    function decrement() {
        if (currCount <= 0) {
            return
        }
        setCurrCount(currCount - 1)
    }
    return (
        <div className='counterStyle'>
            <h1>This is a counter App</h1>
            <p>This gives you a better understanding of React hooks</p>
            <h2>Current Count : {currCount} works independently
            </h2>

            <button onClick={increment}>Increase Value {currCount}</button>
            <button onClick={decrement}>Decrease Value {currCount}</button>
        </div>
    )
}

export default Counter