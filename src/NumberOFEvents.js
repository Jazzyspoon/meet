import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

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
      <div>
        <InputGroup className="NumberOfEvents">
          <InputGroup.Prepend>
            <InputGroup.Text
              style={{ color: "black", fontSize: "18px", textAlign: "center" }}
            >
              Number of Events:{" "}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            style={{
              color: "black",
              fontSize: "15px",
              textAlign: "center",
              padding: "10px",
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
