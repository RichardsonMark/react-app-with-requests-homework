import React, { Component } from 'react';
import { TileLayer, MapContainer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';


class MyMap2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.52437, lng: 13.41053 },
      zoom: 12,
    }
  }
  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />        <Markers venues={data.venues}/>
      </MapContainer>
    );
  }
}
export default MyMap2;