"use client";
import {  createContext, useContext, useEffect, useState } from "react";
import {useAuth} from "./auth";
import { redirect } from "next/navigation";


import { AuthContext } from "./auth";
export default function LoginComponent() {
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  let {status,setStatus} = useContext(AuthContext);

    useEffect(()=>{
        if(status){
            redirect('Question4/Home');
        }
    },[status])
 

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Username"
      />
      <br />
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <br />
     <button onClick={()=>{
        setStatus(name,pass);
     }} > Login </button>
    
      
    </>
  );
}
