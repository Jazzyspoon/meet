import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOFEvents";
import { getEvents, extractLocations, limitEvents } from "./api";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="App">
        <Container>
          <Row>
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

          <Col>
            <EventList
              events={limitedList}
              eventListSize={this.state.eventListSize}
            />
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
