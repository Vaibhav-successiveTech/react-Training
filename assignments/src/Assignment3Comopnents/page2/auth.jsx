'use client'

import { createContext, useState } from "react"
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    let [status,setFlag] = useState(false);
    const setStatus = (name,pass)=>{
        if(name == 'a' && pass == '1'){
            setFlag(true);
        }
    }
    return (
          <AuthContext.Provider value={{status,setStatus}}>
            {children}
          </AuthContext.Provider>
        )
}

export {useAuth}