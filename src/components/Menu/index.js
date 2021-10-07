import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
const Menu = () => {
  return (
    <div>
      <ul className={css.Menu}>
        <MenuItem active link="/">
          ШИНЭЗАХИАЛГА
        </MenuItem>
        <MenuItem link="/">НЭВТРЭХ</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
