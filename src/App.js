import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOFEvents";
import { getEvents, extractLocations, limitEvents } from "./api";
import { Row, Col, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventListSize: 12,
    limitedList: [],
  };
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all" || location === ""
          ? events
          : events.filter((event) => event.location === location);
      let limitedList = limitEvents(locationEvents, this.state.eventListSize);
      this.setState({
        events: locationEvents,
        limitedList: limitedList,
      });
    });
  };

  updateListSize = (number) => {
    let limitedList = limitEvents(this.state.events, number);
    this.setState({
      eventListSize: number,
      limitedList: limitedList,
    });
  };
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        let limitedList = limitEvents(events, this.state.eventListSize);
        this.setState({
          events,
          locations: extractLocations(events),
          limitedList: limitedList,
        });
      }
    });
  }
  render() {
    let { limitedList } = this.state;
    return (
      <Container className="App">
        <Row className="justify-content-lg-left">
          <Image src={logo} alt="logo image" className="logo" />
          <Col xs={12} sm={4} md={4}>
            <CitySearch
              locations={this.state.locations}
              updateEvents={this.updateEvents}
            />
          </Col>
          <Col xs={12} sm={4} md={4}>
            <NumberOfEvents
              number={this.state.eventListSize}
              updateListSize={this.updateListSize}
            />
          </Col>
        </Row>
        <Row className="justify-content-lgd-center">
          <Col xs={12} sm={12} md={12}>
            <EventList
              events={limitedList}
              eventListSize={this.state.eventListSize}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
