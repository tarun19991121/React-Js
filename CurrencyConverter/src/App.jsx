import { useState } from "react";
import { InputBox } from "./components";
import { useCurrencyInfo } from "./hooks";

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => { setConvertedAmt(amount * currencyInfo[to]) }


  return (
    <>
      <h1>currency</h1>
    </>
  )
}

export default App
