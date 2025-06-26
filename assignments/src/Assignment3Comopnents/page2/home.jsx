'use client';

import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { AuthContext } from "./auth";

export default function HomeComponent(){

    let {status,setStatus} = useContext(AuthContext);

    useEffect(()=>{
        if(!status){
            redirect('/Assignment-3/Question4');
        }
    },[status]);

    return (
        <>
        <h4> This is Home </h4>
        </>
    );
}