'use client'
import { useRouter } from "next/navigation";
export default function Home(){
    const router = useRouter();
    return (
        <>
        <h3> Assignment - 6 </h3>
        <br/>
        <button onClick={()=>router.push('Assignment-6/Question1')}> Question1 </button>
        </>
    )
}