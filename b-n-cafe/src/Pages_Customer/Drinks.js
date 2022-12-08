import React from 'react';
import '../Main/App.css';
import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
function itemValues(item) {
    const itemName = item.name;
    return itemName;
}
  

const Drink = () => {
    const itemName = "PEPPERMINT MOCHA";

    return (
        <>
        {/* #1 - LOGO HERE */}
        <div class="row">
            <div class="col-6"><img src={logoImg} alt=""/></div>
        </div>
        <hr class="solid" ></hr>

        {/* #2 - MENU ITEM NAME HERE */}
        <div class="row">
            <div class="col-6">
                <div className="menu-title">
                    <itemValues name="PEPPERMINT MOCHA" />
                </div>
            </div>
        </div>
        

        {/* <div className="item-picture">
                PEPPERMINT MOCHA
        </div> */}

        {/* #3 - SIZE & CUSTOMIZE HERE */}
        <div class="row">
            <div className="menu-items">
            <div class="col-6">
                    <div className= "drink-img">
                        <h1>Drink name</h1>
                        <img src={require("../Pictures/1.png")} alt="Starbucks" width="30%" />
                    </div>
            </div>
            <div class="col-3">
                <h3 className="item-name">Size Options</h3>
                <div class="button-size-display">
                    <button className="size-button">Tall</button>
                    <button className="size-button">Grande</button>
                    <button className="size-button">Venti</button>
                {/* #5 - CUSTOMIZE OPTIONS HERE */}
                    {/* <div class="col-1"><h3 className="item-size-title">Hot</h3></div>
                    <div class="col-1"><h3 className="item-size-title">Edit</h3></div> */}
                </div>
            </div>
            <div class="col-3">
                <h3 className="item-name">customization</h3>
                <div class="button-size-display">
                <button className="size-button">Hot</button>
                <button className="size-button">Cold</button>
                </div>
            </div>
            </div>
        </div>
        <div class="row">
                    <div className="menu-items">
                        {/* added a button here  */}
                        {/* <Item name="Checkout" price="$2.00"/> */}
                        <button className="menu-button"><i>Add to Order</i></button>
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

export default Drink;