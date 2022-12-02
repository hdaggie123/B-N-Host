import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
require('dotenv').config();


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 30.61209278502711,
    lng: -96.34110035745813
};

function map() {
return (
    <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>{}
    
    <></>
    </GoogleMap>
</LoadScript>
)
}

export default map;