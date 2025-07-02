'use client'
import withLog from "../withLog/hoc";

function Comp(){
    return (
        <div> Hello </div>
    );
}

export default withLog(Comp);