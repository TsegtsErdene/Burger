import React from "react";
import css from "./style.module.css";
import logoImage from "../../assets/image/burger-cheese-burger-food-icon-with-png-and-vector-format-587824.png";
const Logo = () => {
  return (
    <div className={css.Logo}>
      <img src={logoImage} />
    </div>
  );
};

export default Logo;
