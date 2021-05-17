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

          <h3>About the event:</h3>
          <h5 style={{ color: "white" }} className="description">
            {description}
          </h5>
          <a
            style={{ fontSize: "20px", textAlign: "center" }}
            className="link"
            href={link}
          >
            See event on Google Calendar
          </a>
          <Button
            variant="danger"
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
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
          style={{
            color: "black",
            fontSize: "14px",
            textAlign: "center",
            fontWeight: "bold",
          }}
          className="detailsButton"
          onClick={() => this.handleShowDetails(true)}
        >
          Expand for Details
        </Button>
      );
    }

    return (
      <div className="event">
        <h2 className="summary">
          Event: <p style={{ color: "white" }}>{summary}</p>
        </h2>{" "}
        <h5 className="date">When: </h5>
        <h5 style={{ color: "white" }}>{date}</h5>
        <h5 className="location">Where: </h5>
        <h5 style={{ color: "white" }}>{location}</h5>
        {details}
      </div>
    );
  }
}
export default Event;