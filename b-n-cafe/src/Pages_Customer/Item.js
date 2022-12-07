import React from 'react';
import '../Main/App.css';
import './Menu.css';
// import { Link } from 'react-router-dom';
// import Button from '../Button';


/**
 * 
 * @param  item
 * @param img
 * @param link
 * @returns an item on the menu page
 */
function Item ({name, img, link}) {
    return (
        <>
            {/* <div className="center-item-look">
                <button className="btn-item" type="button">
                    Add to cart
                </button>
                <div className="item-price">{price}</div>
            </div> */}

            <div className="item-container">
                <h3 className="item-name">{name}</h3>
            </div>
        </>
    )
}

export default Item;