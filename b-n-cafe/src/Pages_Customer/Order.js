import React, { useEffect, useState } from 'react';
import '../Main/App.css';
// import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';
import {Link} from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://barnesandnoblecsce315-backend.onrender.com/openOrders'
})

function sum(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

const item = {
    order_id: '',
    inventory_id: '',
    menu_item: '',
    item_size: '',
    customizations: '',
    item_price: '',
    purchase_date: '2022-12-08',
}

function Order () {

    const subTotal = 0.00;

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://barnesandnoblecsce315-backend.onrender.com/openOrders")
        .then((data) => data.json())
        .then((data) => setData(data))
    }, [])
    console.log(data)

    const handleClick = React.useCallback((e) => {
        const clickedId1 = e.target.getAttribute('menu-id');
        const clickedId2 = e.target.getAttribute('inventory-id');
        const clickedId3 = e.target.getAttribute('menu-item');
        const clickedId4 = e.target.getAttribute('item-size');
        const clickedId5 = e.target.getAttribute('custom');
        const clickedId6 = e.target.getAttribute('item-price');
        console.log(clickedId1);
        console.log(clickedId2);
        console.log(clickedId3);
        console.log(clickedId4);
        console.log(clickedId5);
        console.log(clickedId6);
        // item = {
        //     menu_id: clickedId1,
        //     inventory_id: clickedId2,
        //     menu_item: clickedId3,
        //     item_size: clickedId4,
        //     item_price: clickedId5,
        //     customizations: clickedId6,
        // }
        item.order_id = clickedId1;
        item.inventory_id = clickedId2;
        item.menu_item = clickedId3;
        item.item_size = clickedId4;
        item.customizations = clickedId5;
        item.item_price = clickedId6;

        console.log(item.order_id);
        console.log(item.inventory_id);
        console.log(item.menu_item);
        console.log(item.item_size);
        console.log(item.customizations);
        console.log(item.item_price);
        console.log(item.customizations);

        api.delete('/' + item.order_id)
        .then(res => {
            // let dataToAdd = [...data];
            // dataToAdd.push(item);
            // setData(dataToAdd);
        })
    }, []);

    return (
        <>
        {/* #1 - LOGO HERE */}
        

            <div class="row">
                <div class="col-6"><img src={logoImg} alt=""/></div>
            </div>

            {/* #2 - MENU ITEM NAME HERE */}
            <hr class="solid" ></hr>
            <div class="row">
                <div class="col-6">
                    <div className="menu-title">
                        MY ORDER
                    </div>
                </div>
            </div>
            <hr class="solid" ></hr>

            {/* <div className="item-picture">
                    PEPPERMINT MOCHA
            </div> */}

            {/* #3 - SIZE & CUSTOMIZE HERE */}
            <div className="menu-items">
            {data.map(data => {
                // subTotal = sum(subTotal, data.item_price);
                // <>
                return (
                <div Key={data.order_id}>
                <div class="row">
                    <div class="col-2">
                        <div className= "drink-img">
                            <img src={require("../Pictures/1.png")} alt="Starbucks" width="40%" />
                        </div>
                    </div>
                    <div class="col-2">
                        <h3 className="order-item-name">{data.menu_item}</h3>
                        <h2 className="order-item-name">{data.item_size}</h2>
                    </div>
                    <div class="col-2"><h3 className="order-item-name">${data.item_price}</h3></div>
                    {/* subTotal = subTotal + {data.item_price}; */}
                    <button className="menu-button" 
                        menu-id={data.order_id} 
                        inventory-id={data.inventory_id} 
                        menu-item={data.menu_item} 
                        item-size={data.item_size} 
                        item-price={data.item_price} 
                        custom={data.customizations} 
                        onClick={handleClick}>Delete</button>
                    </div>
                </div>
                )
                // </>
            })}
            
            {/* <div className="menu-items"> */}
                {/* <div class="row">
                    <div class="col-2">
                        <div className= "drink-img">
                            <img src={require("../Pictures/1.png")} alt="Starbucks" width="40%" />
                        </div>
                    </div>
                    <div class="col-2">
                        <h3 className="order-item-name">Peppermint Mocha</h3>
                        <h2 className="order-item-name">Tall 12 fl oz</h2>
                    </div>
                    <div class="col-2"><h3 className="order-item-name">$3.65</h3></div>
                    </div> */}
                </div>

                {/* <div class="row">
                            <button className="menu-button"><Link to='/End' className='nav-links'>
                                    Delete
                                    <i><ShoppingCartCheckoutIcon /></i></Link>
                            </button>
                </div> */}

                {/* <div className="menu-items">
                    <div class="row">
                        {/* <div class="col-2"><h3 className="order-customize-name">Hot</h3></div> */}
                        {/* <div class="col-3"><h3 className="order-totals">Subtotal</h3></div>
                        <div class="col-3"><h3 className="order-totals">${subTotal}</h3></div>
                    </div>
                </div> */}

                {/* <div className="menu-items">
                    <div class="row">
                        {/* <div class="col-2"><h3 className="order-customize-name">Hot</h3></div> */}
                        {/* <div class="col-3"><h3 className="order-totals">Tax</h3></div>
                        <div class="col-3"><h3 className="order-totals">$0.80</h3></div>
                    </div>
                </div>   */}

                {/* <div className="menu-items">
                    <div class="row">
                        {/* <div class="col-2"><h3 className="order-customize-name">Hot</h3></div> */}
                        {/* <div class="col-3"><h3 className="order-big-total">Total</h3></div>
                        <div class="col-3"><h3 className="order-big-total">{subTotal}</h3></div>
                    </div>
                </div> */}

                <div class="row">
                    <div className="menu-items">
                
                        {/* <Item name="Checkout" price="$2.00"/> */}
                        <button className="menu-button"><Link to='/End' className='nav-links'>
                            Checkout
                            <i><ShoppingCartCheckoutIcon /></i></Link>
                        </button>
                    </div>
                </div>
        </>
    )
}

export default Order;
