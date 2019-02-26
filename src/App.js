import React, { Component } from 'react';
import './App.css';
import { fetchByCity, fetchByState, fetchByName } from './services/fetchBrewery'
import BreweryList from './components/BreweryList'
import BrewForm from './components/BrewForm'
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
        <div className="notNav">
          <BrewForm
          handleSubmitCity={this.handleSubmitCity}
          handleSubmitState={this.handleSubmitState}
          handleSubmitName={this.handleSubmitName}
          handleChange={this.handleChange}
          />
          <BreweryList breweries={this.state.breweries}/>
        </div>
      </div>
    );
  }
}

export default App;
