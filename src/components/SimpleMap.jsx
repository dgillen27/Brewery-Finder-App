import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { SlideLeftContainer } from "../poses/Poses";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const apiKey = process.env.REACT_APP_API_KEY;

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 14
    };
  }

  render() {
    return (
      <SlideLeftContainer
        pose="enter"
        initialPose="open"
        className="containerMap"
      >
        {parseInt(this.props.match.params.id) ===
          this.props.currentBrewery.id && (
          <div className="innerMap">
            <GoogleMapReact
              bootstrapURLKeys={{ key: `${apiKey}` }}
              defaultCenter={{
                lat: parseFloat(this.props.currentBrewery.latitude),
                lng: parseFloat(this.props.currentBrewery.longitude)
              }}
              defaultZoom={this.state.zoom}
            >
              <AnyReactComponent
                lat={parseFloat(this.props.currentBrewery.latitude)}
                lng={parseFloat(this.props.currentBrewery.longitude)}
                text={this.props.currentBrewery.name}
              />
            </GoogleMapReact>
          </div>
        )}
      </SlideLeftContainer>
    );
  }
}

export default SimpleMap;
