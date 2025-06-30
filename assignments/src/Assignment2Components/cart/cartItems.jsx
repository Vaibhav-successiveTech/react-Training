'use client';
import { useContext } from "react";
import { CartContext } from "./app";
import { useState } from "react";

export default function CartItems({obj}){
    let {cartList,setCartList} = useContext(CartContext);
    return (
        <p>
              Product : {obj.id}  Cost : {obj.price}
              <br/>
                <button onClick={()=>{
                    setCartList(cartList.filter((i)=>obj.id!=i.id));
                }}> Remove </button>
                

        </p>
    );
}