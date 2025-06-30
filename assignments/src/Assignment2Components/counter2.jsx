'use client'

import { useState } from "react"

export default function counterChange(){
    let [count,setCount] = useState(0);
    let [step,setStep] = useState(0);
    return (
        <>
        <p>{count}</p>
        <br/>
        <button onClick={()=>{
            setCount(count+(step));
        }}> Increment </button>

        <button onClick={()=>{
            setCount(count -(step));
        }}> Decrement </button>

        <input type = "number" placeholder="enter step" value = {step} onChange={(e)=>{
            setStep(parseInt(e.target.value));
            console.log(typeof(step));
            console.log(typeof(count));
        }}></input>
        </>
    );
}