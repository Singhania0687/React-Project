import React,{useState} from 'react';
 export default function Counter(){
    const [count,setCount]=useState(0);
     function handleNext(){
      setCount(prev=>prev+1)
     }
     function handlePrevious(){
       setCount(prev=>prev-1)
               }
     return(
        <>
        <h1>{count}</h1>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrevious}>Prev</button>
        </>
     )}


