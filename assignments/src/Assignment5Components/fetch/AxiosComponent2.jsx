let newData = [];

import  Button  from './button'

async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    newData = data;
}

export default function FetchComponent2(){
    fetchData();
    return (
        <>
        {Array.isArray(newData)?newData.map((i,idx)=><div key={idx}> {JSON.stringify(i)} <br/><br/> </div>): <h3> Server Error </h3>}
        <br/>
        <br/>
        <Button/>
        </>
    );
}

export {fetchData};
