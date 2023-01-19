import classes from "./Body.module.css";
import HeroSection from "./HeroSection";
import MenSectionCards from "./MenSectionCards";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
const Body = () => {
  return (
    <div className={classes["main-container"]}>
      {/* <HeroSection />
      <MenSectionCards />
      <ProductList /> */}
      <ProductPage />
    </div>
  );
};

export default Body;
