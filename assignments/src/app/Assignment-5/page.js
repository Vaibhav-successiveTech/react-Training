'use client'
import { useRouter } from "next/navigation";
export default function Home(){
    const router = useRouter();
    return (
        <>
        <h3> Assignment - 5 </h3>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question1')}> Question1 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question2')}> Question2 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question3')}> Question3 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question4')}> Question4 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question5')}> Question5 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question6')}> Question6 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question7')}> Question7 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question12')}> Question12 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question13')}> Question13 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question14')}> Question14 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question15')}> Question15 </button>
        <br/>
        <br/>
        <button onClick={()=>router.push('Assignment-5/Question16')}> Question16 </button>
        </>
    );
}