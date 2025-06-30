'use client'

import { useState } from "react";

export default function TodoList(){
    let [todo,setTodo] = useState('');
    let [desc,setDesc] = useState('');
    let [list,setList] = useState([]);

    const DeleteTodo = (id)=>{
        setList(list.filter((i)=>i.id!=id));
    }

    return (
        <>
         <input type = 'text' value={todo}  onChange={(e)=>{setTodo(e.target.value)}}></input> 
         <label> Enter Todo </label>
         <br/>
         <br/>
         <input type = 'text' value = {desc} onChange = {(e)=>{setDesc(e.target.value)}}/>
         <label> Enter Description </label>
         <br/>
         <br/>
         <button onClick = {()=>{
            setList([...list,{todo,desc,id : Math.round(Math.random()*100)}]);
         }}> Add to List </button>
         <ul>
            {list.map(i=>{
                return (
                <li>
                <h3> {i.todo} </h3>
                <p> {i.desc} </p>
                <input type = 'checkBox'/>
                <label> Completed </label>
                <button onClick = {()=>DeleteTodo(i.id)}> Delete </button>
                </li>
            );
            })}
         </ul>
        </>
    );
}