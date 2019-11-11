import React from "react";

const BrewForm = props => {
  const {
    by_city,
    by_state,
    handleSubmitCity,
    handleSubmitName,
    handleSubmitState,
    handleChange
  } = props;
  return (
    <div id="form">
      <form onSubmit={handleSubmitCity}>
        <input
          onChange={handleChange}
          type="text"
          name="by_city"
          placeholder="City"
          value={by_city}
        ></input>
        <button>Search by City!</button>
      </form>
      <form onSubmit={handleSubmitState}>
        <input
          onChange={handleChange}
          type="text"
          name="by_state"
          placeholder="State"
          value={by_state}
        ></input>
        <button>Search by State!</button>
      </form>
      <form onSubmit={handleSubmitName}>
        <input
          onChange={handleChange}
          type="text"
          name="by_name"
          placeholder="Name"
          value={props.by_name}
        ></input>
        <button>Search by Name!</button>
      </form>
    </div>
  );
};

export default BrewForm;
