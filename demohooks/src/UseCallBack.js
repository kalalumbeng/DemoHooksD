import {useState, memo, useCallback} from 'react'

import DivText from './DivText'

// memo Higher Order Component (HOC)
// usecallback

// 3 khai niem
// 1 hooks
// HOC
// Render Props 
// muc dich : tranh lap lai logic (don't re-render)

//useCallback : giup tranh tao ra mot so ham moi khong can thiet
//
 
function UseCallBack()
{
    const [counter, setCounter] = useState(1)
    // useCallback
    const handleClick = useCallback(() =>{
        setCounter(Prevcounter => Prevcounter + 1)
      },[])

      // not useCallback
      const handleClick2 = () =>{
        setCounter(counter + 1)
      }
  //useState  
  return (

    <div className="App" style={{padding:50}}>
      <DivText onIncrease={handleClick} />
      <h1>{counter}</h1>
      
    </div>
  );
}

export default UseCallBack