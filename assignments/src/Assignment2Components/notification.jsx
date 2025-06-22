'use client'
import { useEffect, useState } from "react";

export default function messageNotification(){
    let [message,setMessage] = useState('');

    useEffect(()=>{
      let interval = setTimeout(()=>{
            setMessage((prev)=>{
                if(prev == '')return 'Hello';
                else return '';
            })
        },5000);

        return ()=>clearInterval(interval);

    },[message]);

    return (
        <>
        Notification : {message}
        </>
    );

}