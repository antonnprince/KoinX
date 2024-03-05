import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Home from './Home'

function App() {

    useEffect(()=>{
          axios.get("/ping").then((response)=>{
            console.log(response.status)
            setStatus(response.status)
          }).catch(error => {
            console.log(error)
          })
    },[])

    const[status,setStatus] = useState(0)
  return (
   <div className="bg-slate-200 h-screen mx-2">
    {status!==200? <h1>Network Error, please try again later</h1>: <Home />}
   </div>
  )
}

export default App
