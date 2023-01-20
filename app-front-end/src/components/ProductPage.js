import { Carousel } from "react-responsive-carousel";
import classes from "./ProductPage.module.css";
import { useLocation, useParams } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
const ProductPage = () => {
  let imageList;
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const productURL = `https://6bj294geq6.execute-api.ap-south-1.amazonaws.com/orionprodstage/product/${id}`;

  useEffect(() => {
    fetch(productURL)
      .then((res) => res.json())
      .then((body) => {
        setProduct(body.Item);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes["product-page-container"]}>
      <div className={classes["product-images"]}>
        <Carousel
          autoPlay
          infiniteLoop={true}
          interval={2000}
          showStatus={false}
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          dynamicHeight={true}
          emulateTouch={true}
        >
          {product?.link?.map((url, index) => {
            return (
              <div key={index} className={classes["carousel-image"]}>
                <img alt="" src={url} />
              </div>
            );
          })}
        </Carousel>
        <div className={classes["ratings"]}>
          <p>{product.rating}⭐</p>
        </div>
      </div>
      <div className={classes["product-details"]}>
        <div className={classes["product-title"]}>
          <p>{product.name}</p>
        </div>
        <div className={classes["product-price"]}>
          <div className={classes["current-price"]}>
            ₹{product.price - (product.price * product.discount) / 100}
          </div>
          <div className={classes["old-price"]}>₹{product.price}</div>
          <div className={classes["discount-perc"]}>
            ({product.discount}% OFF)
          </div>
        </div>
        {/* <div className={classes["product-taxes"]}>Inclusive of all taxes</div> */}
        <hr className={classes["page-divider"]} />
        <div className={classes["product-color-options"]}>
          <div>
            <div
              className={`${classes["color-option"]} ${classes["color-green"]}`}
            ></div>
            {/* <p>Green</p> */}
          </div>
          <div>
            <div
              className={`${classes["color-option"]} ${classes["color-red"]}`}
            ></div>
            {/* <p>Pink</p> */}
          </div>
          <div>
            <div
              className={`${classes["color-option"]} ${classes["color-blue"]}`}
            ></div>
            {/* <p>Turquoise</p> */}
          </div>
        </div>
        <div className={classes["description"]}>
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
