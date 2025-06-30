'use client';
import { useMemo, useState } from "react";

export default function EmployeeSalary(){
    let [name,setName] = useState('');
    let [salary,setSalary] = useState(0);
    let [list,setList] = useState([]);

    let avg = 0;
    avg = useMemo(()=>{
        let n = list.length;
        let sum  = 0;
        for(let i of list){
            sum+=i.salary;
        }
        return sum/n;
    },[list])
    return (
        <>
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/><label> Enter Name </label>
        <br/>
        <br/>
        <input type="number" value={salary} onChange={(e)=>{
            setSalary(parseInt(e.target.value));
        }}></input><label> Enter Salary </label>
        <br/>
        <br/>
        <button onClick={()=>{
            setList([...list,{name,salary}]);
        }}> Append </button>

        <h3> Average Salary of the Employee is {avg} </h3>
        </>
    );
}