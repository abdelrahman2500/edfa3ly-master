import React from 'react'
import Categories from '../../components/categories/Categories';
import Header from './../../components/header/Header';

export default function Home() {
    return (
        <div className="home">
            {/* header */}
                <Header title="edf3ly" />
                <Categories />


            {/* footer */}
            
        </div>
    )
}
