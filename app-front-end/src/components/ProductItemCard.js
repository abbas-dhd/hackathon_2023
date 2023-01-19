import classes from "./ProductItemCard.module.css";
const ProductItemCard = (props) => {
  return (
    <div className={classes["card-container"]}>
      <div className={classes["product-image"]}>
        <img src="https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <div className={classes["product-details"]}>
        <div className={classes["product-title"]}>
          <p>
            Men's Burnt Orange Flat Knit Sweater asdsad asdasd s adsdas adda13{" "}
          </p>
        </div>
        <div className={classes["product-price"]}>₹1699</div>
      </div>
    </div>
  );
};

export default ProductItemCard;
