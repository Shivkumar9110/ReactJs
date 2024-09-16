import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const AddValue = () => {
    setCount(count+1);
  }

  const RemoveValue = () => {
    setCount(count-1);
  }

  return (
    <>
     <h1 id='CountHading'>Count:{count}</h1>

     <br />

     <button id="AddValue"  onClick={AddValue}>Add Value</button>

     <button  id='RemoveValue' onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
