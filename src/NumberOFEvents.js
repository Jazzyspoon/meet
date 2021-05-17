import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventListSize: props.number,
      errorText: "",
    };
  }

  handleInputChange = (event) => {
    const number = event.target.value;
    if (number <= 0) {
      this.setState({
        eventListSize: number,
      });
    } else {
      this.setState({
        eventListSize: number,
      });
    }
    this.props.updateListSize(number);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <InputGroup>
          <InputGroup.Prepend>
            <label
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              <h4>Events Listed: </h4>
            </label>
          </InputGroup.Prepend>
          <br></br>
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
      </div>
    );
  }
}

export default NumberOfEvents;
