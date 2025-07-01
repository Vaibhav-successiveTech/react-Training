'use client'
import { fetchData2 } from "./axios2";
export default function RetryButton(){

    return (
        <>
        <button onClick={fetchData2}> Retry </button>
        </>
    );
}