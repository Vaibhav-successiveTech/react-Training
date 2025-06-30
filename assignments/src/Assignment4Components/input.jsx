'use client';
import { useState } from "react";

export default function InputComponent(){
    let [state,setState] = useState('');
    return (
        <>
        <input value={state} onChange={(e)=>setState(e.target.value)}/>
        <br/>
        <br></br>
        Value : {state}
        </>
        
    );
}