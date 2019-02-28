import React from "react";
import { Link, Route} from 'react-router-dom'
import Footer from './Footer'

const Welcome = () => {
  return (
    <div id="welcome">
      <div id="cover">
        <h1>Welcome!</h1>
        <Link id="route" className="link" to="/BreweryList">Find a Brewery!</Link>
      </div>
    </div>
  )
}

export default Welcome;
