import React, { useEffect } from "react";
import "./AdminPage.css";
import ISkeliton from "./ISkeliton";
import { useToast } from "@chakra-ui/react";
import Cookies from 'js-cookie'


import axios from "axios";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  Select,
  Input,
} from "@chakra-ui/react";
const init = {
  public_id:"random", url:""
}
function Items() {
  const [Data, setData] = useState([]);
  const [Up, setUp] = useState("name");
  const [name , setname] = useState('');
  const [price , setprice] = useState('');
  const [images , setimages] = useState(init)
  const toast = useToast();
  let Authtoken = Cookies.get('token');
 

  useEffect(() => {
    axios
      .get("https://long-plum-ray-ring.cyclic.app/api/v1/allproducts")
      .then((r) => {
        // console.log(r.data.product);
        setData(r.data.product);
      })
      .catch((e) => console.log(e));
  }, [Data]);

  const handleUpdate = (id) => {
    let payload = {};
    if (name !== '') {
      payload = { name: name };
    }
    
    if (images.url !== '') {
      payload = {images:images}
    }
    if (price !== '') {
      payload = { price: Number(price) };
    }
    console.log(payload)
    axios
      .put(`https://long-plum-ray-ring.cyclic.app/api/v1/product/${id}`, payload, {
        headers: {
          token:Authtoken
        },
      }
        )
      .then((r) => {
        console.log(r);
        toast({
          title: "Done",
          description: `Updated`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log(e);
        toast({
          title: "Done",
          description: `${e.message}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };


  const handleDelete = (id) =>{
    axios.delete(`https://long-plum-ray-ring.cyclic.app/api/v1/product/${id}`,{
      headers: {
        token:Authtoken
      },
    })
     .then((r)=>{
        console.log(r);
        toast({
            title: "Done",
            description: `${r.data.message}`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
     })
     .catch((e)=>{
        console.log(e);
        toast({
            title: "Error",
            description: `${e.message}`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
     })
  }

  return (
    <div className="ItemCardDiv">
      {Data.length > 0 ? (
        Data.map((e) => {
          return (
            <div key={e._id} className="ImageDivofItem">
              <img src={e.images[0].url} alt="" className="ItemImages" />
              <p className="ItemTitle">{e.name}</p>
              <p className="ItemTitle">&#8377; {e.price}</p>
              <div className="UpAndDelBtnDiv">
                <Popover>
                  <PopoverTrigger>
                    <button className="UpAndDelBtn1">Update</button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Select
                          _placeholder="What You Wish to Update"
                          onChange={(e) =>{setUp(e.target.value);}}
                        >
                          <option value="name">Name</option>
                          <option  value="name">Name</option>
                          <option value="IMG">IMG</option>
                          <option value="Price">Price</option>
                        </Select>
                        {Up==='name' && 
                        <Input
                          value={name}
                          onChange={(e)=>setname(e.target.value)}
                          placeholder="Title"
                          color={"red"}
                        />
                        }
                         {Up==='IMG' && 
                        <Input
                          value={images.url}
                          onChange={(e)=>setimages({...images,url:e.target.value})}
                          placeholder="URL"
                          color={"red"}
                        />
                        }
                         {Up==='Price' && 
                        <Input
                          value={price}
                          onChange={(e)=>setprice((e.target.value))}
                          placeholder="Price"
                          color={"red"}
                        />
                        }
                      </PopoverBody>
                      <PopoverFooter>
                        {" "}
                        <button
                          onClick={() => handleUpdate(e._id)}
                          className="UpAndDelBtn1"
                        >
                          Update
                        </button>
                      </PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>

                <button onClick={()=>handleDelete(e._id)} className="UpAndDelBtn2">Delete</button>
              </div>
              {/* <ItemCard name={e.title} img={e.image} price={e.price} /> */}
            </div>
          );
        })
      ) : (
        <ISkeliton />
      )}
    </div>
  );
}

export default Items;
