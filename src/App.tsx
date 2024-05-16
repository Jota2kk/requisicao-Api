/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Api from "../Api";

function App() {

  const [nomes, setNomes] = useState([]);

  async function pegaNomes() {

    const pegaNnomes = await Api.getPersons();
    setNomes(pegaNnomes);
    
  }

  useEffect(()=>{

    pegaNomes()

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
