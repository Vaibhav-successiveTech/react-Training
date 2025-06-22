'use client'
import { useState } from "react";
function MakeTodo(props){
    return (
        <div id = {Math.round(Math.random()*10)}>
        <h3>{props.heading}</h3>
        <p>{props.desc}</p>
        <input type = "checkbox"></input>
        <button onClick={(e)=>{
            
        }}> Delete </button>
        </div>
    )
}
export default function todoList(){
    let [list,setList] = useState([]);
    let [todo,setTodo] = useState('');
    let [desc,setDesc] = useState('');
    return (
        <>
        <div>
            <input type="text" placeholder="Enter todo" value={todo} onChange={(e)=>{setTodo(e.target.value)}}></input>
            <br/>
            <br/>

            <input type="text" placeholder="Enter description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></input>
            <br/>
            <br/>

            <button onClick={()=>{
                setList([<MakeTodo heading = {todo} desc = {desc}/>,...list])
            }}>Set Todo</button>
        </div>
        {list}
        </>
    )
}