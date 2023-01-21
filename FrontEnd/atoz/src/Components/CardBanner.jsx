import { Heading } from "@chakra-ui/react";
import React from "react";
import style from "./CardBanner.module.css";
import { Link } from "react-router-dom";

function CardBanner({ heading, content }) {
  return (
    <div className={style.banner_ontainer}>
      <Heading size="md" textAlign="left" pb="15px">
        {heading}
      </Heading>
      <div className={style.product_card_container}>
        {content?.map((product) => (
          <div className={style.grid_product}>
            <img src={product.img} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <Link to="">
        <p className={style.offer_link}>See all offers</p>
      </Link>
    </div>
  );
}

export { CardBanner };
