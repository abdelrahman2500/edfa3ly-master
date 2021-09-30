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
    const[proCount,setProCount] = useState(30)
    const[page,setPage] = useState(1)

    useEffect(()=>{
        setProducts(context.filterdProducts)
    },[context.filterdProducts])

    function gototop(){
        window.scrollTo(0,0)
    }

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
                                <div className="page-num d-flex justify-content-between mb-2">
                                    <span className="badge bg-info">
                                        {products.length} products
                                    </span>
                                    <span className="badge bg-dark">
                                        # {page}
                                    </span>
                                </div>
                                <div className="row">
                                    {products.length == 0 ?
                                    <div className="text-center">
                                        <h4>There are no products</h4>
                                    </div>
                                    
                                    : products.map((pro,i) => 
                                        i < page * proCount && i >= (page-1) * proCount ? 
                                        <div className="col-12 col-md-6 col-lg-4" key={pro.id}>
                                            <Product props={pro} />
                                        </div>
                                        : ""
                                    )}
                                </div>
                                {/* pagination */}
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center py-0">
                                        {context.filterdProducts.map((el,i) => 
                                        i < Math.ceil(context.filterdProducts.length / proCount) ? 
                                        <span className={i+1 == page ? "active": ""} onClick={()=>setPage(i+1)} key={el.id}>
                                            <li className="page-item" onClick={()=> gototop()}><span className="page-link">{i+1}</span></li>
                                        </span>
                                        : ""
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
