import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState()

  const Colorchange=()=>{
    const randomNumber=Math.floor(Math.random()*1677715)
    const randomCode="#"+randomNumber.toString(16)

    navigator.clipboard.writeText(randomCode) //to copy color code in clipboard
    
    return randomCode;// Return the generated color code
}

  return (
    <>
    <div  
        style={{backgroundColor:color}}
        >
<div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{color}</h1>
        <button onClick={()=>setColor(Colorchange())} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Click me
        </button>
        
      </div>
    </div>
        </div>
    </>
  )
}

export default App
