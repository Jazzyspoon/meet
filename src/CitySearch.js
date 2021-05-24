import React, { Component } from "react";
import { InfoAlert } from "./Alert";
import { InputGroup } from "react-bootstrap";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: false,
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: "",
    });

    this.props.updateEvents(suggestion, 0);
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        suggestions: [],
        infoText: "Location Unavailable",
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div className="CitySearch">
        <InputGroup>
          <div>
            <label style={{ color: "white" }}>
              <h4>Enter Your City: </h4>
            </label>
          </div>

          <input
            style={{
              color: "black",
              fontSize: "24px",
              textAlign: "center",
            }}
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => {
              this.setState({ showSuggestions: true });
            }}
          />
          {this.state.suggestions.length >= 1 ? (
            <ul
              className="suggestions"
              style={this.state.showSuggestions ? {} : { display: "none" }}
            >
              {this.state.suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => this.handleItemClicked(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
              <li onClick={() => this.handleItemClicked("all")}>
                <b>See all cities</b>
              </li>
            </ul>
          ) : (
            <InfoAlert text={this.state.infoText} />
          )}
        </InputGroup>
      </div>
    );
  }
}

export default CitySearch;
