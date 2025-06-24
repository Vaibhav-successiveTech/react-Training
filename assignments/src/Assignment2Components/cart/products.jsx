'use client'
import { useContext } from "react";
import { CartContext } from "./app";
export default function Product({id,price}){

    let {list,setList} = useContext(CartContext);

    return (
            <div> Product : {id} 
                Cost : {price}
                <button id = {price} onClick={(e)=>{
                    setList([...list,[e.target.parentElement,e.target.id]])
                }}> Add To Cart </button>
            </div>
    );
}