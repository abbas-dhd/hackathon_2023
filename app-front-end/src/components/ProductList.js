import { useEffect, useState } from "react";
import ProductItemCard from "./ProductItemCard";
import classes from "./ProductList.module.css";
const ProductList = () => {
  const [product, setProduct] = useState();
  const productURL =
    "https://6bj294geq6.execute-api.ap-south-1.amazonaws.com/orionprodstage/product";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(productURL)
      .then((res) => res.json())
      .then((body) => {
        setProduct(body.Items);
      });
  }, []);
  return (
    <div className={classes.container}>
      {product?.map((elem, index) => {
        return <ProductItemCard details={elem} key={elem.id} />;
      })}
      {/* <ProductItemCard />
      <ProductItemCard />
      <ProductItemCard /> */}
    </div>
  );
};

export default ProductList;
