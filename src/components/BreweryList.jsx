import React from 'react';

const BreweryList = (props) => {
  return (
  props.breweries.map(brewery => (
    <div key={brewery.id}>
    <h2>{brewery.name}</h2>
    </div>
  ))
  )
}

export default BreweryList;
