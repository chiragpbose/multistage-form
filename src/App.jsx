import React, { Component } from "react";
import First from "./first";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      input: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        male: false,
        textaria: "",
        female: false,
      },
      error: {
        firstName: "hidden",
        lastName: "hidden",
        email: "hidden",
        address: "hidden",
        textaria: "hidden",
      },
    };
  }

  // Name Error Function
  errorName = () => {
    this.setState(() => {
      if (this.state.input.firstName.length < 6) {
        this.state.error.firstName = "visible";
      } else {
        this.state.error.firstName = "hidden";
      }
    });
  };
  radiobtn = (e) => {
    this.setState(() => {
      if (e.target.value == "male") {
        this.state.input.male = true;
      } else {
        this.state.input.male = false;
      }
    });
  };

  // LastName Error Function
  errorLast = () => {
    this.setState(() => {
      if (this.state.input.lastName.length < 5) {
        this.state.error.lastName = "visible";
      } else {
        this.state.error.lastName = "hidden";
      }
    });
  };

  // Eamail Error Function
  errorEmail = () => {
    this.setState(() => {
      if (
        this.state.input.email.length > 25 ||
        this.state.input.email.length < 5 ||
        !this.state.input.email.includes("@")
      ) {
        this.state.error.email = "visible";
      } else {
        this.state.error.email = "hidden";
      }
    });
  };

  // Address Error Function
  errorAddress = () => {
    this.setState(() => {
      if (this.state.input.address.length < 15) {
        this.state.error.address = "visible";
      } else {
        this.state.error.address = "hidden";
      }
    });
  };

  // Text Error Function
  errorText = () => {
    this.setState(() => {
      if (this.state.input.textaria.length < 5) {
        this.state.error.textaria = "visible";
      } else {
        this.state.error.textaria = "hidden";
      }
    });
  };

  increment = () => {
    if (
      this.state.error.email == "hidden" &&
      this.state.error.firstName == "hidden" &&
      this.state.error.lastName == "hidden" &&
      this.state.error.address == "hidden" &&
      !this.state.input.address == "" &&
      !this.state.input.lastName == "" &&
      !this.state.input.firstName == "" &&
      !this.state.input.email == ""
    ) {
      if (this.state.counter < 1) {
        this.setState({ counter: this.state.counter + 1 });
      } else if (
        this.state.error.textaria == "hidden" &&
        !this.state.input.textaria == "" &&
        this.state.counter < 3
      ) {
        this.setState({ counter: this.state.counter + 1 });
      }
    }

    // On Click Validation
    if (this.state.input.firstName == "") {
      this.setState({ firstName: (this.state.error.firstName = "visible") });
    }
    if (this.state.input.lastName == "") {
      this.setState({ lastName: (this.state.error.lastName = "visible") });
    }
    if (this.state.input.email == "") {
      this.setState({ email: (this.state.error.email = "visible") });
    }
    if (this.state.input.address == "") {
      this.setState({ address: (this.state.error.address = "visible") });
    }
    if (this.state.input.address == "") {
      this.setState({ address: (this.state.error.address = "visible") });
    }
    if (this.state.input.textaria == "" && this.state.counter == 1) {
      this.setState({ textaria: (this.state.error.textaria = "visible") });
    }
  };

  decrement = () => {
    if (this.state.counter >= 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  // First Name Validation
  firstName = (e) => {
    this.setState((previousState) => {
      previousState.input.firstName = e.target.value;
      return previousState;
    });
    this.errorName();
  };

  // Last Name Validation
  secondName = (e) => {
    this.setState((previousState) => {
      previousState.input.lastName = e.target.value;
      return previousState;
    });
    this.errorLast();
  };

  // Email Validation
  email = (e) => {
    this.setState((previousState) => {
      previousState.input.email = e.target.value;
      return previousState;
    });
    this.errorEmail();
  };

  // Address Validation
  address = (e) => {
    this.setState((previousState) => {
      previousState.input.address = e.target.value;
      return previousState;
    });
    this.errorAddress();
  };
  textaria = (e) => {
    this.setState((previousState) => {
      previousState.input.textaria = e.target.value;
      return previousState;
    });
    this.errorText();
  };

  render() {
    return (
      <>
        <main
          className="h-96 w-1/1 flex justify-center items-center"
          style={{ height: "598px" }}
        >
          <div className=" w-4/5 h-5/6 bg-white rounded-xl shadow-slate-200">
            <First
              clickEvent={this.increment}
              count={this.state.counter}
              firstname={this.firstName}
              lastName={this.secondName}
              address={this.address}
              textaria={this.textaria}
              email={this.email}
              state={this.state}
              decrese={this.decrement}
              radio={this.radiobtn}
            />
          </div>
        </main>
      </>
    );
  }
}
