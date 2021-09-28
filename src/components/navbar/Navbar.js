import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from './../../context/ContextAPI';

export default function Navbar() {
    const context = useContext(Context)

    return (
        <div className="navbar p-0 mb-4">
            <nav className="navbar w-100 navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/edf3ly" exact>
                        <img src={"/images/edfa3ly-logo.e1c5bdc9.png"} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/edf3ly" exact>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/edf3ly/products"  onClick={()=> context.setFilterdProducts(context.products)}>Products</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
