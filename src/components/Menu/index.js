import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
const Menu = () => {
  return (
    <div>
      <ul className={css.Menu}>
        <MenuItem>БУРГЕР</MenuItem>
        <MenuItem>ЗАХИАЛАХ</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
