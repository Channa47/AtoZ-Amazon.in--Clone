import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './user.css'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    CheckboxIcon,
    
  } from '@chakra-ui/react'
// import {MdCheckCircle} from "@chakra-ui/icons"
function User() {
  const [Data, setData] = useState([]);

  useEffect(()=>{
      axios.get("https://reqres.in/api/users")
      .then((r)=>{console.log(r);setData(r.data.data)})
      .catch((e)=>console.log(e))
  },[])
  return (
    <div className='usersDiv'>
        {Data.length > 0 ? Data.map((e)=>{
            return (
                <div key={e.id}>
                    <h1>{e.email}</h1>
                </div>
            )
        }) : <h1>Loding.....</h1>}
        <List spacing={3}>
        <ListItem>
            <ListIcon as={CheckboxIcon} color='green.500' />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <button>BanUser</button>
        </ListItem>
        </List>

    </div>
  )
}

export default User