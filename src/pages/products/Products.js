import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { Context } from './../../context/ContextAPI';
import Header from '../../components/header/Header';
import Categories from './../../components/categories/Categories';
import Product from '../../components/product/Product';
import Filters from './../../components/filters/Filters';

export default function Products() {
    const context = useContext(Context)
    const[products, setProducts] = useState([])
    useEffect(()=>{
        setProducts(context.filterdProducts)
    },[context.filterdProducts])

    return (
        <div className="products">
            <div className="container">
                <Header title="products" />
                {/* showing categories */}
                {!context.categs.length  ?
                    <p>loading...</p>
                :
                    <Categories />
                }
                {/*  */}
                    <div className="productsAndFilters mb-4 p-3">
                        <div className="row">
                            {/* filters */}
                            <div className="col-12 col-md-4">
                                <Filters />
                            </div>

                            {/* products */}
                        {context.filterdProducts.length != products.length ?
                            <p>loading...</p>
                        :
                            <div className="col-12 col-md-8 bg-light p-3">
                                <div className="row">
                                    {products.map(pro => 
                                        <div className="col-12 col-md-6 col-lg-4" key={pro.id}>
                                            <Product props={pro} />
                                        </div>
                                    )}
                                </div>
                                {/* {products.length} */}
                            </div>
                        }   

                        </div>
                    </div>
            </div>
        </div>
    )
}
