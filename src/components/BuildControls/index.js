import React from "react";
import css from "./style.module.css";
import Buildcontrol from "../BuildControl";
const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Бүргэрийн үнэ: <strong>{props.price}</strong>
      </p>
      {Object.keys(props.ingredientsNames).map((el) => (
        <Buildcontrol
          key={el}
          disable={props.disabledIngredients}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
