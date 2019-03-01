## Issues
## Resolutions

# Brewery Finder


## Project Description

This app will be a brewery finder that takes information from the user and outputs breweries in their area. There will be different filtering options including: State, city, Name, Type and if the brewery is dog friendly.

## Wireframes

[StartPage](imgs/WireFrame1.jpg)

[Form, before lists](imgs/WireFrame2.jpg)

[BreweryList](imgs/WireFrame3.jpg)

### Component Hierarchy

[StartPage Wireframe](imgs/Component_hierarchy.jpg)

## MVP

- Retrieve data from an external api
- Create a form component that filters the breweries based on city, state or name
- Render the data in the browser

### PostMVP

- Integrate the Google Maps API and connect the information provided by the OpenBreweryDB API to map the locations of the breweries.

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

## Additional Libraries

 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
