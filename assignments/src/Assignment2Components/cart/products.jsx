'use client'
import { useContext } from "react";
import { CartContext } from "./app";
export default function Product({obj}){

    let {cartList,setCartList} = useContext(CartContext);

    return (
            <p>

                Product : {obj.id}  Cost : {obj.price}
                <br/>
                <button onClick={()=>{
                    setCartList([...cartList,obj])
                }}> Add To Cart </button>



            </p>
    );
}