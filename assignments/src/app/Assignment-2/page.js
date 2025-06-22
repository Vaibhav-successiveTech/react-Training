'use client'
import { useRouter } from "next/navigation"

export default function DashBoard(){
    const router = useRouter();
    return (
        <>
        <h2>This is Assignment-2</h2>
        <button onClick={()=>{router.push('/Assignment-2/Question1');}}>Question-1</button>
        <button onClick={()=>{router.push('/Assignment-2/Question2');}}>Question-2</button>
        <button onClick={()=>{router.push('/Assignment-2/Question3');}}>Question-3</button>
        <button onClick={()=>{router.push('/Assignment-2/Question4');}}>Question-4</button>
        <button onClick={()=>{router.push('/Assignment-2/Question5');}}>Question-5</button>
        <button onClick={()=>{router.push('/Assignment-2/Question6');}}>Question-6</button>
        <button onClick={()=>{router.push('/Assignment-2/Question7');}}>Question-7</button>
        <button onClick={()=>{router.push('/Assignment-2/Question8');}}>Question-8</button>
        {/* <button onClick={()=>{router.push('/Assignment-2/Question-2');}}>Question-2</button>
        <button onClick={()=>{router.push('/Assignment-2/Question-3');}}>Question-3</button>
        <button onClick={()=>{router.push('/Assignment-2/Question-4');}}>Question-4</button>
        <button onClick={()=>{router.push('/Assignment-2/Question-5');}}>Question-5</button>
        <button onClick={()=>{router.push('/Assignment-2/Question-6');}}>Question-6</button> */}
        </>
    );
}