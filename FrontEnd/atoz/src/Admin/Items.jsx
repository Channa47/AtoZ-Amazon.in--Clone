import React, { useEffect } from 'react'

import axios from "axios"
import { useState } from 'react'
function Items() {
    const [Data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((r)=>{console.log(r);setData(r.data)})
        .catch((e)=>console.log(e))
    },[])


  return (
    <div>
        {Data.length > 0 ? Data.map((e)=>{
            return (
                <div key={e.id}>
                    <img src={e.image} alt="" width={"100px"} />
                </div>
            )
        }) : <h1>Loding.....</h1>}
    </div>
  )
}

export default Items