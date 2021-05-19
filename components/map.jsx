import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import credentials from "../credentials";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";

const AnyReactComponent = ({ text }) => (
  <IconButton
    colorScheme="white"
    aria-label="Reciclaje de la Costa"
    fontSize="30px"
    variant="ghost"
    color="green"
    icon={<FaMapMarkerAlt />}
  />
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.071033714419194,
      lng: -104.27998799610077,
    },
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: credentials.mapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={17}
        >
          <AnyReactComponent
            lat={19.071033714419194}
            lng={-104.27998799610077}
            text="Reciclaje de la Costa"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
