import React from "react";
import Brewery from "./Brewery";

const BreweryList = props => {
  return (
    <div className="main">
      <div className="BreweryList">
        {props.breweries.map(
          brewery =>
            !brewery.name.includes("Brewery in Planning") &&
            !brewery.name.includes("Brewery In Planning") && (
              <Brewery brewery={brewery} key={brewery.id} />
            )
        )}
      </div>
    </div>
  );
};

export default BreweryList;
