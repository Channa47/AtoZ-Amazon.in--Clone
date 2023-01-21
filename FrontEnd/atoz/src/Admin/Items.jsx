import React, { useEffect } from "react";
import "./AdminPage.css";
import ISkeliton from "./ISkeliton";
import { useToast } from "@chakra-ui/react";

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
function Items() {
  const [Data, setData] = useState([]);
  const [Up, setUp] = useState("name");
  const [val, setval] = useState("");
  const toast = useToast();

  useEffect(() => {
    axios
      .get("localhost:8080/api/v1/allproducts")
      .then((r) => {
        console.log(r.data.product);
        setData(r.data.product);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleUpdate = (id) => {
    let payload = {};
    if (Up === "name") {
      payload = { name: val };
    }
    if (Up === "IMG") {
      payload = {
        images: { url: "react Url" },
      };
    }
    if (Up === "Price") {
      payload = { price: val };
    }
    // console.log(payload)
    axios
      .put(`localhost:8080/api/v1/product/${id}`, payload 
    //     headers: {
    //       token:
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzk1ZTE1MmVhNGE1NjJiMjRjZGRkNiIsImlhdCI6MTY3NDMxMDEwMCwiZXhwIjoxNjc0NzQyMTAwfQ.9Xz-HIYmL9Yoa8dYGLepLzCPmXtCG_KfiZkjYeflIVQ",
    //     },
    //   }
        )
      .then((r) => {
        console.log(r);
        toast({
          title: "Done",
          description: `${r.message}`,
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
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      });
  };


  const handleDelete = (id) =>{
    axios.delete(`localhost:8080/api/v1/product/${id}`)
     .then((r)=>{
        console.log(r);
        toast({
            title: "Done",
            description: `${r.message}`,
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
              <p className="ItemTitle">{e.price}</p>
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
                          onChange={(e) => setUp(e.target.value)}
                        >
                          <option value="name">Name</option>
                          <option value="IMG">IMG</option>
                          <option value="Price">Price</option>
                        </Select>
                        <Input
                          value={val}
                          onChange={(e) => setval(e.target.value)}
                          placeholder="Enter Here"
                          color={"red"}
                        />
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
