import React from 'react';

const BrewForm = (props) => {
  return (
    <div id="form">
      <form onSubmit={props.handleSubmitCity}>
        <input onChange={props.handleChange} type="text" name="by_city" placeholder="Search by City" value={props.by_city}></input>
        <button>Find a brewery!</button>
      </form>
      <h3>Or</h3>
      <form onSubmit={props.handleSubmitState}>
        <input onChange={props.handleChange} type="text" name="by_state" placeholder="Search by State" value={props.by_state}></input>
        <button>Find a brewery!</button>
      </form>
      <h3>Or if you know your brewery</h3>
      <form onSubmit={props.handleSubmitName}>
        <input onChange={props.handleChange} type="text" name="by_name" placeholder="Search by Name" value={props.by_name}></input>
        <button>Find a brewery!</button>
      </form>
    </div>
    )
}

export default BrewForm;
