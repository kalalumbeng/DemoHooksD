
import {useState, useMemo, useEffect} from 'react'

function AppMemo()
{
    const [name, setName] = useState('');
    const [price, setPricet] = useState('');
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    


    const handleSubmit = () =>{        
        setProducts([...products,{name,
        price: +price
        }])
    }
    //// before 
    // const total = products.reduce((resuft,prod) =>
    // {
    //     console.log('(not useMemo) tinh lai ')
    //    return resuft+prod.price
    // }, 0 )
    

    //// after 
     useEffect(()=>{

        const res = products.reduce((resuft,prod) =>{
            console.log('(useMemo) tinh lai ')
       return resuft+prod.price
        },0)

        setTotal(res)
    },[products])

    return (
        <div style={{padding:'20px 30px'}}>
        <input
        value={name}
        placeholder='Name'
        onChange={e=>setName(e.target.value)}
        
        />
        <br/>
        <input
        value={price}
        placeholder='Price'
        onChange={e=>setPricet(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>

        <br/>
        Total: {total}
        <ul>
            {
                products.map((product, index) => (<li key = {index}> {product.name} - {product.price}</li>))
            }
        </ul>
        </div>
    )
}

export default AppMemo