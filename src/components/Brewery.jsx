import React from "react";
import { Link, Route } from "react-router-dom";
import SimpleMap from "./SimpleMap";
import { SlideUpContainer } from "../poses/Poses";

export default function Brewery({ brewery }) {
  const {
    id,
    street,
    state,
    website_url,
    phone,
    latitude,
    longitude,
    name
  } = brewery;

  return (
    <SlideUpContainer pose="enter" initialPose="open" id="brewery" key={id}>
      <h2>{name}</h2>
      <h4>
        <Link to={`/BreweryList/${id}/map`}>
          {street && `${street}, `}
          {state}
        </Link>
      </h4>
      {!latitude && !longitude && <p className="no">No map available</p>}
      {website_url ? (
        <a href={website_url} target="_blank" rel="noopener noreferrer">
          {website_url}
        </a>
      ) : (
        <p>No website available</p>
      )}
      {phone ? <h4>Phone: {phone}</h4> : <p>No Phone Number On File</p>}
      {latitude && longitude && (
        <Route
          path="/BreweryList/:id/map"
          render={props => <SimpleMap {...props} currentBrewery={brewery} />}
        />
      )}
    </SlideUpContainer>
  );
}
