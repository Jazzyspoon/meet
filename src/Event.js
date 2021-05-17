import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  handleShowDetails(bool) {
    this.setState({
      showDetails: bool,
    });
  }

  render() {
    const { summary, location, description, link } = this.props.event;
    const date = this.props.event.start.dateTime;

    let details;
    if (this.state.showDetails) {
      details = (
        <div className="expanded">
          {/* See details on Google Calendar */}

          <h2>About the event:</h2>
          <p style={{ color: "white" }} className="description">
            {description}
          </p>
          <a className="link" href={link}>
            See event on Google Calendar
          </a>
          <Button
            variant="danger"
            style={{ color: "black", fontSize: "14px", textAlign: "center" }}
            className="detailsButton"
            onClick={() => this.handleShowDetails(false)}
          >
            Hide details
          </Button>
        </div>
      );
    } else {
      details = (
        <Button
          variant="success"
          style={{ color: "black", fontSize: "14px", textAlign: "center" }}
          className="detailsButton"
          onClick={() => this.handleShowDetails(true)}
        >
          Expand for Details
        </Button>
      );
    }

    return (
      <div className="event">
        <h1 className="summary">
          Event: <p style={{ color: "white" }}>{summary}</p>
        </h1>{" "}
        <h4 className="date">When: </h4>
        <h4 style={{ color: "white" }}>{date}</h4>
        <h4 className="location">Where: </h4>
        <h4 style={{ color: "white" }}>{location}</h4>
        {details}
      </div>
    );
  }
}
export default Event;
