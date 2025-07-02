'use client';
import Link from "next/link";
import { AuthContext } from "../page2/auth";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
export default function ProfileComponent(){
    let {status,setStatus} = useContext(AuthContext);

    useEffect(()=>{
        if(!status){
            redirect('/Assignment-3/Question5');
        }
    },[status])

    return (
        <>
        <h4> Profile </h4>
        <Link href='DashBoard'> DashBoard </Link>
        <br/>
        <br/>
        <Link href='Settings'> Settings </Link>
        </>
    );
}