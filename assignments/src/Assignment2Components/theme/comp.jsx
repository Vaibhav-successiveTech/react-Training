'use client'
import { useContext } from "react"
import { themeContext } from "./theme"


export default function ParaComponent(){
    let {theme} = useContext(themeContext);
    let color = theme == 'Light'?'Black':'White';
    return (
        <div>
        <h3 style={{color : color}}> This is {theme} Theme  </h3>
        <p style={{color : color}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Aut error recusandae saepe dolorum amet, adipisci, 
            sint incidunt nesciunt esse, soluta maxime velit ullam iure 
            perspiciatis laborum voluptate illum magni cupiditate.</p>
        </div>
    )
}