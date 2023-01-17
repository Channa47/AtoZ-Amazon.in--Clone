import axios from 'axios';
import React, { useEffect, useState } from 'react'

function User() {
  const [Data, setData] = useState([]);

  useEffect(()=>{
      axios.get("https://reqres.in/api/users")
      .then((r)=>{console.log(r);setData(r.data.data)})
      .catch((e)=>console.log(e))
  },[])
  return (
    <div>
        {Data.length > 0 ? Data.map((e)=>{
            return (
                <div key={e.id}>
                    <h1>{e.email}</h1>
                </div>
            )
        }) : <h1>Loding.....</h1>}
    </div>
  )
}

export default User