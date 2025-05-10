import React from "react"
import Theme from "./Theme"
import Counter from "./Counter"
import Gallery from './Gallery'
import FormData from './FormData'
import Timer from './Timer'
function App() {
  return (
    <>
    <h1>Welcome To my Project</h1>
    <Theme />
    <Counter/>
      <Timer/>
    <div style={{backgroundColor:'gray',color:'black',textAlign:'center',padding:'20px',borderRadius:'10px'}}>
       <Gallery/>
       <FormData/>
     
    </div>
   
    </>
  )
}

export default App
