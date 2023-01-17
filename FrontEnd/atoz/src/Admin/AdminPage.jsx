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
      <>
          <div className='MainDiv'>
          <Flex alignItems='center' gap='10'>
          <Button onClick={handleClick1} borderColor={isActive==='user'?"green":"red"} borderRadius={30} w={200} h={50} backgroundColor={isActive==='user'?"green":"aliceblue"} color={isActive==='user'?"aliceblue":"black"}>Manage Users</Button>
          <Button onClick={handleClick2} borderColor={isActive==='items'?"green":"red"} borderRadius={30} backgroundColor={isActive==='items'?"green":"aliceblue"} color={isActive==='items'?"aliceblue":"black"} w={200} h={50}>Manage Items</Button>
          </Flex>
          </div>
          <div>
              {isActive==="user" ? <User/> : <Items/>}
          </div>
          </>
    )
  }


export default AdminPage