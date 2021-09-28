import React from 'react'
import "./index.scss"

export default function Header(props) {
    return (
        <div className="header mb-4 p-3 text-center ">
            <h2 className="p-3">{props.title}</h2>
        </div>
    )
}
