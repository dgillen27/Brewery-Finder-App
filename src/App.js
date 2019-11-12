import React, { Component } from "react";
import "./App.css";
import {
  fetchByCity,
  fetchByState,
  fetchByName
} from "./services/fetchBrewery";
import BreweryList from "./components/BreweryList";
import BrewForm from "./components/BrewForm";
import { Route, withRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: [],
      by_city: "",
      by_state: "",
      by_zip: "",
      by_type: "",
      by_name: ""
    };
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitState = this.handleSubmitState.bind(this);
    this.handleSubmitName = this.handleSubmitName.bind(this);
  }

  async handleSubmitCity(ev) {
    ev.preventDefault();
    const brewData = await fetchByCity(this.state.by_city);
    this.setState({
      breweries: brewData,
      by_city: ""
    });
  }

  async handleSubmitState(ev) {
    ev.preventDefault();
    const brewData = await fetchByState(this.state.by_state);
    this.setState({
      breweries: brewData,
      by_state: ""
    });
  }

  async handleSubmitName(ev) {
    ev.preventDefault();
    const brewData = await fetchByName(this.state.by_name);
    this.setState({
      breweries: brewData,
      by_name: ""
    });
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const location = this.props.history.location.pathname;
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route
          path="/BreweryList"
          render={props => (
            <BrewForm
              {...props}
              by_city={this.state.by_city}
              by_state={this.state.by_state}
              by_name={this.state.by_name}
              handleSubmitCity={this.handleSubmitCity}
              handleSubmitState={this.handleSubmitState}
              handleSubmitName={this.handleSubmitName}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          path="/BreweryList"
          render={props => (
            <BreweryList {...props} breweries={this.state.breweries} />
          )}
        />
        {location !== "/" && <Footer />}
      </div>
    );
  }
}

export default withRouter(App);
