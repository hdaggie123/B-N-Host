import react from 'react';
import reactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import './login.css';
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';

export default function Login() {
    //I will be creating a simple login page
    // const [user, setUser] = useState({});

    // function handleCallbackResponse(response) {
    //     console.log("Encoded JWT ID Token: " + response.credential);
    //     var decoded = jwt_decode(response.credential);
    //     console.log( decoded);

    //     setUser(decoded);
    //     document.getElementById("my-signin2").hidden = true;
    // }

    // function handleSignOut() {
    //     setUser({});
    //     document.getElementById("my-signin2").hidden = false;
    // }
    // useEffect(() => {
    //     /* global google */
    //     google.accounts.id.initialize({client_id: "1037680742660-svicfn8onsq83sqt5bdg7gprr24k18kk.apps.googleusercontent.com", 
    //     callback: handleCallbackResponse});

    //     google.accounts.id.renderButton(document.getElementById("my-signin2"), {theme: "outline", size: "large"});
    // }, []);

    return (
        <div class="background">
            <div class="header">
                <h1>Welcome to Starbucks!</h1>
            </div>
            <div className='logo, box'>
                <img src={require("../../Assets/Starbucks_logo.png")} alt="Starbucks" width="100%" height="100%"/>
            </div>
            <div class="login, box">
                    <form className='login_box'>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <button className='star-sign'>Sign In!</button>
                    <div id="my-signin2"></div>
                    {/* {Object.keys(user).length != 0 && <button onClick={(e) =>  handleSignOut(e)}>Sign Out</button>}
                    {user && <div>{user.name}</div>} */}
                    
                    <div className = "star-sign">
                        <button>Sign up!</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
    }