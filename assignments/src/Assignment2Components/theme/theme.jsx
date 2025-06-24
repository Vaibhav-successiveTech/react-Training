'use client'
import { createContext, useState } from "react"
import ParaComponent from "./comp"
import Toggle from "./toggle";

let themeContext = createContext();

export default function themeSwitcher(){
    let [theme,setTheme] = useState('Light');

    document.body.className = theme;

    return (
        <themeContext.Provider value={{theme,setTheme}}>
            <ParaComponent/>
            <Toggle/>
        </themeContext.Provider>
    )
}

export {themeContext}