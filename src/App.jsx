

import { useState } from 'react'
import './App.css'

function App() {
const [displayContent,setDisplay]=useState("")
const [prev,setPrev]=useState('')
const handleDisplay=(input)=>{
  setDisplay(displayContent+input)
}
const handleResult=()=>{
 setPrev(displayContent)
  setDisplay(eval(displayContent))
}
const handleClear=()=>{
  setDisplay("")
  setPrev("")
}
const handleDelete=()=>setDisplay(displayContent.slice(0,-1))
  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous">{prev} </div>
          <div className="current">{displayContent}</div>
         {/* <input value={displayContent} readOnly className='screen' type="text" /> */}
        </div>
        <button onClick={handleClear} className='span-two'>AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={()=>handleDisplay('/')}>/</button>
        <button onClick={()=>handleDisplay('1')}>1</button>
        <button onClick={()=>handleDisplay('2')}>2</button>
        <button onClick={()=>handleDisplay('3')}>3</button>
        <button onClick={()=>handleDisplay('*')}>*</button>
        <button onClick={()=>handleDisplay('4')}>4</button>
        <button onClick={()=>handleDisplay('5')}>5</button>
        <button onClick={()=>handleDisplay('6')}>6</button>
        <button onClick={()=>handleDisplay('+')}>+</button>
        <button onClick={()=>handleDisplay('7')}>7</button>
        <button onClick={()=>handleDisplay('8')}>8</button>
        <button onClick={()=>handleDisplay('9')}>9</button>
        <button onClick={()=>handleDisplay('-')}>-</button>
        <button onClick={()=>handleDisplay('.')}>.</button>
        <button onClick={()=>handleDisplay('0')}>0</button>
        <button onClick={handleResult} className='span-two'>=</button>
      </div>
    </>
  )
}

export default App
