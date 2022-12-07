import React from 'react';
import '../Main/App.css';
import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';

/**
 * 
 * @param  item 
 * @returns the name of the item
 */
function itemValues(item) {
    const itemName = item.name;
    return itemName;
}

/**
 * 
 * @returns a menu page for drinks
 */
const Drink = () => {
    const itemName = "PEPPERMINT MOCHA";

    return (
        <>
        {/* #1 - LOGO HERE */}
        <div class="row">
            <div class="col-6"><img src={logoImg} alt=""/></div>
        </div>

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
            <div class="col-3-5"><h3 className="item-name">Size Options</h3></div>
            <div class="col-0"><h3 className="item-name">Customize</h3></div>
            </div>
        </div>

        {/* #4 - SIZE OPTIONS HERE */}
        <div class="row">
            <div className="menu-items">
            <div class="col-1"><h3 className="item-size-title">Tall</h3></div>
            <div class="col-1"><h3 className="item-size-title">Grande</h3></div>
            <div class="col-1"><h3 className="item-size-title">Venti</h3></div>

        {/* #5 - CUSTOMIZE OPTIONS HERE */}
            <div class="col-1"><h3 className="item-size-title">Hot</h3></div>
            <div class="col-1"><h3 className="item-size-title">Edit</h3></div>
            </div>
        </div>

        <div class="row">
            <div className="menu-items">
                <Item name="Add to Order" price="$2.00"/>
            </div>
        </div>

        <section className="menu-items">
        </section>
        </>
    );
};

export default Drink;