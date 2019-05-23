
# Brewery Finder

## Project Description

This app will be a brewery finder that takes information from the user and outputs breweries in their area. There will be different filtering options including: State, city, Name, Type and if the brewery is dog friendly.

## MVP

- Retrieve data from an external api
- Create a form component that filters the breweries based on city, state or name
- Render the data in the browser

### PostMVP

- Integrate the Google Maps API and connect the information provided by the OpenBreweryDB API to map the locations of the breweries.

## Issues and Resolutions

The largest logical issue I encountered during this project was passing down state to the map component. In the end I needed to parseFloat the information from state to properly pass the latitude and longitude needed for the map.

## Installation Instructions

- Fork and clone this repo
- Run npm install
- Run npm start
- Get hacking!

## API Link & NPM Package

https://www.openbrewerydb.org/#documentation

https://www.npmjs.com/package/google-map-react

## Functional Components

| Welcome | This is the landing page for the app |

| Nav | This component will render the nav bar |

| Footer | This will render the footer |

| BreweryList | This component will contain the divs that contain the brewery information and the map |

| BrewForm | This component will include the form that contains the input fields and submit buttons |

| SimpleMap | This is the component that contains the map package |

## Code Snippet

Putting together the BreweryList was a bit of a challenge due to the amount of conditional rendering necessary. Integrating the map and styling in this was also a big challenge.

```
<div className="BreweryList">
  {props.breweries.map(brewery => (
    <div id="brewery"key={brewery.id}>
      <h2>{brewery.name}</h2>
        <h4><Link to={`/BreweryList/${brewery.id}/map`}>{brewery.street&&`${brewery.street}, `}{brewery.state}</Link></h4>
        {!brewery.latitude && !brewery.longitude?
          <p className="no">No map available</p>:
          null
        }
          {brewery.website_url?
            <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>:
              <p>No website available</p>
            }
              {brewery.phone?
                <h4>Phone: {brewery.phone}</h4> :
                <p>No Phone Number On File</p>}
                {brewery.latitude && brewery.longitude?
                  <Route path='/BreweryList/:id/map' render={(props) => (
                    <SimpleMap {...props} currentBrewery={brewery}/>
                  )}/>: null}
```

## Additional Libraries

The code for the map was taken partially from the code provided by the npm package.

## Wireframes

[StartPage](imgs/WireFrame1.jpg)

[Form, before lists](imgs/WireFrame2.jpg)

[BreweryList](imgs/WireFrame3.jpg)

### Component Hierarchy

[StartPage Wireframe](imgs/Component_hierarchy.jpg)
