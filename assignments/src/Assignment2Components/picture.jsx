'use client';

import { useEffect, useState } from "react";

const SlideShow = () => {
    let arr = ['/pic1.jpeg','/pic2.jpeg','/pic3.jpeg','/pic4.jpeg','/pic5.jpeg','/pic6.jpeg','/pic7.jpeg'];
    let [index,setIndex] = useState(0);
    let [paused,setPaused] = useState(false);
    let interval = null;
    useEffect(()=>{
        if(!paused){
            interval = setInterval(()=>{
                setIndex((index)=>{
                    return (index+1)%arr.length;
                });
            },2000);
        }
        return ()=> clearInterval(interval);
    },[paused]);


    return (
        <>
        <img src={arr[index]}/><br/>
        <button onClick={()=>{
            setPaused(false);
        }}> Play </button>  <button onClick={()=>{
            setPaused(true);
        }}> Pause </button>
        </>
    );
}

export default SlideShow;