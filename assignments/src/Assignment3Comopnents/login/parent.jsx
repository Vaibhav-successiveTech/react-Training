'use client';

import { useState } from "react";
import { createContext } from "react";
import Child from "./child";
const ParentContext = createContext()
export default function ParentComponent(){
    let [status,setStatus] = useState('Please Login in !!!');
    let [name,setName] = useState('');
    let [pass ,setPass] = useState('');

    return (
        <ParentContext.Provider value = {{status,setStatus,name,pass}}>
            <p>
                create two components: a parent component that acts as a provider and a child component that consumes the context.
                Create a context to manage a user's authentication status (logged in or out).
                Implement a login button in the child component that, when clicked, updates the authentication 
                status in the context to "logged in."
                Display a message in the child component based on the user's authentication status. 
                If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."
            </p>
        <input type='text' value = {name} onChange={(e)=>setName(e.target.value)} placeholder = 'Username'/>
        <br/>
        <input type='text' value = {pass} onChange={(e)=>setPass(e.target.value)} placeholder = 'Password'/>
        <br/>
        <Child/>
        </ParentContext.Provider>
        
    );
}

export {ParentContext}