import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './user.css'
import {
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
  import { PhoneIcon, AddIcon, WarningIcon, CloseIcon, DeleteIcon, WarningTwoIcon } from '@chakra-ui/icons'
import UserSkeliton from './UserSkeliton';

function User() {
  const [Data, setData] = useState([]);
  const [Search , setSearch] = useState('');
  const [res , setres] = useState({});
  useEffect(()=>{
      axios.get("https://reqres.in/api/users")
      .then((r)=>{console.log(r);setData(r.data.data)})
      .catch((e)=>console.log(e))
  },[])
  const HandleSearch = (e) =>{
    setSearch(e.target.value)
    Search.toLocaleLowerCase();
    console.log(Search);
    for(let i=0 ; i<Data.length ; i++){
        let emails = Data[i].email.toLocaleLowerCase();
        // if(emails[0]===Search[0]){
        //     setres(Data[i])
        //     console.log("found",Data[i]);
        //     break;
        // }
        if(emails.includes(Search)){
            setres(Data[i])
        }
    }
     
  }

  return (
    <div className='usersDiv'>
        {/* <input type="text" value={Search} id="" placeholder='search' onChange={HandleSearch} />
        <h1>{res.email && res.email}</h1> */}
        {Data.length > 0 ? Data.map((e)=>{
            return (
                <div key={e.id} className="emailsDiv">
                    <div className='emailsubdiv'>
                        <div><h1 className='emails'>{e.email}</h1></div>
                        <div className='btnsDiv' >
                            <button className='ButtonsbanandRem'><WarningTwoIcon color='red'/>Ban</button>
                            <button className='ButtonsbanandRem'><DeleteIcon color='red'/>RemoveUser</button>
                        </div>
                    </div>
                </div>
            
            )
        }) : <UserSkeliton/>}
       
    </div>
  )
}

export default User