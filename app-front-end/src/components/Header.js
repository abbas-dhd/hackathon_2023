import { useState } from "react";
import classes from "./Header.module.css";
const Header = () => {
  const transparentClassName = "transparent-background";
  const [isTransparent, setIsTransparent] = useState(true);
  const scrollTrigger = 60;

  window.onscroll = function () {
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };

  return (
    <div
      className={`${classes.header} ${
        isTransparent ? classes[transparentClassName] : ""
      }`}
    >
      {/* <img
        className={classes["header-bg-image"]}
        src="https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png"
      /> */}
      <div className={`${classes["header-container"]}`}>
        {/* This is title for the store */}
        <div className={classes["header-title"]}>
          <h2 className={classes["header-title-name"]}>iuvenes</h2>
        </div>
        {/* This is Profile Button */}
        {/* <div className={classes["header-profile"]}>
          <img src="https://img.icons8.com/tiny-glyph/64/null/gender-neutral-user.png" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
