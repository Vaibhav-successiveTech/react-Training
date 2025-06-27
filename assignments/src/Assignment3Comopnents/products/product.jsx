'use client'
let ProductList = [
        {id : 1 , name : "Product 1", desc : "Product 1 description"},
        {id : 2 , name : "Product 2", desc : "Product 2 description"},
        {id : 3 , name : "Product 3", desc : "Product 3 description"},
        {id : 4 , name : "Product 4", desc : "Product 4 description"},
        {id : 5 , name : "Product 5", desc : "Product 5 description"},
    ]
import { useRouter } from "next/navigation";
export default function ProductComponent({id}){
    const obj = ProductList[id-1];
    const router = useRouter();
    return (
       <>
       <h3> Product : {obj.id} </h3>
       <p> Description : {obj.desc} </p>
       <br/>
       <br/>
       <button onClick={()=>{
            router.push('/Assignment-3/Question6')
       }}> Go Back </button>
       </>
    );
}

export {ProductList}