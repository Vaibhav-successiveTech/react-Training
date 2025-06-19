'use client'
import { useRouter } from "next/navigation"

export default function DashBoard(){
    const router = useRouter();
    return (
        <>
        <h2>This is Assignment-1</h2>
        <button onClick={()=>{router.push('/Assignment-1/Question-1');}}>Question-1</button>
        <button onClick={()=>{router.push('/Assignment-1/Question-2');}}>Question-2</button>
        <button onClick={()=>{router.push('/Assignment-1/Question-3');}}>Question-3</button>
        <button onClick={()=>{router.push('/Assignment-1/Question-4');}}>Question-4</button>
        <button onClick={()=>{router.push('/Assignment-1/Question-5');}}>Question-5</button>
        <button onClick={()=>{router.push('/Assignment-1/Question-6');}}>Question-6</button>
        </>
    );
}