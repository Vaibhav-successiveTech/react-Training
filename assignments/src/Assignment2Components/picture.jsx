'use client';

import { useEffect, useState } from "react";

const SlideShow = () => {
    let arr = ['/pic1.jpeg','/pic2.jpeg','/pic3.jpeg','/pic4.jpeg','/pic5.jpeg','/pic6.jpeg','/pic7.jpeg'];
    let [index,setIndex] = useState(1);
    let [image,setImage] = useState(arr[0]);
    let [paused,setPaused] = useState(false);

    useEffect(()=>{
            if(!paused){
                setInterval(()=>{
                    setImage(()=>arr[index%arr.length]);
                    setIndex(index+1); 
                },2000);
                    
            }
    },[image,paused]);


    return (
        <>
        <img src={image}/><br/>
        <button onClick={()=>{
            setPaused(false);
        }}> Play </button>  <button onClick={()=>{
            setPaused(true);
        }}> Pause </button>
        </>
    );
}

export default SlideShow;