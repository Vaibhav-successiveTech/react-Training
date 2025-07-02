import ProductComponent from "@/Assignment3Comopnents/products/product";

export default function ProductHome({params}){
    const {id} = params;
    return (
        <ProductComponent id={id}/>
    );
}