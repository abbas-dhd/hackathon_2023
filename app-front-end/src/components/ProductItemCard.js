import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./ProductItemCard.module.css";
const ProductItemCard = (props) => {
  const productDetails = props.details;
  let navigate = useNavigate();
  // const { id } = useParams();

  function productListHandler() {
    navigate(`/product/${productDetails.id}`);
  }
  return (
    <div className={classes["card-container"]} onClick={productListHandler}>
      <div className={classes["likes"]}>
        <div>🔥</div>
        <div>{Math.floor(Math.random() * 100)}</div>
      </div>
      <div className={classes["product-image"]}>
        <img src={productDetails?.link[0]} />
      </div>
      <div className={classes["product-details"]}>
        <div className={classes["product-title"]}>
          <p>{productDetails?.name}</p>
        </div>
        <div className={classes["price-details"]}>
          <div className={classes["product-price"]}>
            ₹{productDetails?.price}
          </div>
          <div className={classes["discount-perc"]}>
            ({productDetails?.discount}% OFF)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
