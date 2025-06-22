'use client'
import { useEffect, useState } from "react"
function getTime(){
    let d = new Date();
    return d.toTimeString();
}
export default function ShowDate(){
    let [time,setTime] = useState(getTime());

    useEffect(()=>{
      let interval =  setTimeout(()=>{
        setTime(getTime());
       },1000);

       return ()=> clearInterval(interval);
    },[time])

    return (
        <p>Current Time is : {time}</p>
    );

}