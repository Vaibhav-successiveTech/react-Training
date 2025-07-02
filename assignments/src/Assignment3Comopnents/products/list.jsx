'use client';
import Link from "next/link";
import { ProductList } from "./product";
export default function ListComponent(){
    return (
        <>
        <h3> Product List </h3>
        {ProductList.map((i)=>{
            return <>
            <Link href= {"Question6/" + i.id}> Product : {i.id} </Link> 
            <br/>
            <br/>
            </>
        })}
        </>
    );
    
}
