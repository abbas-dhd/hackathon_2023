import ProductItemCard from "./ProductItemCard";
import classes from "./MenSectionCards.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MenSectionCards = () => {
  let navigate = useNavigate();
  const [product, setProduct] = useState();
  const productURL =
    "https://6bj294geq6.execute-api.ap-south-1.amazonaws.com/orionprodstage/product";

  function productListHandler() {
    navigate("/productList");
  }
  useEffect(() => {
    fetch(productURL)
      .then((res) => res.json())
      .then((body) => {
        setProduct(body.Items);
      });
  }, []);
  return (
    <div className={classes["men-container"]}>
      <div className={classes["men-header"]} onClick={productListHandler}>
        <p>Trending Deals </p>
        {/* route to mens product section from below link */}
        <a>{"view more  >"}</a>
      </div>
      <div className={classes["men-card-container"]}>
        {product?.map((elem, index) => {
          if (index < 3)
            return <ProductItemCard details={elem} key={elem.id} />;
        })}
        {/* <ProductItemCard />
      <ProductItemCard />
      <ProductItemCard /> */}
      </div>
    </div>
  );
};

export default MenSectionCards;
