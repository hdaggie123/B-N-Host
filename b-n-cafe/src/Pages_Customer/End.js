import React from 'react';
import '../Main/App.css';
// import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';

const End = () => {

    return (
        <>
        {/* #1 - LOGO HERE */}
        <div class="row">
            <div class="col-6"><img src={logoImg} alt=""/></div>
        </div>

        {/* <div class="row">
            <div class="col-6">
                <div className="menu-title">
                    Order Number: #1
                </div>
            </div>
        </div> */}

        <div class="row">
            <div class="col-6">
                <div className="end-text">
                    We are making your order. 
                    We will let you know when your order is ready.
                    Thank you for shopping at Barnes and Nobles!
                </div>
            </div>
        </div>
        </>
    );
};

export default End;