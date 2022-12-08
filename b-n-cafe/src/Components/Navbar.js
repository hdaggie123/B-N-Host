import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Search from './Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                        </Link>
                        <i> <LocationOnIcon /></i>
                        </button>
                    </li>

                    <li className='nav-item'><Search /> </li>
                    <li className='nav-item'>
                    <button className="Nav-button"><Link to='/Login' className='nav-links' onClick={closeMenu}>
                            Login
                        </Link>
                        <i> < ManageAccountsIcon/> </i></button>
                    </li>

                    

                    <li className='nav-item'>
                    <button className="Nav-button"><Link to='/Order' className='nav-links' onClick={closeMenu}>
                            My Order
                            </Link>
                            <i> <ShoppingBasketIcon /> </i>
                            </button>
                    </li>

                  
            </ul>

                {/* {button && <Button buttonStyle='btn--outline'>Account</Button>} */}
            </div>
        </nav>
        </>
    )
}

export default Navbar