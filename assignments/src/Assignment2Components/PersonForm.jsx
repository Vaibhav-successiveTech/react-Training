'use client'
import { useState } from "react"

export default function personForm(){
    let [firstName,setFirstName] = useState('');
    let [lastName,setLastName] = useState('');
    let [age,setAge] = useState(0);
    return (
        <form>
            
            <p>FirstName : {firstName}</p>
            <input type = 'text' onChange={(e)=>{
                setFirstName(e.target.value);
            }}></input>

            <p>LastName : {lastName}</p>
            <input type = 'text' onChange={(e)=>{
                setLastName(e.target.value);
            }}></input>

            <p>Age : {age}</p>
            <input type = 'number' onChange={(e)=>{
                setAge(e.target.value);
            }}></input>
        
        </form>
    );
}