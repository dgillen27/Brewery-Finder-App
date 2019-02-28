import React from 'react';
import { Link, Route } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <p id="logo">BreweryFinder</p>
      <Link id="a" className="link" to="/">Home</Link>
      <Link id="a" className="link" to="/brewerylist">Brewery List</Link>
    </nav>
  )
}

export default Nav;
