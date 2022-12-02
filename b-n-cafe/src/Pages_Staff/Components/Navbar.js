import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    const[show,setShow] = useState(false);
    function showSwitch(){
        return setShow(!show)
    }
    return<>
    <div className= "navbar">
        {/* <div className ="logo">
            your logo
        </div> */}
        <div className = {show ? "links active": "links"}>
            <button> <Link onClick={()=>showSwitch()} to="/">Sales History</Link></button>
            <button> <Link onClick={()=>showSwitch()} to="/Inventory">Inventory</Link></button>
            <button> <Link onClick={()=>showSwitch()} to="/Menu">Menu</Link></button>
            <button> <Link onClick={()=>showSwitch()} to="/Staff">Staff</Link></button>
            <button> <Link onClick={()=>showSwitch()} to="/Accounts">Accounts</Link></button>
        </div>
        <div onClick={()=>showSwitch()}className = {show ? "bars-button active": "bars-button"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            
        </div>

    </div>
    </>;
};
export default Navbar;