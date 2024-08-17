import { useState } from 'react'
import './App.css'
import { generateMnemonic } from 'bip39'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button onClick={()=>{
     
       const Mnemonic = generateMnemonic();
       console.log(Mnemonic);
     }}>Generate</button>
    </>
  )
}

export default App
