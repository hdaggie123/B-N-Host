import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const ManagerNavBar = () =>{
    const[show,setShow] = useState(false);
    function showSwitch(){
        return setShow(!show)
    }
    return<>
    <div className="manager_Nav_center">
        <div className = {show ? "links active": "links"}>
            <button className="ManagerNav"> <Link onClick={()=>showSwitch()} to="/SalesHistory">Sales History</Link></button>
            <button className="ManagerNav"> <Link onClick={()=>showSwitch()} to="/Inventory">Inventory</Link></button>
            <button className="ManagerNav"> <Link onClick={()=>showSwitch()} to="/Menu">Menu</Link></button>
            <button className="ManagerNav"> <Link onClick={()=>showSwitch()} to="/Staff">Open Oders</Link></button>
            <button className="ManagerNav"> <Link onClick={()=>showSwitch()} to="/Accounts">Accounts</Link></button>
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
export default ManagerNavBar;