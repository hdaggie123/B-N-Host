import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// require('dotenv').config();
//import the google maps api element used in this file
import './Map.css';

const containerStyle = {
    width: '750px',
    height: '750px'
};

const center = {
    lat: 30.61209278502711,
    lng: -96.34110035745813
};

function Map() {

    return(
        <>
   
        <h1>Address: Lone-Star Pavilion, 711 Texas Ave, College Station, TX 77840</h1>
        <h1>Hours:  10am-9PM </h1>
        <h1>Phone: (979) 764-8955</h1>

        <div class="row">
            
            <div class="col-6">
                <LoadScript googleMapsApiKey={'AIzaSyDaKqiWtRPw6O0_r212g7Da6TeT10DsJmc'}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}>{}
                        <><Marker
                            position={{ lat: 30.61209278502711, lng: -96.34110035745813 }} // New York City
                        /></>
                    </GoogleMap>
                </LoadScript>
            </div>

        </div>
        </>

     
        
    );
};

export default Map;