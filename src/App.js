import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchBrewery from './services/fetchBrewery'
import BreweryList from './components/BreweryList'
import BrewForm from './components/BrewForm'

class App extends Component {
  constructor() {
    super();

    this.state = {
      breweries: []
    }
  }

  async componentDidMount() {
    const breweries = await fetchBrewery();

    this.setState({
      breweries: breweries
    })
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <h1>Brewery Finder</h1>
        <BrewForm />
      </div>
    );
  }
}

export default App;
