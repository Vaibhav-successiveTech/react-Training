import { useState } from "react";

export default function LoginForm(){
    let [name,setName] = useState('');
    let [pass,setPass] = useState('');
    return (
        <>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="username"/>
        <br/>
        <br/>
        <input value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="password"/>
        <br/>
        <br/>
        <button onClick={()=>{
            console.log(name,pass);
            setName('');
            setPass('');
        }}> Submit </button>
        </>
    );
}