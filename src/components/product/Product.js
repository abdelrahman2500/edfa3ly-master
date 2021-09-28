import React, { useEffect, useState } from 'react'
import './index.scss'

export default function Product({props}) {
    const[stars, setStars]= useState(Array(5).fill("icon"))

    return (
        <div className="pro-comp text-center mb-3 p-3 bg-white shadow">
            <div className="img-box">
                <img src={props.image} className="w-100" alt={props.name} />
            </div>
            <div className="pro-name my-2">
                <h4 className=" m-0">{props.name}</h4>
            </div>
            <div className="rating my-2">
                {stars.map((star,i) => i < 5 ? <i key={i} className={`fa${i< Number(props.rating) ? "s": "r"} fa-star`}></i>: "" )}
            </div>
            <div className="price my-2">
                <p className="lead fw-bold m-0">{`${props.price} ${props.currency}`}</p>
            </div>
            <div className="add-btn my-2">
                <button className="btn btn-primary">
                    <i className="fas fa-cart-plus"></i>
                </button>
            </div>
        </div>
    )
}
