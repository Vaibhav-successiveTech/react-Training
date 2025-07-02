import { ParentContext } from "./parent";
import { useContext } from "react";

export default function Child(){
    let {status,setStatus,name,pass} = useContext(ParentContext);
    let list = [{
        name : "John",
        pass  : 1234
    },
    {
        name :"Joe", 
        pass : 2345,
    },
    {
        name :"Ben",
        pass : 10
    }
];

    function ChangeStatus(){
        let flag = false;
        for(let i of list){
            if(i.name == name && i.pass == pass){
                setStatus(`Welcome ${name}`);
                flag = true;
            }   
        }
        if(!flag){
            setStatus('Invalid UserName or Password');
        }
    }

    return (
        <>
        <button onClick = {ChangeStatus}> Login </button>
        <br/>
        <>{status}</>
        </>
    );
}