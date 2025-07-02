'use client';
import { useEffect } from "react";
import Link from "next/link";
import { AuthContext } from "../page2/auth";
import { useContext } from "react";
import { redirect } from "next/navigation";
export default function SettingComponent(){
    let {status,setStatus} = useContext(AuthContext);
    useEffect(()=>{
            if(!status){
                redirect('/Assignment-3/Question5');
            }
        },[status])
    return (
        <>
        <h4> Setting </h4>
        <Link href='Profile'> Profile </Link>
        <br/>
        <br/>
        <Link href='DashBoard'> DashBoard </Link>
        </>
    );
}