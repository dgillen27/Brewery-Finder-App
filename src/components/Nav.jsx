import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="link-container">
        <Link id="logo" className="link" to="/">BreweryFinder</Link>
      </div>
      <div className="link-container">
        <Link id="a" className="link" to="/">Home</Link>
        <Link id="a" className="link" to="/brewerylist">Breweries</Link>
      </div>
    </nav>
  )
}

export default Nav;
