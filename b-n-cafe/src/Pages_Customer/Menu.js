import React from 'react';
import '../Main/App.css';
import Item from './Item';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SeasonMenu from './SeasonMenu';
import AddIcon from '@mui/icons-material/Add';

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

        <div className="menu-items">
            <div class="row">
                <div class="col-2">
                    <div className= "drink-img">
                        <h1>Drink name</h1>
                        <img src={require("../Pictures/1.png")} alt="Starbucks" width="70%" />
                        <button className="add-button"><Link to='/' className='nav-links'>
                            Add
                            <i><AddIcon /></i></Link>
                        </button>
                    </div>
                </div>
                <div class="col-2">
                    <div className= "drink-img">
                        <h1>Drink name</h1>
                        <img src={require("../Pictures/1.png")} alt="Starbucks" width="70%" />
                        <button className="add-button"><Link to='/' className='nav-links'>
                            Add
                            <i><AddIcon /></i></Link>
                        </button>
                    </div>
                </div>
                <div class="col-2">
                    <div className= "drink-img">
                        <h1>Drink name</h1>
                        <img src={require("../Pictures/1.png")} alt="Starbucks" width="70%" />
                        <button className="add-button"><Link to='/' className='nav-links'>
                            Add
                            <i><AddIcon /></i></Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>









        {/* <div class = "grid">
            <section className="menu-items">
                {/* <Item name="Seasonal Favs" link="SeasonMenu"/> 
                <Item name="Drinks" link="Drink"/>
                <Item name="Bakery" link="Drink"/>
            </section> </div> */}
        </>
    );
};

export default Menu;