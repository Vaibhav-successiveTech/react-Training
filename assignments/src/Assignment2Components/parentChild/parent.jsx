'use client'
import { createContext, useCallback, useContext, useState } from "react";
import Child from "./child";

let ParentContext = createContext();
export default function Parent(){
    let [count,setCount] = useState(0);
    let fn = useCallback(()=>{
        setCount(count + 1);
    },[count])
    return (
        <ParentContext.Provider value = {{count,setCount,fn}}>
            <Child/>
        </ParentContext.Provider>
    );
}

export {ParentContext};