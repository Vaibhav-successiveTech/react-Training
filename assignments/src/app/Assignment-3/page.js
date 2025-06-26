'use client';

import { useRouter } from "next/navigation"


export default function DashBoard(){
    const router = useRouter();
    return(
        <>
        <h3> This is Assignment-3 </h3>
        <br/>
    <button onClick = {()=>{router.push('Assignment-3/Question1')}}> Question1 </button>
    <button onClick = {()=>{router.push('Assignment-3/Question2')}}> Question2 </button>
    <button onClick = {()=>{router.push('Assignment-3/Question3')}}> Question3 </button>
    <button onClick = {()=>{router.push('Assignment-3/Question4')}}> Question4 </button>
    <button onClick = {()=>{router.push('Assignment-3/Question5')}}> Question5 </button>
    <button onClick = {()=>{router.push('Assignment-3/Question6')}}> Question6 </button>
    </>
    );
}