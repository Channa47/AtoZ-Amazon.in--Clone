import { Heading } from "@chakra-ui/react";
import React from "react";
import style from "./UnderConstruction.module.css";

function UnderConstruction() {
  return (
    <>
      <div className={style.underconstruction}>
        <img
          className={style.logo}
          src="https://github.com/shubhamkr2/UploadImages/blob/main/undercunstruction.gif?raw=true"
          alt="error"
        />
      </div>
      <Heading color="red">Error 404, this page is under construction</Heading>
      <Heading color="green" pb="40px">
        We are working on it...
      </Heading>
    </>
  );
}

export { UnderConstruction };
