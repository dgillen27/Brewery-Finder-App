import React, { Component } from 'react';
import './App.css';
import { fetchByCity, fetchByState, fetchByName } from './services/fetchBrewery'
import BreweryList from './components/BreweryList'
import BrewForm from './components/BrewForm'
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Nav from './components/Nav'


class App extends Component {
  constructor() {
    super();

    this.state = {
      breweries: [],
      by_city: '',
      by_state: '',
      by_zip: '',
      by_type: ''
    }
    this.handleSubmitCity = this.handleSubmitCity.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitState = this.handleSubmitState.bind(this)
    this.handleSubmitName = this.handleSubmitName.bind(this)
  }

  async handleSubmitCity(ev) {
    ev.preventDefault();
    const brewData = await fetchByCity(this.state.by_city);
    this.setState({
      breweries: brewData
    })
    console.log(this.state.data);
  }

  async handleSubmitState(ev) {
    ev.preventDefault();
    const brewData = await fetchByState(this.state.by_state);
    this.setState({
      breweries: brewData
    })
    console.log(this.state.data);
  }

  async handleSubmitName(ev) {
    ev.preventDefault();
    const brewData = await fetchByName(this.state.by_name);
    this.setState({
      breweries: brewData
    })
    console.log(this.state.data);
  }

  handleChange(ev) {
    const {name, value} = ev.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
          <div className="main">
            <div id="home">
              <Route exact path="/" component={Welcome}/>
            </div>
              <Route path="/BreweryList" render={(props) => (
                <BrewForm {...props}
                handleSubmitCity={this.handleSubmitCity}
                handleSubmitState={this.handleSubmitState}
                handleSubmitName={this.handleSubmitName}
                handleChange={this.handleChange}
                />
              )}/>
              <Route path="/BreweryList" render={(props) => (
                <BreweryList {...props} breweries={this.state.breweries}/>
              )}/>
            </div>
          <Footer />
      </div>
    );
  }
}

export default App;
