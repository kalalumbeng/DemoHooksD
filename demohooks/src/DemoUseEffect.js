import {useState, useEffect} from 'react'

import Content from './Content'

function DemoUseEffect() {

  // const [counter, setCounter] = useState(1)

  // const handleClick = () =>{
  //   setCounter(counter + 1)
  // }
  //
  // useState
  //

  // return (
  //   <div className="App" style={{padding:50}}>
  //     <h2>{counter}</h2>

  //     <button onClick={handleClick}>Click</button>
  //   </div>
  // );
  
  //
  // useEffect
  //
  //1 update state
  //2 update dom
  //3 render UI
  //4 call clean up (deps change)
  //5 call useEffect
  
  //
  // uselayoutEffect
  //
  //1 update state
  //2 update dom  
  //3 call clean up (deps change)
  //4 call uselayoutEffect
  //5 render UI

  
  const [show, setShow] = useState(false)
  
  return (
    
     // useEffect
    <div  style={{padding:50}}>              
      <button onClick={()=>{setShow(!show)}}>show/ del</button>
      <h2>{show&&<Content/>}</h2>
    </div>
    
  )
}

export default DemoUseEffect;