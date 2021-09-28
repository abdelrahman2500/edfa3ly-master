import { createContext, useEffect, useState } from "react"
import axios from '../axios'

// import productsData from "../data/products.json"

export const Context = createContext()

export function ContextProvider(props){

    // initial state of products
    const[products, setProducts] = useState([])
    const[filterdProducts, setFilterdProducts] = useState(products)
    const[categs, setCategs] = useState([])


    // set products = all data
    useEffect(()=>{
        axios
            .get("http://test-api.edfa3ly.io/product")
            .then(res => {
                const data = res.data
                setProducts(data)
                setFilterdProducts(data)
        })
    }, [setProducts])

    // set filterd porducts = to products to show them in products page
    useEffect(()=> {
        setFilterdProducts(filterdProducts.length == 0 ? products : filterdProducts)
    },[setFilterdProducts])

    // set categories = all categories
    useEffect(()=>{
        fetch('http://test-api.edfa3ly.io/category')
            .then((response) => response.json())
            .then((res) => setCategs(res));
        // axios
        //     .get("http://test-api.edfa3ly.io/category")
        //     .then(res => {
        //         const data = res.data
        //         setCategs(data)
        // })
    }, [setCategs])



    return(
        <Context.Provider value={{products, setProducts, filterdProducts, setFilterdProducts, categs, setCategs }}>
            {props.children}
        </Context.Provider>
    )
}