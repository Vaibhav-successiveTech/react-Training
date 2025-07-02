'use client'
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <>
    <h1>This is Home Page</h1>
    <button onClick={()=>{
      router.push('./Assignment-1');
    }}>Assignment-1</button>

  <br/>
  <br/>

    <button onClick={()=>{
      router.push('./Assignment-2');
    }}>Assignment-2</button>

  <br/>
  <br/>

    <button onClick={()=>{
      router.push('./Assignment-3');
    }}>Assignment-3</button>

  <br/>
  <br/>

    <button onClick={()=>{
      router.push('./Assignment-4');
    }}>Assignment-4</button>

  <br/>
  <br/>

    <button onClick={()=>{
      router.push('./Assignment-5');
    }}>Assignment-5</button>
  <br/>
   <br/>

    <button onClick={()=>{
      router.push('./Assignment-6');
    }}>Assignment-6</button>
    </>
  );
}
