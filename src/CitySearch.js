import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";

class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      suggestions: [],
      showSuggestions: undefined,
      infoText: "",
    };
  }
  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText:
          "We cannot find the city you are looking for. Please check your spelling or try another city.",
      });
    } else {
      this.setState({
        query: value,
        suggestions,
        infoText: "",
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });

    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <InputGroup>
          <div>
            <label
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              <h4>Enter Your City: </h4>
            </label>
          </div>
          <br></br>
          <input
            style={{ color: "black", fontSize: "24px", textAlign: "center" }}
            as="textarea"
            aria-label="With textarea"
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => {
              this.setState({ showSuggestions: true });
            }}
          />
        </InputGroup>
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li
            style={{
              color: "white",
              fontSize: "18px",
              textAlign: "center",
              padding: "10px",
            }}
            key="all"
            onClick={() => this.handleItemClicked("all")}
          >
            <b style={{ color: "white" }}>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}
export default CitySearch;
