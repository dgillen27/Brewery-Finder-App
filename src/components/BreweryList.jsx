import React from 'react';

const BreweryList = (props) => {
  return (
    <div className="BreweryList">
  {props.breweries.map(brewery => (
    <div key={brewery.id}>
    <h3>{brewery.name}</h3>
    </div>
  ))}
  </div>
  )
}

export default BreweryList;
