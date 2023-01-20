import React from 'react'
import "./order.css"
import {
    Heading
  } from '@chakra-ui/react'

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
  return (
    <div  >
         <div className='MainDivOfOrder'>
            <div className='table'>
                <div className='subDiv'>
                <Heading color={'teal'} >Product ID</Heading>
                {Array.map((e)=>{
                    return(
                        <p className='Details' >{e.name}</p>
                    )
                })}
                </div>
                <div className='subDiv'>
                <Heading color={'teal'}>User ID</Heading>
                {Array.map((e)=>{
                    return(
                        <p className='Details'>{e.user}</p>
                    )
                })}
                </div>
                <div className='subDiv'>
                    <Heading color={'teal'}>Amout</Heading>
                    {Array.map((e)=>{
                    return(
                        <p className='Details'>{e.price}</p>
                    )
                })}
                </div>
                <div className='subDiv'>
                <Heading color={'teal'}>PayMent Status</Heading>
                {Array.map((e)=>{
                    return(
                       
                        <p className='Details'>{e.pay?<p>🟢 Paid</p>:<p>&#128308;Pending</p>}</p>
                    )
                })}
                </div>
                <div className='subDiv'>
                <Heading color={'teal'}>Order Status</Heading>
                {Array.map((e)=>{
                    return(
                        <p className='Details'>{e.status?"🟢Delivered":<p>&#128308;Not Delivered</p>}</p>
                    )
                })}
                </div>
            </div>
         </div>
    </div>
  )
}

export default Orders