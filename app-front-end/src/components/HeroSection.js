import classes from "./HeroSection.module.css";
import ImageCarousel from "./ImageCarousel";

const HeroSection = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-image-container"]}>
        <ImageCarousel />
      </div>
      <button className={classes["hero-button"]}>
        <p>Explore Collection </p>
        <div>{"►"}</div>
      </button>
    </div>
  );
};

export default HeroSection;
