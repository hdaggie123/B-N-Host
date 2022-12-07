import React from 'react';
import '../Main/App.css';
import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';
import {Link} from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


function Order () {

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

        {/* <div className="item-picture">
                PEPPERMINT MOCHA
        </div> */}

        {/* #3 - SIZE & CUSTOMIZE HERE */}
        <div className="menu-items">
            <div class="row">
                <div class="col-3"><h3 className="order-item-name">Picture</h3></div>
                <div class="col-3"><h3 className="order-item-name">Peppermint Mocha</h3></div>
                <div class="col-3"><h3 className="order-item-name">$3.65</h3></div>
            </div>
        </div>

        <div className="menu-items">
            <div class="row">
                {/* <div class="col-2"><h3 className="order-customize-name">Hot</h3></div> */}
                <div class="col-3"><h3 className="order-customize-name">Tall 12 fl oz</h3></div>
                <div class="col-3"><h3 className="order-customize-name">$0.80</h3></div>
            </div>
        </div>

        <div className="menu-items">
            <div class="row">
                {/* <div class="col-2"><h3 className="order-customize-name">Hot</h3></div> */}
                <div class="col-3"><h3 className="order-totals">Subtotal</h3></div>
                <div class="col-3"><h3 className="order-totals">$3.65</h3></div>
            </div>
        </div>

        <div className="menu-items">
            <div class="row">
                {/* <div class="col-2"><h3 className="order-customize-name">Hot</h3></div> */}
                <div class="col-3"><h3 className="order-totals">Tax</h3></div>
                <div class="col-3"><h3 className="order-totals">$0.80</h3></div>
            </div>
        </div>

        <div className="menu-items">
            <div class="row">
                {/* <div class="col-2"><h3 className="order-customize-name">Hot</h3></div> */}
                <div class="col-3"><h3 className="order-big-total">Total</h3></div>
                <div class="col-3"><h3 className="order-big-total">$3.65</h3></div>
            </div>
        </div>

        <div class="row">
            <div className="menu-items">
                {/* added a button here  */}
                {/* <Item name="Checkout" price="$2.00"/> */}
                <button className="menu-button"><Link to='/' className='nav-links'>
                    Checkout
                    <i> <ShoppingCartCheckoutIcon /></i></Link>
                </button>
                
            </div>
        </div>
        
        <section className="menu-items">
        </section>

        </>
    )
}

export default Order;