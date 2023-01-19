import classes from "./ProductPage.module.css";
const ProductPage = () => {
  return (
    <div className={classes["product-page-container"]}>
      <div className={classes["product-images"]}>{/* Carousel */}</div>
      <div className={classes["product-details"]}>
        <div className={classes["product-title"]}>
          <p>
            Men's Burnt Orange Flat Knit Sweater asdsad asdasd s adsdas adda13{" "}
          </p>
        </div>
        <div className={classes["product-price"]}>
          <div className={classes["current-price"]}>₹1699</div>
          <div className={classes["discount-price"]}>₹2000</div>
        </div>
        <div>Inclusive of all taxes</div>
      </div>
    </div>
  );
};

export default ProductPage;
