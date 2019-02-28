import React from 'react';

const BrewForm = (props) => {
  return (
    <div id="form">
      <form onSubmit={props.handleSubmitCity}>
        <input onChange={props.handleChange} type="text" name="by_city" placeholder="City" value={props.by_city}></input>
        <button>Search by City!</button>
      </form>
      <form onSubmit={props.handleSubmitState}>
        <input onChange={props.handleChange} type="text" name="by_state" placeholder="State" value={props.by_state}></input>
        <button>Search by State!</button>
      </form>
      <form onSubmit={props.handleSubmitName}>
        <input onChange={props.handleChange} type="text" name="by_name" placeholder="Name" value={props.by_name}></input>
        <button>Search by Name!</button>
      </form>
    </div>
    )
}

export default BrewForm;
