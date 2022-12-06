import React from 'react'
import './Navbar.css';
import './Map.js';
import '../Main/App.css';
import Item from '../Pages_Customer/Item';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 30.61209278502711,
    lng: -96.34110035745813
};

// export default function Map() {
//     //print something to the console
//     return (
//         <>
    

//     )
// }



//     //     <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//     //     <GoogleMap
//     //         mapContainerStyle={containerStyle}
//     //         center={center}
//     //         zoom={10}>{}
        
//     //     <></>
//     //     </GoogleMap>
//     // </LoadScript>


// export default function Map() {
//     return (
//         <div>
//             <h1>Map</h1>
//         </div>
//     )
// }

const Map = () => {
    // return (
    //     <>
    //     <div>
    //         <h1>Map</h1>
    //     </div>
    //     </>
    // );
    return (
        <>
        {/* Barnes and Noble Logo */}
        <section className="top">
                <div>
                    <img src={logoImg} alt=""/>
                </div>
        </section>

        <div className="menu-title">
                SEASONAL FAVORITES
        </div>

        {/* Menu Items displayed here */}
        <div class = "grid">
            <section className="menu-items">
                <Item name="Peppermint Mocha" price="$2.00"/>
                <Item name="Caffe Latte" price="$2.00"/>
                <Item name="Pumpkin Loaf" price="$2.00"/>
            </section>
        </div>
        </>
    );
};

export default Map;