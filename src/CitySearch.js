import React, { Component } from "react";
import { InputGroup, FormControl, ListGroup } from "react-bootstrap";

class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      suggestions: [],
      showSuggestions: undefined,
    };
  }
  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
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
          <InputGroup.Prepend>
            <InputGroup.Text
              style={{ color: "black", fontSize: "18px", textAlign: "center" }}
            >
              Enter Your City:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            style={{ color: "black", fontSize: "18px", textAlign: "center" }}
            position="center"
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
        <ListGroup
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <ListGroup.Item
              style={{ color: "black", fontSize: "18px", textAlign: "center" }}
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </ListGroup.Item>
          ))}
          <ListGroup.Item
            style={{
              color: "black",
              fontSize: "18px",
              textAlign: "center",
              padding: "10px",
            }}
            key="all"
            onClick={() => this.handleItemClicked("all")}
          >
            <b style={{ color: "black" }}>See all cities</b>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
export default CitySearch;
