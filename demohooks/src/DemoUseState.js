
import {useState} from 'react'

function DemoUseState()
{
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }

    return(
        <div style={{padding: '50px'}}>
            <h1>{count}</h1>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default DemoUseState