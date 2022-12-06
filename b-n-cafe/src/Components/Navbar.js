import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

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
                        <Link to='/' className='nav-links' onClick={closeMenu}>
                            Menu
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/location' className='nav-links' onClick={closeMenu}>
                            Find Us
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/menu' className='nav-links' onClick={closeMenu}>
                            My Order
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/account' className='nav-links' onClick={closeMenu}>
                            My Account
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMenu}>
                            Login
                        </Link>
                    </li>
                </ul>

                {/* {button && <Button buttonStyle='btn--outline'>Account</Button>} */}
            </div>
        </nav>
    </>
    )
}

export default Navbar