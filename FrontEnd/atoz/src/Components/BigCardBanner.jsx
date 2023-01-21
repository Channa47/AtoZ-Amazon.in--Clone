import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./BigCardBanner.module.css";

function BigCardBanner({ heading, image }) {
  return (
    <div className={style.big_card}>
      <Heading size="md" textAlign="left" pb="15px">
        {heading}
      </Heading>
      <img src={image} alt="image loaded" />
      <Link to="">
        <p className={style.link}>See all offers</p>
      </Link>
    </div>
  );
}

export { BigCardBanner };
