import classes from "./HeroSection.module.css";
import ImageCarousel from "./ImageCarousel";

const HeroSection = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-image-container"]}>
        <ImageCarousel />
      </div>
      <button className={classes["hero-button"]}>
        Buy Now <span>{">"}</span>
      </button>
    </div>
  );
};

export default HeroSection;
