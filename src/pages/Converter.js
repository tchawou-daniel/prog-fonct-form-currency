import React, { Component } from "react";
import Spinner from "../components/Spinner";

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: ["EUR", "CHF", "GBP", "USD"],
      base: "EUR",
      amount: "",
      outputDevises: "USD",
      result: null
    };
  }

  handleSelect = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
        //result: null
      },
      this.converterCore
    );
  };

  handleInput = (e) => {
    this.setState({ amount: e.target.value, result: null }, () => {
      this.converterCore();
      if (!isNaN(this.state.amount)) {
        e.target.className = "valid";
      } else {
        e.target.className = "invalid";
      }
    });
  };

  converterCore = () => {
    const amount = this.state.amount;
    var result;
    const isTwoCurrenciesEuro =
      this.state.base === this.state.outputDevises &&
      this.state.outputDevises === "EUR";

    if (amount === isNaN) {
      return;
    } else if (amount > 0 && isTwoCurrenciesEuro === false) {
      result = fetch(                                                                     
        `http://api.exchangeratesapi.io/v1/latest?access_key=MY_API_KEY&base=${this.state.base}&symbols=EUR,CHF,GBP,USD`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          result = (data.rates[this.state.outputDevises] * amount).toFixed(4);
          this.setState({
            result
          });
        });
    } else {
      const regex = new RegExp("[a-zA-Z]");

      if (+amount === 0 || regex.test(amount)) {
        result = 0;
        this.setState({
          result
        });
      } else {
        result = amount;
        this.setState({
          result
        });
      }
    }
  };

  render() {
    const { currencies, base, amount, outputDevises, result } = this.state;

    return (
      <div className="Converterpp">
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                <div className="col s6">
                  <select
                    value={base}
                    className="browser-default"
                    name="base"
                    id="inputDevises"
                    onChange={this.handleSelect}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col s6">
                  <select
                    value={outputDevises}
                    className="browser-default"
                    name="outputDevises"
                    id="outputDevises"
                    onChange={this.handleSelect}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="amount"
                    type="text"
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.amount}
                  />
                  <span
                    className="helper-text"
                    data-error="Erreur"
                    data-success="Valide"
                  ></span>
                  <label htmlFor="amount">Montant</label>
                </div>
                <div className="input-field col s12">
                  <h5>
                    Résultat :{" "}
                    {amount === "" ? (
                      "0"
                    ) : result === null ? (
                      <Spinner />
                    ) : (
                      result
                    )}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Converter;
