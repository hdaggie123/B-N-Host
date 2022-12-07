import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// require('dotenv').config();


const containerStyle = {
    width: '500px',
    height: '500px'
};

const center = {
    lat: 30.61209278502711,
    lng: -96.34110035745813
};

function map() {
    return(
            <LoadScript
                googleMapsApiKey={'AIzaSyDaKqiWtRPw6O0_r212g7Da6TeT10DsJmc'}
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}>{}

            
            <><Marker
            position={{ lat: 30.61209278502711, lng: -96.34110035745813 }} // New York City
      /></>
            </GoogleMap>
        </LoadScript>
    );
};

export default map;