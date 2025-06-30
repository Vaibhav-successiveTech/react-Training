'use client'
import { useReducer } from "react";
let state = {
    option1 : 0,
    option2 : 0,
    option3 : 0,
    option4 : 0,
}

const reducer = (state,action) => {
    let {option1,option2,option3,option4} = {...state};
    switch(action.type){
        case 'Vote1': {
           option1 += 1;
           break;
        }
        case 'Vote2':{
            option2 += 1;
            break;
        }
        case 'Vote3':{
            option3 += 1;
            break;
        }
        case 'Vote4':{
            option4 += 1;
            break;
        }
    }
    return {option1,option2,option3,option4};
}

export default function Voter(){
    let [obj,dispatch] = useReducer(reducer,state);
    return (
        <>
        <button onClick={()=>{
            return dispatch({type:'Vote1'});
        }}> Vote 1 </button> <label> {obj.option1}</label>
        <br/>
        <br/>
        <button onClick={()=>{
            return dispatch({type:'Vote2'});
        }}> Vote 2 </button> <label> {obj.option2}</label>
        <br/>
        <br/>
        <button onClick={()=>{
            return dispatch({type:'Vote3'});
        }}> Vote 3 </button> <label> {obj.option3}</label>
        <br/>
        <br/>
        <button onClick={()=>{
            return dispatch({type:'Vote4'});
        }}> Vote 4 </button> <label> {obj.option4}</label>
        </>
    );
}