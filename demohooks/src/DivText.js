import {memo} from 'react'

function DivText({onIncrease}){
       console.log('re- render')
    return <>
        <h2>Hj EveryBody</h2>
        <button onClick={onIncrease}>Click</button>
        </>
}
export default memo(DivText)