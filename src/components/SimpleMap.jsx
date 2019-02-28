import React, { Component } from 'react';
import  GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = process.env.REACT_APP_API_KEY

class SimpleMap extends Component {
  constructor(props){
    super(props);

    this.state = {
      zoom: 14
    };
  }

  render() {
    return (
      <div className="containerMap">
        {parseInt(this.props.match.params.id) === this.props.currentBrewery.id?
        <div className="innerMap" style={{ height: '350px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${apiKey}` }}
            defaultCenter={{
              lat: parseFloat(this.props.currentBrewery.latitude),
              lng: parseFloat(this.props.currentBrewery.longitude)
            }}
            defaultZoom={this.state.zoom}>
            <AnyReactComponent
              lat={parseFloat(this.props.currentBrewery.latitude)}
              lng={parseFloat(this.props.currentBrewery.longitude)}
              text={this.props.currentBrewery.name}
              marker={{lat: parseFloat(this.props.currentBrewery.longitude), lng: parseFloat(this.props.currentBrewery.latitude)}}
            />
          </GoogleMapReact>
        </div>:
        <div className="theMap"></div>
      }
    </div>
    );
  }
}

export default SimpleMap;
