import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <img
        className={classes["header-bg-image"]}
        src="https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png"
      />
      <div className={`${classes["header-container"]}`}>
        {/* This is title for the store */}
        <div className={classes["header-title"]}>
          <h2 className={classes["header-title-name"]}>Orion Fashion</h2>
        </div>
        {/* This is Profile Button */}
        <div className={classes["header-profile"]}>
          <img src={"https://static.thenounproject.com/png/1559154-200.png"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
