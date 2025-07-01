'use client'
import { Button } from "@mui/material";

export default function ButtonComponent({color,clickHandler}){
    return (
       <Button variant="contained" color={color} onClick={clickHandler}> Click </Button>
    );
}