'use client';
import { useState , useContext, useEffect } from "react"
import { AuthContext } from "../page2/auth";
import { redirect } from "next/navigation";
export default function LoginComponent(){
    let [user,setUser] = useState('');
    let [pass,setPass] = useState('');
    let {status,setStatus} = useContext(AuthContext);

    useEffect(()=>{
        if(status){
            redirect('Question5/DashBoard');
        }
    },[status])

    return (
        <>
        <input value={user} onChange={(e)=>setUser(e.target.value)}/>
        <label> Username </label>
        <br/>
        <br/>
        <input value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <label> Password </label>
        <br/>
        <br/>
        <button onClick={()=>{
            setStatus(user,pass);
        }}> Login </button>
        </>
    );
}