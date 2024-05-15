/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {

  const [nomes, setNomes] = useState([]);

  useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      setNomes(res.data)
    })

  })

  return (
    <>

    <div>
      {
        nomes.map((data)=>{
          return (
            <div>
              <h2>{data.name}</h2>
            </div>
          )
        })
      }
    </div>
      
    </>
  )
}

export default App
