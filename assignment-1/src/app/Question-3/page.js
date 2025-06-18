'use client'
import { useState } from "react";
import Weather from "./weatherComponent";

export default function Home(){
    let [temp,setTemp] = useState();
    return (
        <>
        <input type="number" placeholder="Enter Temperature" id = "input"></input>
        <button onClick={()=>{
            const input = document.getElementById('input');
            setTemp(input.value);
        }}> Click </button>
        <Weather temperature = {temp}/>
        </>
    );
}