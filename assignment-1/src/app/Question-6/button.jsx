'use client'
export default function button({text,color}){
    return (
        <button onClick={
            (e)=>{
                e.target.innerHTML = text;
                e.target.style.backgroundColor = color
            }
        }>Click</button>
    )
}