import React, { Component } from 'react';
import './App.css';
import fetchByCity from './services/fetchBrewery'
import BreweryList from './components/BreweryList'
import BrewForm from './components/BrewForm'

class App extends Component {
  constructor() {
    super();

    this.state = {
      breweries: [],
      city: ''
    }
    this.handleSubmitCity = this.handleSubmitCity.bind(this)
  }

  async handleSubmitCity(city) {
    const brewData = await fetchByCity(city);
    this.setState({
      breweries: brewData
    })
    console.log(this.state);
  }

  handleChange(ev) {
    this.setState({
      city: ev.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Brewery Finder</h1>
        <BrewForm
        handleSubmitCity={this.handleSubmitCity}
        handleChange={this.handleChange}
        />
        <BreweryList breweries={this.state.breweries}/>
      </div>
    );
  }
}

export default App;
