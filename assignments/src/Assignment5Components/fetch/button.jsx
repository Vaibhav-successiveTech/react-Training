'use client';
import { fetchData } from "./AxiosComponent2";

export default function Button(){
    return (
        <button onClick={fetchData}> Retry </button>
    );
}
