import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';

function App() {

  // let counter = 15;

  let [counter, setCounter] = useState(15);

  const addVal = () => {
    console.log("clicked addVal", Math.random(), counter);
    // counter = counter+1;
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeVal = () => {
    console.log("clicked remove val", Math.random(), counter);
    // counter = counter-1;
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>chair aur react</h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addVal}>addValue : {counter}</button>
      <br />
      <button onClick={removeVal}>removeVal : {counter} </button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
