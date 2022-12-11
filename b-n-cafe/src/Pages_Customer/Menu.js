// import React from 'react';
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import '../Main/App.css';
// import Item from './Item';
import Order from './Order';
import './Menu.css';
// import Drink from './Drinks';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SeasonMenu from './SeasonMenu';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import useLocalStorage from '../Components/useLocalStorage';
import { Key } from '@mui/icons-material';

const api = axios.create({
    baseURL: 'https://barnesandnoblecsce315-backend.onrender.com'
})

const item = {
    order_id: '',
    inventory_id: '',
    menu_item: '',
    item_size: '',
    customizations: '',
    item_price: '',
    purchase_date: '2022-12-08',
}

// const Context = createContext (
//     {
//         // menu_id: '',
//         // inventory_id: '',
//         // menu_item: '',
//         // item_size: '',
//         // item_price: '',
//         customerOrder: [],
//     });

const Menu = (props) => {

    // const addToOrder = (text) => {
    //     const nextId = customerOrder.length > 0 ? Math.max(...customerOrder.map((t) => t.id)) + 1 : 0;
    //     const newOrder = {
    //         id: nextId,
    //         text,
    //     };
    //     setCustomerOrder([...customerOrder, newOrder]);
    // };

    // const removeFromOrder = (id) => {
    //     const newOrder = customerOrder.filter((t) => t.id != id);
    //     setCustomerOrder(newOrder);
    // };

    const addToOrder = (item) => {
        console.log(item);
        // api.post("/openOrders", item)
        // .then(res => {
        //     let dataToAdd = [...data];
        //     dataToAdd.push(item);
        //     setData(dataToAdd);
        // })
    }

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

        api.post("/openOrders", item)
        .then(res => {
            let dataToAdd = [...data];
            dataToAdd.push(item);
            setData(dataToAdd);
        })
    }, []);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://barnesandnoblecsce315-backend.onrender.com/menu")
        .then((data) => data.json())
        .then((data) => setData(data))
    }, [])
    console.log(data)

    // const {children} = props;
    // const {customerOrder, setCustomerOrder} = useLocalStorage("customerOrder", [
    //     // {menu_id: 0,}
    // ])

    // useEffect(() => {
    //     window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
    // }, [showBanner]);

    return (
        <>
        {/* Barnes and Noble Logo */}
        <section className="top">
                <div>
                    <img src={logoImg} alt=""/>
                </div>
        </section>

        <div className="menu-title">
                MAIN MENU
        </div>

        <div className="menu-items">
            <div class="row">
            {data.map(data => {

                return (

                <div Key={data.menu_id}>
                    <div class="col-2">
                        <div className= "drink-img">
                            <h1>{data.menu_item}</h1>
                            <img src={require("../Pictures/1.png")} alt="Starbucks" width="70%" />
                            {/* <i><Drinks name={data.menu_item} /></i> */}
                                        
                <div class="row">
                    <div className="menu-items"></div>
                        <div class="col-3">
                            <div class="button-size-display">
                                <button className="size-button">Grande</button>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="button-size-display">
                                <button className="size-button">Hot</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="add-button" menu-id={data.menu_id} inventory-id={data.inventory_id} menu-item={data.menu_item} item-size={data.item_size} item-price={data.item_price} custom={data.customizations} onClick={handleClick}>Add<i><AddIcon /></i></button>
                
                {/* <button className="add-button" menu-id={data.menu_id} inventory-id={data.inventory_id} menu-item={data.menu_item} item-size={data.item_size} item-price={data.item_price} custom={data.customizations} onClick={handleClick}><Link to="/Order" className='nav-links'>
                    Add<i><AddIcon /></i></Link>
                </button> */}
                
                    </div>
                    </div>
                    // </div>
                )
            })}
            </div>
        </div>
        </>
    );
};

export default Menu;
