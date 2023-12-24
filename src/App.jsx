import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyInfo(from)

  const options = Object.keys(CurrencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
const convert = () => {
  setConvertedAmount(amount*CurrencyInfo[to])
}
  
  return (
    <>
    <div></div>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url('https://images.unsplash.com/photo-1521794286957-348245b517a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}>

          <div className='w-full mb-1'>
            <InputBox label="from" amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setAmount(amount)}
            selectCurrency={from} onAmountChange={(amount) => setAmount(amount)} />
          </div>
          <div className='relative w-full h-0.5'>
            <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
          </div>

          <div className='w-full mt-1 mb-4'>
            <InputBox label="To" amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setTo(currency)}
            selectCurrency={from}
            amountDisable />
          </div>
          <button type="submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {}</button>
        </form>
        </div>

      </div>

    </div>
    </>
  )
}

export default App
