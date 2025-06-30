'use client'
import { useState } from "react";
import { useClipboard } from "./copyToClipBoard";
export default function CopyApp(){
    let [status,copy] = useClipboard();
    let [text,setText] = useState('');
    return (
        <>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/><button onClick={()=>{
            copy(text);
        }}> 
            {status} 
        </button>
        </>
    );
}