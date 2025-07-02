import { useContext } from "react";
import { ParentContext } from "./parent2";

export default function Child(){
    let {name,pass,status,setStatus,theme,setTheme} = useContext(ParentContext);
    let color = (theme =='Light'?'White':'Black');
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
        <button onClick = {ChangeStatus}> Login </button>  <button onClick = {()=>{
            setTheme((prev)=>{
                if(prev=='Light')return 'Dark';
                return 'Light';
            })
            document.body.className = theme;
        }}> {theme} </button>
        <br/>
        <h4 style= {{color : color}}> {status} </h4>
        </>
    );
}