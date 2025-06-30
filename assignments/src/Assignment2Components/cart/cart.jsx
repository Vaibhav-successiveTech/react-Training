'use client'
import { useEffect, useState ,useContext} from "react";

import { CartContext } from "./app";
import CartItems from "./cartItems";

export default function Cart(){
    
    let [total,setTotal] = useState(0);
    let {cartList,setCartList} = useContext(CartContext);

    useEffect(()=>{
        let temp = 0;
        for(let i of cartList){
            temp+=i.price;
        }
        setTotal(temp);
    },[cartList]);


    return (
        <>
            <br/>
            <br/>
            <h3> Cart Items are : </h3>
            {cartList.map((i)=>{
                return <CartItems obj={i}/>
            })}
        <h4> Total : {total} </h4>
        </>
    );
}