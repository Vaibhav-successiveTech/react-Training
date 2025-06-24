import { useState } from "react";

export default function EmployeeSalary(){
    let [name,setName] = useState('');
    let [salary,setSalary] = useState(0);
    return (
        <>
        <input type="text"/><label> Enter Name </label>
        </>
    );
}