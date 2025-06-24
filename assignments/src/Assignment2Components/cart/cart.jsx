'use client'
import { useEffect, useState ,useContext} from "react";

import { CartContext } from "./app";

export default function Cart(){
    
    let [total,setTotal] = useState(0);
    let {list,setList} = useContext(CartContext);
    let [newList , setNewList] = useState([]);

    useEffect(()=>{
        let temp = 0;
        for(let i of list){
            temp+=i[1];
            setNewList([...newList,i[0]]);
        }
        setTotal(temp);
    },[list])


    return (
        <div>
        <p>
            Items in the Cart are {newList}
        </p>
        <h4> Total : {total} </h4>
        </div>
    );
}