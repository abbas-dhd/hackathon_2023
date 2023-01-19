import ProductItemCard from "./ProductItemCard";
import classes from "./ProductList.module.css";
const ProductList = () => {
  return (
    <div className={classes.container}>
      <ProductItemCard />
      <ProductItemCard />
      <ProductItemCard />
      <ProductItemCard />
      {/* <ProductItemCard />
      <ProductItemCard />
      <ProductItemCard /> */}
    </div>
  );
};

export default ProductList;
