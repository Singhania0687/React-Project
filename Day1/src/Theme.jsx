import React,{useState} from 'react';
export default function Theme(){
    const colors = ['red','blue','green','yellow'];
    const [color, setColor] = useState(0);
    // let element=document.getElementById('root').style.backgroundColor;
    console.log(color)
    function handleClick(){
        if(color>=colors.length)
            setColor(0)
        else
            setColor(prev=>prev+1)
       document.getElementById('root').style.backgroundColor=colors[color];
    }
    return(
        <>
        <button onClick={handleClick}>ChangeTheme</button>
        </>
    )
}