'use client'
import { useCallback, useState } from "react";
function CreateTask({id}){
    let [status,setStatus] = useState('Complete');
    let fn = useCallback(()=>{
        setStatus('Task Completed');
    },[status]);
    return (
        <>
        <p> Task : {id}  </p>
        <button onClick={fn}> {status} </button>
        </>
    );
}

export default function Tasks(){
    let arr = [];
    for(let i=1;i<6;i++){
        arr.push(<CreateTask id ={i}/>)
    }
    return (
        <div>
            {arr}
        </div>
    );
}