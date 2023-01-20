import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Footer.module.css";
const Footer = () => {
  const [index, setIndex] = useState(0);
  // index:
  //  0: home
  //  1: clips
  //  2: cart
  //  3: menu
  console.log(index);
  const navigate = useNavigate();

  function clipsClickHandler() {
    navigate("/clips");
  }
  function homeClickHandler() {
    navigate("/");
  }
  function menuClickHandler() {
    navigate("/menu");
  }

  return (
    <div className={classes["footer"]}>
      <div className={`${classes["footer-container"]}`}>
        <div
          className={`${classes.home} ${classes["footer-item"]}`}
          onClick={() => {
            setIndex(0);
            homeClickHandler();
          }}
        >
          <img src="https://img.icons8.com/ios-glyphs/90/null/home-page--v1.png" />
        </div>
        <div
          className={`${classes["clips"]} ${classes["footer-item"]}`}
          onClick={() => {
            setIndex(1);
            clipsClickHandler();
          }}
        >
          {/* <img src="https://img.icons8.com/external-those-icons-fill-those-icons/96/null/external-play-applications-windows-those-icons-fill-those-icons-2.png" /> */}
          <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/200/external-play-essentials-icongeek26-glyph-icongeek26.png" />
          {/* <img src="https://img.icons8.com/external-those-icons-fill-those-icons/96/null/external-play-applications-windows-those-icons-fill-those-icons-2.png" /> */}
        </div>
        <div className={`${classes["cart"]} ${classes["footer-item"]}`}>
          <img src="https://img.icons8.com/ios-glyphs/90/null/shopping-cart--v1.png" />
        </div>
        <div
          className={`${classes["menu"]} ${classes["footer-item"]}`}
          onClick={() => {
            setIndex(3);
            menuClickHandler();
          }}
        >
          <img src="https://img.icons8.com/ios-glyphs/96/null/menu--v1.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
