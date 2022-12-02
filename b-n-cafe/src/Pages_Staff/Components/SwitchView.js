import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const SwitchView = () =>{
    const[show,setShow] = useState(false);
    function showSwitch(){
        return setShow(!show)
    }
    return<>
    <div className= "switchView">
        <div className = {show ? "links active": "links"}>
            <button> <Link onClick={()=>showSwitch()} to="/">Switch view</Link></button>

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
export default SwitchView;