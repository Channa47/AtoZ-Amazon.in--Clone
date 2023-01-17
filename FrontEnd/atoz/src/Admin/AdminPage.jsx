import React,{useState} from 'react';
import { Flex,Button } from '@chakra-ui/react'
import "./AdminPage.css"
import Items from './Items';
import User from './User';


export function AdminPage(){

    const [isActive , setIsActive] = useState('user')

    const handleClick1 = () =>{
        setIsActive("user")
    }
    const handleClick2 = () =>{
      setIsActive("items")
    }
    return (
        <div>
          <div className='MainDiv'>
          <Flex alignItems='center' gap='10'>
          <Button onClick={handleClick1} className="mainbtns" borderColor={isActive==='user'?"green":"red"}   backgroundColor={isActive==='user'?"green":"aliceblue"} color={isActive==='user'?"aliceblue":"black"}>Manage Users</Button>
          <Button onClick={handleClick2} className="mainbtns" borderColor={isActive==='items'?"green":"red"}  backgroundColor={isActive==='items'?"green":"aliceblue"} color={isActive==='items'?"aliceblue":"black"}>Manage Items</Button>
          </Flex>
          </div>
          <div>
              {isActive==="user" ? <User/> : <Items/>}
          </div>
          </div>
    )
  }


export default AdminPage