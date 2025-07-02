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

    <button onClick={()=>{
      router.push('./Assignment-2');
    }}>Assignment-2</button>

    <button onClick={()=>{
      router.push('./Assignment-3');
    }}>Assignment-3</button>

    <button onClick={()=>{
      router.push('./Assignment-4');
    }}>Assignment-4</button>
    </>
  );
}
