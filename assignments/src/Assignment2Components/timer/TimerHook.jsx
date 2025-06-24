'use client';
const { useState } = require("react")

const useTimer = () => {
    let [interval,setInt] = useState(null);
    
    const start = (count,setCount)=>{
            if(count > 0){
               let i = setInterval(()=>{
                    setCount(prev=>prev-1);
                },1000);
                setInt(i);
            }
    }

    const pause = ()=>{
        clearInterval(interval);
    }

    const reset = (setCount)=>{
        setCount(0);
        clearInterval(interval);
    }
    return [start,pause,reset];
}

export {useTimer};