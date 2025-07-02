
import axios  from "axios";

export default async function AxiosComponent(){

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    return (
        <>
        {data.map((i,idx)=>{
            return <div key={idx}> {JSON.stringify(i)}<br/><br/> </div>
        })}
        </>
    );
}