'use client';

import { createContext } from "react";
import { useState } from "react";
import Child from "./child2";
const ParentContext = createContext();
export default function ParentComponent2(){
    let [name,setName] = useState('');
    let [pass,setPass] = useState('');

    let [status,setStatus] = useState('Please Login');

    let [theme, setTheme] = useState('Dark');

    let color = (theme =='Light'?'White':'Black');

    return (
        <ParentContext.Provider value = {{name,pass,status,setStatus,theme,setTheme}}>
            <p style={{color : color}}>
            Extend the previous application to demonstrate the use of nested contexts.
            Create a new context to manage user preferences (e.g., theme preference).
            Modify the parent component to provide both the authentication and preferences contexts.
            Create a child component that consumes both contexts.
            Allow the user to change their theme preference (light/dark) using a button in the child component.
            Display the theme preference in the UI and adjust the component's styling accordingly.
            </p>
            <input value = {name} onChange = {(e)=>setName(e.target.value)} placeholder = 'Username'/>
            <br/>
            <input value = {pass} onChange = {(e)=>setPass(e.target.value)} placeholder = 'Password'/>
            <br/>
            <Child/>
        </ParentContext.Provider>
    );
}

export {ParentContext};