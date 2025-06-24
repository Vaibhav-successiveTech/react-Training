'use client'
import { useContext } from "react";
import { ParentContext } from "./parent";
export default function Child(){
    let {count, setCount, fn} = useContext(ParentContext);
    return (
        <>
        <p> {count} </p>
        <button onClick={fn}> Increment </button> <button onClick={()=>setCount(0)} > Reset </button>
        </>

    );
}