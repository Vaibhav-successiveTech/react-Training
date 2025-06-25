import { createContext ,useState } from "react";
import Product from "./products";
import Cart from "./cart";
let CartContext = createContext();
export default function App(){
    let [cartList,setCartList] = useState([]);
    let [productList,setProductList] = useState([
        {
            id : 1,
            price : 100
        },
        {
            id : 2,
            price : 200
        },
        {
            id : 3,
            price : 300
        },
        {
            id : 4,
            price : 150
        },
        {
            id : 5,
            price : 90
        },
    ])
    return (
        <CartContext.Provider value={{cartList,setCartList}}>
                {productList.map((i)=>{
                    return <Product obj = {i}/>
                })}
                <Cart/>
        </CartContext.Provider>
    );
}

export {CartContext}