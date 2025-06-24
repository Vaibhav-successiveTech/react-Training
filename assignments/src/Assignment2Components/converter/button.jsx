'use client'
import { useContext } from "react";
import { langContext } from "./converter";

export default function Buttons(){
    let {from,to,langfrom,langto,setFrom,setTo,setLangFrom,setLangTo} = useContext(langContext);
    return (
        <>
        <button onClick={()=>{
            
        }}>
        Convert
        </button>  <button onClick={()=>{
            setTo(from);
            setFrom(to);
            setLangFrom(langto);
            setLangTo(langfrom);
        }}>
        Swap
         </button>
        </>
        
    )
}