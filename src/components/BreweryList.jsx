import React from 'react';
import SimpleMap from './SimpleMap'
import { Link, Route } from 'react-router-dom'
import Footer from './Footer'

const BreweryList = (props) => {
  return (
    <div className="BreweryList">
      {props.breweries.map(brewery => (
        <div id="brewery"key={brewery.id}>
          <h3>{brewery.name}</h3>
            <h4><Link to={`/BreweryList/${brewery.id}/map`}>{brewery.street&&`${brewery.street}, `}{brewery.state}</Link></h4>
            {!brewery.latitude && !brewery.longitude?
              <p className="no">No map available</p>:
              null
            }
            {brewery.website_url?
        <a href={brewery.website_url} target="_blank">{brewery.website_url}</a>:
        <p>No website available</p>
      }
      {brewery.phone?
      <h4>Phone: {brewery.phone}</h4> :
      <p>No Phone Number On File</p>}
      {brewery.latitude && brewery.longitude?
      <Route path='/BreweryList/:id/map' render={(props) => (
        <SimpleMap {...props} currentBrewery={brewery}/>
      )}/>: null}
    </div>
  ))}
  </div>
  )
}

export default BreweryList;
