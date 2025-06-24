'use client'
import { useContext } from "react"
import { themeContext } from "./theme"

export default function Toggle(){
    let {theme,setTheme} = useContext(themeContext);
    return <button onClick={()=>{
        if(theme == 'Light'){
            setTheme('Dark');
        }else{
            setTheme('Light');
        }

    }}> Toggel </button>
}