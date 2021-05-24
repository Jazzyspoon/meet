import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    eventListSize: this.props.number,
  };

  handleInputChange = (event) => {
    const number = event.target.value;
    if (number < 1) {
      return this.setState({
        eventListSize: number,
        errorText: `Select number between 1 and 32`,
      });
    } else if (number > 32) {
      return this.setState({
        eventListSize: number,
        errorText: `Select number between 1 and 32`,
      });
    } else {
      this.setState({
        eventListSize: number,
        errorText: "",
      });
      this.props.updateListSize(number);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <InputGroup>
          <div>
            <label style={{ color: "white" }}>
              <h4>Events Listed: </h4>
            </label>
          </div>

          <input
            style={{
              color: "black",
              fontSize: "24px",
              textAlign: "center",
            }}
            as="textarea"
            aria-label="With textarea"
            type="number"
            className="number"
            value={this.state.eventListSize}
            onChange={this.handleInputChange}
          />
        </InputGroup>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
