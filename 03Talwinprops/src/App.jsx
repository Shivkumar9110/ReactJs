import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Components/Card'

function App() {
  // const [count, setCount] = useState(0)



  return (
    <>
     <h1 className='bg-green-800 text-black mb-4 '> Tailwind test</h1>
     
     <Card username='Amisha Anand' btnText='Amisha' sr='https://cdn.pixabay.com/photo/2020/07/30/07/24/indian-5449593_1280.jpg'/>
    <br />
     <Card username="shiv kumar"  btnText='About me' sr='https://cdn.pixabay.com/photo/2024/05/15/08/23/bird-8763079_640.jpg'/>
    <br />
     <Card username='himanshu' btnText=' About me ' sr='https://cdn.pixabay.com/photo/2021/01/02/18/53/indian-5882639_640.jpg'/>


    </>
  )
}

export default App
