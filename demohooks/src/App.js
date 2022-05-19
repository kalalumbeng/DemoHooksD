
import './App.css';
import {useState, useRef} from 'react'


//let intervalId
function App() {

  const [count, setCount] = useState(0)

  let intervalId = useRef()

  

  const handleStart = () =>{
    intervalId = setInterval(()=>{
      setCount(count => count + 1)
    },1000)
  }

  const handleStop = () =>{
    clearInterval(intervalId)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      
    </div>
  );
}

export default App;
