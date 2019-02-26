import React from 'react';

const BreweryList = (props) => {
  return (
    <div className="BreweryList">
  {props.breweries.map(brewery => (
    <div id="brewery"key={brewery.id}>
      <h3>{brewery.name}</h3>
      <h4>{brewery.street&&`${brewery.street}, `}{brewery.state}</h4>
      {brewery.website_url?
        <a href={brewery.website_url} target="_blank">{brewery.website_url}</a>:
        <p>No website available</p>
      }
      {brewery.phone?
      <h4>Phone: {brewery.phone}</h4> :
      <p>No Phone Number On File</p>}
    </div>
  ))}
  </div>
  )
}

export default BreweryList;
