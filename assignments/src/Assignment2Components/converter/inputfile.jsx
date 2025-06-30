'use client'

import { useContext } from "react"
import { langContext } from "./converter";
export default function InputField(){
    let {from,to,langfrom,langto,setFrom,setTo,setLangFrom,setLangTo} = useContext(langContext);
    return (
       <>
        <input type="text" id="from" value={from} onChange={(e)=>{
            setFrom(e.target.value);
        }}></input> <label for ='from'> {langfrom} </label>
        
        <br/>
        <br/>

        <input type="text" id="to" value={to} disabled></input> 
        <label for ='to'> {langto} </label>
        
        
        
        </>

    )
}