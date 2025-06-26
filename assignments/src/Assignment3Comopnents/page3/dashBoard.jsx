'use client'
import { useContext, useEffect } from "react";
import { AuthContext } from "../page2/auth";
import { redirect  } from "next/navigation";
import Link from "next/link";

export default function DashBoardComponent(){
    let {status,setStatus} = useContext(AuthContext);
    useEffect(()=>{
        if(!status){
            redirect('/Assignment-3/Question5');
        }
    },[status])
    return (
        <>
        <h4> DashBoard </h4>
        <Link href='Profile'> Profile </Link>
        <br/>
        <br/>
        <Link href='Settings'> Settings </Link>
        </>
    );
}