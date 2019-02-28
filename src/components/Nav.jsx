import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/"><p id="logo">BreweryFinder</p></Link>
      <Link id="a" className="link" to="/">Home</Link>
      <Link id="a" className="link" to="/brewerylist">Breweries</Link>
    </nav>
  )
}

export default Nav;
