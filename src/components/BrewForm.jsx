import React, { Component } from 'react';

class BrewForm extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      city: ''
    }
  }

  handleChange(ev) {
    this.setState({
      city: ev.target.value
    })
  }

render(){
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      this.props.handleSubmitCity(this.state.city);
    }}>
      <input onChange={this.handleChange} type="text" placeholder="Enter your city code" value={this.state.city}></input>
      <button>Submit</button>
    </form>
    )
  }
}

export default BrewForm;
