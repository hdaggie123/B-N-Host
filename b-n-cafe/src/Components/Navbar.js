import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './Map.js';
import Search from './Search.js';
import './Search.css';

function Navbar() {
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    return (
    <>
        <Search/>
        <nav className="navbar">
            <div className="navbar-c">
                
                {/* This is where the navbar options are defined */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <button className="Nav-button"><Link to='/' className='nav-links' onClick={closeMenu}>
                            Menu
                        </Link> </button>
                    </li>

                    <li className='nav-item'>
                    <button className="find-us-button"><Link to='/Map' className='nav-links' onClick={closeMenu}>
                            Find Us
                        </Link></button>
                    </li>
                    {/* link a button to the maps page */}
                    <li className='nav-item'>
                    <button className="Nav-button"><Link to='/account' className='nav-links' onClick={closeMenu}>
                            My Account
                        </Link></button>
                    </li>

                    <li className='nav-item'>
                    <button className="Nav-button"><Link to='/menu' className='nav-links' onClick={closeMenu}>
                            My Order
                            </Link></button>
                    </li>
                </ul>

                {/* {button && <Button buttonStyle='btn--outline'>Account</Button>} */}
            </div>
        </nav>
    </>
    )
}

export default Navbar;