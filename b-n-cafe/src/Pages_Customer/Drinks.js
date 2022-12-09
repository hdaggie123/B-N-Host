import React from 'react';
import '../Main/App.css';
import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

function itemValues(item) {
    const itemName = item;
    return itemName;
}


const Drinks = (name) => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/menu")
    //     .then((data) => data.json())
    //     .then((data) => setData(data))
    // }, [])
    // console.log(data)

    console.log("HERE");
    // console.log(JSON.stringify(name));

    const itemName = JSON.stringify(name);
    console.log(itemName);
    // const itemName = props.name;

    return (
        <>
        {/* #1 - LOGO HERE */}
        {/* <div class="row">
            <div class="col-6"><img src={logoImg} alt=""/></div>
        </div>
        <hr class="solid" ></hr>

        {/* #2 - MENU ITEM NAME HERE */}
        {/* <div class="row">
            <div class="col-6">
                <div className="menu-title">
                    <itemValues name={itemName.name} />
                </div>
            </div>
        </div> */} 
        

        {/* <div className="item-picture">
                PEPPERMINT MOCHA
        </div> */}
        {/* <row>
        <div className="menu-items">
            <div class="col-3">
                <div className="back-next">
                    <h1>Back to Menu</h1>
                    <button className="add-button"><Link to='/Menu' className='nav-links'>
                        <i><ArrowBackIcon /></i></Link>
                    </button>
                </div>
            </div>
            <div class="col-3">
            <div className="next-button right">
                    <h1>Continue to checkout</h1>
                    <button className="con-checkoout-button"><Link to='Order' className='nav-links'>
                        
                        <i><ShoppingCartCheckoutIcon /></i></Link>
                    </button>
            </div>
            </div>
            </div>
        </row> */}

        {/* #3 - SIZE & CUSTOMIZE HERE */}
        <div class="row">
            <div className="menu-items">
            {/* <div class="col-6">
                    <div className= "drink-img">
                        <h1>{itemName.name}</h1>
                        <img src={require("../Pictures/1.png")} alt="Starbucks" width="30%" />
                    </div>
            </div> */}
            <div class="col-3">
                {/* <h3 className="item-name">Size Options</h3> */}
                <div class="button-size-display">
                    <button className="size-button">Size</button>
                    {/* <button className="size-button">Grande</button>
                    <button className="size-button">Venti</button> */}
                {/* #5 - CUSTOMIZE OPTIONS HERE */}
                    {/* <div class="col-1"><h3 className="item-size-title">Hot</h3></div>
                    <div class="col-1"><h3 className="item-size-title">Edit</h3></div> */}
                </div>
            </div>
            <div class="col-3">
                {/* <h3 className="item-name">customization</h3> */}
                <div class="button-size-display">
                <button className="size-button">Customize</button>
                {/* <button className="size-button">Cold</button> */}
                </div>
            </div>
            </div>
        </div>
        
        {/* #4 - SIZE OPTIONS HERE */}
        {/* <div class="row">
            <div className="menu-items">
                <Item name="Add to Order" price="$2.00"/>
            </div>
        </div> */}

        
        </>
    );
};

export default Drinks;