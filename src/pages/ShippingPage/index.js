import React, { Component } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";

export class ShippingPagge extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }

    this.setState({ ingredients });
  }

  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="ShippingPage">
        <Burger orts={this.state.ingredients} />
        <Button
          clicked={this.goBack}
          btnType="Danger"
          text="Захиалгыг цуцлах"
        />
      </div>
    );
  }
}

export default ShippingPagge;
