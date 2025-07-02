import DenseAppBar from "@/Assignment4Components/navbar";

export default function Layout({children}){
    return (
        <>
        <DenseAppBar/>
            {children}
        </>
)
}