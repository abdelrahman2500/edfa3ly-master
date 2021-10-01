import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../context/ContextAPI';

import './index.scss'

export default function ColorFilter(props) {
    const context = useContext(Context)
    const [colorsSet, setColorsSet] = useState(new Set())
    const [colorsArr, setColorsArr] = useState([])
    const [colors, setColors] = useState([])
    const [visible, setVisible] = useState("invisible")

    useEffect(()=> {
        context.products.map(p => setColorsSet(colorsSet.add(p.color)))
        setColorsArr([...colorsSet])
    },[context.products])
    useEffect(()=>{
        setColors(colors)
    },[setColors])
    
    return (
        <div>
        <div className={colors.length < 1 ? "bg-dark" : "d-none"}>
                <span className="badge border p-2 m-1 invisible">{" "}</span>
        </div>
            <div className={colors.length >= 1 ? "bg-dark" : "invisible"}>
                {colors.map((color,i) => 
                    <span className="badge border p-2 m-1" key={i} style={{backgroundColor: color}}>{" "}</span>
                )}
            </div>
            <div className="colors-filter border border-2 my-3 p-3">
            {props.setC(colors)}

            {colorsArr.map((c, i) => 
                <div className="form-check" key={i}>
                    <input className="form-check-input" type="checkbox" onClick={(e)=> e.target.checked ? setColors([...colors ,e.target.value]): setColors(colors.length == 1 ? [] : colors.filter(color => color != e.target.value))} value={c} id={`flexCheckDefault${i}`} />
                    <label className="form-check-label" htmlFor={`flexCheckDefault${i}`}>
                        {c}
                    </label>
                </div>
            )}
            </div>
        </div>
    )
}
