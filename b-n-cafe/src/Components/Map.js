import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Translating from './Translate';
// require('dotenv').config();
//import the google maps api element used in this file



const containerStyle = {
    width: '750px',
    height: '750px'
    // center the map item in the middle of the page
    // width: '100vw',
    // height: '100vh'
};

const center = {
    lat: 30.61209278502711,
    lng: -96.34110035745813
};

function map() {

    // center the map item in the middle of the page
    // const map = new google.maps.Map(document.getElementById("map"), {
    //     center: { lat: 30.61209278502711, lng: -96.34110035745813 },
    //     zoom: 15,
    // });

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

        // <Translate/>

    );
};

export default map;