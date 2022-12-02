import React from 'react';
import '../Main/App.css';
import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';

const SeasonMenu = () => {

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

export default SeasonMenu;