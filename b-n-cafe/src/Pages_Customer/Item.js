import React, { useCallback, useEffect, useMemo, useState } from 'react';
import '../Main/App.css';
import './Menu.css';
import logoImg from '../Pictures/barnes&nobleLogo.jpg';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SeasonMenu from './SeasonMenu';
import AddIcon from '@mui/icons-material/Add';
import Drinks from './Drinks';
// import { Link } from 'react-router-dom';
// import Button from '../Button';

function Item ({name, img, link}) {

    return (
        <>
            <div class="col-2">
                    <div className= "drink-img">
                        <h1>{name}</h1>
                        <img src={require("../Pictures/1.png")} alt="Starbucks" width="70%" />
                        <i><Drinks name={name} /></i>
                        <button className="add-button"><Link to={link} className='nav-links'>
                            {/* <i><Drinks name={name} /></i> */}
                            Add
                            <i><AddIcon /></i></Link>
                        </button>
                    </div>
            </div>

            {/* <div className="item-container">
                <h3 className="item-name">{name}</h3>
            </div> */}
        </>
    )
}

export default Item;