import React from 'react'
import "./order.css"
import {
    Heading
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

  const Array = [
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:false,status:true},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:false,status:true},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:false,status:true},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                 {name:'order',price:999,user:"user",pay:true,status:false},
                ]
function Orders() {
    const [Data , setData] = useState([]);
    let Authtoken = Cookies.get('token');

    useEffect(()=>{
        axios.get('https://long-plum-ray-ring.cyclic.app/api/v1/admin/orders',{
            headers : {
                token : Authtoken
              }
        })
        .then(r=>{console.log(r.data.orders);setData(r.data.orders)})
        .catch(r=>console.log(r))
    },[])

  return (
    <div  >
         <div className='MainDivOfOrder'>
            <div className='table'>
                <div className='subDiv'>
                <Heading color={'teal'} >Product ID</Heading>
                {Data.map((e)=>{
                    return(
                        <p className='Details'>{e.orderItems[0].product}</p>
                    )
                })}
                </div>
                {/* <div className='subDiv'>
                <Heading color={'teal'}>User ID</Heading>
                {Array.map((e)=>{
                    return(
                        <p className='Details'>{e.shippingInfo}</p>
                    )
                })}
                </div> */}
                <div className='subDiv'>
                    <Heading color={'teal'}>Amout</Heading>
                    {Data.map((e)=>{
                    return(
                        <p className='Details'>{e.orderItems[0].price}</p>
                    )
                })}
                </div>
                <div className='subDiv'>
                <Heading color={'teal'}>PayMent Status</Heading>
                {Data.map((e)=>{
                    return(
                        <>
                        <p className='Details'>{e.orderStatus=="paid"?<p>&#128308;Pending</p>:<p>🟢 Paid</p>}</p>
                        </>
                    )
                })}
                </div>
                <div className='subDiv'>
                <Heading color={'teal'}>Order Status</Heading>
                {Data.map((e)=>{
                    return(
                        <p className='Details'>{`🟢${e.orderStatus}`}</p>
                    )
                })}
                </div>
            </div>
         </div>
    </div>
  )
}

export default Orders