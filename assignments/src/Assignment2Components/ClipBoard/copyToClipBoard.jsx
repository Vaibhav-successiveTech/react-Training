const { useState } = require("react")

const useClipboard = () => {
    let [status,setStatus] = useState('Copy');
    const copy = (text) => {
        let ele = document.createElement("textarea");
        ele.innerText = text;
        document.body.appendChild(ele);
        ele.select();
        document.execCommand('copy');
        document.body.removeChild(ele);
        setStatus('Copied');
    }
    return [status,copy];
}

export {useClipboard}