import React, { useContext, useState } from 'react'
import PriceFilter from '../priceFilter/PriceFilter';
import RateFilter from './../rateFilter/RateFilter';
import { Context } from './../../context/ContextAPI';

export default function Filters() {

    const context = useContext(Context)

    const[start,setStart] = useState(0)
    const[end,setEnd] = useState(0)
    const[rate,setRate] = useState(0)


    function handleFilter(e){
        e.preventDefault()

        if(start && rate){
            console.log("1")
            context.setFilterdProducts(context.products.filter(pro => {
                return(
                    pro.rating === rate && (pro.price >= start && pro.price <= end)
                ) 
            }))
        } else if(start ===false && rate === false){
            console.log("2")
        } else {
            if( rate){
                console.log("3")
                context.setFilterdProducts(context.products.filter(pro => {
                    return pro.rating === rate
                }))
            } else {
                console.log("4")
                context.setFilterdProducts(context.products.filter(pro => {
                    return pro.price >= start && pro.price <= end
                }))
            } 
        }
    }
    return (
        <div className="filters">
            <div className="row">
                <div className="col col-md-12">
                    <PriceFilter setS={setStart} setE={setEnd} />
                </div>
                {/* <div className="col-6 col-md-12">
                    {start} : {end} : {rate}
                </div> */}
                <div className="col col-md-12">
                    <RateFilter rate={rate} setR={setRate} />
                </div>
            </div>
            <button className="btn btn-success w-100" onClick={(e)=>handleFilter(e)}>filter</button>
        </div>
    )
}
