import React, { Component } from "react";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOFEvents";
import { getEvents, extractLocations, limitEvents } from "./api";
import { Row, Col, Container, Image } from "react-bootstrap";
import { OfflineAlert } from "./Alert";
import "./App.css";
import logo from "./images/logo.png";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventListSize: 32,
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
        if (!navigator.onLine) {
          this.setState({
            offlinealert: "You are now offline.",
          });
        } else {
          this.setState({
            warningText: "",
          });
        }
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    let { limitedList } = this.state;
    return (
      <div className="center">
        <Container fluid="md" className="App">
          <Row className="justify-content-md-center">
            <Image src={logo} alt="logo image" className="logo" />
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <CitySearch
                locations={this.state.locations}
                updateEvents={this.updateEvents}
              />
            </Col>
            <Col>
              <NumberOfEvents
                number={this.state.eventListSize}
                updateListSize={this.updateListSize}
              />
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col>
              <EventList
                events={limitedList}
                eventListSize={this.state.eventListSize}
              />
              <OfflineAlert text={this.state.offlinealert} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
