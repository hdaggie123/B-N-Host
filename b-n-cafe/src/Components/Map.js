import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapStyling.css';
// require('dotenv').config();
//import the google maps api element used in this file



const containerStyle = {
    width: '750px',
    height: '750px'
};

const center = {
    lat: 30.61209278502711,
    lng: -96.34110035745813
};

function map() {

    return(
            <div className='map'>
                <h1>Find us located within the MSC at Texas A&M University</h1>
                <LoadScript
                googleMapsApiKey={'AIzaSyDaKqiWtRPw6O0_r212g7Da6TeT10DsJmc'}
            >
            <center>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}>{}

            
            <><Marker
            position={{ lat: 30.61209278502711, lng: -96.34110035745813 }} // New York City
      /></>
            </GoogleMap>
                </center>
        </LoadScript>
            </div>


    );
};

export default map;