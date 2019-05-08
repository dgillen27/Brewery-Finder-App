import React from 'react';
import SimpleMap from './SimpleMap'
import { Link, Route } from 'react-router-dom'

const BreweryList = (props) => {
  return (
    <div className="BreweryList">
      {props.breweries.map(brewery => (
        !brewery.name.includes("Brewery in Planning") && !brewery.name.includes("Brewery In Planning") &&
        <div id="brewery"key={brewery.id}>
          <h2>{brewery.name}</h2>
          <h4><Link to={`/BreweryList/${brewery.id}/map`}>{brewery.street&&`${brewery.street}, `}{brewery.state}</Link></h4>
          {!brewery.latitude && !brewery.longitude &&
          <p className="no">No map available</p>}
          {brewery.website_url?
          <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>:
          <p>No website available</p> }
          {brewery.phone?
          <h4>Phone: {brewery.phone}</h4> :
          <p>No Phone Number On File</p>}
          {brewery.latitude && brewery.longitude &&
          <Route path='/BreweryList/:id/map' render={(props) => (
            <SimpleMap {...props}
              currentBrewery={brewery}/>)}
          />}
        </div>
      ))}
    </div>
  )
}

export default BreweryList;
