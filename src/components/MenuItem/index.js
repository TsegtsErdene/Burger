import React from "react";
import css from "./style.module.css";
const MenuItem = (props) => {
  return (
    <div>
      <li>{props.children}</li>
    </div>
  );
};

export default MenuItem;
