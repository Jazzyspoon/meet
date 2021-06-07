import React, { Component } from "react";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOFEvents";

import { getEvents, extractLocations, limitEvents } from "./api";
import { Row, Col, Container, Image } from "react-bootstrap";
import { OfflineAlert } from "./Alert";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./App.css";
import logo from "./images/logo.png";
import EventGenre from "./EventGenre";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventListSize: 32,
    limitedList: [],
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
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
    let { limitedList, events } = this.state;
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
              <OfflineAlert text={this.state.offlinealert} />
              <div className="data-vis-wrapper">
                <EventGenre events={events} />
                <ResponsiveContainer height={400}>
                  <ScatterChart
                    margin={{ top: 10, right: 20, bottom: 10, left: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="category"
                      dataKey="city"
                      name="city"
                      style={{
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    />
                    <YAxis
                      type="number"
                      dataKey="number"
                      name="number of events"
                      label="number of events"
                      allowDecimals={false}
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    />

                    <Scatter data={this.getData()} fill="#8884d8" />
                    <Scatter data={this.getData()} fill="#82ca9d" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <EventList
                events={limitedList}
                eventListSize={this.state.eventListSize}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
