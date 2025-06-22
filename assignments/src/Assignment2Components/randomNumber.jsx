'use client'
import { useState } from "react";

export default function randomNumberGenerator(){
    let [randomNumber,setNumber] = useState(25);
    return(
        <>
        {randomNumber}
        <br/>
        <button onClick={()=>{
            setNumber(Math.round(Math.random()*100));
        }}> Generate Random Number </button>
        </>
    )
}