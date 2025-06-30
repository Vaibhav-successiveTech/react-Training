'use client'
import { useState } from "react";
import { useLocalStorage } from "./localStorage";

export default function LocalStorageApp(){
    let [key,setKey] = useState('');
    let [val,setVal] = useState('');
    let [setter,getter,remove] = useLocalStorage();

    return (
        <>
            <input type='text' value={key} onChange={(e)=>setKey(e.target.value)}/><label> key </label>
            <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/><label> val </label>
            <br/>
            <button onClick={()=>{
                setter(key,val);
                setKey('');
                setVal('');
            }}> Add to Local Storage </button> <button onClick={()=>{
                remove(key);
            }}> Remove From LocalStorage </button> <button onClick={()=>{
                setVal(getter(key));
            }}> Get From Local Storage </button>
        </>
    );
}