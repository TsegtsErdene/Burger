import React, { Component } from "react";
import axios from "../../axios.orders";
import Spinner from "../../components/General/Spinner";
import Orderr from "../../components/Order";

export class OrderPage extends Component {
  state = {
    loading: false,
    data: [],
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        this.setState({ data: Object.entries(response.data).reverse() });
      })
      .catch((err) => console.log("err ==>", err))
      .finally(() => {
        this.setState({ loading: false });
      });
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.data.map((el) => (
            <div key={el[0]}>
              <Orderr order={el[1]} />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default OrderPage;
