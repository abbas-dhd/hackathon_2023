import { Carousel } from "react-responsive-carousel";
import classes from "./ProductPage.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductPage = () => {
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
          <div className={classes["carousel-image"]}>
            <img
              alt=""
              src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
            />
          </div>
          <div className={classes["carousel-image"]}>
            <img
              alt=""
              src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
            />
          </div>
          <div className={classes["carousel-image"]}>
            <img
              alt=""
              src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
            />
          </div>
          <div className={classes["carousel-image"]}>
            <img
              alt=""
              src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
            />
          </div>
          <div className={classes["carousel-image"]}>
            <img
              alt=""
              src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
            />
          </div>
        </Carousel>
      </div>
      <div className={classes["product-details"]}>
        <div className={classes["product-title"]}>
          <p>
            Men's Burnt Orange Flat Knit Sweater asdsad asdasd s adsdas adda13{" "}
          </p>
        </div>
        <div className={classes["product-price"]}>
          <div className={classes["current-price"]}>₹1699</div>
          <div className={classes["old-price"]}>₹2000</div>
          <div className={classes["discount-perc"]}>(15% OFF)</div>
        </div>
        {/* <div className={classes["product-taxes"]}>Inclusive of all taxes</div> */}
        <div className={classes["product-color-options"]}>
          <div
            className={`${classes["color-option"]} ${classes["color-green"]}`}
          ></div>
          <div
            className={`${classes["color-option"]} ${classes["color-red"]}`}
          ></div>
          <div
            className={`${classes["color-option"]} ${classes["color-blue"]}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
