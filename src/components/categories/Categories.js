import React, { useContext, useEffect, useState } from 'react'
import  './index.scss';
import { Context } from './../../context/ContextAPI';
import { Link } from 'react-router-dom';

export default function Categories() {

    // using context api to fetch categories
    const context = useContext(Context)
    // initial state of categories
    const [categories, setCategories] = useState([])

    // getting all categories before rendering the component
    useEffect(()=>{
        setCategories(context.categs)
    },[context.categs])



    return (
        <div className="categs mb-4 p-3 text-center">
        {/* showing categories */}
            <h2 className="p-3 fw-bold">Categories</h2>
            <div className="row">
                {categories.map(categ => 
                    <div key={categ.id} className="col-6 col-md-4 col-lg mb-2">
                        <Link to="/edfa3ly-master/products/" onClick={()=> context.setFilterdProducts(context.products.filter((el) => el.categoryId === categ.id))}>
                            <div className="categ shadow position-relative">
                                <div className="img-box">
                                    <img src={categ.image} className="w-100" alt={categ.name} />
                                </div>
                                <p>{categ.name}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>




            
        </div>
    )
}
