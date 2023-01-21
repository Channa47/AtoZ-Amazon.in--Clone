import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import "./user.css";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  CloseIcon,
  DeleteIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import UserSkeliton from "./UserSkeliton";

function User() {
  const [Data, setData] = useState([]);
  const toast = useToast();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/admin/users", {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzk1ZTE1MmVhNGE1NjJiMjRjZGRkNiIsImlhdCI6MTY3NDMxMDEwMCwiZXhwIjoxNjc0NzQyMTAwfQ.9Xz-HIYmL9Yoa8dYGLepLzCPmXtCG_KfiZkjYeflIVQ",
        },
      })
      .then((r) => {
        console.log(r.data.users);
        setData(r.data.users);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`localhost:8080/api/v1/admin/users/${id}`, {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzk1ZTE1MmVhNGE1NjJiMjRjZGRkNiIsImlhdCI6MTY3NDMxMDEwMCwiZXhwIjoxNjc0NzQyMTAwfQ.9Xz-HIYmL9Yoa8dYGLepLzCPmXtCG_KfiZkjYeflIVQ",
        },
      })
      .then((r) => {
        console.log("suc", r);
        toast({
          title: "User Deleted",
          description: r.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((r) => {
        console.log("err", r);
        toast({
          title: "Error",
          description: `${r.message}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const deleteItem = async (id) =>{
    let res = await 
            fetch(`localhost:8080/api/v1/admin/users/${id}`)
            .then((r)=> r.json())
            .then((r)=> console.log(r))
            .catch9(e=>console.log(e))
  }

  return (
    <div className="usersDiv">
      {/* <input type="text" value={Search} id="" placeholder='search' onChange={HandleSearch} />
        <h1>{res.email && res.email}</h1> */}
      {Data.length > 0 ? (
        Data.map((e) => {
          return (
            <div key={e._id} className="emailsDiv">
              <div className="emailsubdiv">
                <div>
                  <h1 className="emails">{e.email}</h1>
                </div>
                <div className="btnsDiv">
                  {/* <button className='ButtonsbanandRem'><WarningTwoIcon color='red'/>Ban</button> */}
                  <button
                    onClick={() => deleteItem(e._id)}
                    className="ButtonsbanandRem"
                  >
                    <DeleteIcon color="red" />
                    RemoveUser
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <UserSkeliton />
      )}
    </div>
  );
}

export default User;
