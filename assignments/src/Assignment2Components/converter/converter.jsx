'use client'
import { createContext, useState } from "react";
import InputField from "./inputfile";
import Buttons from "./button";
let langContext = createContext();

export default function LanguageConverter(){
    let [from , setFrom] = useState('');
    let [to , setTo] = useState('');
    let [langfrom, setLangFrom] = useState('English');
    let [langto, setLangTo] = useState('spanish');

    return (
        <langContext.Provider value = {{from,to,langfrom,langto,setFrom,setTo,setLangFrom,setLangTo}}>
        <InputField/>
        <br></br>
        <br></br>
        <Buttons/>
        </langContext.Provider>
    );
}

export {langContext};