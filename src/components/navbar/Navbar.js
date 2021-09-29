import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Context } from './../../context/ContextAPI';

export default function Navbar() {
    const context = useContext(Context)
    const[searchValue,setSearchValue] = useState('')

    return (
        <div className="navbar p-0 mb-4">
            <nav className="navbar w-100 navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={process.env.PUBLIC_URL + "/"} exact>
                        <img src={process.env.PUBLIC_URL + "/images/edfa3ly-logo.e1c5bdc9.png"} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={process.env.PUBLIC_URL +"/"} exact>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={process.env.PUBLIC_URL +"/products/"}  onClick={()=> context.setFilterdProducts(context.products)}>Products</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                                value={searchValue}
                                onChange={(e)=>setSearchValue(e.target.value)}/>
                            <Link to={searchValue.trim() === "" ? false : process.env.PUBLIC_URL + '/products/'} onClick={() => context.setFilterdProducts(context.products.filter(el=> 
                                el.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1
                                || el.color.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1
                                ))}>
                                    <button className="btn btn-outline-success" type="button">Search</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
