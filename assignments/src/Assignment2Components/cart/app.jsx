import { createContext ,useState } from "react";
import Product from "./products";
import Cart from "./cart";
let CartContext = createContext();
export default function App(){
    let [list,setList] = useState([]);
    return (
        <CartContext.Provider value={{list,setList}}>
               <Product id = {1} price={100}/>
                <Product id = {2} price={120}/>
                <Product id = {3} price={140}/>
                <Product id = {4} price={200}/>
                <Product id = {5} price={134}/>
                <Product id = {6} price={150}/>
                <Product id = {7} price={90}/>

                <Cart/>
        </CartContext.Provider>
    );
}

export {CartContext}