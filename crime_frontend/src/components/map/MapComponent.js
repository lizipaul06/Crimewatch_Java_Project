
import React ,{Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import MapMarker from "./MapMarker";
import {Icon} from "leaflet"
import L from "leaflet"


const robber= new Icon({
  iconUrl:"./images.png",
  iconSize:[25,25]
});



const MapComponent =(props)=>{
  const position = [props.postcodeData.latitude,props.postcodeData.longitude]

  const leafletMarkers=props.crimes.map((crime)=>(
    <Marker className={crime.category} key={`crime_${crime.id}`}position={[(crime.location.latitude),(crime.location.longitude)]}
    draggable="true" icon={robber}>
    <Popup>
    <p><strong>Crime Type:</strong></p>
    <div>
    <p>{crime.category}</p>
    </div>
    </Popup>

    </Marker>
  ))







  return (


    <Map  center={position} zoom={18}   >
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />


    <Marker position={position} draggable="true" icon={robber}> </Marker>


    {leafletMarkers}

    </Map>




  )


}

export default MapComponent;
