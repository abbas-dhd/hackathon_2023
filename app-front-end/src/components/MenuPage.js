import classes from "./MenuPage.module.css";
const MenuPage = () => {
  return (
    <div>
      <div className={classes["menu-items-container"]}>
        <div className={classes["menu-item"]}>
          <img src="https://img.icons8.com/ios-glyphs/90/null/user--v1.png" />
        </div>
        <div className={classes["menu-item"]}>
          <img src="https://i.ibb.co/yNdX9zP/team-team-work-working-team-icon-with-png-and-vector-format-395994.png" />
        </div>
        <div className={classes["menu-item"]}>
          <img src="https://img.icons8.com/material-rounded/96/null/settings.png" />
        </div>
      </div>
      <ul className={classes["menu-list-container"]}>
        <li className={classes["list-item"]}>Orders</li>
        <li className={classes["list-item"]}>Notifications</li>
        <li className={classes["list-item"]}>Support</li>
        <li className={classes["list-item"]}>FAQs</li>
        <li className={classes["list-item"]}>Legal</li>
        <li className={classes["list-item"]}>About</li>
        <li className={classes["list-item"]}>Sign Out</li>
      </ul>
    </div>
  );
};

export default MenuPage;
