import React, { Component } from "react";

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
        <label>Number of Events: </label>
        <input
          type="number"
          className="number"
          placeholder="32"
          value={this.state.eventListSize}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
