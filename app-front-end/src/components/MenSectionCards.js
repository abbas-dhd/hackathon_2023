import ProductItemCard from "./ProductItemCard";
import classes from "./MenSectionCards.module.css";

const MenSectionCards = () => {
  return (
    <div className={classes["men-container"]}>
      <div className={classes["men-header"]}>
        <p>Trending in men </p>
        {/* route to mens product section from below link */}
        <a>{"view more"}</a>
      </div>
      <div className={classes["men-card-container"]}>
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        {/* <ProductItemCard />
      <ProductItemCard />
      <ProductItemCard /> */}
      </div>
    </div>
  );
};

export default MenSectionCards;
