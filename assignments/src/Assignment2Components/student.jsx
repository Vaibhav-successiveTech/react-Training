'use client'
import { useState , useMemo } from "react";

export default function StudentList(){
    let [list,setList] = useState([]);
    let [name ,setName] = useState('');
    let constList = ['John','Ken','Tony','Smith'];

    constList = useMemo(()=>{
        return [...constList,...list];
    },[list]);

    return (
        <>
        <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>{
            setList([...list,name]);
        }}> Append </button>

        <ol>
            {constList.map((i)=>{
                return <li>  {i}</li>
            })}
        </ol>
        </>
    );
}