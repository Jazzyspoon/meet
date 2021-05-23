import React, { Component } from "react";
import Event from "./Event";
import { Col, Row } from "react-bootstrap";
class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList event-rows">
        <Row>
          {events.map((event) => (
            <Col lg={6} key={event.id}>
              <Event event={event} />
            </Col>
          ))}
        </Row>
      </ul>
    );
  }
}

export default EventList;
