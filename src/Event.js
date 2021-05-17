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

          <h2>About event</h2>
          <p className="description">{description}</p>
          <a className="link" href={link}>
            See event on Google Calendar
          </a>
          <Button
            variant="outline-danger"
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
          variant="outline-success"
          className="detailsButton"
          onClick={() => this.handleShowDetails(true)}
        >
          Expand for Details
        </Button>
      );
    }

    return (
      <div className="event">
        <h1 className="summary">{summary}</h1>
        <p className="date">{date}</p>
        <p className="location">{location}</p>
        {details}
      </div>
    );
  }
}
export default Event;
