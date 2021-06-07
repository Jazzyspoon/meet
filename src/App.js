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
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./App.css";
import logo from "./images/logo.png";

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
              <OfflineAlert text={this.state.offlinealert} />

              <ResponsiveContainer height={400}>
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis
                    type="number"
                    dataKey="number"
                    name="number of events"
                    allowDecimals={false}
                  />

                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Legend verticalAlign="top" height={36} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                  <Scatter data={this.getData()} fill="#82ca9d" />
                </ScatterChart>
              </ResponsiveContainer>
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
