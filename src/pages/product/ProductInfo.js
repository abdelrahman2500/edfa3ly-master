import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../context/ContextAPI';
import './index.scss'

export default function ProductInfo(props) {
    const context = useContext(Context)
    const[pro, setPro]= useState(...context.products.filter(p => p.id == props.match.params.id))
    const[mount, setMount]= useState(1)
    const[categ, setCateg]= useState(...context.categs.filter(c => c.id == pro.categoryId))
    

    {console.log(props)}
    useEffect(()=>{
        setPro(...context.products.filter(p => p.id == props.match.params.id))
        setCateg(...context.categs.filter(c => c.id == pro.categoryId))
    },[])
    

    return (
        <div className="product-info">
        {console.log(categ)}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 mb-2">
                        <div style={{backgroundColor: pro.color}} className="img-box p-2 border">
                            <img src={pro.image} className="w-100" alt={pro.name} />
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 mb-2">
                        <div style={{borderRightColor: pro.color}} className="details p-2">
                            <p className="lead">
                                <strong>Name: </strong>{pro.name}
                            </p>
                            <p className="lead">
                                <strong>Available colors: </strong>{pro.color} <i className="fas fa-arrow-right"></i>
                            </p>
                            <p className="lead">
                                <strong>Category: </strong>{categ.name}
                            </p>
                            <p className="lead">
                                <strong>Release Date: </strong>{pro.releaseDate.slice(0,10)}
                            </p>
                            <p className="lead">
                                <strong>Price: </strong>{`${pro.price} ${pro.currency}`}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 offset-md-4 col-md-4 offset-lg-0 col-lg-3 mb-2">
                        <div className="add-to-cart p-2 border text-center">
                            <h4 className="">Add to cart</h4>
                            <p className="lead">
                                <strong>Amount: </strong>
                                <input type="number" min="1" max="15" value={mount} onChange={(e)=> setMount(e.target.value)} />
                            </p>
                            <p className="lead total">
                                {/* <strong>Total price: </strong> */}
                                {`${mount>=15 ? pro.price*15 : mount<1 ? pro.price*1 : (mount * pro.price)} ${pro.currency}`}
                            </p>
                            <button className="btn btn-primary" onClick={()=> mount>15? setMount(15): mount<1? setMount(1) : console.log(mount)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
