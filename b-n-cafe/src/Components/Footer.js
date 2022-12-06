import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import LanguageIcon from '@mui/icons-material/Language';

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

                    <li className='footer-item'>
                        {/* add an icon here */}
                    <button className="find-us-button"><Link to='/location' className='nav-links' onClick={closeMenu}>
                            Translate
                        </Link>
                        <i> <LanguageIcon /> </i>
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