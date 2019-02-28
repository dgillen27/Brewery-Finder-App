import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link id="logo" className="link" to="/">BreweryFinder</Link>
      <Link id="a" className="link" to="/">Home</Link>
      <Link id="a" className="link" to="/brewerylist">Breweries</Link>
    </nav>
  )
}

export default Nav;
