import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../context/ContextAPI';

import './index.scss'

export default function RateFilter(props) {
    const context = useContext(Context)
    const[stars, setStars]= useState(Array(5).fill("icon"))
    const[rate, setRate] = useState(props.rate)

    function handleRate(number){
        console.log(number)
        setRate(number)
        props.setR(number)
    }

    function showStars(num){
        return (
            <p className="border p-2" onClick={()=> handleRate(num)}>{stars.map((star,i) => i < 5 ? <i key={i} className={`fa${i< num ? "s": "r"} fa-star`}></i>: "" )}</p>
        )
    }

    return (
        <div className="rate-filter my-4 p-3">
            <h4>Rating : {rate == 0 ? "all" : rate + " Stars"}</h4>
            {showStars(5)}
            {showStars(4)}
            {showStars(3)}
            {showStars(2)}
            {showStars(1)}
            
            <p className="border p-2 fw-bold" onClick={()=> handleRate(0)}>All Ratings</p>
            
        </div>
    )
}
