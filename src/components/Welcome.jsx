import React from "react";
import { Link } from 'react-router-dom'


const Welcome = () => {
  return (
    <div id="welcome">
      <div id="cover">
        <h1>Welcome!</h1>
        <Link id="get-started" className="link" to="/BreweryList">Get Started!</Link>
      </div>
    </div>
  )
}

export default Welcome;
