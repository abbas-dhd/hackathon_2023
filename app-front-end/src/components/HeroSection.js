import { useNavigate, useNavigation } from "react-router-dom";
import classes from "./HeroSection.module.css";
import ImageCarousel from "./ImageCarousel";

const HeroSection = () => {
  let navigate = useNavigate();

  function heroClickHandler() {
    navigate("/productList");
  }
  return (
    <div className={classes["hero-container"]} onClick={heroClickHandler}>
      <div className={classes["hero-image-container"]}>
        <ImageCarousel />
      </div>
      {/* <button className={classes["hero-button"]}>
        <p>Explore Collection </p>
        <div>{"►"}</div>
      </button> */}
    </div>
  );
};

export default HeroSection;
