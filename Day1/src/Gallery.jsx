import React,{useState} from 'react'
import Data from './Data'

export default function Gallery(){
    const [count,setCount]=useState(0);
    const [showDetails,setShowDetails]=useState(false);
    function handleNext(){
        if(showDetails===false)
       setCount(prev => (prev + 1) % Data.length);
      
    }
    function handlePrevious(){
         if(showDetails===false)
       setCount(prev=>(prev-1+Data.length)%Data.length)
        
    }
    function handleDetails(){
        setShowDetails(prev=>!prev)
    }
    let source= 'https://i.imgur.com/' +
    Data[count].imageId +
    's.jpg'
    return (
    <>
    <h1>{Data[count].name}</h1>
     <img src={source} alt="sorry api failed to fetch " width={150} height={150}/> <br />
     <button onClick={handleDetails}>Show Details </button> {showDetails &&  <h3 style={{backgroundColor:'white',color:'black'}}> Profession includes {Data[count].profession } and major accomplishment includes {Data[count].accomplishment}</h3> } <br />
    <button onClick={handleNext}>Next</button>
    <button onClick={handlePrevious}>Previous</button>
    </>)


}
