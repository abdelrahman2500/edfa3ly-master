import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../context/ContextAPI';
import './index.scss'

export default function ProductInfo(props) {
    console.log(props)
    const context = useContext(Context)
    const[pro, setPro]= useState({})
    const[mount, setMount]= useState(1)


    useEffect(()=>{
        setPro(...context.products.filter(p => p.id == props.match.params.id))
    },[])
    

    return (
        <div className="product-info">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 mb-2">
                        <div className="img-box p-2 border">
                            <img src={pro.image} className="w-100" alt={pro.name} />
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 mb-2">
                        <div style={{borderColor: pro.color}} className="details p-2">
                            <p className="lead">
                                <strong>Name: </strong>{pro.name}
                            </p>
                            <p className="lead">
                                <strong>Available colors: </strong>{pro.color}
                            </p>
                            <p className="lead">
                                <strong>Release Date: </strong>{pro.releaseDate}
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
                                <strong>Mount: </strong>
                                <input type="number" min="1" max="15" value={mount} onChange={(e)=> setMount(e.target.value)} />
                            </p>
                            <p className="lead total">
                                {/* <strong>Total price: </strong> */}
                                {`${mount>=15 ? pro.price*15 : (mount * pro.price)} ${pro.currency}`}
                            </p>
                            <button className="btn btn-primary" onClick={()=> mount>15? setMount(15): console.log(mount)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
