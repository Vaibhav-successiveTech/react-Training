'use client';
import { useState } from "react";

export default function Counter(){
    let [count,setCount] = useState(0);
    return (
        <>
        <h3> {count} </h3>
        <br/>
        <button onClick={()=>setCount(count+1)}> Increment </button>
        <button onClick={()=>setCount(count-1)}> Decrement </button>
        </>
    );
}