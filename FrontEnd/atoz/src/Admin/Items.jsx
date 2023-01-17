import React, { useEffect } from 'react';
import "./AdminPage.css"
import ISkeliton from './ISkeliton';

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
    <div className='ItemCardDiv'>
        {Data.length > 0 ? Data.map((e)=>{
            return (
                <div key={e.id} className="ImageDivofItem" >
                    <img src={e.image} alt="" className='ItemImages' />
                    <p className='ItemTitle'>{e.title}</p>
                    <p className='ItemTitle'>{e.price}</p>
                    <div className='UpAndDelBtnDiv'>
                    <button className='UpAndDelBtn1'>Update</button>
                    <button className='UpAndDelBtn2'>Delete</button>
                    </div>
                    {/* <ItemCard name={e.title} img={e.image} price={e.price} /> */}
                </div>
            )
        }) : <ISkeliton/>}
    </div>
  )
}

export default Items