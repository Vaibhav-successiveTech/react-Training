import dynamic from "next/dynamic";

const Comp = dynamic(()=>import('@/Assignment6Components/lazyLoading'),{
    loading : ()=><div> Loading... </div>
})
export default function LazyComponent(){
    return (<Comp/>)
}