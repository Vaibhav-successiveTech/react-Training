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
    </>
  );
}
