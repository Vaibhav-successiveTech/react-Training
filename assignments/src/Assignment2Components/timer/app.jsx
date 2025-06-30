'use client';
import { useState } from "react";
import { useTimer } from "./TimerHook";
export default function TimerApp(){
    let [num,setnum] = useState(0);
    let [start,pause,reset] = useTimer();
    return (
        <>
        <input type="number" value={num} onChange={(e)=>{setnum(parseInt(e.target.value))}}/><br/>
        <button onClick={()=>{
            start(num,setnum);
        }}> Start </button>  <button onClick={pause}> Pause 
            </button> <button onClick={()=>{
                reset(setnum);
            }}> Reset </button>

        <h3>{num}</h3>

        </>
    );
}