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
                    width={400}
                    height={400}
                    margin={{
                      top: 20,
                      right: 40,
                      bottom: 20,
                      left: 0,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis
                      type="category"
                      dataKey="city"
                      name="city"
                      style={{
                        fontSize: "8px",
                        fontWeight: "bold",
                      }}
                    />
                    <YAxis
                      type="number"
                      dataKey="number"
                      name="number of events"
                      allowDecimals={false}
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    />

                    <Scatter
                      data={this.getData()}
                      fill="#82ca9d"
                      stroke="rgb(0, 157, 249)"
                      strokeWidth={1}
                      fillOpacity={0.25}
                    />
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