import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { Context } from './../../context/ContextAPI';

export default function PriceFilter(props) {

    const context = useContext(Context)

    const[pricesArr, setPricesArr] = useState([])
    const[start, setStart] = useState(Math.min(...pricesArr))
    const[end, setEnd] = useState(Math.max(...pricesArr))

    
    useEffect(()=> {
        // setPricesArr([])
        context.products.map(el => 
            setPricesArr(pricesArr.push(el.price))    
        )
        setPricesArr(pricesArr)
    },[context.setFilterdProducts])
    
    useEffect(()=>{
        setStart(Math.min(...pricesArr))
        setEnd(Math.max(...pricesArr))
    },[])

    function handlePrice(){
        props.setS(start)
        props.setE(end)
        // context.setFilterdProducts(context.products.filter(pro => pro.price <= end && pro.price >= start))
    }
    handlePrice()

    return (
        <div className="price-filter my-4">
        <h4>Rating</h4>
        <form>
            <div>
                <label htmlFor="start" className="form-label d-block">Start From {start}</label>
                <input className="w-100" id="start" type="number" value={start} min={Math.min(...pricesArr)} max={Math.max(...pricesArr)} 
                    onChange={(e)=> setStart(e.target.value)}
                    onBlur={()=> handlePrice()} />
            </div>
            <div>
                <label htmlFor="end" className="form-label d-block">End To {end}</label>
                <input className="w-100" id="end" type="number" value={end} min={Math.min(...pricesArr)} max={Math.max(...pricesArr)} 
                    onChange={(e)=> setEnd(e.target.value)}
                    onBlur={()=> handlePrice()} />
            </div>
        </form>
        </div>
    )
}
