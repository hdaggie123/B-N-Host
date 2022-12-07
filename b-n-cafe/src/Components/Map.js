import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Iframe from 'react-iframe';
// require('dotenv').config();


const containerStyle = {
    width: '500px',
    height: '500px'
};

const center = {
    lat: 30.61209278502711,
    lng: -96.34110035745813
};

/**
 * a map component using the google maps api
 * @returns a map component
 */
function map() {
    return(
            <LoadScript
                googleMapsApiKey={'AIzaSyDaKqiWtRPw6O0_r212g7Da6TeT10DsJmc'}
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>{}
            
            <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default map;