import React from 'react';
import '../Main/App.css';
import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import SeasonMenu from './SeasonMenu';

/**
 * 
 * @returns return the menu layout
 */
const Menu = () => {

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

        {/* Menu Items displayed here */}
        <div class = "grid">
            <section className="menu-items">
                <Item name="Seasonal Favs" link="SeasonMenu"/>
                <Item name="Drinks" link="Drink"/>
                <Item name="Bakery" link="Drink"/>
            </section>
        </div>
        </>
    );
};

export default Menu;