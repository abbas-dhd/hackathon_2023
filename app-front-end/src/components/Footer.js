import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes["footer"]}>
      <img
        className={classes["footer-bg-image"]}
        src="https://www.freepnglogos.com/uploads/shoes-png/shoes-wasatch-running-3.png"
      />
      <div className={`${classes["footer-container"]}`}>
        <div className={`${classes.home} ${classes["footer-item"]}`}>
          <img src="https://img.icons8.com/material-outlined/96/null/home-page.png" />
        </div>
        <div className={`${classes.reel} ${classes["footer-item"]}`}>
          <img src="https://img.icons8.com/wired/100/circled-play.png" />
          {/* <img src="https://img.icons8.com/dotty/80/null/circled-play.png" /> */}
        </div>
        <div className={`${classes.cart} ${classes["footer-item"]}`}>
          <img src="https://img.icons8.com/material-outlined/96/null/shopping-cart--v1.png" />
        </div>
        <div className={`${classes.menu} ${classes["footer-item"]}`}>
          <img src="https://img.icons8.com/ios-glyphs/96/null/menu--v1.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
