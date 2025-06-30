'use client'
import { useRouter } from "next/navigation"

export default function DashBoard(){
    const router = useRouter();
    return (
        <>
        <h2>This is Assignment-2</h2>
        <button onClick={()=>{router.push('/Assignment-2/Question1');}}>Question-1</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question2');}}>Question-2</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question3');}}>Question-3</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question4');}}>Question-4</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question5');}}>Question-5</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question6');}}>Question-6</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question7');}}>Question-7</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question8');}}>Question-8</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question9');}}>Question9</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question10');}}>Question10</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question11');}}>Question11</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question12');}}>Question12</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question13');}}>Question13</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question14');}}>Question14</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question15');}}>Question15</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question16');}}>Question16</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question17');}}>Question17</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question18');}}>Question18</button>
        <br/>
        <br/>
        <button onClick={()=>{router.push('/Assignment-2/Question19');}}>Question19</button>
        <br/>
        <br/>
        {/* <button onClick={()=>{router.push('/Assignment-2/Question-2');}}>Question-2</button>
        <button onClick={()=>{router.push('/Assignment-2/Question-3');}}>Question-3</button>
        <button onClick={()=>{router.push('/Assignment-2/Question-4');}}>Question-4</button>
        <button onClick={()=>{router.push('/Assignment-2/Question-5');}}>Question-5</button>
        <button onClick={()=>{router.push('/Assignment-2/Question-6');}}>Question-6</button> */}
        </>
    );
}