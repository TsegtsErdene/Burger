import React from "react";
import css from "./style.module.css";
const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}</div>
      <button
        disabled={props.disable[props.type]}
        onClick={() => props.ortsHasah(props.type)}
        className={css.More}
      >
        Хасах
      </button>
      <button onClick={() => props.ortsNemeh(props.type)} className={css.Less}>
        Нэмэх
      </button>
    </div>
  );
};

export default BuildControl;
